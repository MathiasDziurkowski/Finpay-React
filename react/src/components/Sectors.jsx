import { animated, useInView, useSpring } from "@react-spring/web"
export default function Sectors() {
    const [ref, springs] = useInView(() => ({
        from:{
            x: -100,
            opacity: 0,
        },
        to:{
            x:0,
            opacity:1
        }
    }))
    return(
            <animated.div className='bg-white pt-96 flex-col flex text-center gap-12' style={springs} ref={ref}>
            <img src="./img-1.png" alt="" className="w-24 md:w-fit place-self-end md:pr-64"/>
            <h1 className="text-5xl md:text-9xl font-raleway font-extrabold">Business Sectors</h1>
            <div className="flex justify-between p-12">
                <img src="./img-2.png" alt="" className="w-32 md:w-fit" />
                <img src="./img-3.png" alt="" className="w-32 md:w-fit" />
            </div>
            </animated.div>
    )
}