import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "972500000000";
const DEFAULT_MESSAGE = "שלום, אשמח לשמוע פרטים על השכרת וילת אירוח";

export default function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    DEFAULT_MESSAGE
  )}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="שלחו לנו הודעה בוואטסאפ"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 z-[90] flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-[0_10px_30px_-8px_rgba(37,211,102,0.7)]"
      style={{ right: "1.5rem" }}
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-40" />
      <svg
        viewBox="0 0 32 32"
        width="30"
        height="30"
        fill="white"
        className="relative"
      >
        <path d="M16.004 3C9.377 3 4 8.377 4 15.004c0 2.478.727 4.788 1.977 6.727L4 29l7.457-1.945a11.94 11.94 0 0 0 4.547.906h.004c6.627 0 12.004-5.377 12.004-12.004C28.012 8.377 22.635 3 16.004 3zm0 21.938a9.9 9.9 0 0 1-5.05-1.383l-.362-.215-4.425 1.154 1.183-4.312-.236-.443a9.9 9.9 0 0 1-1.514-5.29c0-5.478 4.457-9.935 9.938-9.935 5.478 0 9.935 4.457 9.935 9.938 0 5.478-4.457 9.935-9.935 9.935z" />
        <path d="M21.61 18.11c-.297-.148-1.758-.867-2.03-.965-.273-.098-.472-.148-.67.148-.198.297-.767.965-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.254-.462-2.39-1.475-.883-.788-1.48-1.762-1.653-2.059-.173-.297-.018-.457.13-.605.134-.133.297-.347.446-.52.148-.174.198-.298.297-.496.099-.198.05-.372-.025-.52-.074-.149-.669-1.612-.916-2.208-.242-.58-.487-.5-.669-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.075-.792.372-.272.297-1.04 1.017-1.04 2.48 0 1.462 1.065 2.876 1.213 3.074.148.198 2.096 3.2 5.08 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.086 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347z" />
      </svg>
    </motion.a>
  );
}
