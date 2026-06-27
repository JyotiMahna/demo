import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function Contact() {
  return (
    <div className="animate-in fade-in duration-700 pb-24">
      <Helmet>
        <title>Contact Us | PurePetals Skincare</title>
        <meta name="description" content="Get in touch with PurePetals Skincare. We would love to hear from you for questions about our organic products." />
        <link rel="canonical" href="https://pure-petals.netlify.app/contact" />
      </Helmet>
      {/* Page Header */}
      <div className="bg-leaf-800 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-serif mb-4">Get in Touch</h1>
        <p className="text-leaf-100 max-w-2xl mx-auto text-lg font-light">
          We would love to hear from you!
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-16">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Information */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-serif text-brand-900 mb-6">Contact Information</h2>
              <p className="text-brand-800 font-light leading-relaxed mb-8">
                Whether you have a question about our products, need assistance with your order, or just want to share your skincare journey with us, our team is here to help.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white flex items-center justify-center border border-brand-200 text-leaf-800 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-900 uppercase tracking-widest text-sm mb-2">Address</h3>
                  <p className="text-brand-800 font-light">
                    PurePetals Skincare Pvt. Ltd.<br />
                    45 Green Garden Avenue,<br />
                    Jaipur, Rajasthan, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white flex items-center justify-center border border-brand-200 text-leaf-800 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-900 uppercase tracking-widest text-sm mb-2">Phone</h3>
                  <p className="text-brand-800 font-light">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white flex items-center justify-center border border-brand-200 text-leaf-800 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-900 uppercase tracking-widest text-sm mb-2">Email</h3>
                  <p className="text-brand-800 font-light">hello@purepetals.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white flex items-center justify-center border border-brand-200 text-leaf-800 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-900 uppercase tracking-widest text-sm mb-2">Business Hours</h3>
                  <p className="text-brand-800 font-light">Monday – Saturday: 9:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-brand-900 uppercase tracking-widest text-sm mb-4">Follow Us</h3>
              <ul className="space-y-2 text-brand-800 font-light">
                 <li>Instagram: <a href="#" className="hover:text-leaf-600 transition-colors">@PurePetalsOfficial</a></li>
                 <li>Facebook: <a href="#" className="hover:text-leaf-600 transition-colors">PurePetals</a></li>
                 <li>Pinterest: <a href="#" className="hover:text-leaf-600 transition-colors">PurePetals Skincare</a></li>
                 <li>YouTube: <a href="#" className="hover:text-leaf-600 transition-colors">PurePetals Beauty</a></li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 sm:p-12 border border-brand-100 shadow-sm">
            <h2 className="text-2xl font-serif text-brand-900 mb-8">Send a Message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-900 uppercase tracking-widest mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-brand-50 border border-brand-200 focus:outline-none focus:ring-2 focus:ring-leaf-600 focus:border-transparent transition-all"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-900 uppercase tracking-widest mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-brand-50 border border-brand-200 focus:outline-none focus:ring-2 focus:ring-leaf-600 focus:border-transparent transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-brand-900 uppercase tracking-widest mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 bg-brand-50 border border-brand-200 focus:outline-none focus:ring-2 focus:ring-leaf-600 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-brand-900 uppercase tracking-widest mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-brand-50 border border-brand-200 focus:outline-none focus:ring-2 focus:ring-leaf-600 focus:border-transparent transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-900 uppercase tracking-widest mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-brand-50 border border-brand-200 focus:outline-none focus:ring-2 focus:ring-leaf-600 focus:border-transparent transition-all resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-brand-900 text-white hover:bg-leaf-800 transition-colors uppercase tracking-widest text-sm font-medium mt-4"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
