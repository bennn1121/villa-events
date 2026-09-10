import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Hero3D from "./Hero3D.jsx";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex h-screen min-h-[720px] w-full items-center overflow-hidden bg-charcoal-950"
    >
      <Hero3D />

      {/* Vignette for text legibility */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-charcoal-950/70" />
      <div className="pointer-events-none absolute inset-0 bg-noise-fade" />

      <div className="section-container relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 text-sm font-semibold tracking-[0.4em] text-gold-400"
        >
          ULTRA-LUXURY VILLA EXPERIENCE
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="mx-auto max-w-4xl text-5xl font-extrabold leading-[1.15] sm:text-6xl lg:text-7xl"
        >
          אירוח יוקרתי ברמה
          <span className="block text-gold-gradient">שאין לה תחליף</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-neutral-300 sm:text-xl"
        >
          וילות פרימיום עם בריכות אינפיניטי, סוויטות מעוצבות ושירות אישי
          מסביב לשעון — לאירועים, נופש משפחתי ואירוח עסקי.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#villas"
            className="rounded-full bg-gold-gradient px-9 py-4 text-sm font-bold tracking-wide text-charcoal-950 shadow-gold-lg transition-transform hover:scale-105"
          >
            גלו את המתחמים
          </a>
          <a
            href="#contact"
            className="glass rounded-full px-9 py-4 text-sm font-bold tracking-wide text-neutral-100 transition-colors hover:border-gold-400/50"
          >
            תיאום ביקור פרטי
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-gold-400"
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
}
