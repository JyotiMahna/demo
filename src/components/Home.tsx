import { Leaf, Droplets, Heart, Recycle, Star } from 'lucide-react';
import { featuredProducts } from '../data';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function Home() {
  const navigate = useNavigate();

  const goToProducts = () => {
    navigate('/products');
  };

  const featuredProductsSchema = featuredProducts.map((p) => ({
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": p.name,
    "image": p.image || "",
    "description": p.description,
    "brand": {
      "@type": "Brand",
      "name": "PurePetals"
    },
    "sku": p.id,
    "offers": {
      "@type": "Offer",
      "url": "https://pure-petals.netlify.app/products",
      "priceCurrency": "INR",
      "price": p.price.toString(),
      "priceValidUntil": "2027-12-31",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "1",
      "reviewCount": "1"
    },
    "review": {
      "@type": "Review",
      "name": "Priya Sharma",
      "reviewBody": "This product feels lightweight and keeps my skin hydrated throughout the day",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5",
        "worstRating": "1"
      },
      "author": { "@type": "Person", "name": "Priya Sharma" },
      "publisher": { "@type": "Organization", "name": "PurePetals" }
    }
  }));

  return (
    <div className="animate-in fade-in duration-700">
      <Helmet>
        <title>Home | PurePetals Skincare</title>
        <meta name="description" content="Discover the power of nature with our premium organic skincare products. PurePetals brings you healthy skin with pure ingredients." />
        <link rel="canonical" href="https://pure-petals.netlify.app/" />
        <link rel="preload" as="image" href="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=2000&auto=format&fit=crop" />
        <script type="application/ld+json">
          {JSON.stringify(featuredProductsSchema)}
        </script>
      </Helmet>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-brand-50 py-32 sm:py-48 lg:py-56">
        {/* Elegant Hero Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=2000&auto=format&fit=crop" 
            alt="Natural Skincare Beauty" 
            className="w-full h-full object-cover object-center"
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-50/95 via-brand-50/80 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <span className="text-leaf-800 font-semibold tracking-widest uppercase text-sm mb-6 block">
            Nature's Touch for Radiant Skin
          </span>
          <h1 className="text-5xl sm:text-7xl font-serif text-brand-900 mb-8 max-w-2xl leading-[1.1]">
            Welcome to <span className="text-leaf-800 italic block mt-2">PurePetals</span>
          </h1>
          <p className="text-lg sm:text-xl text-brand-800 max-w-xl mb-12 leading-relaxed font-light">
            Discover the power of nature with our premium organic skincare products. At PurePetals, we believe healthy skin starts with pure ingredients sourced directly from nature.
          </p>
          <button 
            onClick={goToProducts}
            className="inline-flex items-center justify-center px-10 py-4 text-sm tracking-widest uppercase font-medium text-white bg-brand-900 hover:bg-leaf-800 transition-colors duration-300 shadow-sm hover:shadow-md rounded-none"
          >
            Shop Now
          </button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-brand-900 mb-4">Why Choose PurePetals?</h2>
            <div className="w-24 h-1 bg-leaf-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { icon: Leaf, title: '100% Natural Ingredients', desc: 'Made with plant-based extracts and essential oils.' },
              { icon: Heart, title: 'Cruelty-Free', desc: 'Never tested on animals.' },
              { icon: Recycle, title: 'Eco-Friendly Packaging', desc: 'Sustainable packaging that cares for the planet.' },
              { icon: Droplets, title: 'Suitable for All Skin Types', desc: 'Gentle formulations for healthy, glowing skin.' }
            ].map((f, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-leaf-50 flex items-center justify-center mb-6 text-leaf-800">
                  <f.icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-brand-900 mb-3">{f.title}</h3>
                <p className="text-brand-800 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-brand-900 mb-4">Featured Products</h2>
              <div className="w-16 h-1 bg-leaf-600"></div>
            </div>
            <button 
              onClick={goToProducts}
              className="hidden sm:inline-flex items-center text-leaf-800 font-medium hover:text-leaf-600"
            >
              View all products &rarr;
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map(p => (
              <div key={p.id} className="bg-white p-6 group transition-all duration-500 hover:shadow-2xl border border-brand-100 flex flex-col h-full">
                <div className="h-64 w-full bg-brand-50 mb-6 relative overflow-hidden">
                   {p.image ? (
                     <img src={p.image} alt={p.name} loading="lazy" className="object-cover w-full h-full transform group-hover:scale-105 group-hover:rotate-1 transition-transform duration-700 ease-out" />
                   ) : (
                     <div className="flex items-center justify-center h-full w-full text-brand-200">
                       <Leaf className="w-12 h-12" />
                     </div>
                   )}
                </div>
                <h3 className="text-xl font-serif text-brand-900 mb-2">{p.name}</h3>
                <p className="text-brand-800 text-sm mb-4 flex-grow">{p.description}</p>
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-brand-100">
                  <span className="font-semibold text-lg text-brand-900">₹{p.price}</span>
                  <button className="text-sm font-medium text-leaf-800 uppercase tracking-widest hover:text-leaf-600 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center sm:hidden">
             <button 
              onClick={goToProducts}
              className="inline-flex py-3 px-6 border border-leaf-800 items-center text-leaf-800 font-medium hover:bg-leaf-800 hover:text-white transition-colors"
            >
              View all products
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white border-y border-brand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-900 mb-12">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {[
              { text: "My skin feels softer and healthier after using PurePetals products!", author: "Priya Sharma" },
              { text: "The Rose Glow Serum is amazing. Highly recommended!", author: "Neha Verma" }
            ].map((r, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="flex text-yellow-500 mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-xl text-brand-800 italic mb-6 font-serif leading-relaxed px-4">"{r.text}"</p>
                <p className="font-medium text-brand-900 uppercase tracking-widest text-sm">— {r.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
