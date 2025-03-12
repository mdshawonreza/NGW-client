import React, { useEffect, useState } from 'react';
// import bandsImg1 from '../../assets/image 15.png'
// import bandsImg2 from '../../assets/image 16.png'
// import bandsImg3 from '../../assets/image 17.png'
// import bandsImg4 from '../../assets/image 18.png'
// import bandsImg5 from '../../assets/image 19.png'
// import bandsImg6 from '../../assets/image 20.png'


// import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';


const items =[
    {
      "id": 1,
      "brandName": "SonicWave",
      "brandImg": "https://i.ibb.co.com/DHGFLYhn/81z-Tv9-NKQAL-SX569.jpg",
      "brandColor": "linear-gradient(45deg, #ff6b6b, #f06595)",
      "brandLogo": "https://i.ibb.co.com/XkFtpChF/image-15.png"
    },
    {
      "id": 2,
      "brandName": "FitTrack",
      "brandImg": "https://i.ibb.co.com/k2zhTF8j/71-Bi1-S3-C3-L-SX679.jpg",
      "brandColor": "linear-gradient(45deg, #56ab2f, #a8e063)",
      "brandLogo": "https://i.ibb.co.com/MkcQj3RR/image-16.png"
    },
    {
      "id": 3,
      "brandName": "WorkEase",
      "brandImg": "https://i.ibb.co.com/hRZGHHmD/51-Gbo-FMI3d-L-AC-UF894-1000-QL80.jpg",
      "brandColor": "linear-gradient(45deg, #00c6ff, #0072ff)",
      "brandLogo": "https://i.ibb.co.com/XZCYMtDD/image-17.png"
    },
    {
      "id": 4,
      "brandName": "GameMax",
      "brandImg": "https://example.com/pixelart.jpg",
      "brandColor": "linear-gradient(45deg, #ff9a9e, #fad0c4)",
      "brandLogo": "https://example.com/pixelart-logo.png"
    },
    {
      "id": 5,
      "brandName": "VoltX",
      "brandImg": "https://example.com/neogears.jpg",
      "brandColor": "linear-gradient(45deg, #ff512f, #dd2476)",
      "brandLogo": "https://example.com/neogears-logo.png"
    },
    {
      "id": 6,
      "brandName": "BrightSpark",
      "brandImg": "https://example.com/brightspark.jpg",
      "brandColor": "linear-gradient(45deg, #ff9966, #ff5e62)",
      "brandLogo": "https://example.com/brightspark-logo.png"
    },
    {
      "id": 7,
      "brandName": "FutureScope",
      "brandImg": "https://example.com/futurescope.jpg",
      "brandColor": "linear-gradient(45deg, #00b09b, #96c93d)",
      "brandLogo": "https://example.com/futurescope-logo.png"
    },
    {
      "id": 8,
      "brandName": "InnoLink",
      "brandImg": "https://example.com/innolink.jpg",
      "brandColor": "linear-gradient(45deg, #8e2de2, #4a00e0)",
      "brandLogo": "https://example.com/innolink-logo.png"
    },
    {
      "id": 9,
      "brandName": "AeroTech",
      "brandImg": "https://example.com/aerotech.jpg",
      "brandColor": "linear-gradient(45deg, #ff7e5f, #feb47b)",
      "brandLogo": "https://example.com/aerotech-logo.png"
    },
    {
      "id": 10,
      "brandName": "Velocity",
      "brandImg": "https://example.com/velocity.jpg",
      "brandColor": "linear-gradient(45deg, #4b6cb7, #182848)",
      "brandLogo": "https://example.com/velocity-logo.png"
    },
    {
      "id": 11,
      "brandName": "QuantumSoft",
      "brandImg": "https://example.com/quantumsoft.jpg",
      "brandColor": "linear-gradient(45deg, #1e3c72, #2a5298)",
      "brandLogo": "https://example.com/quantumsoft-logo.png"
    },
    {
      "id": 12,
      "brandName": "CloudGen",
      "brandImg": "https://example.com/cloudgen.jpg",
      "brandColor": "linear-gradient(45deg, #667eea, #764ba2)",
      "brandLogo": "https://example.com/cloudgen-logo.png"
    },
    {
      "id": 13,
      "brandName": "SolarEdge",
      "brandImg": "https://example.com/solaredge.jpg",
      "brandColor": "linear-gradient(45deg, #ff758c, #ff7eb3)",
      "brandLogo": "https://example.com/solaredge-logo.png"
    },
    {
      "id": 14,
      "brandName": "GigaByteX",
      "brandImg": "https://example.com/gigabytex.jpg",
      "brandColor": "linear-gradient(45deg, #e100ff, #7f00ff)",
      "brandLogo": "https://example.com/gigabytex-logo.png"
    },
    {
      "id": 15,
      "brandName": "HyperNet",
      "brandImg": "https://example.com/hypernet.jpg",
      "brandColor": "linear-gradient(45deg, #ff416c, #ff4b2b)",
      "brandLogo": "https://example.com/hypernet-logo.png"
    },
    {
      "id": 16,
      "brandName": "CodeBurst",
      "brandImg": "https://example.com/codeburst.jpg",
      "brandColor": "linear-gradient(45deg, #00c9ff, #92fe9d)",
      "brandLogo": "https://example.com/codeburst-logo.png"
    },
    {
      "id": 17,
      "brandName": "SkyNetics",
      "brandImg": "https://example.com/skynetics.jpg",
      "brandColor": "linear-gradient(45deg, #b92b27, #1565c0)",
      "brandLogo": "https://example.com/skynetics-logo.png"
    },
    {
      "id": 18,
      "brandName": "InfinityCore",
      "brandImg": "https://example.com/infinitycore.jpg",
      "brandColor": "linear-gradient(45deg, #5433ff, #20bdff, #a5fecb)",
      "brandLogo": "https://example.com/infinitycore-logo.png"
    },
    {
      "id": 19,
      "brandName": "NovaByte",
      "brandImg": "https://example.com/novabyte.jpg",
      "brandColor": "linear-gradient(45deg, #ff9a9e, #fad0c4)",
      "brandLogo": "https://example.com/novabyte-logo.png"
    },
    {
      "id": 20,
      "brandName": "AlphaLink",
      "brandImg": "https://example.com/alphalink.jpg",
      "brandColor": "linear-gradient(45deg, #fc4a1a, #f7b733)",
      "brandLogo": "https://example.com/alphalink-logo.png"
    }
  ]
  

const PartneredBrands = () => {
    // const [items, setItems] = useState([])
    // useEffect(() => {
    //     fetch('/public/brands.json')
    //         .then(res => res.json())
    //         .then(data => setItems(data))
    // }, [])
    return (
        <div className='max-w-[380px] md:max-w-[850px] lg:max-w-[1550px] mx-auto '>
            <div className='text-center inter-font'>
                <h5 className='text-[20px] font-bold text-[#FF6868]'>Our Partnered Brands</h5>
                <h1 className='text-3xl md:mt-7 mt-0 md:text-[60px] font-bold'>Trusted Brands, Premium Quality</h1>

            </div>
            <div className='mt-8 md:mt-16 mb-20 md:mb-0 pl-6 py-6'>
            {/* flex flex-col md:flex-row justify-center items-center gap-6 md:gap-16 mt-8 md:mt-16 mb-20 md:mb-0 pl-6 py-6 */}
                {/* <div className="card bg-base-100 w-[326px] h-[306px] shadow-2xl">
                    <figure className="px-10 pt-16">
                        <img
                            src={bandsImg1}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center inter-font">
                        <h2 className="font-semibold text-[#1E1E1E] text-[30px]">Main Dish</h2>
                        <p className='text-[22px] font-medium text-[#555555]'>(86 varieties)</p>
                       
                    </div>
                </div>
                <div className="card bg-base-100 w-[326px] h-[306px] shadow-2xl ">
                    <figure className="px-10 pt-16">
                        <img
                            src={bandsImg2}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center inter-font">
                        <h2 className="font-semibold text-[#1E1E1E] text-[30px]">Break Fast</h2>
                        <p className='text-[22px] font-medium text-[#555555]'>(12 varieties)</p>
                       
                    </div>
                </div>
                <div className="card bg-base-100 w-[326px] h-[306px] shadow-2xl">
                    <figure className="px-10 pt-16">
                        <img
                            src={bandsImg3}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center inter-font">
                        <h2 className="font-semibold text-[#1E1E1E] text-[30px]">Snacks</h2>
                        <p className='text-[22px] font-medium text-[#555555]'>(48 varieties)</p>
                       
                    </div>
                </div> */}
                <Swiper

                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    breakpoints={{
                        390: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        
                    }}
                    className="mySwiper "
                >
                    {items.map((brand, index) => (
                        <SwiperSlide key={index}>
                            <div className="  w-[326px] h-[306px]
                              flex justify-center items-center">
                               
                                    <figure className="px-10 ">
                                        <img
                                            src={brand.brandLogo}
                                            alt="Brand logo"
                                            className="rounded-xl md:w-60 " />
                                    </figure>
                                
                                {/* <div className=" items-center text-center inter-font">
                                    <h2 className="font-semibold text-[#1E1E1E] text-[30px]">{brand.brandName}</h2>
                                    <p className='text-[22px] font-medium text-[#555555]'>(86 varieties)</p>

                                </div> */}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>


            </div>

        </div>
    );
};

export default PartneredBrands;