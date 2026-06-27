import { Helmet } from 'react-helmet-async';

export default function About() {
  return (
    <div className="animate-in fade-in duration-700 pb-24">
      <Helmet>
        <title>About Us | PurePetals Skincare</title>
        <meta name="description" content="Discover the mission and values behind PurePetals. Learn why we believe in 100% natural, cruelty-free, and eco-friendly skincare." />
        <link rel="canonical" href="https://pure-petals.netlify.app/about" />
      </Helmet>
      {/* Page Header */}
      <div className="bg-leaf-800 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-serif mb-4">About Us</h1>
        <p className="text-leaf-100 max-w-2xl mx-auto text-lg font-light">
          Discover the mission and values behind PurePetals.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-16 space-y-24">
        
        {/* Our Story */}
        <section className="text-center">
          <h2 className="text-3xl font-serif text-brand-900 mb-6">Our Story</h2>
          <div className="w-16 h-1 bg-leaf-600 mx-auto mb-8"></div>
          <p className="text-lg text-brand-800 leading-relaxed font-light">
            PurePetals was founded with a mission to create skincare products that combine the goodness of nature with modern skincare science. We believe that everyone deserves healthy, glowing skin without exposing themselves to harsh chemicals.
          </p>
        </section>

        {/* Vision & Mission Grid */}
        <section className="grid md:grid-cols-2 gap-16">
          <div className="bg-white p-10 border border-brand-100 shadow-sm relative">
            <div className="w-1 absolute top-0 bottom-0 left-0 bg-leaf-600"></div>
            <h3 className="text-2xl font-serif text-brand-900 mb-4">Our Vision</h3>
            <p className="text-brand-800 leading-relaxed font-light">
              To become a trusted organic skincare brand that promotes beauty, wellness, and sustainability.
            </p>
          </div>
          
          <div className="bg-white p-10 border border-brand-100 shadow-sm relative">
            <div className="w-1 absolute top-0 bottom-0 left-0 bg-leaf-600"></div>
            <h3 className="text-2xl font-serif text-brand-900 mb-4">Our Mission</h3>
            <ul className="space-y-4 text-brand-800 font-light list-disc pl-4 marker:text-leaf-600">
              <li>Use ethically sourced natural ingredients.</li>
              <li>Create effective and safe skincare solutions.</li>
              <li>Promote eco-friendly and sustainable practices.</li>
              <li>Empower customers to embrace natural beauty.</li>
            </ul>
          </div>
        </section>

        {/* Our Values */}
        <section>
          <h2 className="text-3xl font-serif text-brand-900 mb-12 text-center">Our Values</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              { title: 'Purity', desc: 'Only the finest natural ingredients.' },
              { title: 'Sustainability', desc: 'Environmentally responsible production.' },
              { title: 'Transparency', desc: 'Honest labeling and ingredient disclosure.' },
              { title: 'Innovation', desc: 'Continuous improvement through research.' }
            ].map((v, i) => (
              <div key={i} className="flex gap-4 p-6 bg-leaf-50">
                <div className="text-leaf-800 font-serif font-bold text-xl opacity-50">
                  0{i + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-900 mb-2">{v.title}</h3>
                  <p className="text-brand-800 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
