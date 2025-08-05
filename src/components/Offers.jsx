import React from 'react'

const Offers = () => {
    return (
        <section>
            <h1 className='md:text-3xl text-2xl px-10 font-semibold md:px-20'>Savings and offers. Exclusive deals, special stores and more.</h1>
            <div className='md:flex gap-4 md:px-20 px-12 py-10'>
                <div className='w-96 mb-6 relative transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105'>
                    <img className='shadow-2xl rounded-xl' src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-bts-edu-macbook-air-ipad-air-202503?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=bTAvUVhobndWL01MVC9aenBVVGo5YWZmUzB4a3czWENOTU1QWVJ1K01WWk5LOEsyMEhpRHE1T1EzSDFwQVpKVzF1WTFUcUFiTi80Y2ZLM2ZEQmtMcjJhUXpzSGp3b1lnNUp6M2lSQzZEVVBiYmVpOUU2RG04OHJUUjJybTZTeHFHaXB3VUEzd1huUnhZRnQ3eTQ1QUdB" alt="" />
                    <div className='absolute top-5 left-5'>
                        <p className='text-lg '>EDUCATION</p>
                        <p className='text-2xl font-semibold'>Buy a new Mac or iPad with education savings.</p>
                    </div>
                </div>
                <div className='w-96 relative transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105'>
                    <img className='shadow-xl rounded-xl' src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-education-202505_GEO_IN?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=TysyM3c4L0xvQ1dZWVNWTXZ0ekxPSittWmk3eDdiUncra1dwblN1ZGNvU3FFMHhFSDhqV0JNYUQxSWJ4aDVUMm1td3JHMmlHM0d0VzBMMGs5ZHR4WjVlSkU1Z2MySlVkS01WT1YvNHpYRk5pSjMxeUtlRXFVTEgzVzJ3cUlFMjc" alt="" />
                    <div className='absolute top-5 left-5 text-white'>
                        <p>MAC FOR STUDENTS</p>
                        <h2 className='text-2xl font-semibold'>Best in class. In college and beyond.</h2>
                        <p className='text-lg'>Whatever college throws your way, Mac has your back.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Offers