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
    title: 'Benefits of Organic Skincare',
    date: 'June 15, 2026',
    content: 'Organic skincare products are free from harmful chemicals and rich in natural nutrients that nourish the skin. They are gentle, environmentally friendly, and suitable for most skin types.',
  },
  {
    id: 'b2',
    title: 'Daily Skincare Routine for Glowing Skin',
    date: 'June 10, 2026',
    content: [
      'A healthy skincare routine includes:',
      '• Cleansing',
      '• Toning',
      '• Moisturizing',
      '• Sun Protection',
      'Consistency is the key to achieving healthy and radiant skin.'
    ],
  },
  {
    id: 'b3',
    title: 'Why Hydration Matters for Healthy Skin',
    date: 'June 5, 2026',
    content: 'Proper hydration helps maintain skin elasticity, prevents dryness, and supports the skin\'s natural barrier function.',
  },
  {
    id: 'b4',
    title: 'Natural Ingredients That Transform Your Skin',
    date: 'May 28, 2026',
    content: [
      'Some of the most effective skincare ingredients include:',
      '• Aloe Vera',
      '• Turmeric',
      '• Rosehip Oil',
      '• Green Tea',
      '• Lavender'
    ],
  }
];
