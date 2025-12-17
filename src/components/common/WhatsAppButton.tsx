import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const phoneNumber = "917013570447";
  const message = encodeURIComponent("Hello! I would like to know more about Swami Vivekananda Seva Brundam.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};
