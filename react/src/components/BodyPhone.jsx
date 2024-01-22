import { useEffect } from 'react'
import Header from './Header'
import Phone from './Phone';
import Statistics from './Statistics';
export default function BodyPhone() {
    return(
    <>
    <body className="bg-primaria flex justify-center items-center gap-12 p-12">
        <div className="flex flex-col p-6 gap-12">
            <h1 className="text-9xl leading-tight font-extrabold font-raleway text-white">Finpay Your<h1 className="text-secundaria">Payment</h1><h1>Now!</h1></h1>
            <p className='font-raleway text-white w-card-p'>
            Streamline your banking with FinPay's secure and convenient online
            payment solutions. Manage your finances with ease, anywhere, anytime.</p>
            <div className='flex gap-12'>
                <button className='p-6 bg-secundaria rounded-full font-extrabold font-raleway'>Book a demo</button>
                <button className='p-6 bg-primaria border-white border rounded-full font-extrabold font-raleway text-white'>Create a free account</button>
            </div>
            <Statistics></Statistics>
        </div>
        <Phone></Phone>
    </body>
    </>
    )
}