import React from 'react';
import aboutImg2 from '../../assets/1234.png'
import aboutImg3 from '../../assets/5678.png'
import aboutImg1 from '../../assets/912.png'
const AboutUs = () => {
    return (
        <div className=' md:pt-[118px]  pt-20  inter-font'>
            <div className="relative">
                <img
                    src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    className="absolute inset-0 object-cover w-full h-full"
                    alt=""
                />
                <div className="relative bg-gray-900 bg-opacity-75">
                    <div className="absolute inset-x-0 bottom-0">
                        <svg
                            viewBox="0 0 224 12"
                            fill="currentColor"
                            className="w-full -mb-1 text-white"
                            preserveAspectRatio="none"
                        >
                            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
                        </svg>
                    </div>
                    <div className="px-4 py-10 md:py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center ">
                            {/* <h3 className='md:text-[20px] inter-font font-bold text-[#FF6868] text-center'>wholesale & distributor</h3> */}

                            <h2 className=" font-sans tracking-tight text-white sm:text-4xl sm:leading-none text-3xl md:text-[62px] font-extrabold text-center  inter-font ">

                                About <span className='text-[#F26B24] md:leading-relaxed'>Us </span>
                            </h2>
                            <p className=" md:text-[26px] font-medium text-gray-200 text-center  inter-font px-3 md:px-0">
                            Learn About Us – Our Story, Values, and Commitment to Providing the Best Products and Services!
                            </p>


                            <a
                                href="#aboutID"
                                aria-label="Scroll down"
                                className="flex mt-7 items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-[#F26B24] rounded-full hover:text-teal-accent-400 hover:border-[#F26B24] hover:shadow hover:scale-110 hover:bg-[#F26B24]"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="currentColor"
                                >
                                    <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>


            <div id='aboutID' className=''>
                <div className='max-w-[350px] md:max-w-[750px] lg:max-w-[1550px] mx-auto flex justify-center items-center  lg:px-10 '>

                    <div className=' flex justify-center  items-center  lg:min-h-[700px] '>

                        <div className="flex flex-col-reverse mt-0 md:mt-10 lg:mt-0 lg:flex-row gap-12 lg:gap-10 ">
                            <div className='lg:w-1/2  flex items-center  '>
                                <div className=' space-y-3 md:space-y-6'>
                                    <h5 className='text-[20px] inter-font font-bold text-[#FF6868] '>Our Story & Services</h5>
                                    <h1 className="text-3xl text-[#000000] md:text-[60px] font-bold leading-tight inter-font    "> ABout US</h1>
                                    <p className="pt-2 md:pt-2 md:text-[26px] font-medium text-[#4A4A4A] inter-font ">
                                        It began with a simple vision - to make quality wholesale products accessible and affordable.
                                        As business owners ourselves, we saw the challenges retailers faced in finding reliable suppliers, fair pricing, and fast delivery, determined to bridge this gap, we built NGW.
                                    </p>
                                    <button className='  h-[35px] md:h-[45px] lg:h-[60px] w-[150px] md:w-[206px]  rounded-full bg-[#F26B24] text-white text-xs md:text-[20px] lg:text-[26px] font-semibold  flex justify-center items-center gap-3 inter-font hover:shadow-[#F26B24] hover:shadow-lg'>

                                        Know more

                                    </button>

                                </div>

                            </div>
                            <div className='lg:w-1/2 mt-6 md:mt-0 flex justify-end '>
                                <div className=' flex justify-center items-center gap-3 '>
                                    <div className='flex items-center  '>

                                        <div data-aos="zoom-in-up" >
                                            <img className='' src={aboutImg1} alt="" />
                                        </div>

                                    </div>
                                    <div className='flex flex-col gap-3'>
                                        <div data-aos="zoom-in-up">
                                            <img className='' src={aboutImg2} alt="" />
                                        </div>
                                        <div data-aos="zoom-in-up">
                                            <img className='' src={aboutImg3} alt="" />
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

export default AboutUs;