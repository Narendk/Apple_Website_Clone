import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const NextArrow = ({ onClick }) => {
    return (
        <div
            onClick={onClick}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-50 cursor-pointer bg-gray-300 rounded-full shadow-md p-2 hover:bg-gray-400 transition"
        >
            <svg
                className="w-8 h-8 text-gray-800"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
        </div>
    );
};

const PrevArrow = ({ onClick }) => {
    return (
        <div
            onClick={onClick}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-50 cursor-pointer bg-gray-300 rounded-full shadow-md p-2 hover:bg-gray-400 transition"
        >
            <svg
                className="w-8 h-8 text-gray-800"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
        </div>
    );
};

const Latest = () => {

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <section className='mt-20'>
            {/* <div className='ml-12 mb-2'>
                
            </div> */}
            <div className='px-5 py-10 flex-col relative overflow-visible'>
                <h1 className='md:text-3xl text-2xl font-semibold py-4'>The latest. Take a look at what’s new right now.</h1>
                <Slider {...settings}>
                    {data.map((d) => (
                        <div className='px-4 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:rounded-lg'>
                            <div className='rounded-xl relative'>
                                <img className='rounded-xl shadow-xl' src={d.img} alt="" />
                            </div>

                            <div className='flex flex-col justify-center items-start p-4'>
                                <h1 className='text-pink-400 text-2xl font-bold z-20 absolute top-8'>{d.name}</h1>
                                <p className='text-xl font-bold bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 bg-clip-text text-transparent z-20 absolute top-16'>{d.desc}</p>
                                <p className='text-xl text-blue-400 z-20 absolute top-24'>{d.price}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}

const data = [
    {
        name: " iPhone 16 Pro",
        desc: "Apple Intelligence‡",
        price: "From ₹119900.00",
        img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-iphone-16-pro-202409?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=UzBXQnlhUWdraTNvNU1Kb3pEQlpXUHpnd0VsRWFiaWRaRHRaUXBvNTNkalNab1lJcUZwSFVRK1htYlNmZUtPTG54cStVNU5BQmhzbkxYRGxDWUc3R1lXVzNzT2dSajRTd2tFaEdoYUp2VnY1WVJVT21DTzBZRFlBTTZySFFMbHY"
    },
    {
        name: "MacBook Air",
        desc: "Apple Intelligence‡",
        price: "From ₹124900.00",
        img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-macbook-air-202503?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=MjhMcWJ2MGZwbXEwdnBkcUN6ZnhyOWVOMytmanI1M0ZTQWR1RjlDMWJpNXFTRjNxbmh1UnU2R29ibGdpZUFXc0prY3crUWRsN1dqVjRnMHR5S1hVbk15N0N0R0lhUGhlMG1Tdmc3RjZVQ09NTUhYNlZ6OGxKNWpBMHlTSTlldko"
    },
    {
        name: "iPad Air",
        desc: "Apple Intelligence‡",
        price: "From ₹59900.00",
        img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-ipad-air-202503?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=UzBXQnlhUWdraTNvNU1Kb3pEQlpXRFJ0OFRiWngrNGllYTMvQ1dlWDBQZjZXYXJlRUd1cTBYTnRnbTNlazIvMzRHeXB5TnVsU3R6Qjd0Y2JzbURyWEdJV2RaUklyUnViT0c4OGJXRWhUTnArYWpGdS9XeFgvbS9ITnNYOEhYaG4"
    },
    {
        name: "Apple Watch Series 10",
        desc: "Apple Intelligence‡",
        price: "From ₹46900.00",
        img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-watch-s10-202409?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=QWhYaUFuRS9hTUliZ3N5RWVCV09vbGtrQjBqdmhJbWlLcCtlQTMwc01SdjkvamYzRzRvcFlnajNacmhEOC9BeDE1UUxLT2t0cW42N3FvQzVqaGhrVVlSek45NHpYUG91NnZ3YmlDQlpUYnArYWpGdS9XeFgvbS9ITnNYOEhYaG4"
    },
    {
        name: "iPhone 16e",
        desc: "Apple Intelligence‡",
        price: "From ₹59900.00",
        img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-iphone-16e-202502_GEO_IN?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=UzBXQnlhUWdraTNvNU1Kb3pEQlpXSzRWdVVUSklyLzFIUnk0cUZLSXhCVVIzWjZtanZvZXBzWDFVU2JjN3Z3cVJSeXJaL3JqNm9jc2psYU5Qelh0TmlzWjh1WkQ4MmluMWQxWnR4Y3hGMlk0L2ZKQkZvUTFDcWhFMmRvYjZnWWI"
    },
    {
        name: " iPad",
        desc: "Apple Intelligence‡",
        price: "From ₹34900.00",
        img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-ipad-202503_GEO_IN?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=UzBXQnlhUWdraTNvNU1Kb3pEQlpXTStFaldkSE5jRzhvSUNFdVF4czhIaHFTRjNxbmh1UnU2R29ibGdpZUFXcy85S3R4M0M3WGhIQVNOK3lBdUI5K1pJa3h1d2NzUi9CSFVmaUZFaGVvZzFyR1R3SktoWWVaN25ZREdlOXZLelc"
    },
    {
        name: "Mac Studio",
        desc: "Apple Intelligence‡",
        price: "From ₹214900.00",
        img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-mac-studio-202503?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=MjhMcWJ2MGZwbXEwdnBkcUN6ZnhyMFozSSthUWxLelAxTitDZ3M4Tk5nbm45S05qekNUdVUwMVFyK1pKaERUd3NtS0NkZnlUKzBRdlpRai9zMDR0cTA2K1VNZGNlb0hPLzMyemJjWVkyQ0JMQzBoZ1NYMmRGQ2VZWXI2YVMzc2I"
    },
    {
        name: "iPhone 16",
        desc: "Apple Intelligence‡",
        price: "From ₹79900.00",
        img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-iphone-16-202409_GEO_IN?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=UzBXQnlhUWdraTNvNU1Kb3pEQlpXTzBZbG1KSFRCNEs3N1J2VHI2VE83eXFFMHhFSDhqV0JNYUQxSWJ4aDVUMjczTGJ1bkVZOVdxMC9CSUwydmQ4a0lXL2VyS2UzTWpqR2RTME5WUFdGQ1ZPZlp5N0VNRll0TFBiQXhvZERQL2E"
    },
    {
        name: "Apple Watch Ultra 2",
        desc: "Apple Intelligence‡",
        price: "From ₹89900.00",
        img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-watch-ultra-202409_GEO_IN?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=QWhYaUFuRS9hTUliZ3N5RWVCV09vbHdYN09OOVhGMkJZZWFPTlJDYlZ0VVBmcGprWi9ydU5Tdi9VS1BVbTg5N3AwckMxbExydC8yeDhtUjlFVHdKVnRSR0liZklwWjJ2eGlOd1dxRHFuOXBkbjV0V0pDWWtVMHBPWlNWY242UVY"
    },
]

export default Latest