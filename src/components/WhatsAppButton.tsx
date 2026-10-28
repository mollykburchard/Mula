import { SiWhatsapp } from "react-icons/si";
import { useLanguage } from "@/lib/i18n";

export function WhatsAppButton() {
  const { t } = useLanguage();
  const phoneNumber = "31629554689";
  const message = encodeURIComponent("Hallo MULA Fysio, ik wil graag een afspraak maken.");

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.footer.whatsappAria}
      data-testid="link-whatsapp-float"
      className="fixed bottom-5 right-3 sm:right-4 md:bottom-6 md:right-6 z-50 w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover-elevate transition-transform hover:scale-105"
    >
      <SiWhatsapp className="w-6 h-6 md:w-7 md:h-7 text-white" />
    </a>
  );
}
