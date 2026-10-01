export interface Review {
  id: string;
  name: string;
  avatar?: string;
  initials: string;
  rating: number;
  date: string;
  text: string;
  source: 'Google' | 'Instagram';
  highlight?: string;
}

export interface InstagramPost {
  id: string;
  imageUrl: string;
  videoUrl?: string;
  caption: string;
  likes: number;
  comments: number;
  category: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: 'vestidos' | 'conjuntos' | 'praia_chic' | 'alfaiataria' | 'acessorios';
  priceTag?: string;
  description: string;
  imageUrl: string;
  tag: string;
}

export const MEDIA_ASSETS = {
  heroVideo: 'https://res.cloudinary.com/gu3r4btn/video/upload/v1790860698/Fashion_boutique_hero_section_ca__20261001095530_adyrfo.mp4',
  headerLogo: 'https://res.cloudinary.com/gu3r4btn/image/upload/v1790860692/WhatsApp_Image_2026-10-01_at_9.30.19_AM_tacl0z.jpg',
  footerLogo: 'https://res.cloudinary.com/gu3r4btn/image/upload/v1790860691/WhatsApp_Image_2026-10-01_at_9.30.19_AM_1_avxxg3.jpg',
  reviewVideo: 'https://res.cloudinary.com/gu3r4btn/video/upload/v1790860698/Mannequin_holding_review_sign_20261001100013_eebjpk.mp4',
  instagramBannerImage: 'https://res.cloudinary.com/gu3r4btn/image/upload/v1790860692/WhatsApp_Image_2026-10-01_at_9.36.40_AM_ef8per.jpg',
  founderImage: 'https://res.cloudinary.com/gu3r4btn/image/upload/v1790861445/WhatsApp_Image_2026-10-01_at_10.29.09_AM_pinabh.jpg',
  reelsVideos: [
    'https://res.cloudinary.com/gu3r4btn/video/upload/v1790860691/SnapInsta.to_AQMbTpfkeIZ84RdFrQQOeqE2JpuAvROm9jUh1aCovhamR82DBY9J_9VwmND1N5dpJ5E5z9zzJGiA6A3ALc4jufAwUBmNNroH1F3fGrI_cnyxg0.mp4',
    'https://res.cloudinary.com/gu3r4btn/video/upload/v1790860689/SnapInsta.to_AQNmKLcfCoPwE59aVkNuJQSa9q-8FYE1y7rCTh8cDNU3ArKb8FRKjw0X_2JS0IVXWlXVJk-ERrJASsjPnMDsRpA8yhbw3Vcns8DvtVQ_qikuzb.mp4',
    'https://res.cloudinary.com/gu3r4btn/video/upload/v1790860688/SnapInsta.to_AQMlhP2mbFH5W4vjk9QedBTftwfoo7dtvNjMyvF1ENOeqbQ3A-P1581w8yyi5xYoeXkLWRjVj-6J_5lwM-B319NiZ6vI6Yts_Ffr6Cc_ye6z07.mp4',
    'https://res.cloudinary.com/gu3r4btn/video/upload/v1790860684/SnapInsta.to_AQP7LbfptN8P8nsGU2QK6TbdzCyZOOunw2rKkOQqFa192firElEaXdaFolaBomXYKycFzHCy07GMMnWE25-Swx-83m0y6YpI7JfWwaU_mxmfd6.mp4',
    'https://res.cloudinary.com/gu3r4btn/video/upload/v1790860682/SnapInsta.to_AQNvsO8wUy5m_LJsgdHB5lVelWlvL04h4XIJhs5MG-5zTPj6EynKnpvsbUuAsTTg3JEYS8dMcWdXzI8mcrqXYxjZf1RBAX-HXylDOZU_nb7v8g.mp4',
    'https://res.cloudinary.com/gu3r4btn/video/upload/v1790860681/SnapInsta.to_AQM6iD8_wtcZOtLUXXm4cIAC7FWSpPhINKedX8keuuopLAIr1aYtpN16xpQHu1Gm_cnXyy6Ogsln_x6V6qpqQ--o8xnH-YvnQNKehA4_lmpjxg.mp4'
  ]
};

export const BOUTIQUE_INFO = {
  name: 'LE BOUTIQUE',
  slogan: 'Elegância & Moda Exclusiva',
  subtitle: 'Praia do Francês - Marechal Deodoro / AL',
  phone: '(82) 99323-7455',
  phoneRaw: '5582993237455',
  whatsappUrl: 'https://wa.me/5582993237455',
  instagramHandle: '@le.boutiquef6',
  instagramUrl: 'https://www.instagram.com/le.boutiquef6',
  address: 'Av. Caravelas, 288 - Loja 07 - Praia do Francês, Marechal Deodoro - AL',
  postalCode: 'CEP 57160-000',
  googleMapsQueryUrl: 'https://maps.google.com/?q=Av.+Caravelas,+288+-+Praia+do+Francês,+Marechal+Deodoro+-+AL',
  googleSearchUrl: 'https://www.google.com/search?q=le+boutique+praia+do+frances',
  googleReviewUrl: 'https://www.google.com/search?q=le+boutique+praia+do+frances#lrd=0x0:0x0,3',
  googleEmbedMapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.908!2d-35.845!3d-9.762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNDUnNDMuMiJTIDM1wrA1MCc0Mi4wIlc!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr',
  hours: [
    { days: 'Segunda a Sexta', hours: '09:00 às 19:00' },
    { days: 'Sábado', hours: '09:00 às 19:30' },
    { days: 'Domingo e Feriados', hours: '09:00 às 14:00' }
  ],
  features: [
    'Ambiente climatizado e aconchegante',
    'Estacionamento nas proximidades',
    'Atendimento exclusivo e consultoria de estilo',
    'Pagamento facilitado em até 6x ou desconto via Pix',
    'Entrega express para pousadas e hotéis da Praia do Francês'
  ]
};

export const REVIEWS_DATA: Review[] = [
  {
    id: '1',
    name: 'Camila Santos',
    initials: 'CS',
    rating: 5,
    date: 'Há 2 semanas',
    text: 'Atendimento impecável e roupas maravilhosas! A loja na Praia do Francês é um charme, super recomendo para quem quer andar na moda.',
    source: 'Google',
    highlight: 'Atendimento impecável e roupas maravilhosas!'
  },
  {
    id: '2',
    name: 'Juliana Mendonça',
    initials: 'JM',
    rating: 5,
    date: 'Há 1 mês',
    text: 'Peças de altíssima qualidade e caimento perfeito. Encontrei o look perfeito para minhas férias aqui em Alagoas!',
    source: 'Google',
    highlight: 'Look perfeito para as férias em Alagoas'
  },
  {
    id: '3',
    name: 'Mariana Costa',
    initials: 'MC',
    rating: 5,
    date: 'Há 3 semanas',
    text: 'Simplesmente apaixonada pela loja! O ambiente é lindo e o atendimento é nota 10. Sempre que venho à praia, dou uma passada lá.',
    source: 'Google',
    highlight: 'Ambiente lindo e atendimento nota 10'
  },
  {
    id: '4',
    name: 'Rafaela Albuquerque',
    initials: 'RA',
    rating: 5,
    date: 'Há 1 mês',
    text: 'A melhor curadoria de moda da Praia do Francês! Vestidos leves, elegantes e com tecidos nobres. Saí de lá encantada com as minhas compras.',
    source: 'Google',
    highlight: 'Melhor curadoria de moda da região'
  },
  {
    id: '5',
    name: 'Beatriz Vasconcelos',
    initials: 'BV',
    rating: 5,
    date: 'Há 2 meses',
    text: 'Excelente variedade para todos os momentos, do pós-praia aos jantares sofisticados. O time é super prestativo e simpático!',
    source: 'Google',
    highlight: 'Do pós-praia aos jantares sofisticados'
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'post-1',
    imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://res.cloudinary.com/gu3r4btn/video/upload/v1790860691/SnapInsta.to_AQMbTpfkeIZ84RdFrQQOeqE2JpuAvROm9jUh1aCovhamR82DBY9J_9VwmND1N5dpJ5E5z9zzJGiA6A3ALc4jufAwUBmNNroH1F3fGrI_cnyxg0.mp4',
    caption: 'Mood solar com elegância leve e atemporal. Look resort perfeito para os dias ensolarados na Praia do Francês. ✨☀️ #LeBoutique #PraiaDoFrances #ResortWear',
    likes: 342,
    comments: 28,
    category: 'Resort Wear'
  },
  {
    id: 'post-2',
    imageUrl: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://res.cloudinary.com/gu3r4btn/video/upload/v1790860689/SnapInsta.to_AQNmKLcfCoPwE59aVkNuJQSa9q-8FYE1y7rCTh8cDNU3ArKb8FRKjw0X_2JS0IVXWlXVJk-ERrJASsjPnMDsRpA8yhbw3Vcns8DvtVQ_qikuzb.mp4',
    caption: 'A sutileza dos tons neutros combinada com a sofisticação da alfaiataria fresca de verão. Disponível na Loja 07! 💛 #ModaFeminina #SummerVibes',
    likes: 418,
    comments: 35,
    category: 'Alfaiataria'
  },
  {
    id: 'post-3',
    imageUrl: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://res.cloudinary.com/gu3r4btn/video/upload/v1790860688/SnapInsta.to_AQMlhP2mbFH5W4vjk9QedBTftwfoo7dtvNjMyvF1ENOeqbQ3A-P1581w8yyi5xYoeXkLWRjVj-6J_5lwM-B319NiZ6vI6Yts_Ffr6Cc_ye6z07.mp4',
    caption: 'Fluidez, movimento e cores que iluminam a beleza feminina. Vestido longo com caimento incomparável. 🌺✨ #LookDoDia #AlagoasChic',
    likes: 529,
    comments: 42,
    category: 'Vestidos'
  },
  {
    id: 'post-4',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://res.cloudinary.com/gu3r4btn/video/upload/v1790860684/SnapInsta.to_AQP7LbfptN8P8nsGU2QK6TbdzCyZOOunw2rKkOQqFa192firElEaXdaFolaBomXYKycFzHCy07GMMnWE25-Swx-83m0y6YpI7JfWwaU_mxmfd6.mp4',
    caption: 'Detalhes que transformam qualquer ocasião em um momento inesquecível. Vem conferir as novidades da semana! 🌸 #LeBoutiqueAL',
    likes: 295,
    comments: 19,
    category: 'Detalhes'
  },
  {
    id: 'post-5',
    imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://res.cloudinary.com/gu3r4btn/video/upload/v1790860682/SnapInsta.to_AQNvsO8wUy5m_LJsgdHB5lVelWlvL04h4XIJhs5MG-5zTPj6EynKnpvsbUuAsTTg3JEYS8dMcWdXzI8mcrqXYxjZf1RBAX-HXylDOZU_nb7v8g.mp4',
    caption: 'O charme do linho puro com acabamentos impecáveis. Peças exclusivas esperando por você. 🌿 #LinhoPuro #BoutiqueDePraia',
    likes: 388,
    comments: 27,
    category: 'Linho & Algodão'
  },
  {
    id: 'post-6',
    imageUrl: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://res.cloudinary.com/gu3r4btn/video/upload/v1790860681/SnapInsta.to_AQM6iD8_wtcZOtLUXXm4cIAC7FWSpPhINKedX8keuuopLAIr1aYtpN16xpQHu1Gm_cnXyy6Ogsln_x6V6qpqQ--o8xnH-YvnQNKehA4_lmpjxg.mp4',
    caption: 'Nosso cantinho especial na Av. Caravelas preparado com todo carinho para você se sentir única e acolhida. Te esperamos! 🥂🛍️ #PraiaDoFrancês',
    likes: 612,
    comments: 53,
    category: 'Nossa Loja'
  }
];

export const PRODUCTS_COLLECTION: ProductItem[] = [
  {
    id: 'prod-1',
    name: 'Vestido Midi Fluido Riviera',
    category: 'vestidos',
    description: 'Confeccionado em viscose premium com decote sofisticado e movimento elegante. Perfeito para o pôr do sol à beira-mar.',
    imageUrl: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80',
    tag: 'Destaque Coleção'
  },
  {
    id: 'prod-2',
    name: 'Conjunto Cropped & Pantalona em Linho',
    category: 'conjuntos',
    description: 'Linho misto respirável com corte de alfaiataria impecável e toque acetinado suave na pele.',
    imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
    tag: 'Mais Vendido'
  },
  {
    id: 'prod-3',
    name: 'Kimono Saída Resort Dourada',
    category: 'praia_chic',
    description: 'Transparência sutil com fios dourados delicados. Eleva qualquer look de praia a um visual de alto padrão.',
    imageUrl: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80',
    tag: 'Edição Limitada'
  },
  {
    id: 'prod-4',
    name: 'Blazer Alfaiataria Verão Off-White',
    category: 'alfaiataria',
    description: 'Estrutura leve e descontraída com ombreiras sutis e botões resinados que combinam com shorts ou calças.',
    imageUrl: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&w=800&q=80',
    tag: 'Sofisticação'
  },
  {
    id: 'prod-5',
    name: 'Vestido Longo Sunset Coral',
    category: 'vestidos',
    description: 'Modelagem que valoriza a silhueta com amarrações ajustáveis e tom vibrante inspirado no pôr do sol alagoano.',
    imageUrl: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80',
    tag: 'Nova Chegada'
  },
  {
    id: 'prod-6',
    name: 'Acessórios & Semijoias Banhadas a Ouro',
    category: 'acessorios',
    description: 'Argolas, colares em camadas e braceletes com acabamento luxuoso resistentes para o clima tropical.',
    imageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
    tag: 'Tendência'
  }
];

