"use client";
import { MessageCircle } from "lucide-react";
import { SITE } from "../lib/site";

export default function WhatsAppFloat() {
  const msg = encodeURIComponent(
    "Hello Parkline Infra, I'd like to enquire about your services."
  );
  const url = `https://wa.me/${SITE.contact.whatsapp.replace(/\D/g, "")}?text=${msg}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Parkline Infra on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110">
        <MessageCircle className="w-7 h-7 text-white fill-white" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-gold-500 rounded-full border-2 border-white animate-pulse" />
      </div>
      <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="bg-navy-900 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg">
          Chat on WhatsApp
        </div>
      </div>
    </a>
  );
}
