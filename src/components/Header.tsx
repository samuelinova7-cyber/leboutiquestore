import React, { useState } from 'react';
import { MessageCircle, MapPin, Instagram, Menu, X, Sparkles, Volume2, VolumeX } from 'lucide-react';
import { BOUTIQUE_INFO, MEDIA_ASSETS } from '../data/boutiqueData';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Running Marquee Ticker at the Top */}
      <div className="bg-[#2D4F3F] text-[#F3E5AB] text-xs py-2 px-4 overflow-hidden whitespace-nowrap border-b border-[#D4AF37]/40 relative">
        <div className="inline-block animate-marquee font-medium tracking-wider flex items-center gap-8">
          <span className="inline-flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            ✨ ATENDIMENTO VIP NA PRAIA DO FRANCÊS • WHATSAPP: (82) 99323-7455
          </span>
          <span className="inline-flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            🌴 ENTREGA EXPRESSA PARA HOTÉIS, RESORTS E POUSADAS DA REGIÃO
          </span>
          <span className="inline-flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            💛 NOVA COLEÇÃO RESORT & ALTO VERÃO 2026 DISPONÍVEL NA LOJA 07
          </span>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-50 bg-[#F4EAE6]/95 backdrop-blur-md border-b border-[#D4AF37]/60 shadow-xs transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#2C2C2C] hover:text-[#2D4F3F] transition-colors focus:outline-none"
            aria-label="Abrir menu de navegação"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Boutique Brand Logo with Round Shimmer Effect */}
          <div className="flex items-center gap-3">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-linear-to-r from-[#D4AF37] to-[#F3E5AB] rounded-full blur-xs opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <img
                src={MEDIA_ASSETS.headerLogo}
                alt="Le Boutique Logo"
                className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-[#D4AF37] shadow-md"
              />
            </div>
            <a href="#" className="inline-block group">
              <h1 className="font-serif text-xl sm:text-2xl font-bold tracking-[0.18em] text-[#2C2C2C] group-hover:text-[#2D4F3F] transition-colors">
                LE BOUTIQUE
              </h1>
              <p className="text-[9px] sm:text-[10px] text-[#7A9A8B] uppercase tracking-[0.25em] font-sans font-semibold">
                Praia do Francês • Mal. Deodoro / AL
              </p>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-semibold uppercase tracking-widest text-[#2C2C2C]">
            <a href="#inicio" className="hover:text-[#2D4F3F] transition-colors">Início</a>
            <a href="#colecao" className="hover:text-[#2D4F3F] transition-colors">Coleção</a>
            <a href="#reels" className="hover:text-[#2D4F3F] transition-colors">Reels & Vídeos</a>
            <a href="#avaliacoes" className="hover:text-[#2D4F3F] transition-colors">Avaliações</a>
            <a href="#localizacao" className="hover:text-[#2D4F3F] transition-colors flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#2D4F3F]" />
              <span>Como Chegar</span>
            </a>
          </nav>

          {/* Action CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={BOUTIQUE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#2D4F3F] hover:bg-[#243f32] text-white text-xs font-semibold uppercase tracking-wider py-2 px-4 rounded-full shadow-sm hover:shadow-md transition-all duration-300 border border-[#D4AF37]"
            >
              <MessageCircle className="w-4 h-4 fill-white text-white" />
              <span>WhatsApp</span>
            </a>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#F4EAE6] border-b border-[#D4AF37] px-6 py-5 shadow-lg animate-in slide-in-from-top-2">
            <div className="flex flex-col gap-4 text-sm font-semibold tracking-wider uppercase text-[#2C2C2C]">
              <a 
                href="#inicio" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-1 hover:text-[#2D4F3F] border-b border-[#E6E8EA]"
              >
                Início
              </a>
              <a 
                href="#colecao" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-1 hover:text-[#2D4F3F] border-b border-[#E6E8EA]"
              >
                Coleção & Looks
              </a>
              <a 
                href="#reels" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-1 hover:text-[#2D4F3F] border-b border-[#E6E8EA]"
              >
                Reels & Vídeos Exclusivos
              </a>
              <a 
                href="#avaliacoes" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-1 hover:text-[#2D4F3F] border-b border-[#E6E8EA]"
              >
                Avaliações de Clientes
              </a>
              <a 
                href="#localizacao" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-1 hover:text-[#2D4F3F] border-b border-[#E6E8EA] flex items-center justify-between"
              >
                <span>Localização & Rotas</span>
                <MapPin className="w-4 h-4 text-[#2D4F3F]" />
              </a>

              <div className="pt-2">
                <a
                  href={BOUTIQUE_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full justify-center inline-flex items-center gap-2 bg-[#2D4F3F] text-white text-sm font-semibold tracking-wider py-3 px-4 rounded-full shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Falar no WhatsApp (82) 99323-7455</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
