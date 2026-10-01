import React, { useState, useRef } from 'react';
import { Instagram, Heart, MessageCircle, Volume2, VolumeX, Play, Pause, ExternalLink } from 'lucide-react';
import { MEDIA_ASSETS, BOUTIQUE_INFO } from '../data/boutiqueData';

interface VideoPlayerProps {
  src: string;
  index: number;
}

const ReelsVideoCard: React.FC<VideoPlayerProps> = ({ src, index }) => {
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
    <div className="group relative aspect-9/16 rounded-2xl overflow-hidden border-2 border-[#D4AF37]/70 bg-stone-900 shadow-md hover:shadow-xl transition-all duration-300">
      <video
        ref={videoRef}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

      {/* Top Badge */}
      <div className="absolute top-3 left-3 bg-[#2D4F3F]/90 text-[#F3E5AB] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-[#D4AF37]/50 backdrop-blur-xs">
        Reels #{index + 1}
      </div>

      {/* Sound & Play Controls */}
      <div className="absolute top-3 right-3 flex items-center gap-1.5">
        <button
          onClick={toggleMute}
          className="bg-black/60 hover:bg-black text-white p-2 rounded-full backdrop-blur-xs border border-[#D4AF37]/50 transition-colors"
          aria-label={isMuted ? 'Ativar som' : 'Desativar som'}
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#D4AF37]" />}
        </button>
      </div>

      {/* Bottom Info & Action */}
      <div className="absolute bottom-3 inset-x-3 flex items-center justify-between text-white text-xs">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 text-[11px] font-semibold">
            <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
            {320 + index * 45}
          </span>
          <span className="flex items-center gap-1 text-[11px] font-semibold">
            <MessageCircle className="w-3.5 h-3.5 text-stone-300" />
            {24 + index * 5}
          </span>
        </div>

        <a
          href={BOUTIQUE_INFO.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#2D4F3F] hover:bg-[#243f32] text-white text-[10px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full border border-[#D4AF37] shadow-sm transition-colors flex items-center gap-1"
        >
          <span>Ver</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};

export const InstagramSection: React.FC = () => {
  return (
    <div id="reels" className="bg-[#F4EAE6] py-16 sm:py-20 border-y border-[#D4AF37]/65">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Instagram Banner Image specified by user */}
        <div className="mb-12 max-w-4xl mx-auto rounded-2xl overflow-hidden border-2 border-[#D4AF37] shadow-lg bg-stone-100 aspect-16/6">
          <img
            src={MEDIA_ASSETS.instagramBannerImage}
            alt="Le Boutique Instagram Banner"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Title */}
        <div className="text-center mb-10">
          <div className="w-12 h-12 mx-auto rounded-full bg-linear-to-tr from-[#D4AF37] via-[#F3E5AB] to-[#2D4F3F] p-0.5 mb-3 shadow-sm">
            <div className="w-full h-full bg-[#F4EAE6] rounded-full flex items-center justify-center">
              <Instagram className="w-6 h-6 text-[#2D4F3F]" />
            </div>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2C2C] font-bold mb-1">
            Acompanhe no Instagram & Reels
          </h2>
          <a
            href={BOUTIQUE_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold tracking-wider text-[#2D4F3F] hover:text-[#D4AF37] transition-colors inline-block"
          >
            {BOUTIQUE_INFO.instagramHandle}
          </a>
          <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mt-3" />
        </div>

        {/* 6 Reels Videos Side by Side Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
          {MEDIA_ASSETS.reelsVideos.map((videoUrl, idx) => (
            <ReelsVideoCard key={idx} src={videoUrl} index={idx} />
          ))}
        </div>

        {/* CTA Follow Button */}
        <div className="text-center">
          <a
            href={BOUTIQUE_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#2D4F3F] hover:bg-[#243f32] text-white px-8 py-3.5 rounded-full font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg border-2 border-[#D4AF37]"
          >
            <Instagram className="w-4 h-4" />
            <span>Seguir no Instagram (@le.boutiquef6)</span>
          </a>
        </div>

      </div>
    </div>
  );
};
