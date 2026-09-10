const links = [
  { href: "#villas", label: "המתחמים" },
  { href: "#gallery", label: "גלריה" },
  { href: "#services", label: "שירותים" },
  { href: "#contact", label: "יצירת קשר" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-charcoal-950 py-12">
      <div className="section-container flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-right">
        <div>
          <a href="#top" className="font-display text-2xl font-bold">
            <span className="text-gold-gradient">אזורה</span>
            <span className="mr-1 text-xs font-normal text-neutral-500">
              VILLAS
            </span>
          </a>
          <p className="mt-2 text-sm text-neutral-500">
            אירוח יוקרתי בסטנדרט בינלאומי, בלב ישראל.
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-400 transition-colors hover:text-gold-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-xs text-neutral-600">
          © {new Date().getFullYear()} אזורה וילות. כל הזכויות שמורות.
        </p>
      </div>
    </footer>
  );
}
