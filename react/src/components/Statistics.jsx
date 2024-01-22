import { animated, useInView} from "@react-spring/web";
export default function Statistics() {
    
    const [ref, springs] = useInView(
    () => ({
        from: {
            opacity: 0,
            y: 200,
        },
        to:{
            opacity: 1,
            y: 0,
        },
    })
    )


    return(
        <animated.div ref={ref} style={springs}>
            <div className='flex items-center gap-20'>
            <div className='flex flex-col'>
             <h1 className='font-raleway text-6xl text-white font-semibold'>400k+</h1>
             <p className='font-raleway text-lg text-white'>User use Mobile app</p>   
             </div>
             <div className='flex flex-col'>
                <h1 className='font-raleway text-6xl text-white font-semibold'>100+</h1>
                <p className='font-raleway text-lg text-white'>Features in app</p>
             </div>
             <div className='flex flex-col'>
                <h1 className='font-raleway text-6xl text-white font-semibold'>5.0</h1>
                <p className='font-raleway text-lg text-white'>Rating App</p>  
             </div>
            </div>
        </animated.div>
    )
}