import React from 'react';
import { Instagram, MapPin, Phone, MessageCircle, Heart, Sparkles } from 'lucide-react';
import { BOUTIQUE_INFO, MEDIA_ASSETS } from '../data/boutiqueData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2D4F3F] text-white border-t border-[#D4AF37]/40">
      
      {/* Top Banner inside Footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Brand Column with Glowing Footer Logo (5 cols) */}
          <div className="md:col-span-5 text-center md:text-left flex flex-col items-center md:items-start">
            <div className="relative mb-3 group">
              <div className="absolute -inset-1 bg-linear-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] rounded-full blur-sm opacity-80 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
              <img
                src={MEDIA_ASSETS.footerLogo}
                alt="Le Boutique Logo Rodapé"
                className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-[#D4AF37] shadow-xl"
              />
            </div>

            <h3 className="font-serif text-2xl font-bold tracking-[0.2em] text-[#F3E5AB] mb-1">
              LE BOUTIQUE
            </h3>
            <p className="text-xs text-[#F4EAE6] uppercase tracking-[0.25em] mb-4">
              Praia do Francês • Mal. Deodoro / AL
            </p>
            <p className="text-xs text-stone-200 font-light leading-relaxed max-w-sm mx-auto md:mx-0 mb-6 text-center md:text-left">
              Sua experiência exclusiva de moda feminina no litoral alagoano. Roupas com cortes elegantes, tecidos frescos e tendências que encantam.
            </p>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <a
                href={BOUTIQUE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#243f32] hover:bg-[#D4AF37] text-stone-200 hover:text-white flex items-center justify-center transition-all duration-300 border border-[#D4AF37]/50"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={BOUTIQUE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#243f32] hover:bg-[#25D366] text-stone-200 hover:text-white flex items-center justify-center transition-all duration-300 border border-[#D4AF37]/50"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={BOUTIQUE_INFO.googleMapsQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#243f32] hover:bg-[#D4AF37] text-stone-200 hover:text-white flex items-center justify-center transition-all duration-300 border border-[#D4AF37]/50"
                aria-label="Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 text-center md:text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F3E5AB] mb-4">
              Navegação Rápida
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-200">
              <li>
                <a href="#inicio" className="hover:text-[#F3E5AB] transition-colors">Início</a>
              </li>
              <li>
                <a href="#colecao" className="hover:text-[#F3E5AB] transition-colors">Coleção & Destaques</a>
              </li>
              <li>
                <a href="#reels" className="hover:text-[#F3E5AB] transition-colors">Reels & Vídeos</a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-[#F3E5AB] transition-colors">Avaliações do Google</a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-[#F3E5AB] transition-colors">Como Chegar</a>
              </li>
            </ul>
          </div>

          {/* Location & Contact (4 cols) */}
          <div className="md:col-span-4 text-center md:text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F3E5AB] mb-4">
              Endereço & Atendimento
            </h4>
            <div className="space-y-2 text-xs text-stone-200">
              <p className="flex items-start justify-center md:justify-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{BOUTIQUE_INFO.address}</span>
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>WhatsApp: {BOUTIQUE_INFO.phone}</span>
              </p>
              <p className="text-[11px] text-[#F4EAE6] pt-1">
                Segunda a Sábado: 09h às 19h | Domingo: 09h às 14h
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar matching user prompt specification */}
      <div className="border-t border-[#243f32] py-6 text-center text-xs text-[#F4EAE6]">
        <p className="mb-1 text-white">
          <strong>Le Boutique</strong> - Todos os direitos reservados.
        </p>
        <p className="text-[#F4EAE6] text-[11px]">
          Praia do Francês, Marechal Deodoro - AL
        </p>
      </div>

    </footer>
  );
};
