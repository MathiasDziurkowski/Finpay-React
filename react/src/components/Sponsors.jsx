import { animated, useInView } from "@react-spring/web"
export default function Sponsors(){
     
    const [ref, springs] = useInView(() => ({
        from:{
            opacity: 0,
            x: -20,
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
        <div className="flex gap-2 items-center  md:gap-16 ">
            <img src="./stripe.png" alt="" className="duration-200 h-6 ease-in-out md:h-fit md:hover:scale-110"/>
            <img src="./google.png" alt="" className="duration-200 h-6 ease-in-out md:h-fit md:hover:scale-110"/>
            <img src="./visa.png" alt="" className="duration-200 hidden  md:block ease-in-out md:scale-100 md:hover:scale-110"/>
            <img src="./linkedin.png" alt="" className="duration-200 hidden  md:block ease-in-out md:scale-100 md:hover:scale-110"/>
            <img src="./samsung.png" alt="" className="duration-200  h-6 ease-in-out md:h-fit md:hover:scale-110"/>
            <img src="./zoom.png" alt="" className="duration-200 hidden  md:block ease-in-out md:scale-100 md:hover:scale-110"/>
            <img src="./spotify.png" alt="" className="duration-200 h-6 ease-in-out md:h-fit hover:scale-110"/>
        </div>
        </animated.div>
        </body>
    )
}