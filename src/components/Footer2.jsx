import React from 'react'

const Footer2 = () => {
    return (
        <footer className='md:px-32 flex flex-col gap-4'>
            <div className='flex px-2'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="22" viewBox="0 0 50 50">
                    <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"></path>
                </svg>
                <h2 className='text-gray-600'>⮞ Apple Store Online</h2>
            </div>
            <div className='md:flex hidden justify-start gap-32'>
                <div className='flex flex-col gap-3'>
                    <ul className='text-sm text-gray-600 flex flex-col gap-1'>
                        <li className='text-black'>Shop and Learn</li>
                        <li className='hover:underline'><a href="#">Store</a></li>
                        <li className='hover:underline'><a href="#">Mac</a></li>
                        <li className='hover:underline'><a href="#">iPad</a></li>
                        <li className='hover:underline'><a href="#">iPhone</a></li>
                        <li className='hover:underline'><a href="#">Watch</a></li>
                        <li className='hover:underline'><a href="#">AirPods</a></li>
                        <li className='hover:underline'><a href="#">TV & Home</a></li>
                        <li className='hover:underline'><a href="#">AirTag</a></li>
                        <li className='hover:underline'><a href="#">Accessories</a></li>
                        <li className='hover:underline'><a href="#">Gift Cards</a></li>
                    </ul>
                    <ul className='text-sm text-gray-600 flex flex-col gap-1'>
                        <li className='text-black'>Apple Wallet</li>
                        <li className='hover:underline'><a href="#">Wallet</a></li>
                    </ul>
                </div>
                <div className='flex flex-col gap-3'>
                    <ul className='text-sm text-gray-600 flex flex-col gap-1'>
                        <li className='text-black'>Account</li>
                        <li className='hover:underline'><a href="#">Manage Your Apple Account</a></li>
                        <li className='hover:underline'><a href="#">Apple Store Account</a></li>
                        <li className='hover:underline'><a href="#">iCloud.com</a></li>
                    </ul>
                    <ul className='text-sm text-gray-600 flex flex-col gap-1'>
                        <li className='text-black'>Entertainment</li>
                        <li className='hover:underline'><a href="#">Apple One</a></li>
                        <li className='hover:underline'><a href="#">Apple TV+</a></li>
                        <li className='hover:underline'><a href="#">Apple Music</a></li>
                        <li className='hover:underline'><a href="#">Apple Arcade</a></li>
                        <li className='hover:underline'><a href="#">Apple Podcasts</a></li>
                        <li className='hover:underline'><a href="#">Apple Books</a></li>
                        <li className='hover:underline'><a href="#">Apple Store</a></li>
                    </ul>
                </div>
                <div className='flex flex-col gap-3'>
                    <ul className='text-sm text-gray-600 flex flex-col gap-1'>
                        <li className='text-black'>Apple Store</li>
                        <li className='hover:underline'><a href="#">Find a Store</a></li>
                        <li className='hover:underline'><a href="#">Genius Bar</a></li>
                        <li className='hover:underline'><a href="#">Today at Apple</a></li>
                        <li className='hover:underline'><a href="#">Apple Summer Camp</a></li>
                        <li className='hover:underline'><a href="#">Ways to Buy</a></li>
                        <li className='hover:underline'><a href="#">Apple Trade In</a></li>
                        <li className='hover:underline'><a href="#">Recycling Programme</a></li>
                        <li className='hover:underline'><a href="#">Order Status</a></li>
                        <li className='hover:underline'><a href="#">Shopping Help</a></li>
                    </ul>
                </div>
                <div className='flex flex-col gap-3'>
                    <ul className='text-sm text-gray-600 flex flex-col gap-1'>
                        <li className='text-black'>For Business</li>
                        <li className='hover:underline'><a href="#">Apple and Business</a></li>
                    </ul>
                    <ul className='text-sm text-gray-600 flex flex-col gap-1'>
                        <li className='text-black'>For Education</li>
                        <li className='hover:underline'><a href="#">Apple and Education</a></li>
                        <li className='hover:underline'><a href="#">Shop for Education</a></li>
                        <li className='hover:underline'><a href="#">Shop for College</a></li>
                    </ul>
                    <ul className='text-sm text-gray-600 flex flex-col gap-1'>
                        <li className='text-black'>For Healthcare</li>
                        <li className='hover:underline'><a href="#">Apple in Healthcare</a></li>
                        <li className='hover:underline'><a href="#">Health on Apple Watch</a></li>
                    </ul>
                </div>
                <div className='flex flex-col gap-3'>
                    <ul className='text-sm text-gray-600 flex flex-col gap-1'>
                        <li className='text-black'>Apples Values</li>
                        <li className='hover:underline'><a href="#">Accessibility</a></li>
                        <li className='hover:underline'><a href="#">Enivronment</a></li>
                        <li className='hover:underline'><a href="#">Privacy</a></li>
                        <li className='hover:underline'><a href="#">Supply Chain</a></li>
                    </ul>
                    <ul className='text-sm text-gray-600 flex flex-col gap-1'>
                        <li className='text-black'>About Apple</li>
                        <li className='hover:underline'><a href="#">Newsroom</a></li>
                        <li className='hover:underline'><a href="#">Apple Leadership</a></li>
                        <li className='hover:underline'><a href="#">Carrer Opportunities</a></li>
                        <li className='hover:underline'><a href="#">Investors</a></li>
                        <li className='hover:underline'><a href="#">Ethics & Compliance</a></li>
                        <li className='hover:underline'><a href="#">Events</a></li>
                        <li className='hover:underline'><a href="#">Contact Apple</a></li>
                    </ul>
                </div>
            </div>

            <div className='md:hidden px-5 text-sm flex flex-col gap-1'>
                <div className="w-full h-[2px] bg-gray-300 my-1"></div>
                <p>Shop and Learn</p>
                <div className="w-full h-[2px] bg-gray-300 my-1"></div>
                <p>Apple Wallet</p>
                <div className="w-full h-[2px] bg-gray-300 my-1"></div>
                <p>Account</p>
                <div className="w-full h-[2px] bg-gray-300 my-1"></div>
                <p>Entertainment</p>
                <div className="w-full h-[2px] bg-gray-300 my-1"></div>
                <p>Apple Store</p>
                <div className="w-full h-[2px] bg-gray-300 my-1"></div>
                <p>For Business</p>
                <div className="w-full h-[2px] bg-gray-300 my-1"></div>
                <p>For Education</p>
                <div className="w-full h-[2px] bg-gray-300 my-1"></div>
                <p>For Healthcare</p>
                <div className="w-full h-[2px] bg-gray-300 my-1"></div>
                <p>Apple Values</p>
                <div className="w-full h-[2px] bg-gray-300 my-1"></div>
                <p>About Apple</p>
                <div className="w-full h-[2px] bg-gray-300 my-1"></div>
            </div>

            <div className='text-sm mt-2 text-gray-600 px-1'>
                More ways to shop: <a href="#" className='text-blue-600 underline'> Find an Apple Store </a> or <a href="#" className='text-blue-600 underline'> other retailer </a> near you. Or call 000800 040 1966.
            </div>

            <div className="w-full h-[2px] bg-gray-300 my-1"></div>

            <div className='flex justify-between mb-5'>
                <div className='md:flex md:gap-5 flex flex-col gap-2 px-1'>
                    <p className='text-sm text-gray-600'>Copyright © 2025 Apple Inc. All rights reserved.</p>
                    <ul className='flex gap-2'>
                        <li className='text-sm text-gray-600'>Privacy Policy |</li>
                        <li className='text-sm text-gray-600'>Terms and Use |</li>
                        <li className='text-sm text-gray-600'>Sales Policy |</li>
                        <li className='text-sm text-gray-600'>Legal |</li>
                        <li className='text-sm text-gray-600'>Site Map</li>
                    </ul>
                </div>
                <div className='md:flex hidden text-sm text-gray-600'>
                    India
                </div>
            </div>
        </footer>
    )
}

export default Footer2