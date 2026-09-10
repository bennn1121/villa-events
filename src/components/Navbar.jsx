import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#villas", label: "המתחמים" },
  { href: "#gallery", label: "גלריה" },
  { href: "#services", label: "שירותים" },
  { href: "#contact", label: "יצירת קשר" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-3 shadow-gold-lg" : "bg-transparent py-6"
      }`}
    >
      <div className="section-container flex items-center justify-between">
        <a href="#top" className="font-display text-2xl font-bold tracking-wide">
          <span className="text-gold-gradient">אזורה</span>
          <span className="mr-1 text-xs font-normal text-neutral-400">
            VILLAS
          </span>
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral-200 transition-colors hover:text-gold-400"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-gold-gradient px-6 py-2.5 text-sm font-semibold text-charcoal-950 shadow-gold transition-transform hover:scale-105"
          >
            הזמינו עכשיו
          </a>
        </nav>

        <button
          className="text-neutral-100 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="תפריט"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="glass mt-3 overflow-hidden md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-white/5 py-3 text-neutral-200 hover:text-gold-400"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-3 rounded-full bg-gold-gradient px-6 py-3 text-center text-sm font-semibold text-charcoal-950"
              >
                הזמינו עכשיו
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
