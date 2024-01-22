import { animated, useSpring, useTransition } from "@react-spring/web"
export default function Header(){
    return(
        <>
        <header className="h-24 flex justify-around items-center bg-primaria fixed top-0 left-0 right-0 z-50">
            <div className="flex font-barlow">
                <h1 className="text-4xl font-extrabold text-white">Fin</h1>
                <h1 className="text-4xl text-secundaria">Pay</h1>
                <h1 className="text-4xl text-secundaria font-extrabold">.</h1>
            </div>
            <div className="flex gap-11 font-raleway">
                <a href="#" className="text-white">Company</a>
                <a href="#" className="text-white">Pricing</a>
                <a href="#" className="text-white">Blogs</a>
                <a href="#" className="text-white">Contact</a>
                <a href="#" className="text-white">FAQ`s</a>
            </div>
            <animated.button>
            <button className="font-barlow bg-secundaria  font-extrabold py-4 px-11 rounded-full text-lg ">Register</button>
            </animated.button>
        </header>
        </>
    )
}