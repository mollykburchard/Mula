/**
 * Server-side SEO: injects per-page meta tags into the HTML shell before serving,
 * so crawlers and tools without JavaScript see the correct title and description.
 */

interface PageMeta {
  title: string;
  description: string;
  canonicalPath: string;
}

const SITE = "https://www.mulafysio.nl";
const OG_IMAGE = `${SITE}/logos/GreenTransparentMulaLogo.png`;

/** Dutch (default) meta per known route. */
const PAGE_META: Record<string, PageMeta> = {
  "/": {
    title: "MULA Fysio – Fysiotherapie & Manuele Therapie Amsterdam-Noord",
    description:
      "MULA Fysio: professionele fysiotherapie en manuele therapie in Amsterdam-Noord. Specialisten in sportrevalidatie, dry needling, hoofdpijnklachten en herstel na operatie.",
    canonicalPath: "/",
  },
  "/over-ons": {
    title: "Over Ons – Guylian & Roos | MULA Fysio Amsterdam-Noord",
    description:
      "Maak kennis met het team van MULA Fysio: Guylian Kick (MSc Manuele Therapie) en Roos van der Deen. Persoonlijke fysiotherapie in Amsterdam-Noord.",
    canonicalPath: "/over-ons",
  },
  "/diensten": {
    title: "Diensten – Fysiotherapie, Manuele Therapie & Sportrevalidatie | MULA Fysio",
    description:
      "Onze behandelingen: fysiotherapie, manuele therapie, sportrevalidatie, dry needling, hoofdpijnbehandeling en herstel na operatie in Amsterdam-Noord.",
    canonicalPath: "/diensten",
  },
  "/diensten/fysiotherapie": {
    title: "Fysiotherapie | MULA Fysio Amsterdam-Noord",
    description:
      "Fysiotherapie bij MULA Fysio in Amsterdam-Noord voor pijn, mobiliteit, houding en functionele klachten. Geschikt voor acute blessures, chronische klachten en preventie.",
    canonicalPath: "/diensten/fysiotherapie",
  },
  "/diensten/manuele": {
    title: "Manuele Therapie | MULA Fysio Amsterdam-Noord",
    description:
      "Manuele therapie bij MULA Fysio – masterspecialisatie gericht op gewrichtsmobilisatie van wervelkolom, nek en extremiteiten. Voor stijfheid, nekpijn, rugpijn en hoofdpijn.",
    canonicalPath: "/diensten/manuele",
  },
  "/diensten/sport": {
    title: "Sportrevalidatie | MULA Fysio Amsterdam-Noord",
    description:
      "Gestructureerde terugkeer naar sport na blessure of operatie bij MULA Fysio. Inclusief krachttraining, stabiliteit en sportspecifieke oefeningen.",
    canonicalPath: "/diensten/sport",
  },
  "/diensten/herstel": {
    title: "Herstel na Operatie | MULA Fysio Amsterdam-Noord",
    description:
      "Revalidatie na orthopedische operaties (knie, schouder, heup, wervelkolom) bij MULA Fysio in Amsterdam-Noord. Gericht op kracht, stabiliteit en zelfvertrouwen.",
    canonicalPath: "/diensten/herstel",
  },
  "/diensten/dry": {
    title: "Dry Needling | MULA Fysio Amsterdam-Noord",
    description:
      "Dry needling bij MULA Fysio voor triggerpoints, spierpijn, nek- en schouderklachten en spanningshoofdpijn. Verzekerd en uitgevoerd door getrainde fysiotherapeuten.",
    canonicalPath: "/diensten/dry",
  },
  "/diensten/hoofd": {
    title: "Hoofdpijnbehandeling | MULA Fysio Amsterdam-Noord",
    description:
      "Gerichte behandeling voor spanningshoofdpijn, cervicogene hoofdpijn en duizeligheid bij MULA Fysio. Combineert manuele therapie, dry needling en houdingsadvies.",
    canonicalPath: "/diensten/hoofd",
  },
  "/afspraak": {
    title: "Afspraak Maken | MULA Fysio Amsterdam-Noord",
    description:
      "Maak online een afspraak bij MULA Fysio in Amsterdam-Noord. Geen verwijzing nodig (DTF). Bel +31 6 29 55 46 89 of boek direct online.",
    canonicalPath: "/afspraak",
  },
  "/tarieven": {
    title: "Tarieven & Vergoeding | MULA Fysio Amsterdam-Noord",
    description:
      "Tarieven en vergoeding bij MULA Fysio in Amsterdam-Noord. Behandelingen worden vergoed door alle Nederlandse zorgverzekeraars vanuit de aanvullende verzekering.",
    canonicalPath: "/tarieven",
  },
  "/reviews": {
    title: "Reviews – 5.0 sterren | MULA Fysio Amsterdam-Noord",
    description:
      "Lees wat patiënten zeggen over MULA Fysio in Amsterdam-Noord. 5.0 sterren op Google. Guylian en Roos worden geprezen voor hun professionaliteit en persoonlijke aanpak.",
    canonicalPath: "/reviews",
  },
  "/contact": {
    title: "Contact – MULA Fysio Amsterdam-Noord | Schaafstraat 20F",
    description:
      "Neem contact op met MULA Fysio in Amsterdam-Noord. Schaafstraat 20F, 1021 KE Amsterdam. Bel +31 6 29 55 46 89 of mail info@mulafysio.nl.",
    canonicalPath: "/contact",
  },
  "/faq": {
    title: "Veelgestelde Vragen – Fysiotherapie | MULA Fysio Amsterdam-Noord",
    description:
      "Antwoorden op veelgestelde vragen over fysiotherapie, manuele therapie, vergoeding, verwijzing en behandelingen bij MULA Fysio in Amsterdam-Noord.",
    canonicalPath: "/faq",
  },
  "/blog": {
    title: "Blog – Fysiotherapie inzichten | MULA Fysio Amsterdam-Noord",
    description:
      "Artikelen en inzichten over fysiotherapie, manuele therapie, sportrevalidatie en hoofdpijnbehandeling door het team van MULA Fysio in Amsterdam-Noord.",
    canonicalPath: "/blog",
  },
};

function escapeAttr(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

/** Find the best matching PageMeta for a given request path. */
function getPageMeta(requestPath: string): PageMeta {
  // Exact match
  if (PAGE_META[requestPath]) return PAGE_META[requestPath];

  // Blog post: /blog/:slug
  if (requestPath.startsWith("/blog/")) {
    return {
      title: "Blog | MULA Fysio Amsterdam-Noord",
      description:
        "Lees ons artikel over fysiotherapie, manuele therapie of sportrevalidatie op de blog van MULA Fysio in Amsterdam-Noord.",
      canonicalPath: requestPath,
    };
  }

  // Service detail fallback
  if (requestPath.startsWith("/diensten/")) {
    return {
      title: "Behandeling | MULA Fysio Amsterdam-Noord",
      description:
        "Gespecialiseerde fysiotherapeutische behandeling bij MULA Fysio in Amsterdam-Noord.",
      canonicalPath: requestPath,
    };
  }

  // Default to homepage meta
  return PAGE_META["/"];
}

/** Inject per-page meta tags into the HTML shell. */
export function injectPageMeta(html: string, requestPath: string): string {
  const meta = getPageMeta(requestPath);
  const canonical = `${SITE}${meta.canonicalPath}`;
  const title = escapeAttr(meta.title);
  const description = escapeAttr(meta.description);

  return html
    // Title
    .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
    // Meta description
    .replace(
      /(<meta\s+name="description"\s+content=")[^"]*(")/,
      `$1${description}$2`,
    )
    // Canonical
    .replace(
      /(<link\s+rel="canonical"\s+href=")[^"]*(")/,
      `$1${canonical}$2`,
    )
    // og:title
    .replace(
      /(<meta\s+property="og:title"\s+content=")[^"]*(")/,
      `$1${title}$2`,
    )
    // og:description
    .replace(
      /(<meta\s+property="og:description"\s+content=")[^"]*(")/,
      `$1${description}$2`,
    )
    // og:url
    .replace(
      /(<meta\s+property="og:url"\s+content=")[^"]*(")/,
      `$1${canonical}$2`,
    )
    // og:image — fix broken SVG path → proper PNG
    .replace(
      /(<meta\s+property="og:image"\s+content=")[^"]*(")/,
      `$1${OG_IMAGE}$2`,
    )
    // twitter:title
    .replace(
      /(<meta\s+name="twitter:title"\s+content=")[^"]*(")/,
      `$1${title}$2`,
    )
    // twitter:description
    .replace(
      /(<meta\s+name="twitter:description"\s+content=")[^"]*(")/,
      `$1${description}$2`,
    )
    // twitter:image — fix broken SVG path → proper PNG
    .replace(
      /(<meta\s+name="twitter:image"\s+content=")[^"]*(")/,
      `$1${OG_IMAGE}$2`,
    );
}
