import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", date: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent("פנייה חדשה מאתר אזורה");
    const body = encodeURIComponent(
      `שם: ${form.name}\nטלפון: ${form.phone}\nתאריך מבוקש: ${form.date}\nהודעה: ${form.message}`
    );
    window.location.href = `mailto:info@azura-villas.co.il?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-charcoal-900 py-28">
      <div className="pointer-events-none absolute -top-32 right-1/2 h-96 w-96 translate-x-1/2 rounded-full bg-gold-500/10 blur-[120px]" />

      <div className="section-container relative grid grid-cols-1 gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-semibold tracking-[0.35em] text-gold-400">
            יצירת קשר
          </p>
          <h2 className="mt-3 text-4xl font-extrabold sm:text-5xl">
            נתכנן יחד את <span className="text-gold-gradient">האירוח המושלם</span>
          </h2>
          <p className="mt-6 max-w-lg text-neutral-400">
            השאירו פרטים וצוות הקונסיירז' שלנו יחזור אליכם תוך שעה עם הצעה
            מותאמת אישית לתאריכים ולמספר האורחים שלכם.
          </p>

          <div className="mt-10 space-y-5">
            <a
              href="tel:+972500000000"
              className="flex items-center gap-4 text-neutral-200 transition-colors hover:text-gold-400"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-500/10 text-gold-400">
                <Phone size={18} />
              </span>
              050-000-0000
            </a>
            <a
              href="mailto:info@azura-villas.co.il"
              className="flex items-center gap-4 text-neutral-200 transition-colors hover:text-gold-400"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-500/10 text-gold-400">
                <Mail size={18} />
              </span>
              info@azura-villas.co.il
            </a>
            <div className="flex items-center gap-4 text-neutral-200">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-500/10 text-gold-400">
                <MapPin size={18} />
              </span>
              השרון והמרכז, ישראל
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass rounded-3xl p-8 shadow-gold-lg sm:p-10"
        >
          {sent ? (
            <div className="flex flex-col items-center justify-center py-14 text-center">
              <CheckCircle2 size={56} className="text-gold-400" />
              <h3 className="mt-6 text-2xl font-bold">הפנייה נשלחה בהצלחה!</h3>
              <p className="mt-2 text-neutral-400">
                נציג שלנו יחזור אליכם בהקדם האפשרי.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-6 text-sm text-gold-400 underline underline-offset-4"
              >
                שליחת פנייה נוספת
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block text-sm text-neutral-300">
                  שם מלא
                </label>
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="ישראל ישראלי"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-neutral-100 placeholder:text-neutral-500 outline-none transition-colors focus:border-gold-400/60"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-neutral-300">
                  טלפון
                </label>
                <input
                  required
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  type="tel"
                  placeholder="05X-XXXXXXX"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-neutral-100 placeholder:text-neutral-500 outline-none transition-colors focus:border-gold-400/60"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-neutral-300">
                  תאריך מבוקש
                </label>
                <input
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  type="date"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-neutral-100 outline-none transition-colors focus:border-gold-400/60"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-neutral-300">
                  הודעה
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="ספרו לנו על האירוע או הנופש המתוכנן..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-neutral-100 placeholder:text-neutral-500 outline-none transition-colors focus:border-gold-400/60"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gold-gradient py-4 text-sm font-bold text-charcoal-950 shadow-gold transition-transform hover:scale-[1.02]"
              >
                <Send size={16} />
                שליחת פנייה
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
