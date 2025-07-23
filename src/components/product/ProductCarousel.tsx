import { ProductCard } from './ProductComponents';
import { allProducts } from '../../data/productData';
import { useState } from 'react';

interface CarouselProps {
    products: Product[]
}

export const CarouselDesktop: React.FC<CarouselProps> = ({ products }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const items = 3;
    const totalSlides = Math.ceil(products.length / items);

    const goNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
        );
    };

    const goPrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
        );
    };

    const visibleProducts = products.slice(
        currentIndex * items,
        currentIndex * items + items
    );

    return (
        <div className="relative w-full h-full px-12">
            {/* Productos visibles */}
            <div className="flex justify-center gap-4 overflow-hidden">
                {visibleProducts.map((product) => (
                    <div key={product.id} className="w-full md:w-1/3">
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>

            {/* Botón anterior */}
            <button
                onClick={goPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 mx-4 bg-[#ff0571] hover:bg-white rounded-full shadow"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            {/* Botón siguiente */}
            <button
                onClick={goNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 mx-4 bg-[#ff0571] hover:bg-white rounded-full shadow"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    );
};

export const CarouselMobile: React.FC<CarouselProps> = ({products}) => {
    return (

        <div className='overflow-x-auto scroll-snap-x mandatory px-4'>
            <div className='flex gap-4 w-full '>
                {products.map((product)=> (
                    <div key={product.id}
                    // shrink-0 no achica la imagen entonces usa el w-full
                    className='inline-block w-full shrink-0'>
                        <ProductCard product={product}></ProductCard>
                    </div>
                ))}
            </div>
        </div>
    )
}
