import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { BedDouble, Users, MapPin } from "lucide-react";

export default function VillaCard({ villa, index, onOpen }) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 18, mass: 0.6 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), springConfig);
  const glareX = useTransform(x, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(y, [-0.5, 0.5], ["0%", "100%"]);

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      className="group [perspective:1200px]"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => onOpen?.(villa)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter") onOpen?.(villa);
        }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-charcoal-850 shadow-gold-lg"
      >
        <div className="relative h-72 w-full overflow-hidden">
          <img
            src={villa.image}
            alt={villa.name}
            loading="lazy"
            className="h-full w-full scale-105 object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/10 to-transparent" />

          {/* Glare */}
          <motion.div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.25), transparent 55%)`,
            }}
          />

          <div className="absolute top-4 right-4 rounded-full bg-charcoal-950/70 px-4 py-1.5 text-xs font-semibold text-gold-400 backdrop-blur-sm">
            {villa.price}
          </div>
        </div>

        <div
          style={{ transform: "translateZ(40px)" }}
          className="relative z-10 -mt-14 px-6 pb-6"
        >
          <h3 className="font-display text-2xl font-bold text-white">
            {villa.name}
          </h3>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-neutral-300">
            <MapPin size={14} className="text-gold-400" />
            {villa.location}
          </p>

          <div className="mt-4 flex items-center gap-5 text-sm text-neutral-300">
            <span className="flex items-center gap-1.5">
              <Users size={16} className="text-gold-400" /> {villa.guests} אורחים
            </span>
            <span className="flex items-center gap-1.5">
              <BedDouble size={16} className="text-gold-400" /> {villa.bedrooms}{" "}
              חדרי שינה
            </span>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {villa.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-gold-500/30 bg-gold-500/10 px-3 py-1 text-xs text-gold-200"
              >
                {tag}
              </span>
            ))}
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpen?.(villa);
            }}
            className="mt-6 inline-block w-full rounded-full border border-gold-400/40 py-3 text-center text-sm font-semibold text-gold-300 transition-colors hover:bg-gold-gradient hover:text-charcoal-950"
          >
            צפייה בפרופיל הווילה
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
