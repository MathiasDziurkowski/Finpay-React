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
            <div className="h-join bg-primaria flex flex-col items-center md:flex-wrap justify-evenly md:gap-0">
                <div className="flex flex-col justify-center w-join gap-16 items-center">
                    <h1 className="font-raleway text-2xl md:text-8xl text-white font-extrabold">Get Ready to Join Finpay</h1>
                    <p className="font-raleway w-1/2 text-white md:w-full">"Streamline your banking with FinPay secure and convenient online payment solutions. Manage your finances with ease, anywhere, anytime."</p>
                    <div className="flex gap-6">
                        <button className="md:w-44 md:h-16 bg-secundaria rounded-full font-raleway text-primaria font-bold">Book a demo</button>
                        <button className="md:w-44 md:h-16 bg-primaria border border-white rounded-full text-white font-bold">Download app</button>
                    </div>
                </div>
            <img src="./phone_mockup-2.png" alt="" className="h-1/2 w-1/2 md:h-screen md:w-fit"  />
            </div>
        </div>
    )
}