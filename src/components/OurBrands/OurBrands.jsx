import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
const OurBrands = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('/public/brands.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div className="  md:pt-30  py-20  inter-font">

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
                    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">

                            <h2 className=" font-sans tracking-tight text-white sm:text-4xl sm:leading-none text-3xl md:text-[62px] font-extrabold text-center mt-16  md:mt-0 inter-font ">

                                Our <span className='text-[#F26B24] md:leading-relaxed'>Brands </span>
                            </h2>
                            <p className=" md:text-[26px] font-medium text-gray-200 inter-font px-3 md:px-0">
                                One-stop destination for high-quality wholesale products at unbeatable prices.
                            </p>


                            <a
                                href="#brands"
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

            <div id='brands' className="max-w-[1550px] mx-auto">
                <div className="w-1/2 mx-auto md:my-20">
                    <div className="text-center mt-8">
                        <h2 className=" font-sans tracking-tight  sm:text-4xl sm:leading-none text-3xl md:text-[62px] font-extrabold text-center mt-16  md:mt-0 inter-font ">Find Your <span className="text-[#F26B24]">Products</span> </h2>
                        <p className="pt-2 md:pt-2 md:text-[26px] font-medium text-[#4A4A4A] inter-font">Book your hostel now and unlock exclusive discounts, ensuring a budget-friendly stay with exceptional comfort and service.</p>
                    </div>

                </div>


                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-10 justify-center  w-full max-w-[1550px] mx-auto ">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="group flex relative flex-1 min-w-[200px]  backdrop-blur-lg  p-6 
                           transition-all duration-[1000ms] ease-in-out cursor-pointer 
                           hover:flex-[2] hover:bg-[#2d1457] justify-center items-center h-[600px]"
                            style={{ background: item.brandColor }}
                        >


                            <Link to={`/brandProducts/${item.brandName}`}>
                                <motion.div
                                    className="relative w-[350px] h-[350px] flex justify-center items-center  perspective-1000  group"
                                    whileHover={{
                                        rotateX: 25,
                                        translateY: -10,
                                        boxShadow: "2px 35px 32px -8px rgba(0, 0, 0, 0.75)",

                                    }}


                                >

                                    <div className=''>
                                        <img
                                            src={item.brandImg}
                                            alt="Title"
                                            className="w-full  transition-transform duration-500"

                                        />
                                    </div>



                                    {/* Character */}

                                    <motion.img
                                        src={item.brandLogo}
                                        alt="Character"
                                        className="absolute w-full  bg-opacity-0  opacity-0 transition-all duration-500 z-[-1] group-hover:opacity-100 group-hover:translate-y-[-30%] group-hover:z-10 "
                                    />

                                </motion.div>
                            </Link>




                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurBrands;