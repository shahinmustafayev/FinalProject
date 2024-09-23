import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import Testmonial from './components/Testmonial';
import Blog from './components/Blog';
import ProductDetails from './components/ProductDetails';
import BlogDetails from './components/BlogDetails';
import Header from './components/Header';
import Slider from './components/Slider';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Routes>
        {/* Ana sayfa ("/") rotası */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Slider />
              <Products />
              <Testmonial />
              <Blog />
              <Footer />
            </>
          }
        />
        
        {/* Diğer rotalar */}
        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />
        <Route path="/testimonials" element={<Testmonial />} />
        <Route path="/blog" element={<Blog />} />
        <Route
          path='/blog/:id'
          element={<BlogDetails />}
        />
      </Routes>
    </>
  );
}

export default App;
