import React from 'react';
import testimonialImg1 from "../../assets/Group 21 (1).png"
import testimonialImg2 from "../../assets//Group 21.png"
import { FaStar } from 'react-icons/fa';
const Testimonial = () => {
    return (
        <div>
            <div className='max-w-[350px] md:max-w-[750px] lg:max-w-[1550px] mx-auto flex justify-center items-center mt-20  mb-10 md:mb-20 lg:mb-24 '>

                <div className="flex w-full flex-col lg:flex-row gap-16 md:gap-20">
                    <div className='lg:w-3/6 flex md:justify-center lg:justify-start lg:ml-24'>
                        <div className='flex justify-center items-center' >
                            <img className='w-[300px] md:w-[514px] ml-6 md:ml-0' src={testimonialImg1} alt="" />
                        </div>
                        <img className='-ml-[50px] md:-ml-[170px] mt-[50px] md:mt-[24px] lg:mt-[42px] absolute  lg:w-[720px]' src={testimonialImg2} alt="" />
                        <div className='bg-white py-1 md:py-4 px-2 md:px-8 flex justify-center items-center absolute rounded-full shadow-2xl mt-[352px] md:mt-[595px] ml-[220px] md:ml-[455px]'>
                            <p className='text-sm md:text-[20px] text-[#202020] font-semibold'>Best Services 😁</p>
                        </div>
                    </div>
                    <div className='lg:w-2/6 flex items-center inter-font '>
                        <div className=' space-y-3 md:space-y-6'>
                            <h5 className='text-[20px] font-bold text-[#FF6868]'>Testimonials</h5>
                            <h1 className="text-3xl text-[#000000] md:text-[36px] lg:text-[60px] font-bold leading-tight     ">Why Businesses Choose Us</h1>
                            <p className="pt-2 md:pt-2 md:text-[26px] font-medium text-[#4A4A4A] ">
                                “NGW has been our go-to supplier for premium vapes and edibles. Their pricing is unbeatable, and the quality is top-notch!"
                            </p>
                            <div className='flex justify-start items-center gap-4 md:gap-10 md:pt-8'>
                                <div className="avatar-group -space-x-6">
                                    <div className="avatar">
                                        <div className="w-[40px] md:w-[80px]">
                                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-[40px] md:w-[80px]">
                                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-[40px] md:w-[80px]">
                                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                        </div>
                                    </div>

                                </div>
                                <div>
                                    <h4 className='text-xl md:text-[26px] text-[#000000] font-semibold'>Customer Feedback</h4>
                                    <div>
                                        <div className="flex items-center gap-3">
                                            <FaStar className="text-[#FFE605] text-[23px]"></FaStar>
                                            <p className="md:text-[24px] font-semibold text-[#454545]">4.9</p>
                                            <p className='md:text-[24px] text-[#807E7E] font-medium'> (18.6k Reviews) </p>

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

export default Testimonial;