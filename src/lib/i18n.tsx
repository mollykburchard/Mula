import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "nl" | "en";

export type ServiceDetailBlock =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "list"; items: string[] };

export interface Translations {
  nav: {
    home: string;
    about: string;
    services: string;
    booking: string;
    reviews: string;
    blog: string;
    contact: string;
    faq: string;
    tarieven: string;
    bookNow: string;
  };
  home: {
    heroTitle: string;
    heroSubtitle: string;
    heroCta: string;
    heroCtaSecondary: string;
    philosophyTitle: string;
    philosophyText: string;
    servicesTitle: string;
    servicesSubtitle: string;
    teamTitle: string;
    teamSubtitle: string;
    anatomyTitle: string;
    anatomySubtitle: string;
    ctaTitle: string;
    ctaText: string;
    ctaButton: string;
    whyTitle: string;
    why1Title: string;
    why1Text: string;
    why2Title: string;
    why2Text: string;
    why3Title: string;
    why3Text: string;
    why4Title: string;
    why4Text: string;
    insured: string;
    insuredText: string;
    location: string;
    hours: string;
    yearsLabel: string;
    patientsLabel: string;
    ratingLabel: string;
  };
  about: {
    title: string;
    subtitle: string;
    guylianName: string;
    guylianRole: string;
    guylianYears: string;
    guylianBio: string;
    roosName: string;
    roosRole: string;
    roosYears: string;
    roosBio: string;
    practiceTitle: string;
    practiceText: string;
    philosophyTitle: string;
    philosophyText: string;
    yearsExp: string;
  };
  services: {
    title: string;
    subtitle: string;
    learnMore: string;
    insured: string;
    fysiotherapie: {
      name: string;
      short: string;
      description: string;
      when: string;
      whenItems: string[];
      approach: string;
      approachItems: string[];
    };
    manuele: {
      name: string;
      short: string;
      description: string;
      conditions: string[];
    };
    sport: {
      name: string;
      short: string;
      description: string;
      conditions: string[];
    };
    herstel: {
      name: string;
      short: string;
      description: string;
    };
    dry: {
      name: string;
      short: string;
      description: string;
      conditions: string[];
    };
    hoofd: {
      name: string;
      short: string;
      description: string;
      treatment: string[];
    };
    details: {
      fysiotherapie: ServiceDetailBlock[];
      manuele: ServiceDetailBlock[];
      sport: ServiceDetailBlock[];
      herstel: ServiceDetailBlock[];
      dry: ServiceDetailBlock[];
      hoofd: ServiceDetailBlock[];
    };
  };
  booking: {
    title: string;
    subtitle: string;
    phone: string;
    whatsapp: string;
    email: string;
    formTitle: string;
    name: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phone2: string;
    phonePlaceholder: string;
    service: string;
    servicePlaceholder: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    submitting: string;
    successTitle: string;
    successText: string;
    infoTitle: string;
    infoItems: string[];
  };
  reviews: {
    title: string;
    subtitle: string;
    noReviews: string;
  };
  contact: {
    title: string;
    subtitle: string;
    address: string;
    phone: string;
    email: string;
    hours: string;
    mon: string;
    tue: string;
    wed: string;
    thu: string;
    fri: string;
    sat: string;
    sun: string;
    closed: string;
    formTitle: string;
    name: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    subject: string;
    subjectPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    submitting: string;
    successTitle: string;
    successText: string;
    whatsappCta: string;
  };
  faq: {
    title: string;
    subtitle: string;
    backToCategories: string;
    categories: Array<{ id: string; name: string; items: Array<{ q: string; a: string }> }>;
  };
  tarieven: {
    title: string;
    subtitle: string;
    note: string;
    insuredTitle: string;
    insuredText: string;
    categories: Array<{
      title: string;
      items: Array<{ name: string; price: string; note?: string; info?: string[] }>;
    }>;
    disclaimer: string;
  };
  blog: {
    title: string;
    subtitle: string;
    readMore: string;
    comingSoon: string;
    comingSoonText: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    contact: string;
    hours: string;
    legal: string;
    privacy: string;
    terms: string;
    cookies: string;
    complaints: string;
    allRights: string;
    whatsappAria: string;
  };
  common: {
    bookAppointment: string;
    callUs: string;
    whatsapp: string;
    loading: string;
    error: string;
    yearsExperience: string;
    readMore: string;
  };
}

const nl: Translations = {
  nav: {
    home: "Home",
    about: "Over Ons",
    services: "Diensten",
    booking: "Afspraak Maken",
    reviews: "Reviews",
    blog: "Blog",
    contact: "Contact",
    faq: "FAQ",
    tarieven: "Tarieven",
    bookNow: "Afspraak Maken",
  },
  home: {
    heroTitle: "Terug naar je basis. Vooruit vanuit kracht.",
    heroSubtitle: "Fysiotherapie en manuele therapie in Amsterdam-Noord. Persoonlijk, wetenschappelijk en no-nonsense.",
    heroCta: "Afspraak Maken",
    heroCtaSecondary: "Ontdek onze diensten",
    philosophyTitle: "Onze filosofie",
    philosophyText: "Wij geloven dat écht herstel begint bij de kern. Niet het bestrijden van pijn, maar het begrijpen waar het vandaan komt. Pas wanneer je samen teruggaat naar de basis (Mula in Sanskriet) ontstaat jouw persoonlijk herstelplan. Wij combineren wetenschap, educatie en no-nonsense fysiotherapie om je actief eigenaar van je herstel te maken.",
    servicesTitle: "Onze diensten",
    servicesSubtitle: "Specialistische zorg, afgestemd op jouw herstel",
    teamTitle: "Maak kennis met ons team",
    teamSubtitle: "Twee gepassioneerde therapeuten met ruime ervaring",
    anatomyTitle: "Het lichaam begrijpen",
    anatomySubtitle: "Ontdek het lymfesysteem — een essentieel onderdeel van herstel en gezondheid. Draai en zoom op het 3D-model.",
    ctaTitle: "Klaar om te beginnen?",
    ctaText: "Plan vandaag nog een afspraak en zet de eerste stap naar jouw herstel.",
    ctaButton: "Maak een afspraak",
    whyTitle: "Waarom MULA Fysio?",
    why1Title: "Actieve aanpak",
    why1Text: "Niet alleen behandelen, maar jou actief begeleiden zodat je zelf de regie neemt over je herstel.",
    why2Title: "Wetenschappelijk onderbouwd",
    why2Text: "We combineren klinische ervaring met actuele wetenschappelijke inzichten voor de beste resultaten.",
    why3Title: "Persoonlijke aandacht",
    why3Text: "Geen lopende band. Jij staat centraal. We luisteren, leggen uit en passen onze aanpak aan op jou.",
    why4Title: "Gespecialiseerd team",
    why4Text: "MSc Manuele Therapie en ervaren fysiotherapeut samen in één praktijk voor breed en diep specialisme.",
    insured: "Vergoed door zorgverzekering",
    insuredText: "De meeste behandelingen worden (deels) vergoed vanuit je aanvullende of basisverzekering.",
    location: "Schaafstraat 20F, Amsterdam-Noord",
    hours: "Ma–Do: 7:30–20:00 | Vr: 7:30–18:00",
    yearsLabel: "Jaar Ervaring",
    patientsLabel: "Patiënten",
    ratingLabel: "Google Rating",
  },
  about: {
    title: "Over Ons",
    subtitle: "Twee therapeuten. Eén missie: jouw herstel.",
    guylianName: "Guylian Kick",
    guylianRole: "Fysiotherapist | Manueel therapeut",
    guylianYears: "9 jaar ervaring",
    guylianBio: "Mijn naam is Guylian Kick, fysiotherapeut en manueel therapeut in opleiding, met een duidelijke missie: mensen weer in beweging krijgen, niet alleen klachtenvrij, maar juist sterker en zelfverzekerder dan daarvoor.\n\nIk ben in 2017 afgestudeerd als fysiotherapeut aan de Hanzehogeschool Groningen. Sindsdien heb ik mij continu verder ontwikkeld met verschillende opleidingen en cursussen, waaronder dry needling (extremiteiten en wervelkolom), traumatologie, diverse kniecursussen en kinderorthopedie voor fysiotherapeuten. In juli 2026 rond ik mijn master Musculoskeletaal af aan Saxion, met als deelrichting manuele therapie. In de praktijk heb ik brede ervaring opgedaan binnen de eerstelijnszorg en in diverse aanvullende rollen als fysiotherapeut. Zo werkte ik voor het Nederlands Doven zaalvoetbalteam, met als hoogtepunten deelname aan het EK en de Champions League. Daarnaast verzorg ik klinische lessen voor de internationale opleiding fysiotherapie en was ik de afgelopen vier jaar verbonden aan het traumanetwerk in Amsterdam.\n\nBinnen mijn aanpak staat educatie centraal. Ik geloof dat je pas echt vooruitgang boekt als je begrijpt waar je klachten vandaan komen, hoelang herstel ongeveer duurt en wat jij zelf kunt doen om te herstellen van je blessure. Geen klacht is hetzelfde. Waar bij de één een slaapprobleem de onderliggende oorzaak kan zijn van chronische pijn, kan het bij een ander juist een mechanische of psychologische factor zijn. Door die kennis te combineren met gerichte behandeling en training, werken we samen aan een duurzaam resultaat. Samen gaan we op zoek naar die puzzel, en precies dat maatwerk maakt dit vak zo interessant en effectief.\n\nKlaar om weer vrij en sterk te bewegen? Laten we samen aan de slag gaan.",
    roosName: "Roos van der Deen",
    roosRole: "Fysiotherapeut",
    roosYears: "10 jaar ervaring",
    roosBio: "Mijn naam is Roos van der Deen, sinds 2016 werk ik met veel passie en plezier als fysiotherapeut. Vanuit een persoonlijke en actieve aanpak help ik je om de oorzaak van je klacht te begrijpen en stap voor stap sterker terug te keren in bewegen en sport.\n\nAls fanatieke sporter met een achtergrond in hockey, voetbal, hardlopen en krachttraining weet ik hoe belangrijk het is om vrij te kunnen bewegen en het maximale uit je lichaam te halen. Ik weet ook hoe frustrerend het is als dat even niet lukt.\n\nIk kijk verder dan de klacht en zoek naar wat er echt onder ligt: hoe je beweegt, hoe je belast en hoe je herstelt. Vanuit daar bouwen we gericht op, zodat je lichaam sterker wordt en weer aankan wat jij wilt doen.\n\nNa het afronden van mijn opleiding in 2016 heb ik mij verder gespecialiseerd met een 1-jarige opleiding in de manuele therapie, het volgen van een dry-needling cursus en diverse sportgerelateerde scholingen. Daarnaast heb ik mij verdiept in de behandeling van hoofdpijnklachten. In mijn werkervaring heb ik 2 jaar gewerkt als fysiotherapeut bij GHHC Dames 1 en 4 jaar bij vv Zeeburgia, waar ik veel ervaring heb opgedaan binnen de (top)sport en het begeleiden van sporters op verschillende niveaus.\n\nIn mijn begeleiding staat een persoonlijke en actieve aanpak centraal: realistische stappen, aandacht voor jouw doelen en een plan dat aansluit bij je behoeftes. Zo werk je gericht toe naar duurzaam herstel, meer kracht en vertrouwen in je lichaam.",
    practiceTitle: "De praktijk",
    practiceText: "MULA Fysio is gevestigd in Amsterdam-Noord op de Schaafstraat 20F. De naam MULA verwijst naar het Sanskrietwoord voor 'basis' of 'wortel'. Dit symboliseert onze aanpak: teruggaan naar de kern om van daaruit duurzaam te herstellen.",
    philosophyTitle: "Onze filosofie",
    philosophyText: "Bij MULA Fysio kijken we verder dan alleen de klacht. We combineren wetenschap, educatie en no-nonsense fysiotherapie om je actief eigenaar van je herstel te maken. Of je nu topsporter bent, recreatief sporter of gewoon fit en vitaal oud wilt worden, wij helpen jou met manuele therapie, oefentherapie en vooral veel persoonlijke aandacht.",
    yearsExp: "jaar ervaring",
  },
  services: {
    title: "Onze Diensten",
    subtitle: "Specialistische fysiotherapie voor iedereen",
    learnMore: "Lees meer",
    insured: "Vergoed vanuit aanvullende verzekering",
    fysiotherapie: {
      name: "Fysiotherapie",
      short: "Herstel van pijn en beperkingen aan spieren en gewrichten met een persoonlijke aanpak.",
      description: "Fysiotherapie helpt bij het verminderen van pijn en het herstellen van klachten aan spieren en gewrichten. Bij MULA Fysio kijken we niet alleen naar waar de pijn zit, maar vooral naar waarom deze is ontstaan en wat jouw lichaam op dit moment wel en niet aankan.",
      when: "Wanneer fysiotherapie?",
      whenItems: [
        "Spier- en gewrichtsklachten",
        "Nek-, rug- en schouderklachten",
        "Sportblessures of overbelasting",
        "Revalidatie na een operatie of blessure",
        "Bewegingsbeperkingen in werk of dagelijks leven",
      ],
      approach: "Onze aanpak",
      approachItems: [
        "Oefentherapie (kracht, stabiliteit, mobiliteit)",
        "Manuele technieken",
        "Advies over belasting en herstel",
        "Begeleiding richting werk of sport",
      ],
    },
    manuele: {
      name: "Manuele Therapie",
      short: "Masterspecialisatie gericht op het verbeteren van gewrichtsmobiliteit en verminderen van pijn.",
      description: "Manuele therapie is een masterspecialisatie binnen de fysiotherapie die zich richt op het beter laten bewegen van gewrichten, zoals in je nek, rug of schouder. Met specifieke technieken, zoals mobilisaties of manipulaties ('kraken'), kan een manueel therapeut de beweeglijkheid van een gewricht verbeteren en pijn verminderen.",
      conditions: [
        "Nek- en hoofdpijnklachten",
        "Rugklachten",
        "Schouderklachten",
        "Bewegingsbeperkingen in alle andere gewrichten",
      ],
    },
    sport: {
      name: "Sportrevalidatie",
      short: "Veilig en zeker terugkeren naar sport na een blessure of operatie.",
      description: "Bij MULA Fysio is het doel van sportrevalidatie niet alleen dat je klachten verminderen, maar dat je weer veilig en met vertrouwen kunt terugkeren naar je sport. Na een blessure of operatie spelen naast pijn ook verminderde kracht, stabiliteit, coördinatie of onzekerheid in bewegen een rol.",
      conditions: [
        "Knie- en enkelblessures",
        "Schouderklachten",
        "Rug- en heupklachten",
        "Blessures na een operatie",
      ],
    },
    herstel: {
      name: "Herstel Na Operatie",
      short: "Gestructureerde revalidatie na een operatie, zowel fysiek als mentaal begeleid.",
      description: "Met alleen een operatie ben je er vaak nog niet. Het echte herstel begint pas daarna. Tijdens de revalidatie werken we samen aan het terugwinnen van kracht, stabiliteit en vertrouwen in je lichaam. Bij MULA Fysio kijken we verder dan alleen het geopereerde gebied. We brengen in kaart wat jouw lichaam weer nodig heeft om te kunnen doen wat voor jou belangrijk is.",
    },
    dry: {
      name: "Dry Needling",
      short: "Behandeling van spierverhardingen (triggerpoints) met een dunne naald voor pijnvermindering.",
      description: "Dry needling is een behandelmethode waarbij we met een dunne naald specifieke spierverhardingen, ook wel triggerpoints genoemd, behandelen. Met dry needling wordt het triggerpoint kort geprikkeld, waardoor de spier ontspant en de doorbloeding verbeterd.",
      conditions: [
        "Spiergerelateerde nek- en schouderklachten",
        "Lage rugklachten",
        "Sportblessures",
        "Hoofdpijn",
        "Langdurige of terugkerende spierpijn",
      ],
    },
    hoofd: {
      name: "Hoofdpijnklachten",
      short: "Effectieve behandeling van spanningshoofdpijn, nekgerelateerde hoofdpijn en duizeligheid.",
      description: "Hoofdpijnklachten zoals spanningshoofdpijn, nekgerelateerde hoofdpijn (cervicogeen) of duizeligheid kunnen zeer beperkend zijn. In veel gevallen spelen factoren zoals nekbelasting, langdurig zitten, stress of verminderde spiercontrole een rol bij het ontstaan of in stand houden van deze klachten.",
      treatment: [
        "Gerichte oefentherapie",
        "Mobiliserende technieken",
        "Massage of dry needling",
        "Advies over belasting en werkhouding",
        "Begeleiding bij het opbouwen van dagelijkse activiteiten",
      ],
    },
    details: {
      fysiotherapie: [
        { type: "p", text: "Fysiotherapie helpt bij het verminderen van pijn en het herstellen van klachten aan spieren en gewrichten. Bij MULA Fysio kijken we niet alleen naar waar de pijn zit, maar vooral naar waarom deze is ontstaan en wat jouw lichaam op dit moment wel en niet aankan." },
        { type: "p", text: "Heb je rug- of nekklachten, een sportblessure, overbelasting of ben je aan het herstellen na een operatie? Dan begeleiden we je bij het opbouwen van kracht, controle en belastbaarheid in werk, sport en dagelijks leven." },
        { type: "h", text: "Wanneer fysiotherapie?" },
        { type: "p", text: "Fysiotherapie kan helpen bij:" },
        { type: "list", items: [
          "Spier- en gewrichtsklachten",
          "Nek-, rug- en schouderklachten",
          "Sportblessures of overbelasting",
          "Revalidatie na een operatie of blessure",
          "Bewegingsbeperkingen in werk of dagelijks leven",
        ] },
        { type: "p", text: "Klachten kunnen plotseling ontstaan of geleidelijk opbouwen. In beide gevallen richten we ons op de factoren die het herstel beïnvloeden, niet alleen op het verminderen van symptomen." },
        { type: "h", text: "Onze aanpak" },
        { type: "p", text: "Elke behandeling start met een intake en lichamelijk onderzoek. Op basis daarvan stellen we een persoonlijk traject op, gericht op functieherstel en het opbouwen van belastbaarheid." },
        { type: "p", text: "De behandeling kan bestaan uit:" },
        { type: "list", items: [
          "Oefentherapie (kracht, stabiliteit, mobiliteit)",
          "Manuele technieken",
          "Advies over belasting en herstel",
          "Begeleiding richting werk of sport",
        ] },
      ],
      manuele: [
        { type: "p", text: "Manuele therapie is een masterspecialisatie binnen de fysiotherapie die zich richt op het beter laten bewegen van gewrichten, zoals in je nek, rug of schouder." },
        { type: "p", text: "Met specifieke technieken, zoals mobilisaties of manipulaties (\"kraken\"), kan een manueel therapeut de beweeglijkheid van een gewricht verbeteren en pijn verminderen. Dit zorgt er vaak voor dat je makkelijker kunt bewegen en oefeningen beter kunt uitvoeren. Tijdens een manipulatie kan er een 'knappend' geluid hoorbaar zijn. Dit is geen bot dat verschuift of op de ''goede plek'' wordt gezet, maar het vrijkomen van gasbelletjes in het gewricht en is onschuldig." },
        { type: "p", text: "Bij MULA Fysio gebruiken we deze technieken niet als snelle oplossing op zichzelf, maar als onderdeel van een breder traject. Door het verbeteren van de beweeglijkheid ontstaat er ruimte om actief te werken aan kracht, stabiliteit en controle." },
        { type: "p", text: "Manuele therapie kan onder andere helpen bij:" },
        { type: "list", items: [
          "Nek- en hoofdpijnklachten",
          "Rugklachten",
          "Schouderklachten",
          "Bewegingsbeperkingen in alle andere gewrichten, bijvoorbeeld na een operatie of langdurige immobilisatie.",
        ] },
        { type: "p", text: "De behandeling wordt vaak (deels) vergoed vanuit de aanvullende verzekering." },
      ],
      sport: [
        { type: "p", text: "Bij MULA Fysio is het doel van sportrevalidatie niet alleen dat je klachten verminderen, maar dat je weer veilig en met vertrouwen kunt terugkeren naar je sport. Na een blessure of operatie spelen naast pijn vaak ook verminderde kracht, stabiliteit, coördinatie of onzekerheid in bewegen een rol bij het risico op terugval." },
        { type: "p", text: "Tijdens de revalidatie brengen we in kaart:" },
        { type: "list", items: [
          "Hoe belastbaar je lichaam is",
          "Hoeveel kracht, stabiliteit en explosiviteit je hebt",
          "En wat er in je sport van je gevraagd wordt (bewegingsanalyse)",
        ] },
        { type: "p", text: "Op basis daarvan werken we gericht aan het herstellen van kracht, stabiliteit en sportspecifieke belastbaarheid. Zo bouw je stapsgewijs op naar terugkeer in je sport." },
        { type: "p", text: "Sportrevalidatie kan onder andere helpen bij:" },
        { type: "list", items: [
          "Knie- en enkelblessures",
          "Schouderklachten",
          "Rug- en heupklachten",
          "Blessures na een operatie",
        ] },
        { type: "p", text: "De behandeling valt onder fysiotherapie en wordt vergoed vanuit de aanvullende verzekering." },
      ],
      herstel: [
        { type: "p", text: "Met alleen een operatie ben je er vaak nog niet. Het echte herstel begint pas daarna. Tijdens de revalidatie werken we samen aan het terugwinnen van kracht, stabiliteit en vertrouwen in je lichaam." },
        { type: "p", text: "Bij MULA Fysio kijken we verder dan alleen het geopereerde gebied. We brengen in kaart wat jouw lichaam weer nodig heeft om te kunnen doen wat voor jou belangrijk is, of dat nu traplopen, werken of sporten is. Op basis van regelmatige metingen en evaluaties stellen we iedere 4–6 weken jouw persoonlijke hersteltraject bij. Zo werk je stap voor stap toe naar belastbaarheid in het dagelijks leven en/of sport." },
        { type: "p", text: "Herstellen na een operatie is vaak een intensief en langdurig traject, waarin ook mentale factoren zoals onzekerheid of bewegingsangst een rol kunnen spelen. Daarom begeleiden we je niet alleen fysiek, maar ook in het opbouwen van vertrouwen in bewegen." },
        { type: "p", text: "We werken nauw samen met orthopeden en schakelen waar nodig andere disciplines in, zoals diëtisten of sportpsychologen, om jouw herstel optimaal te ondersteunen. Na een operatie kom je vaak in aanmerking voor een chronische indicatie, waardoor de behandelingen vanaf de 21e zitting vergoed worden vanuit de basisverzekering." },
        { type: "p", text: "Binnen MULA Fysio hebben we ruime ervaring in het revalideren na knie- en schouderoperaties. Daarnaast heeft Guylian vanuit het traumanetwerk ervaring met herstel na chirurgische ingrepen bij trauma's en heeft Roos specifieke expertise in de revalidatie na Total Knee- en Total Hip-protheses." },
      ],
      dry: [
        { type: "p", text: "Dry needling is een behandelmethode waarbij we met een dunne naald specifieke spierverhardingen, ook wel triggerpoints genoemd, behandelen. Een triggerpoint is een lokaal overgevoelige plek in een spier die kan zorgen voor pijn, stijfheid, krachtsverlies of uitstralende klachten. Deze plekken ontstaan vaak door overbelasting, langdurige spanning of een blessure en kunnen de normale spierfunctie verstoren." },
        { type: "p", text: "Met dry needling wordt het triggerpoint kort geprikkeld, waardoor de spier ontspant en de doorbloeding verbeterd. Dit kan leiden tot een afname van pijn en een verbetering van de beweeglijkheid. Tijdens de behandeling kan een korte, lokale spiersamentrekking voelbaar zijn. Dit is een normale reactie van de spier en vaak een teken dat het triggerpoint effectief behandeld wordt." },
        { type: "p", text: "Bij MULA Fysio zetten we dry needling in als onderdeel van een breder behandeltraject. Door het verminderen van spierspanning ontstaat er ruimte om actief te werken aan kracht, controle en belastbaarheid." },
        { type: "p", text: "Dry needling kan onder andere helpen bij:" },
        { type: "list", items: [
          "Spiergerelateerde nek- en schouderklachten",
          "Lage rugklachten",
          "Sportblessures",
          "Hoofdpijn",
          "Langdurige of terugkerende spierpijn",
        ] },
        { type: "p", text: "De behandeling valt onder fysiotherapie en wordt vergoed vanuit de aanvullende verzekering." },
      ],
      hoofd: [
        { type: "p", text: "Hoofdpijnklachten zoals spanningshoofdpijn, nekgerelateerde hoofdpijn (cervicogeen) of duizeligheid kunnen zeer beperkend zijn in het dagelijks functioneren, maar zijn in veel gevallen goed te beïnvloeden. In veel gevallen spelen factoren zoals nekbelasting, langdurig zitten, stress of verminderde spiercontrole een rol bij het ontstaan of in stand houden van deze klachten." },
        { type: "p", text: "Tijdens de eerste afspraak brengen we in kaart:" },
        { type: "list", items: [
          "Hoe je nek en bovenrug bewegen",
          "Hoe belastbaar je spieren en gewrichten zijn",
          "En welke factoren jouw klachten beïnvloeden",
        ] },
        { type: "p", text: "Op basis daarvan werken we gericht aan het verbeteren van mobiliteit, spiercontrole en belastbaarheid van nek en bovenrug. Zo krijg je meer inzicht in je klachten én leer je hoe je hier zelf invloed op kunt uitoefenen." },
        { type: "p", text: "De behandeling kan bestaan uit:" },
        { type: "list", items: [
          "Gerichte oefentherapie",
          "Mobiliserende technieken",
          "Massage of dry needling",
          "Advies over belasting en werkhouding",
          "Begeleiding bij het opbouwen van dagelijkse activiteiten",
        ] },
        { type: "p", text: "De behandeling valt onder fysiotherapie en wordt vergoed vanuit de aanvullende verzekering." },
      ],
    },
  },
  booking: {
    title: "Afspraak Maken",
    subtitle: "Plan jouw eerste afspraak. We nemen zo snel mogelijk contact met je op.",
    phone: "Bel ons",
    whatsapp: "App ons via WhatsApp",
    email: "Stuur een e-mail",
    formTitle: "Stuur een bericht",
    name: "Naam",
    namePlaceholder: "Jouw volledige naam",
    emailLabel: "E-mailadres",
    emailPlaceholder: "jouw@email.nl",
    phone2: "Telefoonnummer",
    phonePlaceholder: "+31 6 12 34 56 78",
    service: "Gewenste behandeling",
    servicePlaceholder: "Selecteer een dienst",
    message: "Bericht",
    messagePlaceholder: "Vertel kort over je klacht of vraag...",
    submit: "Versturen",
    submitting: "Versturen...",
    successTitle: "Bedankt!",
    successText: "We hebben je bericht ontvangen en nemen zo snel mogelijk contact met je op.",
    infoTitle: "Wat kun je verwachten?",
    infoItems: [
      "Respons binnen 1 werkdag",
      "Intake gesprek van 30 minuten",
      "Persoonlijk behandelplan",
      "Regelmatige evaluaties elke 4–6 weken",
    ],
  },
  reviews: {
    title: "Reviews",
    subtitle: "Wat onze patiënten zeggen",
    noReviews: "Reviews worden binnenkort toegevoegd. We vragen onze huidige patiënten om hun ervaringen te delen.",
  },
  contact: {
    title: "Contact",
    subtitle: "We horen graag van je",
    address: "Adres",
    phone: "Telefoon",
    email: "E-mail",
    hours: "Openingstijden",
    mon: "Maandag",
    tue: "Dinsdag",
    wed: "Woensdag",
    thu: "Donderdag",
    fri: "Vrijdag",
    sat: "Zaterdag",
    sun: "Zondag",
    closed: "Gesloten",
    formTitle: "Stuur ons een bericht",
    name: "Naam",
    namePlaceholder: "Jouw naam",
    emailLabel: "E-mail",
    emailPlaceholder: "jouw@email.nl",
    subject: "Onderwerp",
    subjectPlaceholder: "Waarmee kunnen we je helpen?",
    message: "Bericht",
    messagePlaceholder: "Jouw bericht...",
    submit: "Versturen",
    submitting: "Versturen...",
    successTitle: "Bericht ontvangen!",
    successText: "Bedankt voor je bericht. We nemen zo snel mogelijk contact met je op.",
    whatsappCta: "Of stuur ons direct een WhatsApp bericht",
  },
  faq: {
    title: "Veelgestelde Vragen",
    subtitle: "Kies een categorie om de bijbehorende vragen te bekijken.",
    backToCategories: "Terug naar categorieën",
    categories: [
      {
        id: "general",
        name: "Algemene informatie MULA",
        items: [
          {
            q: "Waar zit fysiotherapiepraktijk MULA in Amsterdam Noord?",
            a: "MULA Fysiotherapie is gevestigd in Amsterdam Noord. We kozen bewust voor Amsterdam Noord. Het is een wijk in beweging, met een actieve gemeenschap en groeiende vraag naar goede zorg dichtbij. Onze praktijk is ingericht met moderne behandelkamers en een oefenruimte.\n\nBereikbaarheid:\n— Met de fiets: fietsparkeerplekken direct voor de deur\n— Met het OV: buslijnen en pont binnen loopafstand\n— Met de auto: parkeerplekken voor de deur\n\nHet exacte adres is Schaafstraat 20F.",
          },
          {
            q: "Is er parkeergelegenheid bij de praktijk?",
            a: "Ja, je kunt bij ons voor de voordeur parkeren.",
          },
          {
            q: "Wat zijn de openingstijden van MULA Fysiotherapie?",
            a: "MULA Fysiotherapie is doordeweeks geopend van vroeg tot laat, met mogelijkheden voor avondafspraken. Op maandag t/m donderdag zijn wij geopend van 8:00 tot 20:00 en vrijdag van 8:00 tot 17:00.",
          },
          {
            q: "Ik heb het antwoord op mijn vraag niet gevonden. Wat moet ik doen?",
            a: "Het kan altijd voorkomen dat je een vraag hebt en het antwoord niet op de website kan vinden. Mail in dat geval naar info@mulafysiotherapie.nl of vul het contactformulier in.",
          },
        ],
      },
      {
        id: "consult",
        name: "Consult fysiotherapie",
        items: [
          {
            q: "Wat doet een fysiotherapeut precies?",
            a: "Een fysiotherapeut onderzoekt, behandelt en begeleidt mensen met klachten aan het bewegingsapparaat (spieren, gewrichten, pezen en zenuwen). Het doel is pijn verminderen, beweging verbeteren en herhaling voorkomen.\n\nBij MULA Fysiotherapie in Amsterdam Noord beginnen we altijd met een uitgebreid intakegesprek. We kijken niet alleen naar waar het pijn doet, maar ook naar hoe je beweegt, werkt en leeft. Vaak zit de oorzaak van je klacht ergens anders dan waar je de pijn voelt. Een stijve nek kan bijvoorbeeld ook komen door slaap, stress of zelfs door hoe je ademt.\n\nNa het onderzoek stellen we samen een behandelplan op. Dat kan bestaan uit manuele technieken, oefentherapie, advies over houding en beweging, of specifieke technieken zoals dry needling. Je krijgt ook oefeningen en/of adviezen mee voor thuis; want het echte herstel gebeurt tussen de behandelingen door.",
          },
          {
            q: "Wanneer moet ik naar een fysiotherapeut?",
            a: "Ga naar een fysiotherapeut als je langer dan een paar dagen last hebt van pijn, stijfheid of bewegingsbeperking die niet vanzelf verbetert. Ook bij terugkerende klachten is het slim om niet te wachten.\n\nTypische signalen om een fysiotherapeut te bezoeken:\n— Pijn die langer dan een week aanhoudt\n— Stijfheid in de ochtend die niet wegtrekt\n— Pijn die uitstraalt naar andere lichaamsdelen\n— Bewegingen die je voorheen wel kon, maar nu pijn doen\n— Klachten na een blessure of operatie\n— Hoofdpijn die vanuit je nek lijkt te komen\n— Tintelingen of een doof gevoel\n\nBij MULA in Amsterdam Noord kun je zonder verwijzing terecht. We bekijken samen of fysiotherapie de juiste aanpak is, of dat je beter eerst naar je huisarts kunt.",
          },
          {
            q: "Heb ik een verwijzing nodig voor de fysiotherapeut?",
            a: "Nee, je kunt zonder verwijzing van de huisarts naar de fysiotherapeut. Dit heet directe toegankelijkheid (DTF). Wel is er een screening om te bepalen of fysiotherapie de juiste behandeling is.\n\nSinds 2006 mag je in Nederland rechtstreeks naar een fysiotherapeut. Bij je eerste bezoek doet de fysiotherapeut een screening: past jouw klacht bij wat wij kunnen behandelen, of is verwijzing naar een arts nodig?",
          },
          {
            q: "Wordt fysiotherapie vergoed door mijn zorgverzekering?",
            a: "Fysiotherapie zit niet in het basispakket voor de meeste klachten. Vergoeding hangt af van je aanvullende verzekering, je diagnose en het aantal behandelingen dat je al hebt gehad.\n\nDe basisverzekering vergoedt fysiotherapie alleen bij chronische aandoeningen die op de zogenaamde \"lijst Borst\" staan; en dan pas vanaf de 21e behandeling (COPD, reuma, Parkinson, multiple sclerose of het herstel na operaties).\n\nVoor andere klachten zoals rugpijn, sportblessures of nekklachten heb je een aanvullende verzekering nodig wil je het vergoed krijgen. Ons advies: check je polis vóórdat je begint. MULA Fysiotherapie is gecontracteerd bij de meeste zorgverzekeraars.",
          },
          {
            q: "Wat moet ik meenemen naar mijn eerste afspraak?",
            a: "Neem een legitimatiebewijs en een handdoek mee naar je eerste afspraak. Indien je een verwijzing of medische informatie hebt, breng deze dan ook mee.",
          },
          {
            q: "Is het ook mogelijk dat jullie aan huis komen behandelen?",
            a: "In sommige gevallen is dit mogelijk. Neem voor de mogelijkheden contact op met ons via de mail.",
          },
          {
            q: "Hoe kan ik een afspraak annuleren of verzetten?",
            a: "Indien je verhinderd bent voor een afspraak, kun je deze minstens 24 uur voor aanvang kosteloos annuleren of verplaatsen via de mail, whatsapp of telefonisch. Indien de afspraak binnen 24 uur wordt afgezegd, zijn we genoodzaakt de gereserveerde tijd bij de patiënt zelf in rekening te brengen.",
          },
          {
            q: "Hoeveel behandelingen fysiotherapie heb ik nodig?",
            a: "Het aantal behandelingen varieert van 3 tot 12 voor de meeste klachten, afhankelijk van de ernst, hoe lang je de klacht al hebt en hoe goed je lichaam reageert op de behandeling.\n\nWat invloed heeft op de duur:\n— Hoe lang je de klacht al hebt\n— Of je de oefeningen thuis doet en je houdt aan de adviezen\n— Je algemene gezondheid en conditie\n— Of er onderliggende factoren zijn (stress, slaap, werkhouding)\n\nBij MULA streven we naar zo min mogelijk behandelingen. Ons doel is dat je zonder ons verder kunt.",
          },
          {
            q: "Wat is het verschil tussen een fysiotherapeut en een huisarts bij pijnklachten?",
            a: "Een huisarts diagnosticeert en verwijst, terwijl een fysiotherapeut behandelt en je begeleidt bij herstel. Voor bewegingsgerelateerde pijnklachten is de fysiotherapeut vaak de meest directe route.\n\nDe fysiotherapeut is gespecialiseerd in beweging. Bij twijfel of alarmsignalen (onverklaarbaar gewichtsverlies, koorts, nachtelijke pijn die je wakker houdt) is de huisarts de eerste stap.",
          },
        ],
      },
      {
        id: "manuele",
        name: "Manuele therapie",
        items: [
          {
            q: "Wat is manuele therapie en wanneer helpt het?",
            a: "Manuele therapie is een masterspecialisatie binnen de fysiotherapie waarbij de therapeut met specifieke handgrepen gewrichten en wervels behandelt. Het helpt bij bewegingsbeperkingen, pijn en stijfheid, vooral in rug, nek en gewrichten.\n\nManuele therapie helpt bij:\n— Nekpijn en een stijve nek\n— Lage rugpijn\n— Hoofdpijn vanuit de nek (cervicogene hoofdpijn)\n— Beperkte bewegelijkheid in gewrichten\n— Pijn tussen de schouderbladen\n— Klachten aan heup, knie, enkel of schouder",
          },
          {
            q: "Wat is het verschil tussen manuele therapie en fysiotherapie?",
            a: "Manuele therapie is een 3-jarige masterspecialisatie binnen fysiotherapie. Elke manueel therapeut is ook fysiotherapeut, maar niet elke fysiotherapeut is manueel therapeut. Een algemeen fysiotherapeut behandelt met o.a. massage, oefentherapie, tape en advies. Een manueel therapeut kan dit ook, maar heeft daarnaast specifieke technieken geleerd om gewrichten en de wervelkolom te behandelen. Bij MULA in Amsterdam-Noord werken zowel fysiotherapeuten als manueel therapeuten.",
          },
          {
            q: "Is manuele therapie pijnlijk?",
            a: "Manuele therapie is meestal niet pijnlijk, maar je kunt wel druk of spanning voelen tijdens de behandeling. Na afloop voel je soms spierpijn, vergelijkbaar met na een stevige training. Dit verdwijnt binnen 48 uur.\n\nWat je kunt verwachten:\n— Tijdens behandeling: druk, rek, soms een korte prikkel\n— Direct erna: vaak meer bewegingsvrijheid en minder pijn\n— De dag erna: mogelijk wat spierpijn of vermoeidheid\n\nDe \"krak\" die je soms hoort bij een manipulatie is het vrijkomen van gasbelletjes in het gewricht, vergelijkbaar met knokkelkraken.",
          },
          {
            q: "Helpt manuele therapie bij een hernia?",
            a: "Manuele therapie kan helpen bij hernia-gerelateerde klachten, maar niet bij elke hernia en niet in elke fase. Het hangt af van de ernst van de hernia en je specifieke symptomen. In de acute fase (eerste weken) is pijnmanagement en advies vaak belangrijker dan actieve behandeling.",
          },
          {
            q: "Waar vind ik een manueel therapeut in Amsterdam Noord?",
            a: "MULA Fysiotherapie in Amsterdam Noord heeft een NVMT-geregistreerde manueel therapeut. Je kunt zonder verwijzing terecht voor een afspraak.\n\nLet bij je keuze voor een manueel therapeut op:\n— NVMT-registratie (Nederlandse Vereniging voor Manuele Therapie)\n— BIG-registratie als fysiotherapeut\n— Kwaliteitsregister Paramedici",
          },
        ],
      },
      {
        id: "sport",
        name: "Sportrevalidatie",
        items: [
          {
            q: "Wat is sportrevalidatie en voor wie is het bedoeld?",
            a: "Sportrevalidatie is het begeleiden van sporters bij herstel van blessures, met als doel veilig terugkeren naar hun sport op het oude niveau. Het is bedoeld voor iedereen die sport, van recreant tot topsporter.\n\nHet verschil met reguliere fysiotherapie zit in de focus:\n— Reguliere fysiotherapie: pijnvrij functioneren in dagelijks leven\n— Sportrevalidatie: terug naar sportbelasting op je oude (of hogere) niveau\n\nEen sportrevalidatietraject omvat diagnose, pijnbehandeling, opbouw van kracht en stabiliteit, sportspecifieke oefeningen, gefaseerde terugkeer naar training en preventieadvies.",
          },
          {
            q: "Hoe snel kan ik weer sporten na een blessure?",
            a: "De hersteltijd varieert van enkele dagen tot meerdere maanden, afhankelijk van de blessure. Een lichte verrekking geneest in 1-2 weken, een zware enkelbandruptuur of kruisbandscheur kan 6-12 maanden duren.\n\nFactoren die meespelen:\n— Type en ernst van de blessure\n— Je algemene conditie en gezondheid\n— Of je eerder dezelfde blessure hebt gehad\n— Hoe goed je het revalidatieprogramma volgt\n— Welke sport je beoefent\n\nBij MULA volgen we een gefaseerd protocol. Je keert pas terug naar sport als je de fysieke tests haalt, niet eerder.",
          },
          {
            q: "Doen jullie ook sporttesten en performance metingen?",
            a: "Ja, binnen MULA Fysiotherapie maken we gebruik van verschillende sporttesten en meetmethodes om jouw niveau in kaart te brengen. We werken met meerdere hulpmiddelen om kracht, techniek en stabiliteit te analyseren, zowel algemeen als specifiek voor jouw sport. Op basis van de resultaten stellen we een gericht plan op, zodat jij doelgericht kunt werken aan beter presteren en het verkleinen van de kans op blessures.",
          },
        ],
      },
      {
        id: "herstel",
        name: "Herstel na je operatie",
        items: [
          {
            q: "Wanneer start fysiotherapie na een operatie?",
            a: "Fysiotherapie start vaak binnen 24-48 uur na een operatie in het ziekenhuis. De timing hangt af van het type operatie en de instructies van je chirurg.\n\nDirect na een operatie is er altijd een ontstekingsfase die je moet respecteren. Vroege mobilisatie versnelt herstel en vermindert complicaties. Bij MULA werken we volgens het protocol van je chirurg en stemmen af met je behandelend arts.",
          },
          {
            q: "Fysiotherapie na knieoperatie: wat kan ik verwachten?",
            a: "Na een knieoperatie volgt een gestructureerd revalidatietraject van enkele weken tot maanden, afhankelijk van de ingreep. Je werkt aan bewegelijkheid, kracht en uiteindelijk terugkeer naar normale en sportieve activiteiten.\n\nBij MULA werken we met criteriagebonden protocollen in tegenstelling tot tijdsgebonden protocollen. Je hebt duidelijke mijlpalen en we meten je voortgang objectief.",
          },
          {
            q: "Revalidatie na schouderoperatie: hoelang duurt het?",
            a: "Revalidatie na een schouderoperatie duurt gemiddeld 3-6 maanden, maar kan bij grote ingrepen zoals een rotatorcuff-reconstructie oplopen tot 9-12 maanden voor volledig herstel. De schouder is een complex gewricht dat een nauwkeurig protocol vraagt.",
          },
          {
            q: "Heb ik fysiotherapie nodig na een rugoperatie?",
            a: "Ja, fysiotherapie na een rugoperatie is vrijwel altijd aan te raden. Het helpt bij herstel van kracht, stabiliteit en bewegelijkheid, en vermindert de kans op terugkerende klachten. Na een rugoperatie zijn de spieren rond je wervelkolom verzwakt en moeten weer opgebouwd worden om je rug te ondersteunen.",
          },
          {
            q: "Hebben jullie veel ervaring met herstel na operaties?",
            a: "Ja, binnen MULA Fysiotherapie hebben we ruime ervaring met revalidatie na operaties aan het bewegingsapparaat: knie-, heup-, schouder-, enkel- en rugoperaties, maar ook andere orthopedische ingrepen. We stemmen de begeleiding altijd af op jouw situatie, doelen en belastbaarheid.",
          },
          {
            q: "Werken jullie samen met ziekenhuizen en klinieken?",
            a: "Ja, wij werken nauw samen met verschillende zorgpartners, waaronder Xpert Clinics. Daarnaast hebben we goed contact met orthopeden en traumatologen van diverse ziekenhuizen en klinieken in en rondom Amsterdam.",
          },
        ],
      },
      {
        id: "hoofdpijn",
        name: "Hoofdpijn",
        items: [
          {
            q: "Kan een fysiotherapeut helpen bij hoofdpijn?",
            a: "Ja, een fysiotherapeut kan helpen bij bepaalde soorten hoofdpijn, vooral spanningshoofdpijn en cervicogene hoofdpijn (hoofdpijn vanuit de nek).\n\nTypen hoofdpijn waarbij fysiotherapie helpt:\n— Spanningshoofdpijn: drukkende, bandgevoel rond het hoofd\n— Cervicogene hoofdpijn: eenzijdige pijn die begint in de nek\n— Hoofdpijn door kaakproblemen: via de kauwspieren\n— Hoofdpijn door verkeerde werkhouding\n\nBij MULA onderzoeken we je nek, schouders, kaak en houding.",
          },
          {
            q: "Wat is cervicogene hoofdpijn?",
            a: "Cervicogene hoofdpijn ontstaat door problemen in de bovenste nekwervels en omliggende structuren. De pijn begint meestal in de nek en straalt uit naar het hoofd, vaak aan één kant.\n\nKenmerken:\n— Begint in de nek of achterhoofd\n— Straalt uit naar voorhoofd, slaap of achter het oog\n— Vaak aan één kant\n— Verergert bij bepaalde nekbewegingen of houdingen\n— Reageert niet goed op gewone pijnstillers\n\nManuele therapie en gerichte oefentherapie zijn de eerste keuze.",
          },
          {
            q: "Fysiotherapie bij spanningshoofdpijn: werkt dat?",
            a: "Ja, fysiotherapie is effectief bij spanningshoofdpijn. Behandeling richt zich op ontspannen van gespannen spieren, verbeteren van houding en aanpakken van triggers zoals stress en werkhouding.\n\nWat fysiotherapie doet:\n— Massage, dry needling en/of triggerpoint-behandeling\n— Mobilisatie van stijve nekgewrichten\n— Houdings- en werkplekadvies\n— Ontspannings- en ademhalingsoefeningen\n— Oefeningen voor nek en schouders",
          },
          {
            q: "Nekpijn door beeldschermwerk: wat kan ik doen?",
            a: "Nekpijn door beeldschermwerk ontstaat door langdurig zitten in dezelfde houding. De oplossing: regelmatig bewegen, je werkplek aanpassen en gerichte oefeningen doen.\n\nWat je zelf kunt doen:\n— Werkplek: scherm op ooghoogte, toetsenbord dichtbij, voeten plat\n— Pauzes: elke 30 minuten even opstaan en bewegen\n— Oefeningen: chin tucks, schouderbladknijpen, nekstretches\n— Bewustzijn: let op je houding, zet een timer",
          },
          {
            q: "Wanneer moet ik met hoofdpijn naar de fysiotherapeut?",
            a: "Ga naar de fysiotherapeut als je hoofdpijn samenhangt met klachten in de nek of schouders, of als deze verergert door houding of beweging.\n\nFysiotherapie is zinvol bij:\n— Hoofdpijn die begint in of samenhangt met de nek\n— Hoofdpijn die erger wordt bij lang zitten of werken\n— Spanningsgevoel in nek en schouders samen met hoofdpijn\n— Regelmatig terugkerende hoofdpijn zonder duidelijke oorzaak\n— Hoofdpijn na een whiplash of nektrauma\n\nGa eerst naar de huisarts bij plotselinge hevige hoofdpijn, koorts of stijve nek, uitvalsverschijnselen, of hoofdpijn die je 's nachts wakker maakt.",
          },
        ],
      },
      {
        id: "dryneedling",
        name: "Dry needling",
        items: [
          {
            q: "Wat is dry needling en hoe werkt het?",
            a: "Dry needling is een behandeltechniek waarbij een dunne naald in een triggerpoint (pijnlijke spierknoop) wordt geprikt om spanning los te laten en pijn te verminderen. \"Dry\" betekent dat er geen vloeistof wordt ingespoten.\n\nHoe het werkt:\n1. De fysiotherapeut lokaliseert het triggerpoint door palpatie\n2. Een steriele, dunne naald wordt in het triggerpoint geplaatst\n3. De naald veroorzaakt een lokale spiertrekking (\"twitch response\")\n4. De spier ontspant, doorbloeding verbetert, pijn vermindert",
          },
          {
            q: "Is dry needling hetzelfde als acupunctuur?",
            a: "Nee, dry needling en acupunctuur zijn verschillende behandelingen met een andere achtergrond en doelstelling. Ze gebruiken wel vergelijkbare naalden. Dry needling is gebaseerd op anatomische kennis van spieren en zenuwbanen. Acupunctuur volgt een ander model, gebaseerd op traditionele Chinese geneeskunde. Bij MULA gebruiken we dry needling als onderdeel van een breder behandelplan.",
          },
          {
            q: "Doet dry needling pijn?",
            a: "Dry needling kan even prikken of een korte, intense sensatie geven wanneer de naald het triggerpoint raakt. De meeste mensen ervaren het als dragelijk en de verlichting erna maakt het de moeite waard.\n\nWat je kunt voelen:\n— Een korte prik bij het doorboren van de huid\n— Een trekkend, krampend gevoel als de naald het triggerpoint raakt\n— Een \"twitch\" — een korte, onwillekeurige spiertrekking\n\nNa de behandeling: mogelijk wat spierpijn, soms een licht blauw plekje, meestal verbetering binnen 24-48 uur.",
          },
          {
            q: "Bij welke klachten helpt dry needling?",
            a: "Dry needling helpt bij klachten met triggerpoints als (mede)oorzaak: nekpijn, schouderpijn, lage rugpijn, spanningshoofdpijn, tennisarm en sportblessures.\n\nKlachten waarbij dry needling vaak wordt ingezet:\n— Nek en schouder: spanning, stijfheid, uitstralende pijn\n— Lage rug: spierspanning, bewegingsbeperking\n— Hoofdpijn: spanningshoofdpijn, cervicogene hoofdpijn\n— Arm: tennisarm, golferselleboog\n— Been: hamstringklachten, kuitkrampen, piriformis syndroom\n\nWe combineren het altijd met oefentherapie, manuele therapie en houdingsadvies.",
          },
          {
            q: "Is dry needling veilig?",
            a: "Ja, dry needling is veilig als het wordt uitgevoerd door een getrainde fysiotherapeut. Onze therapeuten hebben een aanvullende opleiding in dry needling afgerond en werken volgens strikte hygiëneprotocollen: steriele wegwerpnaalden, desinfectie van de huid en kennis van anatomie om vitale structuren te vermijden.\n\nBijwerkingen zijn mild en tijdelijk: spierpijn, een klein blauw plekje of lichte vermoeidheid. Er zijn contra-indicaties; de therapeut zal dit altijd uitvragen en screenen bij de intake.",
          },
        ],
      },
    ],
  },
  tarieven: {
    title: "Tarieven",
    subtitle: "Transparante tarieven voor onze behandelingen",
    note: "Onderstaande tarieven zijn het bedrag dat je direct aan ons betaalt wanneer je niet verzekerd bent voor fysiotherapie of door je aanvullende verzekering heen bent. In 2026 hebben wij contracten met alle zorgverzekeraars en zal je een 100% vergoeding van het consult krijgen mits dit valt binnen je polisvoorwaarden van de aanvullende verzekering.",
    insuredTitle: "",
    insuredText: "",
    categories: [
      {
        title: "Tarieven",
        items: [
          { name: "Screening, intake en onderzoek + consult", price: "€ 108,–", info: [
            "Inclusief screening, intake en volledig lichamelijk onderzoek",
            "Inclusief consult en uitleg van bevindingen",
            "U ontvangt behandeling tijdens hetzelfde bezoek (indien passend)",
          ] },
          { name: "Screening, intake en onderzoek", price: "€ 59,–", info: [
            "Voor patiënten zonder verwijzing of die alleen een beoordeling willen",
            "Inclusief screening, intake en lichamelijk onderzoek",
            "Inclusief diagnose en uitgebreide uitleg van het aanbevolen behandelplan",
            "Geen behandeling tijdens dit bezoek",
          ] },
          { name: "Intake en onderzoek na verwijzing", price: "€ 59,–", info: [
            "Voor patiënten die al een verwijzing hebben",
            "Inclusief intake en lichamelijk onderzoek",
            "Inclusief diagnose en uitgebreide uitleg van het aanbevolen behandelplan",
            "Geen behandeling tijdens dit bezoek",
          ] },
          { name: "Vervolgafspraak fysiotherapie", price: "€ 49,–" },
          { name: "Vervolgafspraak manuele therapie", price: "€ 54,–" },
          { name: "Niet nagekomen afspraak", price: "€ 40,–" },
        ],
      },
    ],
    disclaimer: "",
  },
  blog: {
    title: "Blog",
    subtitle: "Kennis en inzichten over herstel en gezondheid",
    readMore: "Lees meer",
    comingSoon: "Binnenkort beschikbaar",
    comingSoonText: "We werken aan interessante artikelen over fysiotherapie, herstel en beweging. Kom binnenkort terug!",
  },
  footer: {
    tagline: "Terug naar je basis. Vooruit vanuit kracht.",
    quickLinks: "Snelle links",
    contact: "Contact",
    hours: "Openingstijden",
    legal: "Juridisch",
    privacy: "Privacybeleid",
    terms: "Algemene voorwaarden",
    cookies: "Cookiebeleid",
    complaints: "Klachtenregeling",
    allRights: "Alle rechten voorbehouden.",
    whatsappAria: "Stuur ons een WhatsApp bericht",
  },
  common: {
    bookAppointment: "Afspraak maken",
    callUs: "Bel ons",
    whatsapp: "WhatsApp",
    loading: "Laden...",
    error: "Er is iets misgegaan. Probeer het opnieuw.",
    yearsExperience: "jaar ervaring",
    readMore: "Lees meer",
  },
};

const en: Translations = {
  nav: {
    home: "Home",
    about: "About Us",
    services: "Services",
    booking: "Book Appointment",
    reviews: "Reviews",
    blog: "Blog",
    contact: "Contact",
    faq: "FAQ",
    tarieven: "Pricing",
    bookNow: "Book Now",
  },
  home: {
    heroTitle: "Back to your roots. Forward from strength.",
    heroSubtitle: "Physiotherapy and manual therapy in Amsterdam-Noord. Personal, evidence-based and no-nonsense.",
    heroCta: "Book Appointment",
    heroCtaSecondary: "Discover our services",
    philosophyTitle: "Our philosophy",
    philosophyText: "We believe that true recovery starts at the core. Not fighting the pain, but understanding where it comes from. Only when you go back to the basics together (Mula in Sanskrit) does your personal recovery plan emerge. We combine science, education and no-nonsense physiotherapy to make you the active owner of your recovery.",
    servicesTitle: "Our services",
    servicesSubtitle: "Specialized care, tailored to your recovery",
    teamTitle: "Meet our team",
    teamSubtitle: "Two passionate therapists with extensive experience",
    anatomyTitle: "Understanding the body",
    anatomySubtitle: "Explore the lymphatic system — an essential part of recovery and health. Rotate and zoom the 3D model.",
    ctaTitle: "Ready to get started?",
    ctaText: "Book an appointment today and take the first step towards your recovery.",
    ctaButton: "Make an appointment",
    whyTitle: "Why MULA Fysio?",
    why1Title: "Active approach",
    why1Text: "Not just treating, but actively guiding you so you take control of your own recovery.",
    why2Title: "Evidence-based",
    why2Text: "We combine clinical experience with current scientific insights for the best results.",
    why3Title: "Personal attention",
    why3Text: "No conveyor belt approach. You come first. We listen, explain and adapt our approach to you.",
    why4Title: "Specialized team",
    why4Text: "MSc Manual Therapy and experienced physiotherapist together in one practice for broad and deep expertise.",
    insured: "Covered by health insurance",
    insuredText: "Most treatments are (partially) covered by your supplemental or basic health insurance.",
    location: "Schaafstraat 20F, Amsterdam-Noord",
    hours: "Mon–Thu: 7:30–20:00 | Fri: 7:30–18:00",
    yearsLabel: "Years Experience",
    patientsLabel: "Patients",
    ratingLabel: "Google Rating",
  },
  about: {
    title: "About Us",
    subtitle: "Two therapists. One mission: your recovery.",
    guylianName: "Guylian Kick",
    guylianRole: "Fysiotherapist | Manueel therapeut",
    guylianYears: "9 years of experience",
    guylianBio: "My name is Guylian Kick, physiotherapist and manual therapist in training, with a clear mission: to get people moving again, not only pain-free but stronger and more confident than before.\n\nI graduated as a physiotherapist from Hanze University of Applied Sciences Groningen in 2017. Since then, I have continuously developed myself with various courses and training, including dry needling (extremities and spine), traumatology, various knee courses, and pediatric orthopedics for physiotherapists. In July 2026, I will complete my master's in Musculoskeletal Therapy at Saxion, specializing in manual therapy. In practice, I have gained broad experience in primary care and various additional roles as a physiotherapist. For example, I worked with the Dutch Deaf indoor soccer team, with highlights including participation in the European Championship and the Champions League. Additionally, I provide clinical lessons for the international physiotherapy program and have been affiliated with the trauma network in Amsterdam for the past four years.\n\nEducation is central to my approach. I believe you only make real progress when you understand where your complaints come from, how long recovery approximately takes, and what you can do yourself to recover from your injury. Not one complaint is the same. For one person, a sleep problem may be the underlying cause of chronic pain, while for someone else it may be a mechanical or psychological factor. By combining knowledge with targeted treatment and training, we work together towards a sustainable result. Together we search for that puzzle, and that precise customization makes this profession so interesting and effective.\n\nReady to move freely and strongly again? Let's get started together.",
    roosName: "Roos van der Deen",
    roosRole: "Physiotherapist",
    roosYears: "10 years of experience",
    roosBio: "My name is Roos van der Deen, and since 2016 I have been working as a physiotherapist with great passion and dedication. Through a personal and active approach, I help you understand the root cause of your complaint and guide you step by step towards regaining strength and returning to movement and sport.\n\nAs an enthusiastic athlete with a background in hockey, football, running, and strength training, I understand how important it is to move freely and get the most out of your body. I also know how frustrating it can be when that freedom is temporarily lost.\n\nI look beyond the symptoms to uncover the underlying factors: how you move, how you load your body, and how you recover. From there, we develop a tailored plan to help your body become stronger and capable of handling the activities you want to pursue again.\n\nAfter completing my studies in 2016, I further specialized by completing a one-year manual therapy course, a dry needling course, and various sports-related trainings. I have also studied treatments for headache complaints. In my professional experience, I have worked for two years as a physiotherapist with the GHHC Women's 1 hockey team and four years at the vv Zeeburgia soccer club, gaining extensive experience in (elite) sports and supporting athletes at different levels.\n\nMy approach is personal and active, focusing on realistic steps, your individual goals, and a plan tailored to your needs. Together, we work towards sustainable recovery, building greater strength and confidence in your body.",
    practiceTitle: "The practice",
    practiceText: "MULA Fysio is located in Amsterdam-Noord at Schaafstraat 20F. The name MULA refers to the Sanskrit word for 'root' or 'foundation'. This symbolizes our approach: going back to the core to recover sustainably from there.",
    philosophyTitle: "Our philosophy",
    philosophyText: "At MULA Fysio we look beyond just the complaint. We combine science, education and no-nonsense physiotherapy to make you the active owner of your recovery. Whether you are a top athlete, recreational athlete or simply want to age fit and vital, we help you with manual therapy, exercise therapy and above all a lot of personal attention.",
    yearsExp: "years of experience",
  },
  services: {
    title: "Our Services",
    subtitle: "Specialized physiotherapy for everyone",
    learnMore: "Learn more",
    insured: "Covered by supplemental insurance",
    fysiotherapie: {
      name: "Physiotherapy",
      short: "Recovery of pain and limitations in muscles and joints with a personal approach.",
      description: "Physiotherapy helps reduce pain and recover from complaints in muscles and joints. At MULA Fysio we don't just look at where the pain is, but especially at why it arose and what your body can and cannot handle at this moment.",
      when: "When physiotherapy?",
      whenItems: [
        "Muscle and joint complaints",
        "Neck, back and shoulder complaints",
        "Sports injuries or overuse",
        "Rehabilitation after surgery or injury",
        "Movement restrictions in work or daily life",
      ],
      approach: "Our approach",
      approachItems: [
        "Exercise therapy (strength, stability, mobility)",
        "Manual techniques",
        "Advice on load and recovery",
        "Guidance towards work or sport",
      ],
    },
    manuele: {
      name: "Manual Therapy",
      short: "Master specialization focused on improving joint mobility and reducing pain.",
      description: "Manual therapy is a master specialization within physiotherapy that focuses on improving the movement of joints, such as in your neck, back or shoulder. With specific techniques, such as mobilizations or manipulations ('cracking'), a manual therapist can improve the mobility of a joint and reduce pain.",
      conditions: [
        "Neck and headache complaints",
        "Back complaints",
        "Shoulder complaints",
        "Movement restrictions in all other joints",
      ],
    },
    sport: {
      name: "Sports Rehabilitation",
      short: "Safely and confidently returning to sport after an injury or surgery.",
      description: "At MULA Fysio the goal of sports rehabilitation is not just that your complaints diminish, but that you can safely and confidently return to your sport. After an injury or surgery, in addition to pain, reduced strength, stability, coordination or uncertainty in movement play a role.",
      conditions: [
        "Knee and ankle injuries",
        "Shoulder complaints",
        "Back and hip complaints",
        "Injuries after surgery",
      ],
    },
    herstel: {
      name: "Post-Surgery Recovery",
      short: "Structured rehabilitation after surgery, guided both physically and mentally.",
      description: "Surgery alone is often not enough. Real recovery only begins afterwards. During rehabilitation we work together to regain strength, stability and confidence in your body. At MULA Fysio we look beyond just the operated area. We map out what your body needs again to be able to do what is important to you.",
    },
    dry: {
      name: "Dry Needling",
      short: "Treatment of muscle tightness (trigger points) with a thin needle for pain relief.",
      description: "Dry needling is a treatment method in which we treat specific muscle tightness, also called trigger points, with a thin needle. With dry needling, the trigger point is briefly stimulated, causing the muscle to relax and circulation to improve.",
      conditions: [
        "Muscle-related neck and shoulder complaints",
        "Lower back complaints",
        "Sports injuries",
        "Headaches",
        "Persistent or recurring muscle pain",
      ],
    },
    hoofd: {
      name: "Headache Complaints",
      short: "Effective treatment of tension headaches, neck-related headaches and dizziness.",
      description: "Headache complaints such as tension headaches, neck-related headaches (cervicogenic) or dizziness can be very limiting. In many cases factors such as neck load, prolonged sitting, stress or reduced muscle control play a role in the onset or persistence of these complaints.",
      treatment: [
        "Targeted exercise therapy",
        "Mobilizing techniques",
        "Massage or dry needling",
        "Advice on load and posture",
        "Guidance in building up daily activities",
      ],
    },
    details: {
      fysiotherapie: [
        { type: "p", text: "Physiotherapy helps reduce pain and restore function in muscles and joints. At MULA Fysio, we don't only focus on where the pain is located, but more importantly on why it developed and what your body is currently able to do and not yet able to do." },
        { type: "p", text: "Whether you are experiencing back or neck pain, a sports injury, overload, or are recovering after surgery, we guide you in rebuilding strength, control, and load capacity for work, sport, and daily life." },
        { type: "h", text: "When physiotherapy?" },
        { type: "p", text: "Physiotherapy can help with:" },
        { type: "list", items: [
          "Muscle and joint complaints",
          "Neck, back, and shoulder pain",
          "Sports injuries or overuse",
          "Rehabilitation after surgery or injury",
          "Movement limitations in work or daily activities",
        ] },
        { type: "p", text: "Symptoms may appear suddenly or develop gradually. In both cases, we focus on the factors that influence recovery, not only on reducing symptoms." },
        { type: "h", text: "Our approach" },
        { type: "p", text: "Every treatment starts with an intake assessment and physical examination. Based on this, we create a personalised treatment plan focused on functional recovery and rebuilding load capacity." },
        { type: "p", text: "Treatment may include:" },
        { type: "list", items: [
          "Exercise therapy (strength, stability, mobility)",
          "Manual techniques",
          "Advice on load management and recovery",
          "Guidance towards return to work or sport",
        ] },
      ],
      manuele: [
        { type: "p", text: "Manual therapy is a (MSc) academic level specialization within physiotherapy that focuses on improving the movement of joints, such as those in the neck, back, or shoulder." },
        { type: "p", text: "Using specific techniques such as mobilisations or manipulations (\"cracking\"), a manual therapist can improve joint mobility and reduce pain. This often makes it easier to move and perform exercises more effectively. During a manipulation, a 'clicking' or 'popping' sound may be heard. This is not a bone moving or being \"put back into place,\" but rather the release of gas bubbles within the joint, and it is completely harmless." },
        { type: "p", text: "At MULA Fysio, we do not use these techniques as a quick standalone solution, but as part of a broader treatment approach. By improving joint mobility, we create space to actively work on strength, stability, and motor control." },
        { type: "p", text: "Manual therapy can help with:" },
        { type: "list", items: [
          "Neck pain and stiffness",
          "Lower back pain",
          "Headaches originating from the neck (cervicogenic headaches)",
          "Limited joint mobility",
          "Pain between the shoulder blades",
          "Complaints in the hip, knee, ankle, or shoulder",
        ] },
        { type: "p", text: "Treatment is often partially reimbursed through supplementary health insurance." },
      ],
      sport: [
        { type: "p", text: "At MULA Fysio, the goal of sports rehabilitation is not only to reduce your symptoms, but to help you return to your sport safely and with confidence. After an injury or surgery, factors such as reduced strength, stability, coordination, and uncertainty in movement often play an important role in the risk of reinjury." },
        { type: "p", text: "During rehabilitation, we assess:" },
        { type: "list", items: [
          "The load capacity of your body",
          "Your levels of strength, stability, and explosiveness",
          "The specific physical demands of your sport (movement analysis)",
        ] },
        { type: "p", text: "Based on this assessment, we work in a targeted way to restore strength, stability, and sport-specific load capacity. This allows you to progressively build up towards a safe return to sport." },
        { type: "p", text: "Sports rehabilitation can help with, among others:" },
        { type: "list", items: [
          "Knee and ankle injuries",
          "Shoulder complaints",
          "Back and hip complaints",
          "Post-operative rehabilitation",
        ] },
        { type: "p", text: "Treatment is provided under physiotherapy and is reimbursed through supplementary health insurance." },
      ],
      herstel: [
        { type: "p", text: "Surgery alone is often not the end of the process. Real recovery starts afterwards. During rehabilitation, we work together to restore strength, stability, and confidence in your body." },
        { type: "p", text: "At MULA Fysio, we look beyond the operated area. We assess what your body needs to return to the activities that matter to you. Whether that is climbing stairs, working, or returning to sport." },
        { type: "p", text: "Based on regular measurements and evaluations, we adjust your personalised recovery plan every 4–6 weeks. In this way, you gradually build up your capacity for daily life and/or sports." },
        { type: "p", text: "Recovering after surgery is often an intensive and long-term process, in which psychological factors such as uncertainty or fear of movement can also play a role. That is why we support you not only physically, but also in rebuilding trust in movement." },
        { type: "p", text: "We work closely with orthopaedic surgeons and, where necessary, collaborate with other professionals such as dietitians or sports psychologists to optimise your recovery. After surgery, you are often eligible for a long-term rehabilitation indication, meaning treatment from the 21st session onwards is covered by basic health insurance." },
        { type: "p", text: "At MULA Fysio, we have extensive experience in rehabilitation after knee and shoulder surgery. In addition, Guylian has experience within the trauma network in post-surgical recovery after traumatic injuries, and Roos has specific expertise in rehabilitation after total knee and total hip replacements." },
      ],
      dry: [
        { type: "p", text: "Dry needling is a treatment technique in which a thin needle is used to target specific muscle tightness, also known as trigger points. A trigger point is a highly sensitive spot within a muscle that can cause pain, stiffness, reduced strength, or referred pain. These areas often develop due to overuse, prolonged tension, or injury, and can interfere with normal muscle function." },
        { type: "p", text: "With dry needling, the trigger point is briefly stimulated, causing the muscle to relax and improving blood circulation. This can lead to a reduction in pain and an improvement in mobility. During the treatment, a short local muscle contraction may be felt. This is a normal response and often indicates that the trigger point has been effectively treated." },
        { type: "p", text: "At MULA Fysio, we use dry needling as part of a broader treatment approach. By reducing muscle tension, we create space to actively work on strength, motor control, and load capacity." },
        { type: "p", text: "Dry needling may help with, among other things:" },
        { type: "list", items: [
          "Muscle-related neck and shoulder complaints",
          "Lower back pain",
          "Sports injuries",
          "Headaches",
          "Persistent or recurrent muscle pain",
        ] },
        { type: "p", text: "Treatment is part of physiotherapy care and is often reimbursed through supplementary health insurance." },
      ],
      hoofd: [
        { type: "p", text: "Headache complaints such as tension-type headaches, cervicogenic (neck-related) headaches, or dizziness can be highly limiting in daily life, but in many cases they are well treatable. Factors such as neck strain, prolonged sitting, stress, or reduced muscle control often play a role in the development or persistence of these symptoms." },
        { type: "p", text: "During the initial assessment, we evaluate:" },
        { type: "list", items: [
          "How your neck and upper back move",
          "The load capacity of your muscles and joints",
          "Which factors are influencing your symptoms",
        ] },
        { type: "p", text: "Based on this assessment, we work in a targeted way to improve mobility, muscle control, and load capacity of the neck and upper back. This helps you gain better insight into your symptoms and learn how to actively influence them yourself." },
        { type: "p", text: "Treatment may include:" },
        { type: "list", items: [
          "Targeted exercise therapy",
          "Manual mobilization techniques",
          "Massage or dry needling",
          "Advice on workload and posture",
          "Guidance in gradually resuming daily activities",
        ] },
        { type: "p", text: "Treatment is provided under physiotherapy and is reimbursed through supplementary health insurance." },
      ],
    },
  },
  booking: {
    title: "Book an Appointment",
    subtitle: "Schedule your first appointment. We will contact you as soon as possible.",
    phone: "Call us",
    whatsapp: "Message us via WhatsApp",
    email: "Send an email",
    formTitle: "Send a message",
    name: "Name",
    namePlaceholder: "Your full name",
    emailLabel: "Email address",
    emailPlaceholder: "your@email.com",
    phone2: "Phone number",
    phonePlaceholder: "+31 6 12 34 56 78",
    service: "Desired treatment",
    servicePlaceholder: "Select a service",
    message: "Message",
    messagePlaceholder: "Tell us briefly about your complaint or question...",
    submit: "Send",
    submitting: "Sending...",
    successTitle: "Thank you!",
    successText: "We have received your message and will contact you as soon as possible.",
    infoTitle: "What to expect?",
    infoItems: [
      "Response within 1 business day",
      "Intake consultation of 30 minutes",
      "Personal treatment plan",
      "Regular evaluations every 4–6 weeks",
    ],
  },
  reviews: {
    title: "Reviews",
    subtitle: "What our patients say",
    noReviews: "Reviews will be added soon. We are asking our current patients to share their experiences.",
  },
  contact: {
    title: "Contact",
    subtitle: "We'd love to hear from you",
    address: "Address",
    phone: "Phone",
    email: "Email",
    hours: "Opening hours",
    mon: "Monday",
    tue: "Tuesday",
    wed: "Wednesday",
    thu: "Thursday",
    fri: "Friday",
    sat: "Saturday",
    sun: "Sunday",
    closed: "Closed",
    formTitle: "Send us a message",
    name: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "your@email.com",
    subject: "Subject",
    subjectPlaceholder: "How can we help you?",
    message: "Message",
    messagePlaceholder: "Your message...",
    submit: "Send",
    submitting: "Sending...",
    successTitle: "Message received!",
    successText: "Thank you for your message. We will contact you as soon as possible.",
    whatsappCta: "Or send us a WhatsApp message directly",
  },
  faq: {
    title: "Frequently Asked Questions",
    subtitle: "Choose a category to view the related questions.",
    backToCategories: "Back to categories",
    categories: [
      {
        id: "general",
        name: "General Information about MULA",
        items: [
          {
            q: "Where is MULA Fysio located in Amsterdam-Noord?",
            a: "MULA Fysio is based in Amsterdam-Noord. We chose this location deliberately because it is a vibrant neighborhood with an active community and a growing demand for quality care nearby. Our practice features modern treatment rooms and a dedicated exercise space.\n\nAccessibility:\n— By bike: bike parking directly in front of the door\n— By public transport: bus lines and a ferry (Zamenhofstraat) within walking distance\n— By car: parking spaces available in front of the practice\n\nThe exact address is Schaafstraat 20F.",
          },
          {
            q: "Is there parking available at the practice?",
            a: "Yes, you can park right in front of our door.",
          },
          {
            q: "What are the opening hours of MULA Fysio?",
            a: "We are open on weekdays from early morning until late evening, with evening appointments available. Monday to Thursday from 8:00 to 20:00, and Friday from 8:00 to 17:00.",
          },
          {
            q: "I couldn't find the answer to my question. What should I do?",
            a: "If you have a question that isn't answered on the website, please send an email to info@mulafysio.nl or fill out the contact form.",
          },
        ],
      },
      {
        id: "consult",
        name: "Physiotherapy Consultations",
        items: [
          {
            q: "What exactly does a physiotherapist do?",
            a: "A physiotherapist assesses, treats, and supports people with complaints related to the musculoskeletal system (muscles, joints, tendons, and nerves). The goal is to reduce pain, improve movement, and prevent recurrence.\n\nAt MULA Fysio in Amsterdam-Noord, we always start with a thorough intake. We don't just focus on where it hurts but also on how you move, work, and live. Often, the root cause of your complaint lies somewhere other than the pain location. For example, a stiff neck might be caused by sleep issues, stress, or even your breathing pattern.\n\nAfter the initial assessment, we create a treatment plan together. This may include manual techniques, exercise therapy, advice on posture and movement, or specific methods like dry needling. You'll also receive exercises and advice for home, because real recovery happens in-between sessions.",
          },
          {
            q: "When should I see a physiotherapist?",
            a: "See a physiotherapist if you have pain, stiffness, or movement limitations lasting more than a few days that don't improve on their own. It's also wise not to wait if complaints keep recurring.\n\nTypical signs to visit a physiotherapist:\n— Pain lasting more than a week\n— Morning stiffness that doesn't go away\n— Pain radiating to other body parts\n— Movements that used to be pain-free but now hurt\n— Complaints after injury or surgery\n— Headaches originating from the neck\n— Tingling or numbness\n\nAt MULA Fysio in Amsterdam-Noord, you can come without a referral. We will assess together whether physiotherapy is the right approach.",
          },
          {
            q: "Do I need a referral to see a physiotherapist?",
            a: "No, you can visit a physiotherapist without a GP referral. This is called direct access (DTF). A screening will determine if physiotherapy is appropriate.\n\nSince 2006, you can go directly to a physiotherapist in the Netherlands, saving time and an extra appointment. At your first visit, the physiotherapist will screen whether your complaint fits physiotherapy or if referral to a doctor is needed.",
          },
          {
            q: "Is physiotherapy covered by my health insurance?",
            a: "Physiotherapy for most complaints is generally not included in the basic insurance. Coverage depends on your supplementary insurance, diagnosis, and number of treatments already received.\n\nBasic insurance only covers physiotherapy for chronic conditions listed on the \"lijst Borst\" and only from the 21st treatment onward (e.g., COPD, rheumatism, Parkinson's, multiple sclerosis, or post-surgery recovery).\n\nFor other complaints like back pain, sports injuries, or neck pain, you need supplementary insurance for reimbursement. Our advice: check your policy before starting. MULA Fysio is contracted with most insurers.",
          },
          {
            q: "What should I bring to my first appointment?",
            a: "Bring a valid ID and a towel. If you have a referral or information, please bring that as well.",
          },
          {
            q: "Do you offer home visits?",
            a: "In some cases, yes. Please contact us by email to discuss the possibilities regarding home visits.",
          },
          {
            q: "How can I cancel or reschedule an appointment?",
            a: "If you cannot attend your appointment, please cancel or reschedule at least 24 hours in advance free of charge via email, WhatsApp, or phone. Cancellations within 24 hours will be charged for the reserved time.",
          },
          {
            q: "How many physiotherapy sessions will I need?",
            a: "Most people require between 3 and 12 sessions, depending on severity, duration, and how well your body responds.\n\nFactors influencing duration:\n— How long you've had the complaint\n— Whether you do your exercises and follow advice\n— Your overall health and fitness\n— Underlying factors like stress, sleep, or work posture\n\nAt MULA Fysio, we aim for as few sessions as possible — our goal is for you to continue independently.",
          },
          {
            q: "What is the difference between a physiotherapist and a GP for pain complaints?",
            a: "A GP diagnoses and refers, while a physiotherapist treats and guides recovery. For movement-related pain, physiotherapy is often the most direct route.\n\nPhysiotherapists specialize in movement. We examine how you move, identify pain sources, and treat with hands-on techniques, exercises, and lifestyle advice. If you have warning signs (unexplained weight loss, fever, or night pain waking you), start with your GP.",
          },
        ],
      },
      {
        id: "manuele",
        name: "Manual Therapy",
        items: [
          {
            q: "What is manual therapy and when is it helpful?",
            a: "Manual therapy is a (MSc) academic level specialization within physiotherapy where the therapist uses specific hands-on techniques to treat joints and vertebrae. It is effective for movement restrictions, pain, and stiffness, especially in the back, neck, and joints.\n\nManual therapy can help with:\n— Neck pain and stiffness\n— Lower back pain\n— Headaches originating from the neck (cervicogenic headaches)\n— Limited joint mobility\n— Pain between the shoulder blades\n— Complaints in the hip, knee, ankle, or shoulder",
          },
          {
            q: "What is the difference between manual therapy and physiotherapy?",
            a: "Manual therapy is a three-year (MSc) academic level specialization within physiotherapy. Every manual therapist is also a physiotherapist, but not every physiotherapist is a manual therapist. A general physiotherapist uses methods such as massage, exercise therapy, taping, and advice. A manual therapist can do all this but has also learned specific techniques to treat joints and the spine. At MULA Fysio in Amsterdam-Noord both physiotherapists and manual therapists are working.",
          },
          {
            q: "Is manual therapy painful?",
            a: "Manual therapy is usually not painful, but you may feel pressure or tension during the treatment. Sometimes you may experience muscle soreness afterward, similar to the feeling after an intense workout. This typically fades within 48 hours.\n\nWhat to expect:\n— During treatment: pressure, stretch, sometimes a brief sensation\n— Immediately after: often increased mobility and less pain\n— The next day: possible muscle soreness or fatigue\n\nThe \"crack\" you sometimes hear during manipulation is the release of gas bubbles in the joint, similar to knuckle cracking.",
          },
          {
            q: "Does manual therapy help with a herniated disc?",
            a: "Manual therapy can help with hernia-related complaints, but not for every hernia or at every stage. It depends on the severity of the hernia and your specific symptoms. In the acute phase (first weeks), pain management and advice are often more important than active treatment.",
          },
          {
            q: "Where can I find a manual therapist in Amsterdam-Noord?",
            a: "MULA Fysio in Amsterdam-Noord has an NVMT-registered manual therapist. You can make an appointment without a referral.\n\nWhen choosing a manual therapist, look for:\n— NVMT registration (Dutch Association for Manual Therapy)\n— BIG registration as a physiotherapist\n— Quality Register Paramedics",
          },
        ],
      },
      {
        id: "sport",
        name: "Sports Rehabilitation",
        items: [
          {
            q: "What is sports rehabilitation and who is it for?",
            a: "Sports rehabilitation supports athletes in recovering from injuries with the goal of safely returning to their sport at their previous level. It is intended for everyone who plays sports, from recreational to elite athletes.\n\nThe difference with regular physiotherapy lies in the focus:\n— Regular physiotherapy: pain-free functioning in daily life\n— Sports rehabilitation: returning to sport-specific load at your previous (or higher) level\n\nA sports rehabilitation program includes diagnosis, pain management, building strength and stability, sport-specific exercises, gradual return to training, and prevention advice.",
          },
          {
            q: "How soon can I return to sports after an injury?",
            a: "Recovery time varies from a few days to several months, depending on the injury. A mild strain heals in 1-2 weeks, while a severe ankle ligament rupture or ACL tear can take 6-12 months.\n\nFactors include:\n— Type and severity of the injury\n— Your overall condition and health\n— Whether you've had the same injury before\n— How well you follow the rehabilitation program\n— The sport you practice\n\nAt MULA Fysio, we follow a phased protocol. You only return to sport after passing physical tests, never earlier.",
          },
          {
            q: "Do you also perform sports tests and performance measurements?",
            a: "Yes, at MULA Fysio we use various sports tests and measurement methods to assess your level. We employ multiple tools and equipment to analyze strength, technique, and stability, both generally and specific to your sport. Based on the results, we create a targeted plan so you can work purposefully on improving performance and reducing injury risk.",
          },
        ],
      },
      {
        id: "herstel",
        name: "Post-Operative Recovery",
        items: [
          {
            q: "When does physiotherapy start after surgery?",
            a: "Physiotherapy often begins within 24 to 48 hours after surgery in the hospital. The timing depends on the type of surgery and your surgeon's instructions.\n\nImmediately after surgery, there is always an inflammatory phase that must be respected. However, this does not mean you should remain completely still. Early mobilization and careful movement within allowed limits speeds up recovery and reduces complications. At MULA Fysio in Amsterdam-Noord, we follow your surgeon's protocol and coordinate closely with your treating physician.",
          },
          {
            q: "What can I expect from physiotherapy after knee surgery?",
            a: "After knee surgery, a structured rehabilitation program typically lasts from several weeks to months, depending on the procedure. You will work on mobility, strength, and eventually returning to normal and sports activities.\n\nAt MULA Fysio, we use criteria-based protocols rather than time-based ones. This means you have clear milestones, we objectively measure your progress, and adjust the plan as needed.",
          },
          {
            q: "How long does rehabilitation take after shoulder surgery?",
            a: "Rehabilitation after shoulder surgery usually takes 3 to 6 months, but for major procedures like rotator cuff reconstruction, full recovery can take from 9 to 12 months. The shoulder is a complex joint and requires a precise protocol.",
          },
          {
            q: "Do I need physiotherapy after back surgery?",
            a: "Yes, physiotherapy is almost always recommended after back surgery. It helps restore strength, stability, and mobility, and reduces the risk of recurring complaints. After back surgery (such as hernia, stenosis, or fusion), the muscles around your spine are weakened and need rebuilding to support your back.",
          },
          {
            q: "Do you have experience with post-operative recovery?",
            a: "Yes, at MULA Fysio we have extensive experience with rehabilitation after musculoskeletal surgeries. This includes knee, hip, shoulder, ankle, and back surgeries, as well as other orthopedic procedures. We tailor the guidance to your situation, goals, and capacity.",
          },
          {
            q: "Do you collaborate with hospitals and clinics?",
            a: "Yes, we work closely with various healthcare partners, including Xpert Clinics. We also maintain good contact with orthopedic surgeons and trauma specialists from several hospitals and clinics in and around Amsterdam.",
          },
        ],
      },
      {
        id: "hoofdpijn",
        name: "Headache",
        items: [
          {
            q: "Can a physiotherapist help with headaches?",
            a: "Yes, physiotherapy can help with certain types of headaches, especially tension headaches and cervicogenic headaches (headaches originating from the neck).\n\nTypes of headaches where physiotherapy can help:\n— Tension headaches: a pressing, band-like sensation around the head\n— Cervicogenic headaches: one-sided pain starting in the neck\n— Headaches caused by jaw problems: through the chewing muscles\n— Headaches from poor work posture: screen work, forward head posture\n\nAt MULA Fysio, we assess your neck, shoulders, jaw, and posture.",
          },
          {
            q: "What is cervicogenic headache?",
            a: "Cervicogenic headache is caused by problems in the upper cervical vertebrae and surrounding structures. The pain usually starts in the neck and radiates to the head, often on one side.\n\nCharacteristics:\n— Starts in the neck or back of the head\n— Radiates to the forehead, temple, or behind the eye\n— Often one-sided\n— Worsens with certain neck movements or positions\n— Does not respond well to common painkillers\n\nManual therapy and targeted exercise therapy are the first choices.",
          },
          {
            q: "Does physiotherapy work for tension headaches?",
            a: "Yes, physiotherapy is effective for tension headaches. Treatment focuses on relaxing tight muscles, improving posture, and addressing triggers such as stress, workload, and ergonomics.\n\nWhat physiotherapy does:\n— Massage, dry needling, and/or trigger point treatment\n— Mobilization of stiff neck joints\n— Posture and workplace advice\n— Relaxation exercises and breathing techniques\n— Exercises for the neck and shoulders",
          },
          {
            q: "Neck pain from screen work: what can I do?",
            a: "Neck pain from screen work results from prolonged sitting in the same position. The solution: move regularly, adjust your workspace, and do targeted exercises.\n\nWhat you can do yourself:\n— Workspace: screen at eye level, keyboard close, feet flat on the floor\n— Breaks: stand up and move every 30 minutes\n— Exercises: chin tucks, scapular squeezes, neck stretches\n— Awareness: monitor your posture, set a timer",
          },
          {
            q: "When should I see a physiotherapist for headaches?",
            a: "See a physiotherapist if your headache is associated with neck or shoulder complaints or worsens with posture or movement.\n\nPhysiotherapy is beneficial for:\n— Headaches starting in or related to the neck\n— Headaches worsening with prolonged sitting or work\n— Tension in neck and shoulders combined with headache\n— Frequent recurring headaches without clear medical cause\n— Headaches after whiplash or neck trauma\n\nSee your GP first if you have sudden very severe headache, headache with fever or stiff neck, neurological symptoms, or headache that wakes you up at night.",
          },
        ],
      },
      {
        id: "dryneedling",
        name: "Dry Needling",
        items: [
          {
            q: "What is dry needling and how does it work?",
            a: "Dry needling is a treatment technique where a thin needle is inserted into a trigger point (a painful muscle knot) to release and reduce pain. \"Dry\" means no fluid is injected.\n\nHow it works:\n1. The physiotherapist locates the trigger point by palpation\n2. A sterile, thin needle is inserted into the trigger point\n3. The needle causes a local muscle twitch (\"twitch response\")\n4. The muscle relaxes, blood flow improves, and pain decreases",
          },
          {
            q: "Is dry needling the same as acupuncture?",
            a: "No, dry needling and acupuncture are different treatments with distinct backgrounds and goals. They do use similar needles. Dry needling is based on anatomical knowledge of muscles and nerves, with needles placed where the muscle is tight. Acupuncture follows a different model based on traditional Chinese medicine. At MULA Fysio, we use dry needling as part of a broader treatment plan.",
          },
          {
            q: "Does dry needling hurt?",
            a: "Dry needling can cause a brief sting or a short, intense sensation when the needle hits the trigger point. Most people find it tolerable, and the relief afterward makes it worthwhile.\n\nWhat you might feel:\n— A quick sting when the skin is pierced\n— A cramping sensation when the needle hits the trigger point\n— A \"twitch\" — a brief, involuntary muscle contraction\n\nAfter treatment: possible muscle soreness, sometimes a small bruise, usually improvement within 24-48 hours.",
          },
          {
            q: "What conditions does dry needling help with?",
            a: "Dry needling is effective for complaints where trigger points play a role, such as neck pain, shoulder pain, lower back pain, tension headaches, tennis elbow, and sports injuries.\n\nCommon conditions treated with dry needling:\n— Neck and shoulder: tension, stiffness, radiating pain\n— Lower back: muscle tightness, movement restrictions\n— Headaches: tension headaches, cervicogenic headaches\n— Arm: tennis elbow, golfer's elbow\n— Leg: hamstring issues, calf cramps, piriformis syndrome\n\nWe combine it with other treatments like exercise therapy, manual therapy, and posture advice.",
          },
          {
            q: "Is dry needling safe?",
            a: "Yes, dry needling is safe when performed by a trained physiotherapist. Our therapists have completed additional training in dry needling and follow strict hygiene protocols: sterile disposable needles, skin disinfection, and anatomical knowledge to avoid vital structures.\n\nSide effects are mild and temporary: muscle soreness, a small bruise, or slight fatigue. There are contraindications; the therapist will always ask and screen during intake.",
          },
        ],
      },
    ],
  },
  tarieven: {
    title: "Pricing",
    subtitle: "Transparent pricing for our treatments",
    note: "The rates below are the amounts you pay directly to us in case you are not insured for physiotherapy or have exhausted your supplementary insurance. In 2026, we have contracts with all health insurers, and you will receive 100% reimbursement of the consultation if it falls within your supplementary insurance policy conditions.",
    insuredTitle: "",
    insuredText: "",
    categories: [
      {
        title: "Rates",
        items: [
          { name: "Screening, intake, and examination + consultation", price: "€ 108,–", info: [
            "Includes screening, intake, and a full physical examination",
            "Includes consultation and explanation of findings",
            "You receive treatment during the same visit (if appropriate)",
          ] },
          { name: "Screening, intake, and examination", price: "€ 59,–", info: [
            "For patients coming without a referral or who just want an assessment",
            "Includes screening, intake, and physical examination",
            "Includes diagnosis and a detailed explanation of the recommended treatment plan",
            "Does not include treatment during that visit",
          ] },
          { name: "Intake and examination after referral", price: "€ 59,–", info: [
            "For patients who already have a referral",
            "Includes intake and physical examination",
            "Includes diagnosis and a detailed explanation of the recommended treatment plan",
            "Does not include treatment during that visit",
          ] },
          { name: "Follow-up physiotherapy appointment", price: "€ 49,–" },
          { name: "Follow-up manual therapy", price: "€ 54,–" },
          { name: "Missed appointment", price: "€ 40,–" },
        ],
      },
    ],
    disclaimer: "",
  },
  blog: {
    title: "Blog",
    subtitle: "Knowledge and insights about recovery and health",
    readMore: "Read more",
    comingSoon: "Coming soon",
    comingSoonText: "We are working on interesting articles about physiotherapy, recovery and movement. Check back soon!",
  },
  footer: {
    tagline: "Back to your roots. Forward from strength.",
    quickLinks: "Quick links",
    contact: "Contact",
    hours: "Opening hours",
    legal: "Legal",
    privacy: "Privacy policy",
    terms: "Terms & conditions",
    cookies: "Cookie policy",
    complaints: "Complaints procedure",
    allRights: "All rights reserved.",
    whatsappAria: "Send us a WhatsApp message",
  },
  common: {
    bookAppointment: "Book appointment",
    callUs: "Call us",
    whatsapp: "WhatsApp",
    loading: "Loading...",
    error: "Something went wrong. Please try again.",
    yearsExperience: "years of experience",
    readMore: "Read more",
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("nl");

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: language === "nl" ? nl : en }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
