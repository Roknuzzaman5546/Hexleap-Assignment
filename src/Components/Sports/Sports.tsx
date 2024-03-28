"use client"
import Image from "next/image";
import MaskGroup1 from '../../assets/Mask group (1).png'

const Sports = () => {
    return (
        <div className=" xl:w-[95%] lg:w-[92%] md:[80%] w-[86%] mx-auto mt-8">
            <h2 className=" text-2xl font-bold border-b-[3px] my-4 pb-2 inline-block border-blue-500">Sports</h2>
            <div className=" grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 xl:gap-2 lg:gap-2 md:gap-2 gap-2">
                {/* Sport card 1 */}
                <div className=" h-[450px] xl:w-[267px] lg:w-[243px] md:w-[260px] w-[270px]  text-center bg-gray-600 ">
                    {/* Image */}
                    <Image src={MaskGroup1}
                        className=' mx-auto pb-1 w-[90%] h-[330px] pt-[10px]'
                        alt='Fiverr Image' />
                    {/* Card text part */}
                    <h2 className=" text-white text-xs pb-2 mt-[10px]">Sacramento River Cats</h2>
                    <div className=" h-[54px] w-[90%] flex justify-evenly items-center gap-3 bg-gray-900 text-center mx-auto  mt-[6px]">
                        <div className=" text-left">
                            <h2 className=" text-xs text-slate-400">total events</h2>
                            <h1 className=" text-white text-xs font-bold pt-[2px]">48 Events</h1>
                        </div>
                        <div className=" text-left">
                            <h2 className=" text-xs text-slate-400">sport</h2>
                            <h1 className=" text-white text-xs font-bold pt-[2px]">baseball</h1>
                        </div>
                    </div>
                </div>
                {/* Sport card 2 */}
                <div className=" h-[450px] xl:w-[267px] lg:w-[243px] md:w-[260px] w-[270px]  text-center bg-gray-600 ">
                    {/* Image */}
                    <Image src={MaskGroup1}
                        className=' mx-auto pb-1 w-[90%] h-[330px] pt-[10px]'
                        alt='Fiverr Image' />
                    {/* Card text part */}
                    <h2 className=" text-white pb-2 mt-[10px]">Sacramento River Cats</h2>
                    <div className=" h-[54px] w-[90%] flex justify-evenly items-center gap-3 bg-gray-900 text-center mx-auto  mt-[6px]">
                        <div className=" text-left">
                            <h2 className=" text-xs text-slate-400">total events</h2>
                            <h1 className=" text-white text-xs font-bold pt-[2px]">48 Events</h1>
                        </div>
                        <div className=" text-left">
                            <h2 className=" text-xs text-slate-400">sport</h2>
                            <h1 className=" text-white text-xs font-bold pt-[2px]">baseball</h1>
                        </div>
                    </div>
                </div>
                {/* Sport card 3 */}
                <div className=" h-[450px] xl:w-[267px] lg:w-[243px] md:w-[260px] w-[270px]  text-center bg-gray-600 ">
                    {/* Image */}
                    <Image src={MaskGroup1}
                        className=' mx-auto pb-1 w-[90%] h-[330px] pt-[10px]'
                        alt='Fiverr Image' />
                    {/* Card text part */}
                    <h2 className=" text-white pb-2 mt-[10px]">Sacramento River Cats</h2>
                    <div className=" h-[54px] w-[90%] flex justify-evenly items-center gap-3 bg-gray-900 text-center mx-auto  mt-[6px]">
                        <div className=" text-left">
                            <h2 className=" text-xs text-slate-400">total events</h2>
                            <h1 className=" text-white text-xs font-bold pt-[2px]">48 Events</h1>
                        </div>
                        <div className=" text-left">
                            <h2 className=" text-xs text-slate-400">sport</h2>
                            <h1 className=" text-white text-xs font-bold pt-[2px]">baseball</h1>
                        </div>
                    </div>
                </div>
                {/* Sport card 4 */}
                <div className=" h-[450px] xl:w-[267px] lg:w-[243px] md:w-[260px] w-[270px]  text-center bg-gray-600 ">
                    {/* Image */}
                    <Image src={MaskGroup1}
                        className=' mx-auto pb-1 w-[90%] h-[330px] pt-[10px]'
                        alt='Fiverr Image' />
                    {/* Card text part */}
                    <h2 className=" text-white pb-2 mt-[10px]">Sacramento River Cats</h2>
                    <div className=" h-[54px] w-[90%] flex justify-evenly items-center gap-3 bg-gray-900 text-center mx-auto  mt-[6px]">
                        <div className=" text-left">
                            <h2 className=" text-xs text-slate-400">total events</h2>
                            <h1 className=" text-white text-xs font-bold pt-[2px]">48 Events</h1>
                        </div>
                        <div className=" text-left">
                            <h2 className=" text-xs text-slate-400">sport</h2>
                            <h1 className=" text-white text-xs font-bold pt-[2px]">baseball</h1>
                        </div>
                    </div>
                </div>
                {/* Sport card 5 */}
                <div className=" h-[450px] xl:w-[267px] lg:w-[243px] md:w-[260px] w-[270px]  text-center bg-gray-600 ">
                    {/* Image */}
                    <Image src={MaskGroup1}
                        className=' mx-auto pb-1 w-[90%] h-[330px] pt-[10px]'
                        alt='Fiverr Image' />
                    {/* Card text part */}
                    <h2 className=" text-white pb-2 mt-[10px]">Sacramento River Cats</h2>
                    <div className=" h-[54px] w-[90%] flex justify-evenly items-center gap-3 bg-gray-900 text-center mx-auto  mt-[6px]">
                        <div className=" text-left">
                            <h2 className=" text-xs text-slate-400">total events</h2>
                            <h1 className=" text-white text-xs font-bold pt-[2px]">48 Events</h1>
                        </div>
                        <div className=" text-left">
                            <h2 className=" text-xs text-slate-400">sport</h2>
                            <h1 className=" text-white text-xs font-bold pt-[2px]">baseball</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sports;