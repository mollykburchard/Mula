import { useState } from "react";
import { useAdmin } from "@/lib/adminContext";
import { Pencil, Save, X, LogOut, Eye, Check, LayoutDashboard } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { BOOKING_URL_KEY, isValidBookingUrl, useBookingUrl } from "@/lib/bookingUrl";

export function AdminToolbar() {
  const { isAdmin, editMode, setEditMode, saveAll, saving, pendingEdits, setPendingEdit, pendingImages, pendingImageTransforms, logout } = useAdmin();
  const [justSaved, setJustSaved] = useState(false);
  const [editingBookingUrl, setEditingBookingUrl] = useState(false);
  const [bookingDraft, setBookingDraft] = useState("");
  const [bookingError, setBookingError] = useState("");
  const bookingUrl = useBookingUrl();
  const { toast } = useToast();

  if (!isAdmin) return null;

  const changeCount =
    Object.keys(pendingEdits).length +
    Object.keys(pendingImageTransforms).length +
    Object.keys(pendingImages).length;
  const hasChanges = changeCount > 0;

  const handlePublish = async () => {
    try {
      await saveAll();
      setJustSaved(true);
      setTimeout(() => setJustSaved(false), 3500);
    } catch {
      toast({ title: "Publiceren niet gelukt", description: "Controleer je verbinding en probeer opnieuw.", variant: "destructive" });
    }
  };

  const applyBookingUrl = () => {
    const url = bookingDraft.trim();
    if (!isValidBookingUrl(url)) {
      setBookingError("Vul een geldige https:// link in (maximaal 2048 tekens).");
      return;
    }
    setPendingEdit(BOOKING_URL_KEY, "valueNl", url);
    setEditingBookingUrl(false);
    setBookingError("");
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] flex flex-col items-center gap-1.5" data-testid="admin-toolbar">
      {editMode && editingBookingUrl && (
        <form
          onSubmit={(e) => { e.preventDefault(); applyBookingUrl(); }}
          className="w-[min(90vw,480px)] bg-white text-black border border-gray-200 rounded-xl shadow-2xl p-4"
          data-testid="booking-url-editor"
        >
          <label htmlFor="booking-url-input" className="text-sm font-semibold block mb-1">Online afspraaklink</label>
          <p className="text-xs text-gray-600 mb-3">Deze link wordt gebruikt voor alle online afspraakknoppen. Klik daarna op Publiceer om hem live te zetten.</p>
          <input
            id="booking-url-input"
            type="url"
            required
            value={bookingDraft}
            onChange={(e) => { setBookingDraft(e.target.value); setBookingError(""); }}
            placeholder="https://..."
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
            data-testid="input-booking-url"
          />
          {bookingError && <p className="text-red-600 text-xs mt-2" role="alert">{bookingError}</p>}
          <div className="flex justify-end gap-2 mt-3">
            <button type="button" onClick={() => setEditingBookingUrl(false)} className="text-xs px-3 py-2 rounded border border-gray-300">Annuleren</button>
            <button type="submit" className="text-xs px-3 py-2 rounded bg-blue-600 text-white" data-testid="button-apply-booking-url">Wijziging toevoegen</button>
          </div>
        </form>
      )}
      {editMode && hasChanges && (
        <div className="text-[11px] font-medium text-white bg-amber-500/95 px-3 py-1 rounded-full shadow-lg" data-testid="status-unpublished-changes">
          {changeCount} niet-gepubliceerde {changeCount === 1 ? "wijziging" : "wijzigingen"}
        </div>
      )}
      {justSaved && !hasChanges && (
        <div className="flex items-center gap-1.5 text-[11px] font-medium text-white bg-green-600 px-3 py-1 rounded-full shadow-lg" data-testid="status-published">
          <Check className="w-3.5 h-3.5" />
          Gepubliceerd — nu live op de website
        </div>
      )}

      <div className="flex items-center gap-2 bg-black/90 backdrop-blur-sm text-white px-4 py-2.5 rounded-full shadow-2xl border border-white/10">
        <div className="flex items-center gap-2 pr-3 border-r border-white/20">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs font-medium">Admin</span>
        </div>

        {!editMode ? (
          <button
            onClick={() => setEditMode(true)}
            className="flex items-center gap-2 text-xs px-3 py-1.5 rounded-full hover:bg-white/10 transition"
            data-testid="button-toggle-edit"
          >
            <Pencil className="w-3.5 h-3.5" />
            Bewerk modus
          </button>
        ) : (
          <>
            <button
              onClick={() => { setBookingDraft(bookingUrl); setBookingError(""); setEditingBookingUrl(true); }}
              className="flex items-center gap-2 text-xs px-3 py-1.5 rounded-full hover:bg-white/10 transition"
              data-testid="button-edit-booking-url"
            >
              Afspraaklink
            </button>
            <button
              onClick={() => setEditMode(false)}
              className="flex items-center gap-2 text-xs px-3 py-1.5 rounded-full hover:bg-white/10 transition"
              data-testid="button-preview-mode"
              title="Stop met bewerken en bekijk de website zoals bezoekers die zien"
            >
              <Eye className="w-3.5 h-3.5" />
              Bekijken
            </button>
            {hasChanges ? (
              <button
                onClick={handlePublish}
                disabled={saving}
                className="flex items-center gap-2 text-xs px-3 py-1.5 rounded-full bg-blue-500 hover:bg-blue-600 transition disabled:opacity-50 font-medium"
                data-testid="button-save-edits"
                title="Zet je wijzigingen direct live op de website"
              >
                <Save className="w-3.5 h-3.5" />
                {saving ? "Publiceren..." : `Publiceer (${changeCount})`}
              </button>
            ) : (
              <span className="text-xs px-3 py-1.5 text-white/45" data-testid="text-no-changes">
                Geen wijzigingen
              </span>
            )}
            <button
              onClick={() => { setEditMode(false); }}
              className="flex items-center gap-2 text-xs px-3 py-1.5 rounded-full hover:bg-white/10 transition text-red-300"
              data-testid="button-cancel-edit"
              title="Bewerken afsluiten"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </>
        )}

        <div className="pl-2 border-l border-white/20">
          <a
            href="/admin"
            className="flex items-center gap-1.5 text-xs px-2 py-1.5 rounded-full hover:bg-white/10 transition text-white/60 hover:text-white"
            data-testid="link-admin-panel"
            title="Open het beheerdersdashboard"
          >
            <LayoutDashboard className="w-3.5 h-3.5" />
            Dashboard
          </a>
        </div>

        <button
          onClick={logout}
          className="flex items-center gap-1.5 text-xs px-2 py-1.5 rounded-full hover:bg-white/10 transition text-white/60 hover:text-white"
          data-testid="button-admin-logout"
          title="Uitloggen"
        >
          <LogOut className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}
