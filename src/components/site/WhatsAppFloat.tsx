import { MessageCircle } from "lucide-react";

const PHONE = "5581987871423";
const MESSAGE = "Olá! Gostaria de saber mais sobre os serviços da Custom Care.";

export function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-elegant hover:scale-110 transition-transform"
    >
      <MessageCircle className="h-7 w-7" fill="currentColor" />
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
    </a>
  );
}
