import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, ChevronLeft } from "lucide-react";
import { galleryImages } from "../data/gallery.js";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(
    () =>
      setActiveIndex((i) => (i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length)),
    []
  );
  const showNext = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % galleryImages.length)),
    []
  );

  useEffect(() => {
    if (activeIndex === null) return;
    function onKey(e) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") showPrev();
      if (e.key === "ArrowLeft") showNext();
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex, close, showPrev, showNext]);

  return (
    <section id="gallery" className="relative bg-charcoal-900 py-28">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold tracking-[0.35em] text-gold-400">
            גלריה
          </p>
          <h2 className="mt-3 text-4xl font-extrabold sm:text-5xl">
            רגעים <span className="text-gold-gradient">מהחוויה</span>
          </h2>
          <div className="gold-divider mt-6" />
        </motion.div>

        <div className="mt-16 columns-1 gap-4 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          {galleryImages.map((img, index) => (
            <motion.button
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (index % 6) * 0.05 }}
              onClick={() => setActiveIndex(index)}
              className="group relative mb-4 block w-full overflow-hidden rounded-xl border border-white/10"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="p-4 text-sm font-semibold text-gold-200">
                  {img.caption}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal-950/95 p-4 backdrop-blur-md"
            onClick={close}
          >
            <button
              onClick={close}
              className="absolute top-6 left-6 text-neutral-300 transition-colors hover:text-gold-400"
              aria-label="סגירה"
            >
              <X size={32} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/5 p-2 text-neutral-200 transition-colors hover:bg-gold-500/20 hover:text-gold-300 sm:right-8"
              aria-label="הקודם"
            >
              <ChevronRight size={32} />
            </button>

            <motion.figure
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-4xl"
            >
              <img
                src={galleryImages[activeIndex].src}
                alt={galleryImages[activeIndex].alt}
                className="max-h-[80vh] w-full rounded-xl object-contain shadow-gold-lg"
              />
              <figcaption className="mt-4 text-center text-gold-200">
                {galleryImages[activeIndex].caption}
              </figcaption>
            </motion.figure>

            <button
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/5 p-2 text-neutral-200 transition-colors hover:bg-gold-500/20 hover:text-gold-300 sm:left-8"
              aria-label="הבא"
            >
              <ChevronLeft size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
