import { JSX, useState } from "react";
import React from "react";
import HamburgerButton from "./HamburgerButton";
import MobileMenu from "./MobileMenu";

export default function Navbar(): JSX.Element {
    const [hover, setHover] = useState<boolean>(false);
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    return (

        <header>
            {/* info */}
            <div className="bg-[#ff0571] py-2 font-bebas uppercase text-xs font-bold tracking-widest text-center">10% off en efectivo</div>

            <nav className="relative flex px-6 py-5 md:px-16 bg-[#30011a] text-[#ff0571] items-center justify-between font-bebas traking-widest uppercase font-bold">
                {/* hamburger button*/}
                <HamburgerButton isOpen={menuOpen} toggleMenu={()=>setMenuOpen(!menuOpen)}></HamburgerButton>

                {/* menu hamburguesa mobil */}
                {menuOpen && <MobileMenu></MobileMenu>}
           

                {/* menu completo se muestra de md en adelante*/}
                <div className="hidden md:flex gap-x-8 text-xs">
                    <a href="/">Inicio</a>
                    <a href="/">Productos</a>
                    <a href="/">Contacto</a>
                </div>

                {/* logo */}
                <div className="absolute left-1/2 transform -translate-x-1/2 cursor-pointer">

                    <img onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                        src={hover ? "/logo-reves.png" : "/logo.png"}
                        className="h-10 w-auto"
                        alt="logo">
                    </img>

                </div>

                {/* filtrar y carrito: despues*/}
                <div className="flex gap-x-6">
                    <a href="/"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    </a>
                    <a href="/"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                    </a>
                </div>


            </nav>

        </header>
    );
}
