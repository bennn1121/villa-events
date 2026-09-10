import { motion } from "framer-motion";
import {
  Waves,
  ChefHat,
  ShieldCheck,
  Sparkles,
  Car,
  Wifi,
  Flower2,
  Music,
} from "lucide-react";

const services = [
  {
    icon: Waves,
    title: "בריכת אינפיניטי מחוממת",
    desc: "בריכות פרטיות עם מערכת חימום, תאורה אווירתית ופינות ישיבה מוצלות.",
  },
  {
    icon: ChefHat,
    title: "שף פרטי וקייטרינג",
    desc: "תפריטים מותאמים אישית מהמטבחים המובילים בארץ, ישירות אל הווילה.",
  },
  {
    icon: ShieldCheck,
    title: "אבטחה ופרטיות מלאה",
    desc: "מתחמים סגורים עם בקרת כניסה, מצלמות ושירות אבטחה 24/7.",
  },
  {
    icon: Sparkles,
    title: "קונסיירז' אישי",
    desc: "צוות אירוח זמין מסביב לשעון לכל בקשה - מספא ועד הפקת אירועים.",
  },
  {
    icon: Car,
    title: "שירותי הסעה ו-VIP",
    desc: "איסוף משדה התעופה, רכבי יוקרה וחניה פרטית למספר רב של כלי רכב.",
  },
  {
    icon: Wifi,
    title: "בית חכם וטכנולוגיה",
    desc: "מערכות בקרה חכמות, קולנוע ביתי וסאונד היקפי בכל חלל.",
  },
  {
    icon: Flower2,
    title: "ספא וטיפוחי גוף",
    desc: "חדרי טיפולים פרטיים, מעצבי שיער ואנשי מקצוע המגיעים עד אליכם.",
  },
  {
    icon: Music,
    title: "הפקת אירועים",
    desc: "תכנון והפקה מלאה לחתונות, ימי הולדת ואירועי חברה יוקרתיים.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-charcoal-950 py-28">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold tracking-[0.35em] text-gold-400">
            שירותים ומאפיינים
          </p>
          <h2 className="mt-3 text-4xl font-extrabold sm:text-5xl">
            כל מה שצריך <span className="text-gold-gradient">לחוויה מושלמת</span>
          </h2>
          <div className="gold-divider mt-6" />
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: (index % 4) * 0.1 }}
                className="glass group rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-2 hover:border-gold-400/40"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gold-500/10 text-gold-400 transition-colors group-hover:bg-gold-gradient group-hover:text-charcoal-950">
                  <Icon size={26} />
                </div>
                <h3 className="text-lg font-bold text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
