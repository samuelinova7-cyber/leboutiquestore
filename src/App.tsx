/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CollectionShowcase } from './components/CollectionShowcase';
import { FounderSection } from './components/FounderSection';
import { ReviewsSection } from './components/ReviewsSection';
import { InstagramSection } from './components/InstagramSection';
import { LocationSection } from './components/LocationSection';
import { FaqSection } from './components/FaqSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ProductModal } from './components/ProductModal';
import { PinkParticles } from './components/PinkParticles';
import { Footer } from './components/Footer';
import { ProductItem } from './data/boutiqueData';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  return (
    <div className="min-h-screen bg-[#F4EAE6] text-[#2C2C2C] flex flex-col font-sans selection:bg-[#F3E5AB] selection:text-[#2D4F3F] relative">
      {/* Floating Pink Particles in background layer only */}
      <PinkParticles />

      {/* Header */}
      <Header />

      {/* Main Content Sections on top of particles */}
      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <Hero />

        {/* Collection & Lookbook */}
        <CollectionShowcase onSelectProduct={(prod) => setSelectedProduct(prod)} />

        {/* Founder Section - Dona Vitória */}
        <FounderSection />

        {/* Google Customer Reviews */}
        <ReviewsSection />

        {/* Instagram & Reels Videos */}
        <InstagramSection />

        {/* Interactive Google Map & Boutique Details */}
        <LocationSection />

        {/* FAQ Section with 10 questions */}
        <FaqSection />
      </main>

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />

      {/* Footer */}
      <Footer />
    </div>
  );
}
