import React from 'react';
import { Sparkles, Heart, Award, MessageCircle } from 'lucide-react';
import { MEDIA_ASSETS, BOUTIQUE_INFO } from '../data/boutiqueData';

export const FounderSection: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="bg-[#FAFAFA] border-2 border-[#D4AF37] rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
        
        {/* Decorative Background Glow */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#D4A5A5]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          
          {/* Founder Image Column (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-linear-to-tr from-[#D4AF37] via-[#D4A5A5] to-[#2D4F3F] rounded-3xl blur-md opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
              
              <div className="relative w-72 h-88 sm:w-80 sm:h-96 rounded-2xl overflow-hidden border-2 border-[#D4AF37] shadow-2xl bg-stone-100">
                <img
                  src={MEDIA_ASSETS.founderImage}
                  alt="Dona Vitória - Idealizadora e Empresária da Le Boutique"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Badge Overlay */}
                <div className="absolute bottom-4 inset-x-4 bg-[#2C2C2C]/90 backdrop-blur-md text-[#F3E5AB] py-2.5 px-4 rounded-xl border border-[#D4AF37]/60 text-center">
                  <h4 className="font-serif font-bold text-sm tracking-wider">Dona Vitória</h4>
                  <p className="text-[11px] text-[#F4EAE6] uppercase tracking-widest font-sans">Idealizadora & Empresária</p>
                </div>
              </div>
            </div>
          </div>

          {/* Founder Story Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
            
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 bg-[#F4EAE6] border border-[#D4AF37]/50 px-3.5 py-1 rounded-full text-xs font-semibold text-[#2D4F3F] uppercase tracking-wider mb-4 w-fit mx-auto lg:mx-0 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>História & Paixão pela Moda</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2C2C] font-bold mb-4">
              A Essência por Trás da Le Boutique
            </h2>

            <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto lg:mx-0 mb-6" />

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-4 font-light">
              Fundada com muito carinho e visão empreendedora por <strong className="text-[#2D4F3F] font-semibold">Dona Vitória</strong>, a Le Boutique nasceu do sonho de trazer para a charmosa Praia do Francês uma curadoria de moda feminina que unisse o frescor tropical do litoral alagoano à sofisticação atemporal.
            </p>

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6 font-light">
              Cada arara, cada cabide e cada atendimento na Loja 07 refletem o compromisso pessoal de Dona Vitória em fazer com que cada cliente se sinta única, acolhida e deslumbrante em qualquer ocasião.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-left">
              <div className="bg-[#F4EAE6]/60 p-4 rounded-2xl border border-[#D4AF37]/40">
                <Award className="w-5 h-5 text-[#2D4F3F] mb-2" />
                <h5 className="font-serif font-bold text-sm text-[#2C2C2C] mb-1">Curadoria Exclusiva</h5>
                <p className="text-xs text-stone-600">Peças selecionadas pessoalmente com tecidos nobres e caimento impecável.</p>
              </div>

              <div className="bg-[#F4EAE6]/60 p-4 rounded-2xl border border-[#D4AF37]/40">
                <Heart className="w-5 h-5 text-[#D4AF37] mb-2" />
                <h5 className="font-serif font-bold text-sm text-[#2C2C2C] mb-1">Atendimento Afetuoso</h5>
                <p className="text-xs text-stone-600">Consultoria de estilo personalizada e acolhimento em cada visita.</p>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start">
              <a
                href={BOUTIQUE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#2D4F3F] hover:bg-[#243f32] text-white px-8 py-3.5 rounded-full font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg border-2 border-[#D4AF37]"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Conversar com a Equipe de Dona Vitória</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
