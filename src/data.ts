import { Product, BlogPost } from './types';

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Rose Glow Face Serum',
    description: 'Enriched with rosehip oil and vitamin E to brighten and hydrate skin.',
    benefits: [
      'Reduces dullness',
      'Improves skin texture',
      'Provides deep hydration'
    ],
    price: 799,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'p2',
    name: 'Aloe Vera Moisturizer',
    description: 'Lightweight moisturizer made with pure aloe vera extract.',
    benefits: [
      'Soothes irritation',
      'Hydrates skin',
      'Non-greasy formula'
    ],
    price: 599,
    image: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p3',
    name: 'Turmeric Face Mask',
    description: 'Natural face mask with turmeric and sandalwood.',
    benefits: [
      'Brightens complexion',
      'Reduces acne marks',
      'Detoxifies skin'
    ],
    price: 699,
    image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'p4',
    name: 'Lavender Night Cream',
    description: 'Nourishing overnight cream infused with lavender oil.',
    benefits: [
      'Repairs skin overnight',
      'Reduces dryness',
      'Promotes relaxation'
    ],
    price: 899,
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p5',
    name: 'Green Tea Cleanser',
    description: 'Gentle cleanser with antioxidant-rich green tea.',
    benefits: [
      'Removes impurities',
      'Controls excess oil',
      'Refreshes skin'
    ],
    price: 499,
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop'
  }
];

export const featuredProducts = products.slice(0, 3);

export const blogPosts: BlogPost[] = [
 {
  id: 'b1',
  title: '10 Benefits of Natural Skincare Products for Healthy Skin',
  date: 'June 15, 2026',
  content: [
    'Natural skincare products are made with ingredients derived from nature and can be a simple choice for an everyday skincare routine.',
    '• Gentle skincare for everyday use',
    '• Natural ingredients such as aloe vera, rosehip oil and green tea',
    '• Helps keep skin hydrated and nourished',
    '• Supports a healthy-looking skin barrier',
    '• Suitable for different skincare routines',
    '• Plant-based ingredients can complement daily skin care',
    '• Can be part of an eco-conscious beauty routine',
    '• Helps create a simple and consistent skincare routine',
    '• Natural ingredients provide a nature-inspired approach to skincare',
    '• Makes it easier to choose skincare based on your skin needs',
    'Choosing the right natural skincare products and following a consistent routine can help you maintain healthy, nourished-looking skin.'
  ],
},
  {
    id: 'b2',
    title: 'Daily Natural Skincare Routine for Healthy, Glowing Skin',
    date: 'June 10, 2026',
    content: [
   'A simple and consistent natural skincare routine can help keep your skin clean, hydrated and healthy-looking.',
    '• Start with a gentle cleanser',
    '• Use a suitable toner if needed',
    '• Apply a hydrating serum',
    '• Moisturize your skin',
    '• Apply sunscreen during the day',
    '• Choose products according to your skin type',
    'Consistency is important when building a healthy skincare routine.'
],
  },
  {
    id: 'b3',
    title: 'Why Hydration Matters for Healthy Skin',
    date: 'June 5, 2026',
    content: 'Keeping the skin hydrated is an important part of a healthy skincare routine. Proper hydration helps reduce the feeling of dryness and supports soft, comfortable and healthy-looking skin. Using suitable moisturizers and drinking enough water can complement your daily skincare routine.',
  },
  {
    id: 'b4',
    title: 'Natural Skincare Ingredients for Healthy Skin',
    date: 'May 28, 2026',
   content: [
    'Natural ingredients can be an important part of a simple skincare routine. Different ingredients offer different benefits for the skin.',
    '• Aloe Vera – commonly used for soothing and hydration',
    '• Turmeric – traditionally used in skincare routines',
    '• Rosehip Oil – a source of nourishing plant oils',
    '• Green Tea – contains antioxidant compounds',
    '• Lavender – commonly used in skincare and personal care products',
    'Choosing ingredients according to your skin needs can help you create a simple and consistent natural skincare routine.'
],
  }
];
