import React from "react";
import Navbar from './components/navbar/Navbar';
import Hero from './components/Hero';
import { ProductCard, ProductList } from './components/product/ProductComponents';
import { allProducts } from './data/productData';
import { CarouselDesktop, CarouselMobile } from "./components/product/ProductCarousel";
import { HomePage } from "./pages/Home";


function App() {
  return (
    <div>
    <Navbar />
    <main>
     <HomePage/>
    </main>

   </div>
    
  );
}

export default App;
