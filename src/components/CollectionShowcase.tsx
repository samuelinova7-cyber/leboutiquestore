import React, { useState } from 'react';
import { Sparkles, MessageCircle, Eye, Check } from 'lucide-react';
import { PRODUCTS_COLLECTION, ProductItem, BOUTIQUE_INFO } from '../data/boutiqueData';

interface CollectionShowcaseProps {
  onSelectProduct: (product: ProductItem) => void;
}

export const CollectionShowcase: React.FC<CollectionShowcaseProps> = ({ onSelectProduct }) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const categories = [
    { id: 'todos', label: 'Todos os Looks' },
    { id: 'vestidos', label: 'Vestidos & Longos' },
    { id: 'conjuntos', label: 'Conjuntos' },
    { id: 'praia_chic', label: 'Moda Praia Chic' },
    { id: 'alfaiataria', label: 'Alfaiataria' },
    { id: 'acessorios', label: 'Acessórios' },
  ];

  const filteredProducts = activeCategory === 'todos'
    ? PRODUCTS_COLLECTION
    : PRODUCTS_COLLECTION.filter(p => p.category === activeCategory);

  const getWhatsAppMessage = (productName: string) => {
    const text = encodeURIComponent(`Olá, Le Boutique! 💖 Vi o *${productName}* no site e gostaria de saber mais informações sobre tamanhos disponíveis e valores.`);
    return `https://wa.me/${BOUTIQUE_INFO.phoneRaw}?text=${text}`;
  };

  return (
    <section id="colecao" className="py-16 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#2D4F3F] block mb-2">
          Coleção & Tendências
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2C2C] font-bold mb-3">
          Curadoria Exclusiva
        </h2>
        <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mb-4" />
        <p className="text-[#2C2C2C]/80 text-sm sm:text-base font-light">
          Peças pensadas para expressar autenticidade, conforto e sofisticação no clima paradisíaco de Alagoas.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all duration-200 cursor-pointer ${
              activeCategory === cat.id
                ? 'bg-[#2D4F3F] text-white shadow-md shadow-[#2D4F3F]/20 border border-[#D4AF37]'
                : 'bg-[#FAFAFA] text-[#2C2C2C] hover:bg-[#F3E5AB]/40 border border-[#D4AF37]/40'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map(product => (
          <div
            key={product.id}
            className="group bg-[#FAFAFA] rounded-2xl overflow-hidden border border-[#D4AF37]/50 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            {/* Image Container with Hover Action */}
            <div className="relative aspect-4/5 overflow-hidden bg-stone-100">
              <img
                src={product.imageUrl}
                alt={product.name}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Badge */}
              <div className="absolute top-3 left-3 bg-[#2C2C2C]/90 text-[#F3E5AB] text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full backdrop-blur-xs border border-[#D4AF37]/50">
                {product.tag}
              </div>

              {/* Hover Quick View Overlay */}
              <div className="absolute inset-0 bg-[#2C2C2C]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 p-4">
                <button
                  onClick={() => onSelectProduct(product)}
                  className="bg-white hover:bg-[#FAFAFA] text-[#2C2C2C] px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase flex items-center gap-2 shadow-lg transition-transform transform hover:scale-105 border border-[#D4AF37]"
                >
                  <Eye className="w-4 h-4 text-[#2D4F3F]" />
                  <span>Ver Detalhes</span>
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-lg font-bold text-[#2C2C2C] group-hover:text-[#2D4F3F] transition-colors mb-2">
                  {product.name}
                </h3>
                <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed mb-4">
                  {product.description}
                </p>
              </div>

              {/* Action */}
              <div className="pt-3 border-t border-[#D4AF37]/30 flex items-center justify-between gap-2">
                <span className="text-[11px] text-[#7A9A8B] uppercase tracking-wider font-semibold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-[#2D4F3F]" />
                  Pronta Entrega
                </span>

                <a
                  href={getWhatsAppMessage(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#2D4F3F] hover:bg-[#243f32] text-white text-xs font-semibold px-3.5 py-2 rounded-full transition-colors shadow-xs border border-[#D4AF37]/40"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  <span>Pedir no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Order Box */}
      <div className="mt-12 bg-linear-to-r from-[#FAFAFA] via-[#F4EAE6] to-[#FAFAFA] border border-[#D4AF37] rounded-2xl p-6 sm:p-8 text-center max-w-3xl mx-auto shadow-xs">
        <Sparkles className="w-6 h-6 text-[#D4AF37] mx-auto mb-2" />
        <h4 className="font-serif text-xl font-bold text-[#2C2C2C] mb-2">
          Procurando um look específico para o seu evento ou viagem?
        </h4>
        <p className="text-stone-700 text-sm mb-5 font-light">
          Nossa equipe de consultoria envia fotos, vídeos em tempo real e entrega diretamente na sua pousada ou hotel na Praia do Francês!
        </p>
        <a
          href={BOUTIQUE_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#2D4F3F] hover:bg-[#243f32] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider px-6 py-3 rounded-full border border-[#D4AF37] shadow-md transition-all"
        >
          <MessageCircle className="w-4 h-4 text-[#F3E5AB] fill-[#F3E5AB]" />
          <span>Falar com Consultora de Estilo</span>
        </a>
      </div>

    </section>
  );
};
