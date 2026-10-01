import React from 'react';
import { X, MessageCircle, Sparkles, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';
import { ProductItem, BOUTIQUE_INFO } from '../data/boutiqueData';

interface ProductModalProps {
  product: ProductItem | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  const whatsappMessage = encodeURIComponent(
    `Olá Le Boutique! Gostaria de consultar a disponibilidade e tamanhos para a peça: *${product.name}* (${product.tag}).`
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#FAFAFA] rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-[#D4AF37] relative flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 bg-black/60 hover:bg-black text-white p-2 rounded-full transition-colors"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image */}
        <div className="md:w-1/2 bg-stone-100 relative min-h-[280px] md:min-h-[420px]">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-[#2C2C2C]/90 text-[#F3E5AB] text-xs font-semibold uppercase px-3 py-1 rounded-full border border-[#D4AF37]/50">
            {product.tag}
          </div>
        </div>

        {/* Product Info */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between bg-[#FAFAFA]">
          <div>
            <div className="flex items-center gap-1.5 text-xs text-[#2D4F3F] uppercase tracking-wider font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Le Boutique Exclusive</span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#2C2C2C] mb-3">
              {product.name}
            </h3>

            <p className="text-stone-700 text-sm leading-relaxed mb-6 font-light">
              {product.description}
            </p>

            <div className="space-y-2 mb-6 bg-[#F4EAE6] p-3.5 rounded-xl border border-[#D4AF37]/50">
              <div className="flex items-center gap-2 text-xs text-stone-700">
                <CheckCircle2 className="w-4 h-4 text-[#2D4F3F]" />
                <span>Disponível nos tamanhos P, M e G</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-stone-700">
                <CheckCircle2 className="w-4 h-4 text-[#2D4F3F]" />
                <span>Entrega express para hotéis da Praia do Francês</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-stone-700">
                <CheckCircle2 className="w-4 h-4 text-[#2D4F3F]" />
                <span>Pagamento via Pix ou Cartão de Crédito</span>
              </div>
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t border-[#D4AF37]/40">
            <a
              href={`https://wa.me/${BOUTIQUE_INFO.phoneRaw}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-full bg-[#2D4F3F] hover:bg-[#243f32] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-2 shadow-md shadow-[#2D4F3F]/20 border border-[#D4AF37]"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Consultar Peça no WhatsApp</span>
            </a>

            <button
              onClick={onClose}
              className="w-full py-2.5 text-xs font-semibold text-stone-500 hover:text-stone-800 transition-colors uppercase tracking-wider"
            >
              Continuar navegando
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
