import { blogPosts } from '../data';
import { Helmet } from 'react-helmet-async';

export default function Blog() {
  return (
    <div className="animate-in fade-in duration-700 pb-24">
      <Helmet>
        <title>Natural Skincare Tips & Advice | PurePetals</title>
       <meta name="description" content="Explore natural skincare tips, organic skincare advice and healthy skincare routines from PurePetals."
/>
        <link rel="canonical" href="https://purepetals.vercel.app/blog"
/>
      </Helmet>
       {/* Page Header */}
       <div className="bg-leaf-800 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-serif mb-4">Natural Skincare Tips & Advice</h1>
       <p className="text-leaf-100 max-w-2xl mx-auto text-lg font-light">Discover natural skincare tips, organic skincare advice and simple routines for healthy, glowing skin.
</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-16 space-y-16">
        {blogPosts.map(post => (
          <article key={post.id} className="bg-white p-8 sm:p-12 border border-brand-100 shadow-sm relative overflow-hidden group">
            <div className="text-center mt-16">
  <p className="text-brand-800 mb-4"> Looking for natural skincare products?</p>
  <a href="/products" className="text-leaf-800 font-medium hover:text-leaf-600" >
 Explore our organic skincare products →
  </a>
</div>
            <div className="absolute top-0 left-0 w-full h-1 bg-leaf-600 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
            <time className="block text-sm text-leaf-600 font-medium tracking-widest uppercase mb-4">
              {post.date}
            </time>
            <h2 className="text-2xl sm:text-3xl font-serif text-brand-900 mb-6">
              {post.title}
            </h2>
            <div className="text-brand-800 leading-relaxed font-light space-y-4">
              {Array.isArray(post.content) ? (
                post.content.map((line, i) => (
                  <p key={i} className={line.startsWith('•') ? 'pl-4' : ''}>
                    {line}
                  </p>
                ))
              ) : (
                <p>{post.content}</p>
              )}
            </div>
            <button className="mt-8 text-leaf-800 font-medium uppercase tracking-widest text-sm hover:text-leaf-600 transition-colors inline-flex items-center gap-2">
              Read More <span aria-hidden="true">&rarr;</span>
            </button>
          </article>
        ))}
        <div className="text-center mt-16">
  <p className="text-brand-800 mb-4"> Looking for natural skincare products? </p>
  <a href="/products" className="text-leaf-800 font-medium hover:text-leaf-600" > Explore our organic skincare products →
  </a>
</div>
      </div>
    </div>
  );
}
