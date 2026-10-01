import React, { useState } from 'react';
import { MessageCircle, X, Sparkles, Send } from 'lucide-react';
import { BOUTIQUE_INFO } from '../data/boutiqueData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const handleSendCustom = (e: React.FormEvent) => {
    e.preventDefault();
    const message = customMsg.trim() || 'Olá! Estava navegando no site da Le Boutique e gostaria de falar com uma consultora.';
    window.open(`https://wa.me/${BOUTIQUE_INFO.phoneRaw}?text=${encodeURIComponent(message)}`, '_blank');
    setIsOpen(false);
  };

  const quickMessages = [
    'Quero ver os vestidos e looks disponíveis',
    'Vocês entregam na minha pousada no Francês?',
    'Qual o horário de funcionamento hoje?'
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* WhatsApp Popup Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-[#FAFAFA] rounded-2xl shadow-2xl border border-[#D4AF37] overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          
          {/* Header */}
          <div className="bg-[#2D4F3F] text-white p-4 flex items-center justify-between border-b border-[#D4AF37]/50">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center font-bold text-white text-xs border-2 border-white">
                  LB
                </div>
                <span className="w-3 h-3 bg-emerald-500 rounded-full border-2 border-white absolute bottom-0 right-0" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm text-[#F3E5AB]">Le Boutique</h4>
                <p className="text-[11px] text-[#F4EAE6]">Atendimento Online • Praia do Francês</p>
              </div>
            </div>

            <button 
              onClick={() => setIsOpen(false)}
              className="text-stone-300 hover:text-white transition-colors p-1"
              aria-label="Fechar chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-[#F4EAE6]/50 space-y-3">
            <div className="bg-[#FAFAFA] p-3 rounded-xl rounded-tl-xs shadow-xs border border-[#D4AF37]/50 text-xs text-stone-700">
              <p className="font-medium text-[#2C2C2C] mb-1">Olá, que bom ter você aqui! 🌸</p>
              <p>Como podemos te ajudar hoje a encontrar o look ideal?</p>
            </div>

            <div className="space-y-1.5 pt-1">
              <p className="text-[10px] text-[#7A9A8B] uppercase tracking-wider font-semibold">Mensagens rápidas:</p>
              {quickMessages.map((msg, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    window.open(`https://wa.me/${BOUTIQUE_INFO.phoneRaw}?text=${encodeURIComponent(msg)}`, '_blank');
                    setIsOpen(false);
                  }}
                  className="w-full text-left text-xs bg-[#FAFAFA] hover:bg-[#F3E5AB]/40 text-stone-700 py-2 px-3 rounded-lg border border-[#D4AF37]/40 transition-colors shadow-2xs block"
                >
                  {msg}
                </button>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={handleSendCustom} className="pt-2 flex items-center gap-2">
              <input
                type="text"
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                placeholder="Escreva sua dúvida..."
                className="flex-1 text-xs bg-white border border-stone-300 rounded-full px-3.5 py-2.5 focus:outline-none focus:border-[#D4AF37]"
              />
              <button
                type="submit"
                className="bg-[#2D4F3F] hover:bg-[#243f32] text-white p-2.5 rounded-full transition-colors shrink-0 shadow-xs border border-[#D4AF37]"
                aria-label="Enviar mensagem"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2 bg-[#2D4F3F] hover:bg-[#243f32] text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-[#D4AF37]"
        aria-label="Abrir WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#D4AF37] border-2 border-white"></span>
        </span>

        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 text-xs font-bold uppercase tracking-wider text-[#F3E5AB]">
          Falar Conosco
        </span>
      </button>

    </div>
  );
};
