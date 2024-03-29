// This is sports card section Component
"use client"
import Image from "next/image";
import MaskGroup1 from '../../assets/Mask group (1).png'
import MaskGroup2 from '../../assets/Mask group (2).png'
import MaskGroup3 from '../../assets/Mask group.png'
import MaskGroup4 from '../../assets/unnamed.png'
const Sports = () => {
    return (
        <div className=" lg:max-w-screen-2xl w-11/12  mx-auto mt-8">
            <h2 className=" text-2xl font-bold border-b-[3px] my-4 pb-2 inline-block border-blue-500">Sports</h2>
            <div className=" grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
                {/* Sport card 1 */}
                <div className=" h-[450px]  text-center bg-gray-600 ">
                    {/* Image */}
                    <Image src={MaskGroup1}
                        className=' mx-auto pb-1 w-[90%] h-[340px] pt-[10px]'
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
                {/* Sport card 2 */}
                <div className=" h-[450px]  text-center bg-gray-600 ">
                    {/* Image */}
                    <Image src={MaskGroup3}
                        className=' mx-auto pb-1 w-[90%] h-[340px] pt-[10px]'
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
                <div className=" h-[450px]  text-center bg-gray-600 ">
                    {/* Image */}
                    <Image src={MaskGroup2}
                        className=' mx-auto pb-1 w-[90%] h-[340px] pt-[10px]'
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
                <div className=" h-[450px]  text-center bg-gray-600 ">
                    {/* Image */}
                    <Image src={MaskGroup3}
                        className=' mx-auto pb-1 w-[90%] h-[340px] pt-[10px]'
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
                <div className=" h-[450px]  text-center bg-gray-600 ">
                    {/* Image */}
                    <div>
                        <p className=" bg-black text-white p-[3px] inline-block absolute xl:ml-[95px] lg:ml-[94px] md:ml-[133px] ml-[122px] mt-[10px] text-xs">Ad</p>
                        <Image src={MaskGroup4}
                            className=' mx-auto pb-1 w-[90%] h-[215px] pt-[10px]'
                            alt='Fiverr Image' />
                    </div>
                    {/* Card text part */}
                    <h2 className=" text-white pb-2 mt-[10px]">Sacramento River Cats</h2>
                    <div className=" text-left text-sm text-slate-300 pl-4 pr-4 mb-2">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sports;