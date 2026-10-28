export type BlogPost = {
  slug: string;
  titleNl: string;
  titleEn: string;
  excerptNl: string;
  excerptEn: string;
  bodyNl: string;
  bodyEn: string;
  date: string;
  categoryNl: string;
  categoryEn: string;
  readTime: string;
};

export const BLOG_KEY = "blog.posts";

export const DEFAULT_BLOG_POSTS: BlogPost[] = [
  {
    slug: "manuele-therapie",
    titleNl: "Wat is manuele therapie en wanneer heb je het nodig?",
    titleEn: "What is manual therapy and when do you need it?",
    excerptNl:
      "Manuele therapie is een masterspecialisatie binnen de fysiotherapie. We leggen uit hoe het werkt en voor welke klachten het effectief is.",
    excerptEn:
      "Manual therapy is a master's specialization within physiotherapy. We explain how it works and for which complaints it is effective.",
    bodyNl:
      "Manuele therapie is een masterspecialisatie binnen de fysiotherapie. Een manueel therapeut richt zich specifiek op de gewrichten en de wervelkolom, en gebruikt gerichte technieken om de beweeglijkheid te herstellen en pijn te verminderen.\n\nWaar reguliere fysiotherapie vaak breder is, kijkt de manueel therapeut heel precies naar hoe de gewrichten ten opzichte van elkaar bewegen. Door kleine, nauwkeurige bewegingen toe te passen, kan een geblokkeerd of stug gewricht weer soepeler gaan functioneren.\n\nManuele therapie is vooral effectief bij nek- en rugklachten, hoofdpijn die vanuit de nek komt, en bewegingsbeperkingen in schouder, heup of andere gewrichten. Twijfel je of het iets voor jou is? Plan een afspraak en we kijken samen naar de beste aanpak.",
    bodyEn:
      "Manual therapy is a master's specialization within physiotherapy. A manual therapist focuses specifically on the joints and spine, using targeted techniques to restore mobility and reduce pain.\n\nWhile regular physiotherapy is often broader, a manual therapist looks very precisely at how joints move relative to each other. By applying small, precise movements, a blocked or stiff joint can function more smoothly again.\n\nManual therapy is especially effective for neck and back complaints, headaches originating from the neck, and movement restrictions in the shoulder, hip or other joints. Not sure if it's right for you? Book an appointment and we'll look at the best approach together.",
    date: "15 maart 2025",
    categoryNl: "Manuele Therapie",
    categoryEn: "Manual Therapy",
    readTime: "5 min",
  },
  {
    slug: "sport-na-knieoperatie",
    titleNl: "Terugkeren naar sport na een knieoperatie: wat je moet weten",
    titleEn: "Returning to sport after knee surgery: what you need to know",
    excerptNl:
      "Na een knieoperatie is de weg terug naar sport intensief maar haalbaar. Lees hoe wij jou begeleiden in dit proces.",
    excerptEn:
      "After knee surgery, the road back to sport is intensive but achievable. Read how we guide you through this process.",
    bodyNl:
      "Na een knieoperatie is de weg terug naar sport intensief, maar zeker haalbaar. Goede begeleiding maakt daarbij het verschil: een gestructureerd revalidatietraject zorgt ervoor dat je veilig en zelfverzekerd terugkeert naar het niveau dat je gewend was.\n\nDe revalidatie verloopt in fases. In de eerste weken ligt de focus op het herstel van de beweeglijkheid en het verminderen van zwelling. Daarna bouwen we stap voor stap de kracht en stabiliteit weer op, voordat we toewerken naar sport-specifieke bewegingen.\n\nGeduld en consistentie zijn cruciaal. We stemmen het traject volledig af op jouw doelen en sport, zodat je niet alleen herstelt, maar ook sterker terugkomt dan voorheen.",
    bodyEn:
      "After knee surgery, the road back to sport is intensive, but definitely achievable. Good guidance makes all the difference: a structured rehabilitation program ensures you safely and confidently return to the level you were used to.\n\nRehabilitation happens in phases. In the first weeks, the focus is on restoring mobility and reducing swelling. After that, we gradually rebuild strength and stability before working towards sport-specific movements.\n\nPatience and consistency are crucial. We fully tailor the program to your goals and sport, so you not only recover, but come back stronger than before.",
    date: "2 maart 2025",
    categoryNl: "Sportrevalidatie",
    categoryEn: "Sports Rehabilitation",
    readTime: "7 min",
  },
  {
    slug: "spanningshoofdpijn",
    titleNl: "Spanningshoofdpijn: oorzaken en effectieve behandeling",
    titleEn: "Tension headaches: causes and effective treatment",
    excerptNl:
      "Spanningshoofdpijn is een van de meest voorkomende klachten. Ontdek hoe fysiotherapie kan helpen bij het verlichten van deze klachten.",
    excerptEn:
      "Tension headaches are one of the most common complaints. Discover how physiotherapy can help relieve these symptoms.",
    bodyNl:
      "Spanningshoofdpijn is een van de meest voorkomende klachten waarmee mensen bij ons komen. Het voelt vaak als een drukkende band rond het hoofd en kan urenlang aanhouden.\n\nDe oorzaak ligt regelmatig in de nek- en schouderspieren. Langdurig zitten, stress en een verkeerde houding zorgen voor spanning in deze spieren, die uitstraalt naar het hoofd. Door deze onderliggende oorzaak aan te pakken, verdwijnt vaak ook de hoofdpijn.\n\nMet gerichte fysiotherapie en manuele technieken verminderen we de spierspanning en verbeteren we je houding. Daarnaast krijg je oefeningen en adviezen mee om klachten in de toekomst te voorkomen.",
    bodyEn:
      "Tension headaches are one of the most common complaints people come to us with. It often feels like a tight band around the head and can last for hours.\n\nThe cause frequently lies in the neck and shoulder muscles. Prolonged sitting, stress and poor posture create tension in these muscles, which radiates to the head. By addressing this underlying cause, the headache often disappears too.\n\nWith targeted physiotherapy and manual techniques, we reduce muscle tension and improve your posture. You'll also receive exercises and advice to prevent complaints in the future.",
    date: "18 februari 2025",
    categoryNl: "Hoofdpijn",
    categoryEn: "Headaches",
    readTime: "6 min",
  },
];

type ContentRow = { key: string; valueNl: string; valueEn: string };

function normalizePost(p: any): BlogPost {
  return {
    slug: p.slug || `post-${Date.now()}`,
    titleNl: p.titleNl ?? p.title ?? "",
    titleEn: p.titleEn ?? p.title ?? "",
    excerptNl: p.excerptNl ?? p.excerpt ?? "",
    excerptEn: p.excerptEn ?? p.excerpt ?? "",
    bodyNl: p.bodyNl ?? p.body ?? "",
    bodyEn: p.bodyEn ?? p.body ?? "",
    date: p.date ?? "",
    categoryNl: p.categoryNl ?? p.category ?? "",
    categoryEn: p.categoryEn ?? p.category ?? "",
    readTime: p.readTime ?? "",
  };
}

export function getBlogPosts(contentData?: ContentRow[]): BlogPost[] {
  const saved = contentData?.find((c) => c.key === BLOG_KEY);
  if (saved) {
    try {
      const parsed = JSON.parse(saved.valueNl);
      if (Array.isArray(parsed)) {
        // Always return sorted (newest first) so every caller gets consistent order
        return sortBlogPostsByDate(parsed.map(normalizePost));
      }
    } catch {}
  }
  return DEFAULT_BLOG_POSTS; // defaults are already in newest-first order
}

const DUTCH_MONTHS: Record<string, number> = {
  januari: 0, februari: 1, maart: 2, april: 3, mei: 4, juni: 5,
  juli: 6, augustus: 7, september: 8, oktober: 9, november: 10, december: 11,
};
const ENGLISH_MONTHS: Record<string, number> = {
  january: 0, february: 1, march: 2, april: 3, may: 4, june: 5,
  july: 6, august: 7, september: 8, october: 9, november: 10, december: 11,
};

function parseFlexibleDate(value: string): number {
  if (!value || !value.trim()) return Infinity;
  const trimmed = value.trim().toLowerCase();
  const match = trimmed.match(/^(\d{1,2})\s+([a-zà-ž]+)\s+(\d{4})$/i);
  if (match) {
    const day = parseInt(match[1], 10);
    const year = parseInt(match[3], 10);
    const monthName = match[2];
    const month = DUTCH_MONTHS[monthName] ?? ENGLISH_MONTHS[monthName];
    if (month !== undefined) return new Date(year, month, day).getTime();
  }
  const parsed = Date.parse(value);
  if (!isNaN(parsed)) return parsed;
  return Infinity;
}

export function sortBlogPostsByDate(posts: BlogPost[]): BlogPost[] {
  return [...posts].sort((a, b) => parseFlexibleDate(b.date) - parseFlexibleDate(a.date));
}
