import React from "react";
import Navbar from './components/navbar/Navbar';
import Hero from './components/Hero';
import { ProductCard, ProductList } from './components/product/ProductComponents';
import { allProducts } from "./data/productData";


function App() {
  return (
    <div>
    <Navbar />
    <main>
      <Hero />
      <ProductList/>
    </main>

   </div>
    
  );
}

export default App;
