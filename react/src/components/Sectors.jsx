import { animated, useInView, useSpring } from "@react-spring/web"
export default function Sectors() {
    const [ref, springs] = useInView(() => ({
        from:{
            x: -1000,
            opacity: 0,
        },
        to:{
            x:0,
            opacity:1
        }
    }))
    return(
            <animated.div className='bg-white pt-96 flex-col flex text-center gap-12' style={springs} ref={ref}>
            <img src="./img-1.png" alt="" className="w-fit place-self-end pr-64"/>
            <h1 className="text-9xl font-raleway font-extrabold">Business Sectors</h1>
            <div className="flex justify-between p-12">
                <img src="./img-2.png" alt="" />
                <img src="./img-3.png" alt="" />
            </div>
            </animated.div>
    )
}