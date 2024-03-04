import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [onToggle, setOnToggle] = useState(false);

    return (
        <header> 
            <nav className="flex items-center justify-between flex-wrap fixed top-0 p-6 z-10 w-full bg-blue">
                <div className="flex items-center flex-no-shrink ml-2 md:ml-6 lg:ml-6 text-white text-3xl font-paragraph font-semibold" id="nav-logo"> Simulador Memoria </div>

                <div className={`w-full flex-grow lg:items-center lg:w-auto lg:block pt-6 lg:pt-0 ${onToggle ? "" : "hidden"}`} id="nav-content">
                    <ul className="list-reset lg:flex justify-end flex-1 items-center text-xl">
                        <li className="mr-16 relative">
                            <Link to="/estaticas-fijo" className="inline-block font-paragraph font-medium text-white hover:scale-105 py-2 px-4" 
                            onClick={() => {setOnToggle(false);}}>Estáticas tamaño fijo</Link>
                        </li>
                        
                        <li className="mr-16 relative">
                            <Link to="/estaticas-variable" className="inline-block font-paragraph font-medium text-white hover:scale-105 py-2 px-4" 
                            onClick={() => {setOnToggle(false);}}>Estáticas tamaño variable</Link>
                        </li>

                        <li className="mr-6 relative">
                            <button className="flex items-center font-paragraph font-medium text-white hover:scale-105 py-2 px-4 focus:outline-none"
                                onClick={() => setOnToggle(!onToggle)}>
                                Dinámicas
                                <svg className={`w-5 h-5 ml-2 ${onToggle ? "-rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {onToggle && (
                                <ul className="absolute bg-white shadow-md mt-2 py-2 w-52">
                                    <li><Link to="/dinamicas-sin-compactacion" className="text-darkGray hover:text-white hover:bg-blue py-2 px-4 block">Sin compactación</Link></li>
                                    <li><Link to="/dinamicas-con-compactacion" className="text-darkGray hover:text-white hover:bg-blue py-2 px-4 block">Con compactación</Link></li>
                                </ul>
                            )}
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;
