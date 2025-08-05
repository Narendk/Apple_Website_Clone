import React from 'react'

const QuickLinks = () => {
    return (
        <section className='px-20 flex-col'>
            <h2 className='text-3xl font-semibold mb-6'>Quick Links</h2>
            <div className='md:flex md:gap-5'>
                <div className='flex gap-4'>
                    <button className='border border-black px-4  py-2 rounded-full hover:bg-black hover:text-white hover:underline'>Find a Store 🡥</button>
                    <button className='border border-black px-4  py-2 rounded-full hover:bg-black hover:text-white hover:underline'>Order Status 🡥</button>
                </div>
                <div className='flex gap-4'>
                    <button className='border border-black px-4  py-2 rounded-full hover:bg-black hover:text-white hover:underline'>Shopping Help 🡥</button>
                    <button className='border border-black px-4  py-2 rounded-full hover:bg-black hover:text-white hover:underline'>Your Saves 🡥</button>
                </div>
            </div>
        </section>
    )
}

export default QuickLinks 