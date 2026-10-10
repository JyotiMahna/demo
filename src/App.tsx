/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { StrictMode, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import Layout from './components/Layout';
import Home from './components/Home';
import ScrollToTop from './components/ScrollToTop';

const About = lazy(() => import('./components/About'));
const Products = lazy(() => import('./components/Products'));
const Blog = lazy(() => import('./components/Blog'));
const Contact = lazy(() => import('./components/Contact'));

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Suspense fallback={<div className="p-8 text-center">Loading page...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}