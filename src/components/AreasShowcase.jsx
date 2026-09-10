import { useState } from "react";
import { motion } from "framer-motion";
import { villas } from "../data/villas.js";
import VillaCard from "./VillaCard.jsx";
import VillaModal from "./VillaModal.jsx";

export default function AreasShowcase() {
  const [selectedVilla, setSelectedVilla] = useState(null);

  return (
    <section id="villas" className="relative bg-charcoal-950 py-28">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold tracking-[0.35em] text-gold-400">
            המתחמים שלנו
          </p>
          <h2 className="mt-3 text-4xl font-extrabold sm:text-5xl">
            וילות נבחרות ב<span className="text-gold-gradient">מיקומים יוקרתיים</span>
          </h2>
          <div className="gold-divider mt-6" />
          <p className="mt-6 text-neutral-400">
            כל וילה מתוכננת בקפידה, מרוהטת בעיצוב אקסקלוסיבי ומלווה בצוות
            אירוח פרטי לכל אורך השהות.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {villas.map((villa, index) => (
            <VillaCard
              key={villa.id}
              villa={villa}
              index={index}
              onOpen={setSelectedVilla}
            />
          ))}
        </div>
      </div>

      <VillaModal villa={selectedVilla} onClose={() => setSelectedVilla(null)} />
    </section>
  );
}
