import React, { useState } from 'react';
import { ChevronDown, Sparkles, HelpCircle, MessageCircle } from 'lucide-react';
import { BOUTIQUE_INFO } from '../data/boutiqueData';

interface FaqItem {
  question: string;
  answer: string;
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: '1. Onde a Le Boutique está localizada na Praia do Francês?',
      answer: 'Estamos localizados na Av. Caravelas, 288 - Loja 07 - Praia do Francês, Marechal Deodoro - AL. Um ponto de fácil acesso, totalmente climatizado e com estacionamento nas proximidades.'
    },
    {
      question: '2. Vocês entregam em pousadas, hotéis e resorts da região?',
      answer: 'Sim! Oferecemos atendimento express com entrega rápida diretamente na sua pousada, hotel ou condomínio na Praia do Francês e região metropolitana de Marechal Deodoro e Maceió.'
    },
    {
      question: '3. Quais são as formas de pagamento aceitas?',
      answer: 'Aceitamos Pix (com condições e mimos especiais), cartões de crédito e débito (parcelamento facilitado em até 6x sem juros) e dinheiro.'
    },
    {
      question: '4. Como faço para consultar tamanhos e disponibilidade de peças?',
      answer: 'Você pode clicar no botão "Pedir no WhatsApp" em qualquer peça do catálogo ou falar diretamente com nossa consultoria pelo número (82) 99323-7455. Enviamos fotos e vídeos em tempo real para você conferir cada detalhe!'
    },
    {
      question: '5. Qual é o horário de funcionamento da loja física?',
      answer: 'Funcionamos de segunda a sexta-feira das 09:00 às 19:00, aos sábados das 09:00 às 19:30, e aos domingos e feriados das 09:00 às 14:00.'
    },
    {
      question: '6. A loja possui provadores confortáveis e climatizados?',
      answer: 'Sim! A Le Boutique conta com provadores amplos, espelhos bem iluminados e ambiente totalmente climatizado para que você experimente seus looks com todo o conforto, privacidade e comodidade.'
    },
    {
      question: '7. Posso reservar uma peça antes de ir até a loja?',
      answer: 'Com certeza! Caso tenha se encantado com algum look visto em nosso site ou Instagram, basta nos enviar uma mensagem pelo WhatsApp que nossa equipe faz a pré-reserva para você.'
    },
    {
      question: '8. Quais tipos de tecidos e modelagens a Le Boutique prioriza?',
      answer: 'Priorizamos tecidos nobres, frescos e confortáveis para o clima tropical: linho puro e misto, viscose premium, alfaiataria leve de verão, algodão e acabamentos de altíssima costura e caimento.'
    },
    {
      question: '9. Como funciona a política de trocas da loja?',
      answer: 'Realizamos trocas de peças sem uso, acompanhadas da etiqueta fixada e comprovante de compra, em até 7 dias corridos. Nossa equipe estará sempre pronta para encontrar a melhor opção para você.'
    },
    {
      question: '10. Vocês oferecem consultoria de estilo personalizada?',
      answer: 'Sim! Sob a inspiração e dedicação de Dona Vitória, nossa equipe oferece consultoria personalizada para ajudar você a compor looks perfeitos para passeios na praia, jantares sofisticados, eventos e viagens.'
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 sm:px-6 max-w-4xl mx-auto relative z-10">
      
      {/* Title */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-1.5 bg-[#FAFAFA] border border-[#D4AF37]/60 px-3.5 py-1 rounded-full text-xs font-semibold text-[#2D4F3F] uppercase tracking-wider mb-3 shadow-2xs">
          <HelpCircle className="w-4 h-4 text-[#D4AF37]" />
          <span>Dúvidas Frequentes</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2C2C] font-bold mb-2">
          Perguntas & Respostas
        </h2>
        <p className="text-[#7A9A8B] text-sm font-semibold tracking-wide uppercase">
          Tire todas as suas dúvidas sobre a Le Boutique
        </p>
        <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mt-3" />
      </div>

      {/* Accordion List (10 questions) */}
      <div className="space-y-4 mb-12">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="bg-[#FAFAFA] border border-[#D4AF37]/50 rounded-2xl overflow-hidden shadow-xs hover:border-[#D4AF37] transition-all duration-300"
            >
              <button
                onClick={() => toggleAccordion(idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer group"
              >
                <span className="font-serif font-bold text-base sm:text-lg text-[#2C2C2C] group-hover:text-[#2D4F3F] transition-colors">
                  {faq.question}
                </span>
                <span className={`w-8 h-8 rounded-full bg-[#F4EAE6] border border-[#D4AF37] flex items-center justify-center text-[#2D4F3F] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#2D4F3F] text-white' : ''}`}>
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-0 text-stone-700 text-sm font-light leading-relaxed border-t border-[#D4AF37]/20 pt-4 animate-in fade-in duration-200">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Still have questions CTA */}
      <div className="bg-[#FAFAFA] border-2 border-[#D4AF37] rounded-3xl p-6 sm:p-8 text-center shadow-md">
        <Sparkles className="w-5 h-5 text-[#D4AF37] mx-auto mb-2" />
        <h4 className="font-serif text-xl font-bold text-[#2C2C2C] mb-2">
          Ainda tem alguma dúvida específica?
        </h4>
        <p className="text-stone-700 text-xs sm:text-sm mb-5 font-light">
          Nossa equipe de consultoria e atendimento está disponível no WhatsApp para te ajudar!
        </p>
        <a
          href={BOUTIQUE_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#2D4F3F] hover:bg-[#243f32] text-white px-8 py-3.5 rounded-full font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md hover:shadow-lg border border-[#D4AF37]"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>Falar com Atendimento no WhatsApp</span>
        </a>
      </div>

    </section>
  );
};
