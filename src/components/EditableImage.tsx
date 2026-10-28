import { useRef, useState, useEffect } from "react";
import { useAdmin } from "@/lib/adminContext";
import { Camera, Move, ZoomIn, RotateCcw, Check } from "lucide-react";

interface EditableImageProps {
  imageKey: string;
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  defaultScale?: number;
  defaultX?: number;
  defaultY?: number;
  priority?: boolean;
  "data-testid"?: string;
}

export function EditableImage({
  imageKey,
  src,
  alt,
  className = "",
  style,
  defaultScale = 1,
  defaultX = 50,
  defaultY = 50,
  priority = false,
  "data-testid": testId,
}: EditableImageProps) {
  const {
    editMode,
    pendingImages,
    setPendingImage,
    imageTransforms,
    pendingImageTransforms,
    setPendingImageTransform,
  } = useAdmin();
  const fileRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [uploading, setUploading] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const [dragging, setDragging] = useState(false);

  const displaySrc = pendingImages[imageKey] || src;
  const saved = pendingImageTransforms[imageKey] ?? imageTransforms[imageKey];
  const scale = saved?.scale ?? defaultScale;
  const x = saved?.x ?? defaultX;
  const y = saved?.y ?? defaultY;

  const update = (next: Partial<{ scale: number; x: number; y: number }>) => {
    setPendingImageTransform(imageKey, {
      scale: next.scale ?? scale,
      x: next.x ?? x,
      y: next.y ?? y,
    });
  };

  const handleUpload = async (file: File) => {
    setUploading(true);
    const formData = new FormData();
    formData.append("image", file);
    try {
      const res = await fetch("/api/upload", { method: "POST", body: formData, credentials: "include" });
      const data = await res.json();
      if (data.url) setPendingImage(imageKey, data.url);
    } finally {
      setUploading(false);
    }
  };

  useEffect(() => {
    if (!dragging) return;
    let lastX = 0;
    let lastY = 0;
    let initialized = false;
    const applyDelta = (clientX: number, clientY: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      if (!initialized) {
        lastX = clientX;
        lastY = clientY;
        initialized = true;
        return;
      }
      const dx = ((clientX - lastX) / rect.width) * 100;
      const dy = ((clientY - lastY) / rect.height) * 100;
      lastX = clientX;
      lastY = clientY;
      update({
        x: Math.max(0, Math.min(100, x - dx)),
        y: Math.max(0, Math.min(100, y - dy)),
      });
    };
    const onMouseMove = (e: MouseEvent) => { e.preventDefault(); applyDelta(e.clientX, e.clientY); };
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 0) return;
      e.preventDefault();
      applyDelta(e.touches[0].clientX, e.touches[0].clientY);
    };
    const onUp = () => setDragging(false);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onUp);
    };
  }, [dragging, x, y]);

  const imgStyle: React.CSSProperties = {
    ...style,
    objectPosition: `${x}% ${y}%`,
    transform: `${style?.transform ? style.transform + " " : ""}scale(${scale})`,
    transformOrigin: "center",
  };

  if (!editMode) {
    return <img src={displaySrc} alt={alt} className={className} style={imgStyle} data-testid={testId} loading={priority ? "eager" : "lazy"} decoding="async" {...(priority ? ({ fetchpriority: "high" } as any) : {})} />;
  }

  return (
    <div ref={containerRef} className="relative w-full h-full group/img">
      <img
        src={displaySrc}
        alt={alt}
        className={className}
        style={imgStyle}
        data-testid={testId}
        draggable={false}
        onMouseDown={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onTouchStart={(e) => {
          e.stopPropagation();
          setDragging(true);
        }}
      />
      <div className="absolute inset-0 pointer-events-none border-2 border-dashed border-blue-400/70" />

      <div className="absolute bottom-2 left-2 z-30 bg-blue-500/90 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full shadow-lg pointer-events-none flex items-center gap-1">
        <Camera className="w-3 h-3" /> Foto bewerken
      </div>

      <div className="absolute top-2 right-2 flex gap-1.5 z-30">
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); setShowPanel((v) => !v); }}
          className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full shadow-lg"
          title="Aanpassen"
        >
          <Move className="w-3.5 h-3.5" />
        </button>
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); fileRef.current?.click(); }}
          className="bg-white hover:bg-gray-100 text-gray-800 p-2 rounded-full shadow-lg"
          title="Vervangen"
        >
          <Camera className="w-3.5 h-3.5" />
        </button>
      </div>

      {uploading && (
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-20 text-white text-xs">
          Uploaden...
        </div>
      )}

      {showPanel && (
        <div
          className="absolute top-12 right-2 z-40 bg-white rounded-lg shadow-2xl p-3 w-64 text-gray-800"
          onMouseDown={(e) => e.stopPropagation()}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mb-2">
            Sleep de afbeelding om te verplaatsen
          </div>
          <label className="block text-[11px] font-medium mb-1 flex items-center gap-1">
            <ZoomIn className="w-3 h-3" /> Zoom: {scale.toFixed(2)}x
          </label>
          <input
            type="range"
            min="0.5"
            max="3"
            step="0.05"
            value={scale}
            onChange={(e) => update({ scale: parseFloat(e.target.value) })}
            className="w-full mb-2 accent-blue-500"
          />
          <div className="grid grid-cols-2 gap-2 mb-2">
            <div>
              <label className="block text-[11px] font-medium mb-1">X: {Math.round(x)}%</label>
              <input
                type="range"
                min="0"
                max="100"
                step="1"
                value={x}
                onChange={(e) => update({ x: parseFloat(e.target.value) })}
                className="w-full accent-blue-500"
              />
            </div>
            <div>
              <label className="block text-[11px] font-medium mb-1">Y: {Math.round(y)}%</label>
              <input
                type="range"
                min="0"
                max="100"
                step="1"
                value={y}
                onChange={(e) => update({ y: parseFloat(e.target.value) })}
                className="w-full accent-blue-500"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setPendingImageTransform(imageKey, { scale: defaultScale, x: defaultX, y: defaultY })}
              className="flex-1 flex items-center justify-center gap-1 text-[11px] font-medium bg-gray-100 hover:bg-gray-200 px-2 py-1.5 rounded"
            >
              <RotateCcw className="w-3 h-3" /> Reset
            </button>
            <button
              type="button"
              onClick={() => setShowPanel(false)}
              className="flex-1 flex items-center justify-center gap-1 text-[11px] font-medium bg-blue-500 hover:bg-blue-600 text-white px-2 py-1.5 rounded"
            >
              <Check className="w-3 h-3" /> Klaar
            </button>
          </div>
        </div>
      )}

      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => e.target.files?.[0] && handleUpload(e.target.files[0])}
      />
    </div>
  );
}
