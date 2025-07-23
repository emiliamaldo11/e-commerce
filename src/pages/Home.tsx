import Hero from "../components/Hero"
import { CarouselDesktop, CarouselMobile } from "../components/product/ProductCarousel"
import { ProductList } from "../components/product/ProductComponents"
import { allProducts } from "../data/productData"

export const HomePage: React.FC = () => {
    const featured = allProducts.filter((product)=> product.isFeatured)
    return (
        <div>
            {/* hero section */}
            <section>
               <Hero />
            </section>
       
            {/* <ProductList /> */}

            {/* carousel section */}
            <section>

                <div className="flex justify-between text-center items-center px-4 pb-4 pt-4 mt-4 sm:pt-8 md:px-12 font-archivo-black font-extrabold uppercase tracking-wide md:tracking-widest ">
                    <div className="text-md sm:text-xl">Destacados</div>
                    <div className="text-xs underline"> <a href="">Ver mas</a></div>
                </div>

                <div className="block md:hidden">
                   <CarouselMobile products={featured} />
                </div>

                <div className="hidden md:block"> 
                   <CarouselDesktop products={featured} />
                </div>
            </section>

        </div>
    )
}