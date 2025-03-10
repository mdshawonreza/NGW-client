import React from 'react';
import storyImg1 from "../../assets/fi-rr-gift.png"
import storyImg2 from "../../assets/fi-rr-salad.png"
import storyImg3 from "../../assets/fi-rr-shopping-cart-check.png"
import storyImg4 from "../../assets/fi-rr-time-fast.png"

const StoryService = () => {
    return (
        <div className='mb-16 md:mb-28'>
            <div className='max-w-[350px] md:max-w-[850px] lg:max-w-[1550px] mx-auto flex justify-center items-center  md:mb-20 '>

                <div className="flex w-full flex-col lg:flex-row gap-0 lg:gap-20">

                    <div className='md:w-4/6 flex items-center  '>
                        <div className=' space-y-3 md:space-y-6'>
                            <h5 className='text-[20px] inter-font font-bold text-[#FF6868] '>Our Story & Services</h5>
                            <h1 className="text-3xl text-[#000000] md:text-[60px] font-bold leading-tight inter-font    ">Our Culinary Journey <br />And Services</h1>
                            <p className="pt-2 md:pt-2 md:text-[26px] font-medium text-[#4A4A4A] inter-font ">
                                It began with a simple vision - to make quality wholesale products accessible and affordable.
                                As business owners ourselves, we saw the challenges retailers faced in finding reliable suppliers, fair pricing, and fast delivery, determined to bridge this gap, we built NGW.
                            </p>
                            <button className=' h-[26px] md:h-[60px] w-[100px] md:w-[206px]  rounded-full bg-[#F26B24] text-white text-xs md:text-[26px] font-semibold  flex justify-center items-center gap-3 inter-font '>

                                Know more

                            </button>

                        </div>

                    </div>
                    <div className='md:w-3/6 ml-9  mt-10 md:mt-0 md:ml-24'>

                        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                            <div>
                                <div className=" bg-base-100 w-[277px]  shadow-2xl py-8 rounded-[30px] h-[280px]">
                                    <div className="px-10 py-3  flex justify-center items-center">
                                        <img
                                            src={storyImg2}
                                            alt=""
                                            className="w-[64px]" />
                                    </div>
                                    <div className='flex justify-center items-center mx-4'>
                                        <div className=" items-center text-center">
                                            <h2 className="font-bold text-[#F26B24] text-[24px]">Premium quality</h2>
                                            <p className='text-[20px] font-semibold text-[#FFC8AB]'>Only authentic, top-quality products from reputable brands.</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className=" bg-base-100 w-[277px]  h-[280px] shadow-2xl py-8 rounded-[30px]">
                                    <div className="px-10 py-3 flex justify-center items-center">
                                        <img
                                            src={storyImg4}
                                            alt=""
                                            className="w-[64px]" />
                                    </div>
                                    <div className='flex justify-center items-center mx-4'>
                                        <div className=" items-center text-center">
                                            <h2 className="font-bold text-[#F26B24] text-[24px]">Fast Shipping</h2>
                                            <p className='text-[20px] font-semibold text-[#FFC8AB]'>Enjoy quick and hassle-free delivery with tracking and secure packaging.</p>

                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div>
                                <div className=" bg-base-100 h-[280px] w-[277px]  shadow-2xl py-8 rounded-[30px]">
                                    <div className="px-10 py-3 flex justify-center items-center">
                                        <img
                                            src={storyImg3}
                                            alt=""
                                            className="w-[64px]" />
                                    </div>
                                    <div className='flex justify-center items-center mx-4'>
                                        <div className=" items-center text-center">
                                            <h2 className="font-bold text-[#F26B24] text-[24px]">custom orders</h2>
                                            <p className='text-[20px] font-semibold text-[#FFC8AB]'>Flexible solutions tailored to your needs</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className=" bg-base-100 w-[277px] h-[280px] shadow-2xl py-8 rounded-[30px]">
                                    <div className="px-10 py-3 flex justify-center items-center">
                                        <img
                                            src={storyImg1}
                                            alt=""
                                            className="w-[64px]" />
                                    </div>
                                    <div className='flex justify-center items-center mx-4'>
                                        <div className=" items-center text-center">
                                            <h2 className="font-bold text-[#F26B24] text-[24px]">Exclusive deals</h2>
                                            <p className='text-[20px] font-semibold text-[#FFC8AB]'>Special discounts for high-volume buyers.</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>




                    </div>
                </div>


            </div>

        </div>
    );
};

export default StoryService;