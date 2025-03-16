
import React, { useRef } from "react";


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
// import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { FaChevronLeft, FaChevronRight, FaHeart, FaStar } from 'react-icons/fa';

// interface Product {
//     id: number;
//     title: string;
//     description: string;
//     price: number;
//     rating: number;
//     image: string;
// }

const products = [
    {
        id: 1,
        title: "Smoking Essentials",
        description: "Description of the item",
        price: 4.00 ,
        rating: 4.9,
        image: "https://i.ibb.co.com/LzmpTyvb/file-36-1.png"
    },
    {
        id: 2,
        title: "Fresh Vegetables",
        description: "Description of the item",
        price: 5.00,
        rating: 4.6,
        image: "https://i.ibb.co.com/vxMbS8PR/2771-1.png"
    },
    {
        id: 3,
        title: "Candy Shop",
        description: "Description of the item",
        price: 3.00,
        rating: 4.7,
        image: "https://i.ibb.co.com/sJ5dBPmb/file-35-1.png"
    },
    {
        id: 4,
        title: "Fresh Fruits",
        description: "Description of the item",
        price: 6.00,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=500&q=80"
    }
];

const Inventory = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return (
        <div className="relative  max-w-[350px] md:max-w-[750px] lg:max-w-[1550px] mx-auto  md:pt-20 ">
            {/* Title Section */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
                <div className=''>
                    <h5 className='text-[20px] inter-font ml-1 font-bold text-[#FF6868]'>browse Our Inventory</h5>
                    <h1 className='text-3xl md:text-[36px] lg:text-[60px] mt-6 text-[#000000] font-bold leading-tight'>Exclusive Wholesale <br /> Offers & Discounts</h1>

                </div>


            </div>

            {/* Navigation Buttons Positioned at the Top Right */}
            <div className='absolute top-[85px] md:top-[145px] lg:top-44 -right-5 md:right-2 flex gap-3 md:gap-5 p-4   rounded-lg '>
                <button ref={prevRef} className=' bg-[#F26B24] hover:bg-[#EFEFEF] w-[30px] md:w-[58px] h-[30px] md:h-[58px] rounded-full flex justify-center items-center text-white hover:text-[#6F6E6E] '>
                    <FaChevronLeft className="" size={20} />
                </button>
                <button ref={nextRef} className=' bg-[#F26B24] hover:bg-[#EFEFEF] md:w-[58px]  w-[30px] h-[30px] md:h-[58px] rounded-full flex justify-center items-center text-white hover:text-[#6F6E6E] '>
                    <FaChevronRight className="" size={20} />
                </button>
            </div>

            <Swiper
                className="flex z-0 justify-between flex-col md:flex-row"
                modules={[Navigation]}
                spaceBetween={75}
                slidesPerView={1}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onSwiper={(swiper) => {
                    setTimeout(() => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    });
                }}
                breakpoints={{
                    1024: { slidesPerView: 3 },
                    600: { slidesPerView: 2 },
                    480: { slidesPerView: 1 },
                }}
            >
                {products.map((product) => (
                    <SwiperSlide key={product.id}>

                        < div  className="relative bg-white rounded-3xl  md:rounded-[40px] shadow-xl w-[336px] md:w-[330px] lg:w-[435px] md:mb-20 lg:mb-20  md:mt-6 ">
                            <div className="flex justify-end">
                                <div className="w-[60px] md:w-[83px] h-[50px] md:h-[70px]  right-0 bg-[#F26B24] text-white text-sm font-semibold pl-[14px] py-1 rounded-se-[24px] md:rounded-se-[40px] rounded-es-[24px] md:rounded-es-[40px] flex justify-center items-center">
                                    <FaHeart className="text-[24px] -ml-3 md:-ml-2"></FaHeart>
                                </div>
                            </div>
                            <div className=" flex justify-center">
                                <img className=" w-[250px] md:w-[331px] md:h-[211px]  rounded-lg" src={product.image} alt="" />
                            </div>
                            <div className="mt-2 px-8 lg:px-12 pt-5 pb-8">
                                <div className='space-y-1 md:space-y-2 lg:space-y-3 '>
                                    <h3 className="text-2xl inter-font lg:text-[30px] text-[#000000] font-semibold">{product.title}
                                        
                                    </h3>
                                    <p className="text-xl lg:text-[22px] font-semibold text-[#555555] inter-font">{product.description}</p>

                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-3 inter-font">
                                            <p className="text-xl lg:text-[24px] font-semibold text-[#FF6868]">Starting at</p>
                                            <p className="text-2xl lg:text-[30px] font-semibold text-[#000000]">$ {product.price}.00</p>

                                        </div>
                                        <div className="flex items-center gap-2 md:gap-3">
                                            <FaStar className="text-[#FFE605] text-[23px]"></FaStar>
                                            <p className="text-[24px] font-semibold text-[#454545]">{product.rating}</p>

                                        </div>
                                    </div>
                                    
                                </div>
                                


                                
                            </div>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

    );
};



export default Inventory;