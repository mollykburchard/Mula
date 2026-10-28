import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";
import { useQuery } from "@tanstack/react-query";
import { queryClient, apiRequest } from "@/lib/queryClient";

export interface ImageTransform {
  scale: number;
  x: number;
  y: number;
}

interface AdminContextType {
  isAdmin: boolean;
  editMode: boolean;
  setEditMode: (v: boolean) => void;
  pendingEdits: Record<string, { valueNl: string; valueEn: string }>;
  setPendingEdit: (key: string, lang: "valueNl" | "valueEn", value: string) => void;
  contentOverrides: Record<string, { valueNl: string; valueEn: string }>;
  saveAll: () => Promise<void>;
  saving: boolean;
  pendingImages: Record<string, string>;
  setPendingImage: (key: string, url: string) => void;
  imageTransforms: Record<string, ImageTransform>;
  pendingImageTransforms: Record<string, ImageTransform>;
  setPendingImageTransform: (key: string, transform: ImageTransform) => void;
  logout: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

const TRANSFORM_PREFIX = "imgTransform:";
const IMAGE_SRC_PREFIX = "imgSrc:";

export function AdminProvider({ children }: { children: ReactNode }) {
  const [editMode, setEditMode] = useState(false);
  const [pendingEdits, setPendingEdits] = useState<Record<string, { valueNl: string; valueEn: string }>>({});
  const [pendingImages, setPendingImages] = useState<Record<string, string>>({});
  const [pendingImageTransforms, setPendingImageTransforms] = useState<Record<string, ImageTransform>>({});
  const [saving, setSaving] = useState(false);

  const { data: authData } = useQuery<{ username: string }>({
    queryKey: ["/api/auth/me"],
    retry: false,
  });

  const { data: content = [] } = useQuery<Array<{ key: string; valueNl: string; valueEn: string }>>({
    queryKey: ["/api/content"],
  });

  const isAdmin = !!authData?.username;

  const contentOverrides: Record<string, { valueNl: string; valueEn: string }> = {};
  const imageTransforms: Record<string, ImageTransform> = {};
  const savedImageSrcs: Record<string, string> = {};
  content.forEach((c) => {
    if (c.key.startsWith(TRANSFORM_PREFIX)) {
      try {
        const parsed = JSON.parse(c.valueNl);
        if (parsed && typeof parsed.scale === "number") {
          imageTransforms[c.key.slice(TRANSFORM_PREFIX.length)] = parsed;
        }
      } catch {}
    } else if (c.key.startsWith(IMAGE_SRC_PREFIX)) {
      if (c.valueNl) savedImageSrcs[c.key.slice(IMAGE_SRC_PREFIX.length)] = c.valueNl;
    } else {
      contentOverrides[c.key] = { valueNl: c.valueNl, valueEn: c.valueEn };
    }
  });

  const mergedPendingImages = { ...savedImageSrcs, ...pendingImages };

  const setPendingEdit = useCallback((key: string, lang: "valueNl" | "valueEn", value: string) => {
    setPendingEdits((prev) => ({
      ...prev,
      [key]: { ...prev[key], valueNl: prev[key]?.valueNl || "", valueEn: prev[key]?.valueEn || "", [lang]: value },
    }));
  }, []);

  const setPendingImage = useCallback((key: string, url: string) => {
    setPendingImages((prev) => ({ ...prev, [key]: url }));
  }, []);

  const setPendingImageTransform = useCallback((key: string, transform: ImageTransform) => {
    setPendingImageTransforms((prev) => ({ ...prev, [key]: transform }));
  }, []);

  const saveAll = useCallback(async () => {
    setSaving(true);
    try {
      const items: Array<{ key: string; valueNl: string; valueEn: string }> = [];
      Object.entries(pendingEdits).forEach(([key, vals]) => {
        items.push({ key, valueNl: vals.valueNl || "", valueEn: vals.valueEn || "" });
      });
      Object.entries(pendingImageTransforms).forEach(([key, t]) => {
        items.push({ key: `${TRANSFORM_PREFIX}${key}`, valueNl: JSON.stringify(t), valueEn: "" });
      });
      Object.entries(pendingImages).forEach(([key, url]) => {
        items.push({ key: `${IMAGE_SRC_PREFIX}${key}`, valueNl: url, valueEn: "" });
      });
      if (items.length > 0) {
        await apiRequest("PUT", "/api/content/bulk", { items });
        queryClient.invalidateQueries({ queryKey: ["/api/content"] });
      }
      setPendingEdits({});
      setPendingImages({});
      setPendingImageTransforms({});
    } finally {
      setSaving(false);
    }
  }, [pendingEdits, pendingImages, pendingImageTransforms]);

  const logout = useCallback(async () => {
    await apiRequest("POST", "/api/auth/logout");
    queryClient.invalidateQueries({ queryKey: ["/api/auth/me"] });
    setEditMode(false);
  }, []);

  useEffect(() => {
    if (!isAdmin) setEditMode(false);
  }, [isAdmin]);

  return (
    <AdminContext.Provider value={{
      isAdmin,
      editMode,
      setEditMode,
      pendingEdits,
      setPendingEdit,
      contentOverrides,
      saveAll,
      saving,
      pendingImages: mergedPendingImages,
      setPendingImage,
      imageTransforms,
      pendingImageTransforms,
      setPendingImageTransform,
      logout,
    }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (!context) throw new Error("useAdmin must be used within AdminProvider");
  return context;
}
