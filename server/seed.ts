import { storage } from "./storage";

const DEFAULT_SERVICES = [
  {
    slug: "fysiotherapie",
    nameNl: "Fysiotherapie",
    nameEn: "Physiotherapy",
    descriptionNl: "Fysiotherapie helpt bij het verminderen van pijn en het herstellen van klachten aan spieren en gewrichten. Bij MULA Fysio kijken we niet alleen naar waar de pijn zit, maar vooral naar waarom deze is ontstaan en wat jouw lichaam op dit moment wel en niet aankan.",
    descriptionEn: "Physiotherapy helps reduce pain and recover from complaints in muscles and joints. At MULA Fysio we don't just look at where the pain is, but especially at why it arose and what your body can and cannot handle at this moment.",
    imageUrl: "/services/fysiotherapie.jpg",
  },
  {
    slug: "manuele",
    nameNl: "Manuele Therapie",
    nameEn: "Manual Therapy",
    descriptionNl: "Manuele therapie is een masterspecialisatie binnen de fysiotherapie die zich richt op het beter laten bewegen van gewrichten, zoals in je nek, rug of schouder. Met specifieke technieken, zoals mobilisaties of manipulaties ('kraken'), kan een manueel therapeut de beweeglijkheid van een gewricht verbeteren en pijn verminderen.",
    descriptionEn: "Manual therapy is a master specialization within physiotherapy that focuses on improving the movement of joints, such as in your neck, back or shoulder. With specific techniques, such as mobilizations or manipulations ('cracking'), a manual therapist can improve the mobility of a joint and reduce pain.",
    imageUrl: "/services/manuele.jpg",
  },
  {
    slug: "sport",
    nameNl: "Sportrevalidatie",
    nameEn: "Sports Rehabilitation",
    descriptionNl: "Bij MULA Fysio is het doel van sportrevalidatie niet alleen dat je klachten verminderen, maar dat je weer veilig en met vertrouwen kunt terugkeren naar je sport. Na een blessure of operatie spelen naast pijn ook verminderde kracht, stabiliteit, coördinatie of onzekerheid in bewegen een rol.",
    descriptionEn: "At MULA Fysio the goal of sports rehabilitation is not just that your complaints diminish, but that you can safely and confidently return to your sport. After an injury or surgery, in addition to pain, reduced strength, stability, coordination or uncertainty in movement play a role.",
    imageUrl: "/services/sport.jpg",
  },
  {
    slug: "herstel",
    nameNl: "Herstel Na Operatie",
    nameEn: "Post-Surgery Recovery",
    descriptionNl: "Met alleen een operatie ben je er vaak nog niet. Het echte herstel begint pas daarna. Tijdens de revalidatie werken we samen aan het terugwinnen van kracht, stabiliteit en vertrouwen in je lichaam. Bij MULA Fysio kijken we verder dan alleen het geopereerde gebied. We brengen in kaart wat jouw lichaam weer nodig heeft om te kunnen doen wat voor jou belangrijk is.",
    descriptionEn: "Surgery alone is often not enough. Real recovery only begins afterwards. During rehabilitation we work together to regain strength, stability and confidence in your body. At MULA Fysio we look beyond just the operated area. We map out what your body needs again to be able to do what is important to you.",
    imageUrl: "/services/herstel.jpg",
  },
  {
    slug: "dry",
    nameNl: "Dry Needling",
    nameEn: "Dry Needling",
    descriptionNl: "Dry needling is een behandelmethode waarbij we met een dunne naald specifieke spierverhardingen, ook wel triggerpoints genoemd, behandelen. Met dry needling wordt het triggerpoint kort geprikkeld, waardoor de spier ontspant en de doorbloeding verbeterd.",
    descriptionEn: "Dry needling is a treatment method in which we treat specific muscle tightness, also called trigger points, with a thin needle. With dry needling, the trigger point is briefly stimulated, causing the muscle to relax and circulation to improve.",
    imageUrl: "/services/dry.jpg",
  },
  {
    slug: "hoofd",
    nameNl: "Hoofdpijnklachten",
    nameEn: "Headache Complaints",
    descriptionNl: "Hoofdpijnklachten zoals spanningshoofdpijn, nekgerelateerde hoofdpijn (cervicogeen) of duizeligheid kunnen zeer beperkend zijn. In veel gevallen spelen factoren zoals nekbelasting, langdurig zitten, stress of verminderde spiercontrole een rol bij het ontstaan of in stand houden van deze klachten.",
    descriptionEn: "Headache complaints such as tension headaches, neck-related headaches (cervicogenic) or dizziness can be very limiting. In many cases factors such as neck load, prolonged sitting, stress or reduced muscle control play a role in the onset or persistence of these complaints.",
    imageUrl: "/services/hoofd.jpg",
  },
];

export async function seedServices() {
  const existing = await storage.getAllServices();
  const existingSlugs = new Set(existing.map((s) => s.slug));
  let inserted = 0;
  for (let i = 0; i < DEFAULT_SERVICES.length; i++) {
    const s = DEFAULT_SERVICES[i];
    if (existingSlugs.has(s.slug)) continue;
    await storage.createService({
      slug: s.slug,
      nameNl: s.nameNl,
      nameEn: s.nameEn,
      descriptionNl: s.descriptionNl,
      descriptionEn: s.descriptionEn,
      insured: true,
      imageUrl: s.imageUrl,
      sortOrder: i,
      visible: true,
    });
    inserted++;
  }
  if (inserted > 0) console.log(`[seed] Inserted ${inserted} default service(s)`);
}
