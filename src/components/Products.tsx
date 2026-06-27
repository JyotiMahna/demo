import { Leaf } from 'lucide-react';
import { products } from '../data';
import { Helmet } from 'react-helmet-async';

export default function Products() {
  const productsSchema = products.map((p) => ({
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
    <div className="animate-in fade-in duration-700 pb-24">
      <Helmet>
        <title>Products | PurePetals Skincare</title>
        <meta name="description" content="Shop our collection of 100% natural, gentle, and effective skincare products. Including serums, moisturizers, masks, and more." />
        <link rel="canonical" href="https://pure-petals.netlify.app/products" />
        <script type="application/ld+json">
          {JSON.stringify(productsSchema)}
        </script>
      </Helmet>
      {/* Page Header */}
      <div className="bg-leaf-800 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-serif mb-4">Our Collection</h1>
        <p className="text-leaf-100 max-w-2xl mx-auto text-lg font-light">
          Gentle, effective, and 100% natural.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map(p => (
            <div key={p.id} className="bg-white group transition-all duration-500 hover:shadow-2xl border border-brand-100 flex flex-col h-full overflow-hidden">
              <div className="h-72 w-full bg-brand-50 relative flex items-center justify-center text-brand-200 overflow-hidden">
                {p.image ? (
                  <img src={p.image} alt={p.name} loading="lazy" className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-1000 ease-out" />
                ) : (
                  <Leaf className="w-16 h-16 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-700" />
                )}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-brand-900 text-xs font-bold px-3 py-1.5 uppercase tracking-widest shadow-sm">
                  ₹{p.price}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h2 className="text-2xl font-serif text-brand-900 mb-3">{p.name}</h2>
                <p className="text-brand-800 text-sm mb-6 font-light leading-relaxed">{p.description}</p>
                
                {p.benefits && (
                  <div className="mb-8">
                    <h3 className="text-xs uppercase tracking-widest text-brand-900 font-semibold mb-3">Key Benefits</h3>
                    <ul className="space-y-2 text-sm text-brand-800">
                      {p.benefits.map((b, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-leaf-600 mt-1">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="mt-auto">
                  <button className="w-full py-4 bg-brand-900 text-white hover:bg-leaf-800 transition-colors uppercase tracking-widest text-sm font-medium">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
