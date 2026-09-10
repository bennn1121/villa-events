export const villas = [
  {
    id: "aurea",
    name: "וילת אאוראה",
    location: "הרצליה פיתוח",
    guests: 16,
    bedrooms: 7,
    price: "מ-4,200 ₪ / לילה",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80",
    tags: ["בריכת אינפיניטי", "נוף לים", "קולנוע פרטי"],
    description:
      "וילת אאוראה ניצבת על רכס פתוח מול קו האופק הימי, ומשלבת אדריכלות מודרנית נקייה עם חומרי גלם חמים. מתחם מפואר המתאים לאירוח משפחתי, נופש זוגי או כנס עסקי אינטימי, עם צוות קונסיירז' זמין לאורך כל השהות.",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
        alt: "סלון מרכזי בוילת אאוראה",
        caption: "סלון מרכזי",
      },
      {
        src: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1600&q=80",
        alt: "בריכת אינפיניטי בוילת אאוראה",
        caption: "בריכת אינפיניטי",
      },
      {
        src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
        alt: "חדר מאסטר בוילת אאוראה",
        caption: "חדר מאסטר",
      },
      {
        src: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1600&q=80",
        alt: "מתחם אירועים חיצוני בוילת אאוראה",
        caption: "מתחם אירועים חיצוני",
      },
    ],
    amenities: [
      { icon: "Users", label: "עד 16 אורחים" },
      { icon: "BedDouble", label: "7 חדרי שינה, 6 חדרי רחצה" },
      { icon: "Waves", label: "בריכת אינפיניטי מחוממת" },
      { icon: "ChefHat", label: "מטבח שף מאובזר במלואו" },
      { icon: "Volume2", label: "מערכת הגברה היקפית בכל המתחם" },
      { icon: "Film", label: "חדר קולנוע פרטי" },
      { icon: "Car", label: "חניה פרטית ל-8 רכבים" },
    ],
  },
  {
    id: "lumière",
    name: "וילת לומייר",
    location: "רמת השרון",
    guests: 20,
    bedrooms: 8,
    price: "מ-5,600 ₪ / לילה",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=80",
    tags: ["ספא פרטי", "יין ומרתף", "גינה טרופית"],
    description:
      "וילת לומייר היא אחוזת יוקרה השוכנת בלב גינה טרופית פורחת, ומציעה חוויית ספא ויין ברמה מלונאית לצד מרחבי אירוח מוארים ומעוצבים בקפידה. אידיאלית לאירועים משפחתיים גדולים ולחגיגות פרטיות.",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
        alt: "סלון בוילת לומייר",
        caption: "סלון אירוח",
      },
      {
        src: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1600&q=80",
        alt: "בריכה מוארת בוילת לומייר",
        caption: "בריכה מוארת",
      },
      {
        src: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1600&q=80",
        alt: "חדר מאסטר בוילת לומייר",
        caption: "חדר מאסטר",
      },
      {
        src: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?auto=format&fit=crop&w=1600&q=80",
        alt: "גינה טרופית בוילת לומייר",
        caption: "גינה טרופית ומתחם אירועים",
      },
    ],
    amenities: [
      { icon: "Users", label: "עד 20 אורחים" },
      { icon: "BedDouble", label: "8 חדרי שינה, 7 חדרי רחצה" },
      { icon: "Waves", label: "בריכת אינפיניטי מחוממת" },
      { icon: "Sparkles", label: "ספא פרטי וג'קוזי חיצוני" },
      { icon: "Wine", label: "מרתף יין וחדר טעימות" },
      { icon: "ChefHat", label: "מטבח שף עם אי מרכזי" },
      { icon: "Volume2", label: "מערכת הגברה היקפית" },
    ],
  },
  {
    id: "meridian",
    name: "וילת מרידיאן",
    location: "עמק חפר",
    guests: 14,
    bedrooms: 6,
    price: "מ-3,800 ₪ / לילה",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=80",
    tags: ["נוף פסטורלי", "סוויטת יוקרה", "אבטחה פרטית"],
    description:
      "וילת מרידיאן פרושה על שטח פתוח בעמק חפר ומציעה מרחב שקט ומרגיע עם נוף פסטורלי עוצר נשימה. עיצוב פנים חם ואלגנטי לצד אבטחה פרטית מסביב לשעון, לחוויית נופש שלווה ובלתי מתפשרת.",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=80",
        alt: "סלון בוילת מרידיאן",
        caption: "סלון מעוצב",
      },
      {
        src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1600&q=80",
        alt: "בריכה בוילת מרידיאן",
        caption: "בריכה עם נוף פסטורלי",
      },
      {
        src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=80",
        alt: "סוויטת מאסטר בוילת מרידיאן",
        caption: "סוויטת מאסטר",
      },
      {
        src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
        alt: "פינת ישיבה חיצונית בוילת מרידיאן",
        caption: "מתחם ישיבה חיצוני",
      },
    ],
    amenities: [
      { icon: "Users", label: "עד 14 אורחים" },
      { icon: "BedDouble", label: "6 חדרי שינה, 5 חדרי רחצה" },
      { icon: "Waves", label: "בריכה מחוממת" },
      { icon: "Shield", label: "אבטחה פרטית 24/7" },
      { icon: "ChefHat", label: "מטבח שף מאובזר" },
      { icon: "Volume2", label: "מערכת הגברה חיצונית ופנימית" },
      { icon: "Car", label: "חניה פרטית ל-6 רכבים" },
    ],
  },
  {
    id: "noira",
    name: "וילת נוארה",
    location: "קיסריה",
    guests: 18,
    bedrooms: 7,
    price: "מ-4,900 ₪ / לילה",
    image:
      "https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?auto=format&fit=crop&w=1600&q=80",
    tags: ["גישה לחוף פרטי", "בית קיץ", "שף פרטי"],
    description:
      "וילת נוארה בקיסריה מציעה גישה ישירה לחוף פרטי ושילוב מושלם בין אווירת בית קיץ ים תיכונית לפינוק ברמה גבוהה, כולל שירותי שף פרטי לאורך כל השהות. מושלמת לחגיגות משפחתיות מול הים.",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=80",
        alt: "סלון בוילת נוארה",
        caption: "סלון פתוח לים",
      },
      {
        src: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1600&q=80",
        alt: "בריכה בוילת נוארה",
        caption: "בריכה מול הים",
      },
      {
        src: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1600&q=80",
        alt: "חדר מאסטר בוילת נוארה",
        caption: "חדר מאסטר",
      },
      {
        src: "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1600&q=80",
        alt: "מרפסת אירוח חיצונית בוילת נוארה",
        caption: "מרפסת אירוח מול החוף",
      },
    ],
    amenities: [
      { icon: "Users", label: "עד 18 אורחים" },
      { icon: "BedDouble", label: "7 חדרי שינה, 6 חדרי רחצה" },
      { icon: "Waves", label: "בריכת אינפיניטי מחוממת" },
      { icon: "MapPin", label: "גישה ישירה לחוף פרטי" },
      { icon: "ChefHat", label: "שירותי שף פרטי" },
      { icon: "Volume2", label: "מערכת הגברה היקפית" },
      { icon: "Car", label: "חניה פרטית ל-10 רכבים" },
    ],
  },
  {
    id: "seren",
    name: "וילת סרן",
    location: "אודים",
    guests: 12,
    bedrooms: 5,
    price: "מ-3,200 ₪ / לילה",
    image:
      "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?auto=format&fit=crop&w=1600&q=80",
    tags: ["אדריכלות מודרנית", "חדר כושר", "חצר שקיעה"],
    description:
      "וילת סרן היא יצירת אדריכלות מודרנית עם קווים נקיים ומרחבים פתוחים המשתלבים בטבע הסובב. חצר השקיעה הייחודית וחדר הכושר הפרטי הופכים אותה לבחירה מושלמת לנופש רענן ומאוזן.",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
        alt: "סלון מודרני בוילת סרן",
        caption: "סלון מינימליסטי",
      },
      {
        src: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?auto=format&fit=crop&w=1600&q=80",
        alt: "בריכה בוילת סרן",
        caption: "בריכה וחצר שקיעה",
      },
      {
        src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=80",
        alt: "חדר מאסטר בוילת סרן",
        caption: "חדר מאסטר",
      },
      {
        src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80",
        alt: "מתחם חיצוני בוילת סרן",
        caption: "מתחם ישיבה בחצר השקיעה",
      },
    ],
    amenities: [
      { icon: "Users", label: "עד 12 אורחים" },
      { icon: "BedDouble", label: "5 חדרי שינה, 4 חדרי רחצה" },
      { icon: "Waves", label: "בריכה מחוממת" },
      { icon: "Dumbbell", label: "חדר כושר פרטי" },
      { icon: "ChefHat", label: "מטבח שף פתוח" },
      { icon: "Volume2", label: "מערכת הגברה בחצר ובסלון" },
      { icon: "Car", label: "חניה פרטית ל-5 רכבים" },
    ],
  },
  {
    id: "elysia",
    name: "וילת אליסיה",
    location: "סביון",
    guests: 22,
    bedrooms: 9,
    price: "מ-6,400 ₪ / לילה",
    image:
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=1600&q=80",
    tags: ["אולם אירועים", "בריכה מחוממת", "חניה ל-20 רכבים"],
    description:
      "וילת אליסיה בסביון היא אחוזת הדגל שלנו: מתחם ענק עם אולם אירועים מפואר, בריכה מחוממת ומרחבי חוץ נרחבים המתאימים לחתונות, אירועי חברה וחגיגות משפחתיות גדולות ברמה הגבוהה ביותר.",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1600&q=80",
        alt: "אולם אירועים בוילת אליסיה",
        caption: "אולם אירועים ראשי",
      },
      {
        src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=80",
        alt: "בריכה בוילת אליסיה",
        caption: "בריכה מחוממת",
      },
      {
        src: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1600&q=80",
        alt: "חדר מאסטר בוילת אליסיה",
        caption: "סוויטת מאסטר",
      },
      {
        src: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1600&q=80",
        alt: "מתחם אירועים חיצוני בוילת אליסיה",
        caption: "מתחם אירועים חיצוני",
      },
    ],
    amenities: [
      { icon: "Users", label: "עד 22 אורחים" },
      { icon: "BedDouble", label: "9 חדרי שינה, 8 חדרי רחצה" },
      { icon: "Waves", label: "בריכת אינפיניטי מחוממת" },
      { icon: "PartyPopper", label: "אולם אירועים ל-150 איש" },
      { icon: "ChefHat", label: "מטבח שף תעשייתי" },
      { icon: "Volume2", label: "מערכת הגברה מקצועית לאירועים" },
      { icon: "Car", label: "חניה פרטית ל-20 רכבים" },
    ],
  },
];
