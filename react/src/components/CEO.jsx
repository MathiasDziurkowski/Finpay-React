import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { animated, useInView } from "@react-spring/web";
export default function CEO() {
    const [ref, springs] = useInView(() => ({
        from:{
            y: 200,
            opacity: 0
        },
        to:{
            y: 0,
            opacity: 1
        }
    }))
    return(
        <div className='pt-52'>
            <div className="w-screen md:h-ceo justify-around rounded-xl bg-terciaria flex gap-12 ">
                <animated.div ref={ref} style={springs}>
                <img src="./jack.png" alt="" className=" md:pl-12"/>
                </animated.div>
                <div className="flex flex-col align-middle absolute pl-36 md:relative justify-center gap-32 md:w-ceo">
                    <h1 className="font-raleway md:text-4xl">“It`s easy & simple using finpay bank. We are able to manage our finances to seamlessly, no cap”</h1>
                    <div>
                        <h1 className="font-raleway  text-sm font-extrabold md:text-base md:pl-0">Ballapen Jack</h1>
                        <p className="font-raleway  text-sm text-slate-400 md:text-base md:pl-0">CEO Finpay</p>
                    </div>
                </div>
                <div className="flex items-end justify-end gap-12 p-6 md:p-12">
                    <button className="p-2 md:p-6 rounded-full duration-200 ease-in-out bg-black hover:shadow-gray-800 shadow-md"><FaArrowLeft color="white"  /></button>
                    <button className="p-2 md:p-6 rounded-full duration-200 ease-in-out bg-black hover:shadow-gray-800 shadow-md"><FaArrowRight color="white" /></button>
                </div>
            </div>
        </div>
    )
}