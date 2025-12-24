
import React from 'react';

const WhatsAppButton: React.FC = () => {
  const whatsappNumber = "2449XXXXXXXX"; // Replace with real number
  const message = encodeURIComponent("Olá! Gostaria de solicitar um orçamento para construção/blocos.");

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all animate-bounce"
      title="Falar no WhatsApp"
    >
      <i className="fab fa-whatsapp text-3xl"></i>
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
      </span>
    </a>
  );
};

export default WhatsAppButton;
