import React from "react";
import Navbar from './components/navbar/Navbar';
import Hero from './components/Hero';
import { ProductCard, ProductList } from './components/product/ProductComponents';
import { allProducts } from './data/productData';
import { CarouselDesktop, CarouselMobile } from "./components/product/ProductCarousel";


function App() {
  return (
    <div>
    <Navbar />
    <main>
      <Hero />
      <ProductList/>
      <CarouselDesktop products={allProducts} />
      <CarouselMobile products={allProducts} />
    </main>

   </div>
    
  );
}

export default App;
