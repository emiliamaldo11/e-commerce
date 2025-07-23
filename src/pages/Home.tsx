import Hero from "../components/Hero"
import { CarouselDesktop, CarouselMobile } from "../components/product/ProductCarousel"
import { ProductList } from "../components/product/ProductComponents"
import { allProducts } from "../data/productData"

export const HomePage: React.FC = () => {
    return (
        <div>
            {/* hero section */}
            <section>
               <Hero />
            </section>
       
            {/* <ProductList /> */}

            {/* carousel section */}
            <section>
                <div className="block md:hidden">
                   <CarouselMobile products={allProducts} />
                </div>

                <div className="hidden md:block"> 
                   <CarouselDesktop products={allProducts} />
                </div>
            </section>

        </div>
    )
}