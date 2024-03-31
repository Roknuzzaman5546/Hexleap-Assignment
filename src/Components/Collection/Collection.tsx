"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import playerImg1 from '../../assets/Ticket_Mockup 3.png'
import playerImg2 from '../../assets/unnamed 1.png'
import bgImg from '../../assets/Group 1975.png'
import Image from 'next/image';


const Collection = () => {
    const [swiperRef, setSwiperRef] = useState(null);

    let appendNumber = 4;
    let prependNumber = 1;


    const prepend2 = () => {
        swiperRef.prependSlide([
            '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
            '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
        ]);
    };

    const prepend = () => {
        swiperRef.prependSlide(
            '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
        );
    };

    const append = () => {
        swiperRef.appendSlide(
            '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
        );
    };

    const append2 = () => {
        swiperRef.appendSlide([
            '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
            '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
        ]);
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
                <div>
                    <Swiper
                        onSwiper={setSwiperRef}
                        breakpoints={{
                            500: {
                                width: 650,
                                slidesPerView: 1,
                            },
                            800: {
                                width: 720,
                                slidesPerView: 2,
                            }
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        centeredSlides={true}
                        spaceBetween={40}
                        pagination={{
                            type: 'fraction',
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {/* Slide 1 */}
                        <SwiperSlide>
                            <div className=' relative'>
                                <Image className=' h-[600px] w-[90%] md:' src={bgImg} />
                                <div className='absolute top-0 left-0 md:le text-center'>
                                    <Image className=' h-[430px] w-full' src={playerImg1} />
                                    <h2 className="text-white font-semibold">Las Vegas Aviators</h2>
                                    <p className=' text-white'>Oct 15 | Sun 4:30 PM</p>
                                    <p className=' text-gray-200'>Las Vegas Ballpark, Las Vegas,<br /> Nevada</p>
                                    <h2 className=' text-white bg-black px-3 py-2 mt-1'>Take Flight Collection</h2>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* Slide 2 */}
                        <SwiperSlide>
                            <div className=' relative'>
                                <Image className=' h-[600px] w-[90%] md:' src={bgImg} />
                                <div className='absolute top-0 left-0 md:left-5 text-center'>
                                    <Image className=' h-[430px] w-full' src={playerImg2} />
                                    <h2 className="text-white font-semibold">Sacramento River Cats</h2>
                                    <p className=' text-white'>Oct 15 Sun 4:30 PM</p>
                                    <p className=' text-gray-200'>Sutter Health Park, Sacramento, <br /> California</p>
                                    <h2 className=' text-white bg-black px-3 py-2 mt-1 text-center'>Orange Collection</h2>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* Slide 3 */}
                        <SwiperSlide>
                            <div className=' relative'>
                                <Image className=' h-[600px] w-[90%] md:' src={bgImg} />
                                <div className='absolute top-0 left-0 md:left-5 text-center'>
                                    <Image className=' h-[430px] w-full' src={playerImg1} />
                                    <h2 className="text-white font-semibold">Las Vegas Aviators</h2>
                                    <p className=' text-white'>Oct 15 | Sun 4:30 PM</p>
                                    <p className=' text-gray-200'>Las Vegas Ballpark, Las Vegas,<br /> Nevada</p>
                                    <h2 className=' text-white bg-black px-3 py-2 mt-1'>Take Flight Collection</h2>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* Slide 4 */}
                        <SwiperSlide>
                            <div className=' relative'>
                                <Image className=' h-[600px] w-[90%] md:' src={bgImg} />
                                <div className='absolute top-0 left-0 md:left-5 text-center'>
                                    <Image className=' h-[430px] w-full' src={playerImg2} />
                                    <h2 className="text-white font-semibold">Sacramento River Cats</h2>
                                    <p className=' text-white'>Oct 15 Sun 4:30 PM</p>
                                    <p className=' text-gray-200'>Sutter Health Park, Sacramento, <br /> California</p>
                                    <h2 className=' text-white bg-black px-3 py-2 mt-1 text-center'>Orange Collection</h2>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* Slide 5 */}
                        <SwiperSlide>
                            <div className=' relative'>
                                <Image className=' h-[600px] w-[90%] md:' src={bgImg} />
                                <div className='absolute top-0 left-0 md:left-5 text-center'>
                                    <Image className=' h-[430px] w-full' src={playerImg1} />
                                    <h2 className="text-white font-semibold">Las Vegas Aviators</h2>
                                    <p className=' text-white'>Oct 15 | Sun 4:30 PM</p>
                                    <p className=' text-gray-200'>Las Vegas Ballpark, Las Vegas,<br /> Nevada</p>
                                    <h2 className=' text-white bg-black px-3 py-2 mt-1'>Take Flight Collection</h2>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Collection;