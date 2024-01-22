import { animated, useInView } from '@react-spring/web'
export default function Phone() {

    const [ref, springs] = useInView(() => ({
        from: 
        {
            x: 200,
            opacity: 0,
        }, 
        to: 
        {
            x: 0, 
            opacity: 1,
            
        },
    }))

    return(
        <animated.img src={'./Phone_mockup.png'}
        ref={ref}
        style={springs}/>
    )
}