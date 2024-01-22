import { animated, useInView } from "@react-spring/web"
export default function Sponsors(){
     
    const [ref, springs] = useInView(() => ({
        from:{
            opacity: 0,
            x: -500,
        },
        to:{
            opacity: 1,
            x: 0,
        }
    }))

    return(
        <body className=" flex flex-col bg-white pt-52 items-center">
        <div className="flex justify-center p-12">
        <p className="font-raleway font-semibold">Join 10,000 Business today</p>
        </div>
        <animated.div ref={ref} style={springs}>
        <div className="flex gap-16 items-center">
            <img src="./stripe.png" alt="" className="duration-200 ease-in-out scale-100 hover:scale-110"/>
            <img src="./google.png" alt="" className="duration-200 ease-in-out scale-100 hover:scale-110"/>
            <img src="./visa.png" alt="" className="duration-200 ease-in-out scale-100 hover:scale-110"/>
            <img src="./linkedin.png" alt="" className="duration-200 ease-in-out scale-100 hover:scale-110"/>
            <img src="./samsung.png" alt="" className="duration-200 ease-in-out scale-100 hover:scale-110"/>
            <img src="./zoom.png" alt="" className="duration-200 ease-in-out scale-100 hover:scale-110"/>
            <img src="./spotify.png" alt="" className="duration-200 ease-in-out scale-100 hover:scale-110"/>
        </div>
        </animated.div>
        </body>
    )
}