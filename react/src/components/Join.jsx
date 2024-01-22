import { animated, useInView } from "@react-spring/web"
export default function Join() {

    const [ref, springs] = useInView(() => ({
        from:{
            y:200,
            opacity: 0,
        },
        to:{
            y: 0,
            opacity: 1,
        }
    }))

    return(
        <div className='pt-96'>
            <div className="h-join bg-primaria flex justify-evenly">
                <div className="flex flex-col justify-center w-join gap-16 justify-items-start">
                    <h1 className="font-raleway text-8xl text-white font-extrabold">Get Ready to Join Finpay</h1>
                    <p className="font-raleway text-white">"Streamline your banking with FinPay secure and convenient online payment solutions. Manage your finances with ease, anywhere, anytime."</p>
                    <div className="flex gap-6">
                        <button className="w-44 h-16 bg-secundaria rounded-full font-raleway text-primaria font-bold">Book a demo</button>
                        <button className="w-44 h-16 bg-primaria border border-white rounded-full text-white font-bold">Download app</button>
                    </div>
                </div>
            <img src="./phone_mockup-2.png" alt=""  />
            </div>
        </div>
    )
}