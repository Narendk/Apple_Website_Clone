import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isSidenavOpen, setIsSidenavOpen] = useState(false);

    // Prevent horizontal scroll when sidenav is open
    useEffect(() => {
        if (isSidenavOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isSidenavOpen]);

    return (
        <header className="z-50 relative">
            <nav className="p-3 bg-gray-100 flex items-center md:justify-center justify-between md:gap-8 sticky top-0">

                {/* Apple Logo */}
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="22" viewBox="0 0 50 50">
                        <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"></path>
                    </svg>
                </div>

                {/* Desktop Nav Links */}
                <ul className="text-gray-600 md:space-x-5 hidden md:flex">
                    {['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'Airpods', 'TV & Home', 'Accessories', 'Support'].map((item, i) => (
                        <li key={i}>
                            <a className="hover:underline hover:text-black" href="#">{item}</a>
                        </li>
                    ))}
                </ul>

                {/* Right Icons */}
                <div className='flex items-center md:gap-7 gap-8'>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                        <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
                    </svg>

                    <img className='w-4 h-4' src="https://cdn.pixabay.com/photo/2022/01/11/12/16/cart-6930472_960_720.png" alt="Cart" />

                    {/* Mobile Menu Icon */}
                    <svg
                        onClick={() => setIsSidenavOpen(true)}
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 md:hidden cursor-pointer"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>

                {/* Mobile Side Navigation */}
                <div
                    className={`fixed top-0 right-0 h-full w-3/5 bg-white z-50 transform transition-transform duration-700 ease-in-out ${isSidenavOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    <div className="text-right p-5">
                        <p
                            className="inline cursor-pointer text-xl"
                            onClick={() => setIsSidenavOpen(false)}
                        >
                            ✕
                        </p>
                    </div>

                    <ul className="flex flex-col gap-10 items-center text-xl text-gray-600 mt-10">
                        {['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'Airpods', 'TV & Home', 'Accessories', 'Support'].map((item, i) => (
                            <li key={i}>
                                <a className="hover:underline hover:text-black" href="#">{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* Bottom Message */}
            <p className="text-center mt-5">
                Get up to 12 months of No Cost EMI◊ plus up to ₹8000.00 instant cashback‡ on selected products with eligible cards.{' '}
                <a className="text-blue-600 hover:underline" href="">Shop ›</a>
            </p>
        </header>
    );
};

export default Navbar;
