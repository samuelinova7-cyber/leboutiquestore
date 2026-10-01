import React from 'react';
import { MessageCircle, Sparkles, MapPin, ShieldCheck, Heart, ArrowDown } from 'lucide-react';
import { BOUTIQUE_INFO, MEDIA_ASSETS } from '../data/boutiqueData';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative text-white overflow-hidden min-h-[600px] flex items-center justify-center">
      {/* Background Video with Cloudinary Asset */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={MEDIA_ASSETS.heroVideo} type="video/mp4" />
        Seu navegador não suporta vídeos HTML5.
      </video>

      {/* Luxury Gradient Overlay for Contrast */}
      <div className="absolute inset-0 bg-linear-to-b from-[#2D4F3F]/60 via-[#2C2C2C]/50 to-[#2D4F3F]/75 z-10" />

      {/* Decorative Gold Light Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#D4AF37]/25 rounded-full blur-3xl pointer-events-none z-15" />

      {/* Content Container */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 py-24 sm:py-32 text-center flex flex-col items-center justify-center">
        
        {/* Top Gold Pill Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/30 backdrop-blur-md border border-[#D4AF37]/60 text-[#F3E5AB] text-xs font-semibold tracking-widest uppercase mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Boutique de Moda Feminina</span>
          <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
          <span>Praia do Francês</span>
        </div>

        {/* Main Headline */}
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 drop-shadow-lg max-w-3xl leading-[1.15]">
          Elegância & Moda Exclusiva
        </h2>

        {/* Subtitle */}
        <p className="font-sans text-base sm:text-xl text-[#F4EAE6] font-light max-w-2xl mb-10 leading-relaxed drop-shadow-md">
          As melhores tendências da moda feminina com um toque sofisticado, tecidos nobres e caimento impecável para seus melhores momentos.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href={BOUTIQUE_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#2D4F3F] hover:bg-[#243f32] text-white px-8 py-4 rounded-full font-semibold text-sm sm:text-base tracking-wider uppercase transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-[#2D4F3F]/40 border-2 border-[#D4AF37]"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>Fale Conosco no WhatsApp</span>
          </a>

          <a
            href="#colecao"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white backdrop-blur-md px-7 py-4 rounded-full font-semibold text-sm sm:text-base tracking-wider uppercase transition-all duration-300 border border-[#F3E5AB]/60"
          >
            <span>Ver Destaques</span>
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>

        {/* Quick Highlights Bar */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 w-full text-xs sm:text-sm text-[#F4EAE6] font-medium">
          <div className="flex items-center justify-center gap-2 bg-[#2C2C2C]/70 backdrop-blur-xs py-2.5 px-3 rounded-lg border border-[#D4AF37]/40 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span>Peças Exclusivas</span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-[#2C2C2C]/70 backdrop-blur-xs py-2.5 px-3 rounded-lg border border-[#D4AF37]/40 shadow-sm">
            <Heart className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span>Resort & Praia Chic</span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-[#2C2C2C]/70 backdrop-blur-xs py-2.5 px-3 rounded-lg border border-[#D4AF37]/40 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span>Alta Qualidade</span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-[#2C2C2C]/70 backdrop-blur-xs py-2.5 px-3 rounded-lg border border-[#D4AF37]/40 shadow-sm">
            <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span>Loja 07 - Av. Caravelas</span>
          </div>
        </div>

      </div>
    </section>
  );
};
