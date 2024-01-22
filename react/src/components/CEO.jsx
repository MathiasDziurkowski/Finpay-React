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
            <div className="w-screen h-ceo justify-around rounded-xl bg-terciaria flex gap-12 ">
                <animated.div ref={ref} style={springs}>
                <img src="./jack.png" alt="" className="pl-12"/>
                </animated.div>
                <div className="flex flex-col align-middle justify-center gap-32 w-ceo">
                    <h1 className="font-raleway text-4xl">“It`s easy & simple using finpay bank. We are able to manage our finances to seamlessly, no cap”</h1>
                    <div>
                        <h1 className="font-raleway font-extrabold">Ballapen Jack</h1>
                        <p className="font-raleway text-slate-400">CEO Finpay</p>
                    </div>
                </div>
                <div className="flex items-end justify-end gap-12 p-12">
                    <button className="p-6 rounded-full duration-200 ease-in-out bg-black hover:shadow-gray-800 shadow-md"><FaArrowLeft color="white"  /></button>
                    <button className="p-6 rounded-full duration-200 ease-in-out bg-black hover:shadow-gray-800 shadow-md"><FaArrowRight color="white" /></button>
                </div>
            </div>
        </div>
    )
}