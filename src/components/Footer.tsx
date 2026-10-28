import { Link } from "wouter";
import { useLanguage } from "@/lib/i18n";
import { useBookingUrl } from "@/lib/bookingUrl";

export function Footer() {
  const bookingUrl = useBookingUrl();
  const { t } = useLanguage();

  const navLinks = [
    { href: "/diensten", label: t.nav.services },
    { href: "/over-ons", label: t.nav.about },
    { href: "/tarieven", label: t.nav.tarieven },
    { href: "/faq", label: t.nav.faq },
    { href: "/reviews", label: t.nav.reviews },
    { href: "/blog", label: t.nav.blog },
    { href: "/contact", label: t.nav.contact },
    { href: bookingUrl, label: t.nav.booking, external: true },
  ];

  return (
    <footer className="bg-[#eef2eb] dark:bg-[#1a1f19]">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16">
        <div className="py-8 md:py-16 border-b border-foreground/[0.08]">
          <div className="hidden md:grid grid-cols-12 gap-12">
            <div className="col-span-4">
              <img src="/logos/MulaLogo_GreenLong.svg" alt="MULA Fysio" className="h-7 w-auto dark:hidden" />
              <img src="/logos/MulaLogo_WhiteLong.svg" alt="MULA Fysio" className="h-7 w-auto hidden dark:block" />
              <p className="text-foreground/60 text-sm mt-5 font-medium leading-[1.8] max-w-xs">
                {t.footer.tagline}
              </p>
            </div>

            <div className="col-span-2">
              <p className="text-[10px] tracking-[0.35em] uppercase text-foreground/40 mb-8">{t.footer.quickLinks}</p>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    {link.external ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer">
                        <span className="text-foreground/60 hover:text-foreground text-[13px] transition-colors duration-500 cursor-pointer font-medium">
                          {link.label}
                        </span>
                      </a>
                    ) : (
                      <Link href={link.href}>
                        <span className="text-foreground/60 hover:text-foreground text-[13px] transition-colors duration-500 cursor-pointer font-medium">
                          {link.label}
                        </span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-3">
              <p className="text-[10px] tracking-[0.35em] uppercase text-foreground/40 mb-8">{t.footer.contact}</p>
              <ul className="space-y-3 text-[13px] font-medium">
                <li className="text-foreground/60 leading-[1.7]">
                  Schaafstraat 20F<br />1021 KE Amsterdam
                </li>
                <li>
                  <a href="tel:+31629554689" className="text-foreground/60 hover:text-foreground transition-colors duration-500">
                    +31 6 29 55 46 89
                  </a>
                </li>
                <li>
                  <a href="mailto:info@mulafysio.nl" className="text-foreground/60 hover:text-foreground transition-colors duration-500">
                    info@mulafysio.nl
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-3">
              <p className="text-[10px] tracking-[0.35em] uppercase text-foreground/40 mb-8">{t.footer.hours}</p>
              <ul className="space-y-2 text-[13px] font-medium">
                {[
                  { day: t.contact.mon, time: "7:30 – 20:00" },
                  { day: t.contact.tue, time: "7:30 – 20:00" },
                  { day: t.contact.wed, time: "7:30 – 20:00" },
                  { day: t.contact.thu, time: "7:30 – 20:00" },
                  { day: t.contact.fri, time: "7:30 – 18:00" },
                  { day: t.contact.sat, time: t.contact.closed },
                  { day: t.contact.sun, time: t.contact.closed },
                ].map(({ day, time }) => (
                  <li key={day} className="flex justify-between gap-4">
                    <span className="text-foreground/50">{day}</span>
                    <span className={time === t.contact.closed ? "text-foreground/30" : "text-foreground/70"}>
                      {time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:hidden">
            <img src="/logos/MulaLogo_GreenLong.svg" alt="MULA Fysio" className="h-6 w-auto dark:hidden" />
            <img src="/logos/MulaLogo_WhiteLong.svg" alt="MULA Fysio" className="h-6 w-auto hidden dark:block" />

            <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4">
              {navLinks.map((link) => (
                link.external ? (
                  <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                    <span className="text-foreground/60 text-[12px] font-medium cursor-pointer">
                      {link.label}
                    </span>
                  </a>
                ) : (
                  <Link key={link.href} href={link.href}>
                    <span className="text-foreground/60 text-[12px] font-medium cursor-pointer">
                      {link.label}
                    </span>
                  </Link>
                )
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-foreground/[0.08] space-y-1.5 text-[12px] font-medium text-foreground/60">
              <p>Schaafstraat 20F, 1021 KE Amsterdam</p>
              <a href="tel:+31629554689" className="block">+31 6 29 55 46 89</a>
              <a href="mailto:info@mulafysio.nl" className="block">info@mulafysio.nl</a>
            </div>
          </div>
        </div>

        <div className="py-5 md:py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-foreground/35 text-[11px] font-medium tracking-wider">
              &copy; {new Date().getFullYear()} MULA Fysio. {t.footer.allRights}
            </p>
            <div className="flex flex-wrap items-center gap-4 md:gap-8 justify-center">
              {[
                { label: t.footer.privacy, hash: "privacy" },
                { label: t.footer.terms, hash: "voorwaarden" },
                { label: t.footer.complaints, hash: "klachten" },
                { label: t.footer.cookies, hash: "cookies" },
              ].map(({ label, hash }) => (
                <Link key={hash} href={`/juridisch#${hash}`}>
                  <span
                    className="text-foreground/35 hover:text-foreground/60 text-[11px] transition-colors duration-500 font-medium tracking-wider cursor-pointer"
                    data-testid={`footer-link-${hash}`}
                  >
                    {label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
