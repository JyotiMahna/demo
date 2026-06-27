import { ReactNode } from 'react';
import { Leaf, Menu, X, Instagram, Facebook, Youtube } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-50 selection:bg-leaf-100 selection:text-leaf-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-brand-50/80 backdrop-blur-md border-b border-brand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link 
              to="/"
              className="flex items-center gap-2 cursor-pointer group"
              onClick={handleNavClick}
            >
              <Leaf className="w-8 h-8 text-leaf-600 group-hover:text-leaf-800 transition-colors" />
              <span className="font-serif text-2xl font-bold tracking-tight text-leaf-800">
                PUREPETALS
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={handleNavClick}
                  className={`text-sm font-medium transition-colors hover:text-leaf-600 ${
                    location.pathname === item.path ? 'text-leaf-800 border-b-2 border-leaf-600' : 'text-brand-800'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-brand-800 hover:text-leaf-600 focus:outline-none"
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-brand-50 border-b border-brand-200 shadow-lg absolute w-full">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={handleNavClick}
                  className={`block w-full text-left px-3 py-4 text-base font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-leaf-800 bg-leaf-50'
                      : 'text-brand-800 hover:bg-brand-100'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-900 text-brand-100 py-16 mt-20 border-t-4 border-leaf-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-6 h-6 text-leaf-600" />
              <span className="font-serif text-xl font-bold tracking-tight text-white">
                PUREPETALS
              </span>
            </div>
            <p className="text-brand-200 text-sm italic mb-6">
              "Nature's Touch for Radiant Skin"
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-brand-200 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-brand-200 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hidden text-brand-200 hover:text-white transition-colors" aria-label="Pinterest">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.182 0 7.436 2.981 7.436 6.966 0 4.156-2.618 7.502-6.257 7.502-1.222 0-2.37-.635-2.763-1.383l-.752 2.871c-.271 1.039-.997 2.338-1.491 3.136 1.166.361 2.406.556 3.693.556 6.621 0 11.988-5.368 11.988-11.989C24 5.367 18.638 0 12.017 0z"/></svg>
              </a>
              <a href="#" className="hidden text-brand-200 hover:text-white transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-serif text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={handleNavClick}
                    className="text-brand-200 hover:text-white text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-serif text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <div className="text-brand-200 text-sm space-y-2">
              <p>PurePetals Skincare Pvt. Ltd.</p>
              <p>45 Green Garden Avenue, Jaipur, Rajasthan, India</p>
              <p>Email: hello@purepetals.com</p>
              <p>Phone: +91 98765 43210</p>
            </div>
          </div>

        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-brand-800 text-center text-brand-200 text-xs">
          &copy; {new Date().getFullYear()} PurePetals Skincare Pvt. Ltd. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
