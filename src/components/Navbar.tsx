import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { useTheme } from "@/lib/themeContext";
import { useBookingUrl } from "@/lib/bookingUrl";

export function Navbar() {
  const bookingUrl = useBookingUrl();
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = false;
  const [location] = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const navLinks = [
    { href: "/diensten", label: t.nav.services },
    { href: "/over-ons", label: t.nav.about },
    { href: "/tarieven", label: t.nav.tarieven },
    { href: "/faq", label: t.nav.faq },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 dark:bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-gradient-to-b from-black/40 to-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" data-testid="link-logo">
            <img
              src={scrolled || isOpen ? "/logos/MulaLogo_GreenShort.svg" : "/logos/MulaLogo_WhiteShort.svg"}
              alt="MULA FYSIO"
              className="h-6 md:h-7 w-auto cursor-pointer transition-opacity duration-300"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} data-testid={`link-nav-${link.href.replace("/", "").replace("-", "") || "home"}`}>
                <span className={`text-[13px] tracking-wide uppercase cursor-pointer transition-colors duration-300 relative group ${
                  scrolled
                    ? "text-foreground/70 hover:text-foreground"
                    : "text-white/80 hover:text-white"
                }`}>
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-400 ${
                    scrolled ? "bg-foreground" : "bg-white"
                  }`} />
                </span>
              </Link>
            ))}

            <a href={bookingUrl} target="_blank" rel="noopener noreferrer" data-testid="link-book-nav">
              <span className={`text-[13px] tracking-wide uppercase cursor-pointer font-semibold transition-colors duration-300 relative group ${
                scrolled ? "text-foreground" : "text-white"
              }`} data-testid="button-book-nav">
                {t.nav.bookNow}
                <span className={`absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-400 ${
                  scrolled ? "bg-foreground" : "bg-white"
                }`} />
              </span>
            </a>

            <button
              data-testid="button-language-toggle"
              onClick={() => setLanguage(language === "nl" ? "en" : "nl")}
              className={`text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 border rounded-full transition-all duration-300 cursor-pointer hover:scale-105 ${
                scrolled
                  ? "border-foreground/20 text-foreground/60 hover:text-foreground hover:border-foreground/40"
                  : "border-white/30 text-white/70 hover:text-white hover:border-white/60"
              }`}
            >
              {language === "nl" ? "EN" : "NL"}
            </button>

            <button
              data-testid="button-theme-toggle"
              onClick={toggleTheme}
              className={`p-1.5 border rounded-full transition-all duration-300 cursor-pointer hover:scale-105 ${
                scrolled
                  ? "border-foreground/20 text-foreground/60 hover:text-foreground hover:border-foreground/40"
                  : "border-white/30 text-white/70 hover:text-white hover:border-white/60"
              }`}
            >
              {theme === "light" ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
            </button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              data-testid="button-theme-toggle-mobile"
              onClick={toggleTheme}
              className={`p-2 border rounded-full transition-colors cursor-pointer ${
                scrolled || isOpen
                  ? "border-foreground/20 text-foreground/60"
                  : "border-white/30 text-white/70"
              }`}
            >
              {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
            <button
              data-testid="button-language-toggle-mobile"
              onClick={() => setLanguage(language === "nl" ? "en" : "nl")}
              className={`text-[11px] font-semibold tracking-wider uppercase px-3 py-1.5 border rounded-full transition-colors cursor-pointer ${
                scrolled || isOpen
                  ? "border-foreground/20 text-foreground/60"
                  : "border-white/30 text-white/70"
              }`}
            >
              {language === "nl" ? "EN" : "NL"}
            </button>
            <button
              data-testid="button-mobile-menu"
              className={`p-2 transition-colors relative z-50 ${scrolled || isOpen ? "text-foreground" : "text-white"}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
          <motion.div
            className="lg:hidden fixed inset-0 top-0 bg-[#eef2eb] dark:bg-[#1a1f19] z-[39]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.div
            className="lg:hidden fixed inset-0 top-0 bg-[#eef2eb] dark:bg-[#1a1f19] z-40"
            initial={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="px-6 py-24 flex flex-col gap-3">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                >
                  <Link href={link.href}>
                    <span className="block text-2xl sm:text-3xl font-medium tracking-wide text-foreground cursor-pointer py-2.5 hover:translate-x-4 transition-transform duration-300 active:text-muted-foreground">
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                className="pt-4 border-t border-border mt-2"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4, delay: 0.1 + navLinks.length * 0.06 }}
              >
                <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
                  <span className="block text-2xl sm:text-3xl font-semibold tracking-wide text-foreground cursor-pointer py-2.5 hover:translate-x-4 transition-transform duration-300 active:text-muted-foreground" data-testid="button-book-mobile">
                    {t.nav.bookNow}
                  </span>
                </a>
              </motion.div>
            </div>
          </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
