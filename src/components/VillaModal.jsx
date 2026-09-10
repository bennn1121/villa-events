import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  MapPin,
  Users,
  BedDouble,
  Waves,
  ChefHat,
  Volume2,
  Film,
  Car,
  Sparkles,
  Wine,
  Shield,
  Dumbbell,
  PartyPopper,
  MessageCircle,
} from "lucide-react";
import { WHATSAPP_NUMBER } from "../data/whatsapp.js";

const ICONS = {
  Users,
  BedDouble,
  Waves,
  ChefHat,
  Volume2,
  Film,
  Car,
  Sparkles,
  Wine,
  Shield,
  Dumbbell,
  PartyPopper,
  MapPin,
};

export default function VillaModal({ villa, onClose }) {
  useEffect(() => {
    if (!villa) return;
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [villa, onClose]);

  if (!villa) return null;

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `שלום, אשמח לבדוק זמינות עבור ${villa.name} (${villa.location}).`
  )}`;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-charcoal-950/90 p-4 py-10 backdrop-blur-md sm:p-6"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.97 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="glass relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-charcoal-900 shadow-gold-lg"
        >
          <button
            onClick={onClose}
            aria-label="סגירה"
            className="absolute left-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-charcoal-950/70 text-neutral-200 backdrop-blur-sm transition-colors hover:bg-gold-500/20 hover:text-gold-300"
          >
            <X size={22} />
          </button>

          <div className="relative h-64 w-full overflow-hidden sm:h-80">
            <img
              src={villa.image}
              alt={villa.name}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/20 to-transparent" />
            <div className="absolute bottom-5 right-6 text-right">
              <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
                {villa.name}
              </h2>
              <p className="mt-1 flex items-center justify-end gap-1.5 text-sm text-neutral-200">
                {villa.location}
                <MapPin size={14} className="text-gold-400" />
              </p>
            </div>
            <div className="absolute top-4 right-4 rounded-full bg-charcoal-950/70 px-4 py-1.5 text-xs font-semibold text-gold-400 backdrop-blur-sm">
              {villa.price}
            </div>
          </div>

          <div className="max-h-[70vh] overflow-y-auto px-6 pb-8 pt-6 sm:px-10">
            <p className="leading-relaxed text-neutral-300">
              {villa.description}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {villa.gallery.map((img) => (
                <div
                  key={img.src}
                  className="group relative aspect-square overflow-hidden rounded-xl border border-white/10"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent">
                    <span className="p-2 text-[11px] font-semibold text-gold-100 sm:text-xs">
                      {img.caption}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-semibold tracking-[0.25em] text-gold-400">
                מפרט ואבזור
              </h3>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {villa.amenities.map((item) => {
                  const Icon = ICONS[item.icon] ?? Sparkles;
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-neutral-200"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-500/10 text-gold-400">
                        <Icon size={16} />
                      </span>
                      {item.label}
                    </div>
                  );
                })}
              </div>
            </div>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-4 text-sm font-bold text-charcoal-950 shadow-[0_10px_30px_-8px_rgba(37,211,102,0.6)] transition-transform hover:scale-[1.02]"
            >
              <MessageCircle size={18} />
              בדיקת זמינות בוואטסאפ לווילה זו
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
