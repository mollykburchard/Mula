import { useState, useRef, useEffect } from "react";
import { useAdmin } from "@/lib/adminContext";
import { useLanguage } from "@/lib/i18n";
import { Pencil, Check, X } from "lucide-react";

interface EditableTextProps {
  contentKey: string;
  defaultValue: string;
  defaultValueEn?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  style?: React.CSSProperties;
  "data-testid"?: string;
}

export function EditableText({
  contentKey,
  defaultValue,
  defaultValueEn,
  as: Tag = "span",
  className = "",
  style,
  "data-testid": testId,
}: EditableTextProps) {
  const { editMode, contentOverrides, pendingEdits, setPendingEdit } = useAdmin();
  const { language } = useLanguage();
  const [editing, setEditing] = useState(false);
  const [tempValue, setTempValue] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const lang = language === "nl" ? "valueNl" : "valueEn";
  const override = pendingEdits[contentKey]?.[lang] || contentOverrides[contentKey]?.[lang];
  const fallback = language === "en" && defaultValueEn ? defaultValueEn : defaultValue;
  const displayValue = override || fallback;

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [editing]);

  if (!editMode) {
    return <Tag className={className} style={{ whiteSpace: "pre-line", ...style }} data-testid={testId}>{displayValue}</Tag>;
  }

  if (editing) {
    return (
      <div className="relative inline-block w-full">
        <textarea
          ref={inputRef}
          value={tempValue}
          onChange={(e) => setTempValue(e.target.value)}
          className="w-full bg-white/95 text-black border-2 border-blue-500 rounded-lg p-3 text-sm resize-y min-h-[60px] focus:outline-none shadow-lg z-50 relative"
          onKeyDown={(e) => {
            if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
              e.preventDefault();
              const otherLang = language === "nl" ? "valueEn" : "valueNl";
              const existingOther = pendingEdits[contentKey]?.[otherLang] || contentOverrides[contentKey]?.[otherLang] || "";
              setPendingEdit(contentKey, lang, tempValue);
              if (existingOther || contentOverrides[contentKey]) {
                setPendingEdit(contentKey, otherLang, existingOther);
              }
              setEditing(false);
            }
            if (e.key === "Escape") setEditing(false);
          }}
        />
        <div className="absolute -bottom-8 right-0 flex gap-1 z-50">
          <button
            onClick={() => {
              const otherLang = language === "nl" ? "valueEn" : "valueNl";
              const existingOther = pendingEdits[contentKey]?.[otherLang] || contentOverrides[contentKey]?.[otherLang] || "";
              setPendingEdit(contentKey, lang, tempValue);
              if (existingOther || contentOverrides[contentKey]) {
                setPendingEdit(contentKey, otherLang, existingOther);
              }
              setEditing(false);
            }}
            className="bg-green-500 text-white p-1.5 rounded shadow-lg hover:bg-green-600"
          >
            <Check className="w-3 h-3" />
          </button>
          <button
            onClick={() => setEditing(false)}
            className="bg-gray-500 text-white p-1.5 rounded shadow-lg hover:bg-gray-600"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <Tag
      className={`${className} cursor-pointer relative group/edit`}
      style={style}
      data-testid={testId}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setTempValue(displayValue);
        setEditing(true);
      }}
    >
      {displayValue}
      <span className="absolute -top-2 -right-2 opacity-0 group-hover/edit:opacity-100 transition-opacity bg-blue-500 text-white p-1 rounded-full shadow-lg z-40">
        <Pencil className="w-3 h-3" />
      </span>
      <span className="absolute inset-0 border-2 border-dashed border-blue-400/0 group-hover/edit:border-blue-400/50 rounded transition-colors pointer-events-none" />
    </Tag>
  );
}
