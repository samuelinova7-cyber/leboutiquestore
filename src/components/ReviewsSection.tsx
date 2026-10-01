import React, { useRef, useState } from 'react';
import { Star, ShieldCheck, ExternalLink, MessageSquareQuote, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { REVIEWS_DATA, BOUTIQUE_INFO, MEDIA_ASSETS } from '../data/boutiqueData';

export const ReviewsSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="avaliacoes" className="py-16 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      
      {/* Video above Google Reviews Section */}
      <div className="mb-14 max-w-2xl mx-auto bg-[#FAFAFA] rounded-2xl overflow-hidden border-2 border-[#D4AF37] shadow-lg relative group">
        <div className="relative aspect-video w-full bg-stone-900">
          <video
            ref={videoRef}
            src={MEDIA_ASSETS.reviewVideo}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />

          {/* Video Control Overlay */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            <button
              onClick={togglePlay}
              className="bg-[#2D4F3F] text-white p-3 rounded-full shadow-lg hover:scale-105 transition-transform border border-[#D4AF37]"
              aria-label={isPlaying ? 'Pausar vídeo' : 'Reproduzir vídeo'}
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-white" />}
            </button>

            <button
              onClick={toggleMute}
              className="bg-[#2D4F3F] text-white p-3 rounded-full shadow-lg hover:scale-105 transition-transform border border-[#D4AF37]"
              aria-label={isMuted ? 'Ativar som' : 'Desativar som'}
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>
          </div>

          <div className="absolute bottom-3 left-3 bg-[#2C2C2C]/80 text-[#F3E5AB] text-[11px] font-semibold px-3 py-1 rounded-full backdrop-blur-xs border border-[#D4AF37]/50">
            ✨ Depoimentos & Avaliações Reais
          </div>
        </div>
      </div>

      {/* Section Title */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-1.5 bg-[#FAFAFA] border border-[#D4AF37]/60 px-3.5 py-1 rounded-full text-xs font-semibold text-[#2D4F3F] uppercase tracking-wider mb-3 shadow-xs">
          <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
          <span>Experiências Reais</span>
        </div>
        
        <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2C2C] font-bold mb-2">
          O que nossas clientes dizem
        </h2>
        <p className="text-[#7A9A8B] text-sm font-semibold tracking-wide uppercase">
          Avaliações reais no Google
        </p>
        <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mt-3 mb-4" />
      </div>

      {/* Google Rating Overview Badge */}
      <div className="bg-[#FAFAFA] border border-[#D4AF37] rounded-2xl p-6 shadow-xs max-w-xl mx-auto mb-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-[#F4EAE6] border border-[#D4AF37] flex items-center justify-center shrink-0">
            <span className="font-serif text-2xl font-bold text-[#2D4F3F]">5.0</span>
          </div>
          <div>
            <div className="flex items-center justify-center sm:justify-start gap-1 text-[#D4AF37] mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
              ))}
            </div>
            <p className="text-xs text-stone-700 font-medium">
              Classificação Máxima de Satisfação no Google
            </p>
          </div>
        </div>

        <a
          href={BOUTIQUE_INFO.googleReviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-semibold uppercase tracking-wider text-[#2D4F3F] hover:text-[#D4AF37] border-b border-[#2D4F3F] pb-0.5 inline-flex items-center gap-1 transition-colors"
        >
          <span>Avaliar no Google</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* Reviews Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {REVIEWS_DATA.slice(0, 3).map((review) => (
          <div
            key={review.id}
            className="bg-[#FAFAFA] border border-[#D4AF37]/50 p-6 sm:p-7 rounded-2xl shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F4EAE6] border border-[#D4AF37] flex items-center justify-center font-bold text-xs text-[#2D4F3F]">
                    {review.initials}
                  </div>
                  <div>
                    <span className="font-semibold text-sm text-[#2C2C2C] block">
                      {review.name}
                    </span>
                    <span className="text-[11px] text-stone-500">
                      {review.date}
                    </span>
                  </div>
                </div>

                <div className="flex gap-0.5 text-[#D4AF37]">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
              </div>

              {/* Review Text */}
              <div className="relative pt-2">
                <MessageSquareQuote className="w-6 h-6 text-[#D4AF37]/40 absolute -top-1 -left-1" />
                <p className="text-sm text-stone-700 italic font-sans leading-relaxed relative z-10 pl-2">
                  "{review.text}"
                </p>
              </div>
            </div>

            {/* Google Verified Stamp */}
            <div className="mt-6 pt-3 border-t border-[#D4AF37]/30 flex items-center justify-between text-[11px] text-stone-500">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#2D4F3F] inline-block" />
                Avaliação Verificada
              </span>
              <span className="font-medium text-[#2D4F3F]">Google Reviews</span>
            </div>
          </div>
        ))}
      </div>

      {/* Action Button */}
      <div className="text-center mt-10">
        <a
          href={BOUTIQUE_INFO.googleSearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#2D4F3F] hover:bg-[#243f32] text-white px-8 py-3.5 rounded-full font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg border-2 border-[#D4AF37]"
        >
          Ver mais avaliações no Google
        </a>
      </div>

    </section>
  );
};
