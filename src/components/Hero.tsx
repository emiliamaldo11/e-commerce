import React from "react";
import { JSX } from "react";

export default function Hero():JSX.Element {
    return (
        <section className="relative text-[#ff0571] font-archivo-black font-extrabold text-shadow tracking-wider uppercase">

            <div className="absolute bottom-0 ml-4 mb-4 md:ml-8 md:mb-20 sm:space-y-2 ">
                <h1 className="text-2xl md:text-5xl">Nueva coleccion</h1>
                <div className="flex items-center ">
                    <h2 className="text-sm md:text-lg pr-1">Comprar ahora</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </div>
            </div>

            {/* banner movil */}
            <img src="/banner-movil.png" alt="banner" className="block md:hidden"></img>
            {/* banner web */}
            <img src="/banner.webp" alt="banner" className="hidden md:flex"></img>

        </section>
    );
}