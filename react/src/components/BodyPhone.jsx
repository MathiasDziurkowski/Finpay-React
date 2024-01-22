import { useEffect } from 'react'
import Header from './Header'
import Phone from './Phone';
import Statistics from './Statistics';
export default function BodyPhone() {
    return(
    <>
    <body className="bg-primaria md:flex justify-center items-center md:gap-12 p-12">
        <div className="flex flex-col p-0  gap-6 md:gap-12 md:p-6">
            <h1 className="text-5xl text-white font-extrabold font-ralewaytext-white md:text-9xl leading-tight">Finpay Your<h1 className="text-secundaria">Payment</h1><h1>Now!</h1></h1>
            <p className='font-raleway w-fit text-white sm:w-card-p'>
            Streamline your banking with FinPay's secure and convenient online
            payment solutions. Manage your finances with ease, anywhere, anytime.</p>
            <div className='flex gap-6 md:gap-12'>
                <button className='p-2 bg-secundaria rounded-full font-extrabold font-raleway md:p-6'>Book a demo</button>
                <button className='p-2 bg-primaria border-white border rounded-full font-extrabold font-raleway text-white md:p-6'>Create a free account</button>
            </div>
            <Statistics></Statistics>
        </div>
        <Phone></Phone>
    </body>
    </>
    )
}