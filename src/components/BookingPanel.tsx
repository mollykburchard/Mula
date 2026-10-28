import { useEffect } from "react";
import bookingPanelSource from "@assets/Pasted--MULA-Fysio-online-afspraak-booking-panel-Custom-bookin_1790793019167.txt?raw";
import { DEFAULT_BOOKING_URL, useBookingUrl } from "@/lib/bookingUrl";
import { useLanguage } from "@/lib/i18n";

/**
 * The supplied Flux widget only owns links to the default MULA schedule.
 * If an admin chooses a different booking URL, links keep their normal behavior.
 * The original href also remains usable if the widget script fails to initialize.
 */
export function BookingPanel() {
  const bookingUrl = useBookingUrl();
  const { language } = useLanguage();

  useEffect(() => {
    if (bookingUrl !== DEFAULT_BOOKING_URL) return;

    if (!customElements.get("mula-afspraak")) {
      const script = document.createElement("script");
      script.textContent = bookingPanelSource;
      document.head.appendChild(script);
      script.remove();
    }
    if (!customElements.get("mula-afspraak")) return;

    const panel = document.createElement("mula-afspraak");
    panel.setAttribute("hide-button", "");
    panel.setAttribute("lang", language);
    document.body.appendChild(panel);
    return () => panel.remove();
  }, [bookingUrl]);

  useEffect(() => {
    document.querySelector("mula-afspraak")?.setAttribute("lang", language);
  }, [bookingUrl, language]);

  return null;
}