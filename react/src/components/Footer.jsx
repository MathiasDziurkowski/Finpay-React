import { animated, useInView } from "@react-spring/web"
export default function Footer() {
    const [ref, springs] = useInView(() => ({
        from:{
            x:-200,
            opacity: 0,
        },
        to:{
            x:0,
            opacity: 1,
        }
    }))
    return(
    <>
    <div className="pt-96 flex justify-center gap-24">
        <animated.div style={springs} ref={ref}>
        <h1 className="flex w-fit text-8xl rounded-full bg-secundaria">Get Sta<h1 className="bg-white">rted</h1></h1>
        </animated.div>
    </div>
    <footer className="pt-56 flex flex-col gap-12">
        <hr className="border"/>
        <div className="flex justify-around">
            <p className="font-raleway">©2023 Finpay. All rights reserved</p>
            <p className="font-raleway">Privacy Policy | Terms & Conditions | Cookies Policy </p>
            <p className="font-raleway">Developed By Mathias Dziurkowski</p>
        </div>
    </footer>
    </>
    )
}