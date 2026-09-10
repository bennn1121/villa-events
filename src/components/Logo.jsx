export default function Logo({ className = "" }) {
  return (
    <a
      href="#top"
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <span
        className="font-display text-2xl font-extrabold tracking-wide text-gold-100"
        style={{
          textShadow:
            "0 1px 2px rgba(0,0,0,0.85), 0 2px 10px rgba(0,0,0,0.6), 0 0 22px rgba(201,162,39,0.35)",
        }}
      >
        אזורה
      </span>
      <span className="rounded-full border border-gold-400/30 bg-charcoal-950/70 px-2.5 py-1 text-[10px] font-bold tracking-[0.25em] text-neutral-200 backdrop-blur-sm">
        VILLAS
      </span>
    </a>
  );
}
