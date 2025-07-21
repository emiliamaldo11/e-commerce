import { JSX } from "react";
import React from "react";


export default function MobileMenu():JSX.Element {
    return (

        <div className="block md:hidden absolute top-full left-0 w-[90%] h-[calc(100dvh-6rem)] z-50 bg-[#30011a] flex flex-col justify-between pt-5 pb-4 pl-4 pr-4 mb-0">

            {/* Parte arriba */}
            <div>
                <ul className="space-y-8 text-xl">
                    <li><a href="#">Inicio</a></li>
                    <li className="flex justify-between items-center">
                        <a href="#">Productos</a>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </a>
                    </li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </div>

            {/* Parte abajo */}
            <div className="text-base space-y-4">
                <hr className="border-[#ff0571]" />
                <ul className="space-y-2">
                    <li><a href="#">Ayuda</a></li>
                    <li><a href="#">Cuenta</a></li>
                </ul>
            </div>

        </div>

    )
}