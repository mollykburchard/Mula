import { useEffect } from "react";
import { useLanguage } from "@/lib/i18n";

type SEOOptions = {
  titleNl: string;
  titleEn: string;
  descriptionNl: string;
  descriptionEn: string;
  path: string;
};

const SITE = "https://www.mulafysio.nl";

function setMeta(attr: "name" | "property", key: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

function setLink(rel: string, href: string, extra?: Record<string, string>) {
  let selector = `link[rel="${rel}"]`;
  if (extra?.hreflang) selector += `[hreflang="${extra.hreflang}"]`;
  let el = document.head.querySelector<HTMLLinkElement>(selector);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    if (extra) Object.entries(extra).forEach(([k, v]) => el!.setAttribute(k, v));
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function useSEO(opts: SEOOptions) {
  const { language } = useLanguage();
  const title = language === "en" ? opts.titleEn : opts.titleNl;
  const description = language === "en" ? opts.descriptionEn : opts.descriptionNl;
  const url = `${SITE}${opts.path}`;

  useEffect(() => {
    document.title = title;
    document.documentElement.lang = language === "en" ? "en" : "nl";
    setMeta("name", "description", description);
    setLink("canonical", url);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:locale", language === "en" ? "en_US" : "nl_NL");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setLink("alternate", `${SITE}${opts.path}`, { hreflang: "nl" });
    setLink("alternate", `${SITE}${opts.path}`, { hreflang: "en" });
    setLink("alternate", `${SITE}${opts.path}`, { hreflang: "x-default" });
  }, [title, description, url, language]);
}
