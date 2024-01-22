export default function Cards() {
    return(
        <body className="flex flex-col items-center pt-48 gap-12">
            <h1 className="font-raleway text-3xl md:text-7xl font-extrabold text-center">Bank Transfer payment,<br />demystified</h1>
            <p className="text-center font-raleway md:w-p ">"Say goodbye to long lines and complicated transactions. Bank smarter with secure and
            convenient online payments. Manage your money with ease, anytime, anywhere."</p>

            <div className="flex">
                <div className="flex items-end bg-primaria duration-150 ease-in-out md:w-cards md:h-cards hover:bg-secundaria">
                    <div className="flex flex-col gap-12 p-6 ">
                        <img src="./boost.png" alt="" className="w-12"/>
                        <h1 className="text-white font-raleway text-3xl font-semibold">Boost your payement</h1>
                        <p className="font-raleway text-white">Increased conversion and expension on new markets Dynamic business devolopment.</p>
                    </div>
                </div>
                <div className="flex items-end bg-primaria duration-150 ease-in-out md:w-cards md:h-cards hover:bg-secundaria">
                    <div className="flex flex-col gap-12 p-6 ">
                        <img src="./refund.svg" alt="" className="w-12"/>
                        <h1 className="text-white font-raleway text-3xl font-semibold">Payout & Refund</h1>
                        <p className="font-raleway text-white">Execute pay outs & refundsstraight to your customer`s bank account via Finpay. Increase satisfaction and retention.</p>
                    </div>
                </div>
                <div className="hidden md:flex items-end bg-primaria duration-150 ease-in-out w-cards h-cards hover:bg-secundaria">
                    <div className="flex flex-col gap-12 p-6 ">
                        <img src="./swift.svg" alt="" className="w-12"/>
                        <h1 className="text-white font-raleway text-3xl font-semibold">Swift & Smooth</h1>
                        <p className="font-raleway text-white">No cards or payment details insertation, no additional registration or app download by your customer`s.</p>
                    </div>
                </div>
                <div className="hidden md:flex items-end bg-primaria duration-150 ease-in-out w-cards h-cards hover:bg-secundaria">
                    <div className="flex flex-col gap-12 p-6 ">
                        <img src="./bank.svg" alt="" className="w-12"/>
                        <h1 className="text-white font-raleway text-3xl font-semibold">Bank-Level-Security</h1>
                        <p className="font-raleway text-white">Personal informations is encrypted and protected by industry standard banking security.</p>
                    </div>
                </div>
            </div>
        </body>
    )
}