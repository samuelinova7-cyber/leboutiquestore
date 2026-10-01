import React from 'react';
import { MapPin, Navigation, Clock, Phone, Sparkles, CheckCircle2, MessageCircle } from 'lucide-react';
import { BOUTIQUE_INFO } from '../data/boutiqueData';

export const LocationSection: React.FC = () => {
  return (
    <section id="localizacao" className="py-16 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#2D4F3F] block mb-2">
          Venha nos Visitar
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2C2C] font-bold mb-2">
          Nossa Localização
        </h2>
        <p className="text-stone-700 text-sm sm:text-base font-normal max-w-xl mx-auto">
          {BOUTIQUE_INFO.address}
        </p>
        <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mt-3" />
      </div>

      {/* Grid with Details and Interactive Map */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-10">
        
        {/* Left Side: Store Info & Opening Hours (4 cols) */}
        <div className="lg:col-span-4 bg-[#FAFAFA] border border-[#D4AF37] rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center gap-2 text-[#2D4F3F] font-semibold text-xs uppercase tracking-wider mb-4 pb-3 border-b border-[#D4AF37]/50">
              <Clock className="w-4 h-4 text-[#D4AF37]" />
              <span>Horário de Funcionamento</span>
            </div>

            <div className="space-y-3 mb-6">
              {BOUTIQUE_INFO.hours.map((h, i) => (
                <div key={i} className="flex justify-between items-center text-xs py-1 border-b border-stone-200/50">
                  <span className="font-medium text-stone-700">{h.days}</span>
                  <span className="font-semibold text-[#2C2C2C]">{h.hours}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 text-[#2D4F3F] font-semibold text-xs uppercase tracking-wider mb-3">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>Diferenciais na Loja</span>
            </div>

            <ul className="space-y-2.5 text-xs text-stone-700 mb-6">
              {BOUTIQUE_INFO.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2D4F3F] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-[#D4AF37]/50 space-y-2">
            <div className="flex items-center gap-2 text-xs text-stone-700">
              <Phone className="w-3.5 h-3.5 text-[#2D4F3F]" />
              <span className="font-semibold">Telefone / WhatsApp:</span>
              <a href={BOUTIQUE_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#2D4F3F]">
                {BOUTIQUE_INFO.phone}
              </a>
            </div>
            <div className="flex items-center gap-2 text-xs text-stone-700">
              <MapPin className="w-3.5 h-3.5 text-[#2D4F3F]" />
              <span>Loja 07 - Galeria Caravelas</span>
            </div>
          </div>
        </div>

        {/* Right Side: Map Container (8 cols) */}
        <div className="lg:col-span-8 flex flex-col">
          <div className="w-full h-80 sm:h-96 lg:h-full min-h-[340px] rounded-2xl overflow-hidden border-2 border-[#D4AF37] shadow-sm relative bg-stone-100">
            {/* Embedded Google Map */}
            <iframe
              src={BOUTIQUE_INFO.googleEmbedMapUrl}
              title="Mapa de Localização Le Boutique Praia do Francês"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>

      </div>

      {/* Map Action Buttons matching requested styles */}
      <div className="flex justify-center items-center gap-4 flex-wrap">
        <a
          href={BOUTIQUE_INFO.googleMapsQueryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 bg-[#2D4F3F] hover:bg-[#243f32] text-white px-7 py-3.5 rounded-full font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg border-2 border-[#D4AF37]"
        >
          <Navigation className="w-4 h-4" />
          <span>Como Chegar (Rotas)</span>
        </a>

        <a
          href={BOUTIQUE_INFO.googleSearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 bg-transparent hover:bg-[#F4EAE6] text-[#2D4F3F] px-7 py-3.5 rounded-full font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 border-2 border-[#D4AF37]"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
          </svg>
          <span>Avaliar no Google</span>
        </a>

        <a
          href={BOUTIQUE_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-7 py-3.5 rounded-full font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg border-2 border-[#25D366]"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>Falar com a Loja</span>
        </a>
      </div>

    </section>
  );
};
