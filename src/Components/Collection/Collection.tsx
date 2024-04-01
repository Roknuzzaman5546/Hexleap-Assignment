'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import playerImg1 from '../../assets/Ticket_Mockup 3.png'
import playerImg2 from '../../assets/unnamed 1.png'
import bgImg from '../../assets/Group 1975.png'
import Image from 'next/image';


const Collection = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <div className="lg:max-w-screen-2xl w-11/12  mx-auto my-8">
            {/* Collection header */}
            <div className=" bg-gradient-to-b from-[#18272a] to-[#1f1a2a] h-full pb-5">
                {/* collection folder header */}
                <div className=" text-center py-16">
                    <h1 className="text-white text-4xl font-bold">Collection</h1>
                    <p className="text-white">Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable <br /> experience. Grab yours today!</p>
                </div>
                {/* this is swiper card */}
                <div className=" w-[95%] mx-auto">
                    <div className="slider-container">
                        <Slider {...settings}>
                            {/* slider card 1 */}
                            <div className=' relative'>
                                <Image className=' h-[600px] w-[95%] md:w-[78%] ' src={bgImg} alt="slide 1" />
                                <div className='absolute top-0 left-0 md:left-5 flex flex-col justify-center items-center text-center'>
                                    <Image className=' h-[430px] w-full' src={playerImg1} alt="slide 1" />
                                    <h2 className="text-white font-semibold">Las Vegas Aviators</h2>
                                    <p className=' text-white'>Oct 15 | Sun 4:30 PM</p>
                                    <p className=' text-gray-200'>Las Vegas Ballpark, Las Vegas,<br /> Nevada</p>
                                    <h2 className=' text-white bg-black px-3 py-2 mt-1'>Take Flight Collection</h2>
                                </div>
                            </div>
                            <div className=' relative'>
                                <Image className=' h-[600px] w-[95%] md:w-[78%]' src={bgImg} alt="slide 2" />
                                <div className='absolute top-0 left-0 md:left-5 text-center'>
                                    <Image className=' h-[430px] w-full' src={playerImg2} alt="slide 2" />
                                    <h2 className="text-white font-semibold">Sacramento River Cats</h2>
                                    <p className=' text-white'>Oct 15 Sun 4:30 PM</p>
                                    <p className=' text-gray-200'>Sutter Health Park, Sacramento, <br /> California</p>
                                    <h2 className=' text-white bg-black px-3 py-2 mt-1 text-center'>Orange Collection</h2>
                                </div>
                            </div>
                            <div className=' relative'>
                                <Image className=' h-[600px] w-[95%] md:w-[78%] ' src={bgImg} alt="slide 3" />
                                <div className='absolute top-0 left-0 md:left-5 flex flex-col justify-center items-center text-center'>
                                    <Image className=' h-[430px] w-full' src={playerImg1} alt="slide 3" />
                                    <h2 className="text-white font-semibold">Las Vegas Aviators</h2>
                                    <p className=' text-white'>Oct 15 | Sun 4:30 PM</p>
                                    <p className=' text-gray-200'>Las Vegas Ballpark, Las Vegas,<br /> Nevada</p>
                                    <h2 className=' text-white bg-black px-3 py-2 mt-1'>Take Flight Collection</h2>
                                </div>
                            </div>
                            <div className=' relative'>
                                <Image className=' h-[600px] w-[95%] md:w-[78%]' src={bgImg} alt="slide 4" />
                                <div className='absolute top-0 left-0 md:left-5 text-center'>
                                    <Image className=' h-[430px] w-full' src={playerImg2} alt="slide 4" />
                                    <h2 className="text-white font-semibold">Sacramento River Cats</h2>
                                    <p className=' text-white'>Oct 15 Sun 4:30 PM</p>
                                    <p className=' text-gray-200'>Sutter Health Park, Sacramento, <br /> California</p>
                                    <h2 className=' text-white bg-black px-3 py-2 mt-1 text-center'>Orange Collection</h2>
                                </div>
                            </div>
                            <div className=' relative'>
                                <Image className=' h-[600px] w-[95%] md:w-[78%] ' src={bgImg} alt="slide 5" />
                                <div className='absolute top-0 left-0 md:left-5 flex flex-col justify-center items-center text-center'>
                                    <Image className=' h-[430px] w-full' src={playerImg1} alt="slide 5" />
                                    <h2 className="text-white font-semibold">Las Vegas Aviators</h2>
                                    <p className=' text-white'>Oct 15 | Sun 4:30 PM</p>
                                    <p className=' text-gray-200'>Las Vegas Ballpark, Las Vegas,<br /> Nevada</p>
                                    <h2 className=' text-white bg-black px-3 py-2 mt-1'>Take Flight Collection</h2>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collection;