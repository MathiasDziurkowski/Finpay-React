import { animated, useSpring, useTransition } from "@react-spring/web"
import { IoReorderTwoOutline } from "react-icons/io5";
export default function Header(){
    return(
        <>
        <header className="h-24 flex items-center justify-between bg-primaria md:fixed top-0 left-0 right-0 z-50 w-screen px-12 sm:w-screen md:justify-around">
            <div className="flex font-barlow">
                <h1 className="text-2xl font-extrabold text-white sm:text-4xl">Fin</h1>
                <h1 className="text-2xl text-secundaria sm:text-4xl">Pay</h1>
                <h1 className="text-2xl text-secundaria font-extrabold sm:text-4xl">.</h1>
            </div>
            <div className="hidden gap-11 font-raleway sm:flex">
                <a href="#" className="text-white">Company</a>
                <a href="#" className="text-white">Pricing</a>
                <a href="#" className="text-white">Blogs</a>
                <a href="#" className="text-white">Contact</a>
                <a href="#" className="text-white">FAQ`s</a>
            </div>
            <button className="hidden font-barlow bg-secundaria  font-extrabold py-4 px-11 rounded-full text-lg sm:block">Register</button>
            <button className="visible sm:hidden"><IoReorderTwoOutline color="white" size={24}/></button>    
        </header>
        </>
    )
}