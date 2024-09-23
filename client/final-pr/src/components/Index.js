import React from 'react'
import Header from "./Header.js";
import Slider from "./Slider.js";
import Product from "./Products.js";
import Testmonials from "./Testmonial.js";
import Blog from "./Blog.js";
import Footer from "./Footer.js";

const Index = () => {
  return (
    <div>
        <Header />
        <Slider />
        <Product />
        <Testmonials />
        <Blog />
        <Footer />
    </div>
  )
}

export default Index;