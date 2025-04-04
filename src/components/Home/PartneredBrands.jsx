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
    "brandName": "Banquet",
    "brandImg": "https://i.ibb.co.com/DHGFLYhn/81z-Tv9-NKQAL-SX569.jpg",
    "brandColor": "linear-gradient(45deg, #ff512f, #dd2476)",
    "brandLogo": "https://i.ibb.co.com/XkFtpChF/image-15.png"
  },
  {
    "id": 2,
    "brandName": "Jose Ole",
    "brandImg": "https://i.ibb.co.com/hRZGHHmD/51-Gbo-FMI3d-L-AC-UF894-1000-QL80.jpg",
    "brandColor": "linear-gradient(45deg, #56ab2f, #a8e063)",
    "brandLogo": "https://i.ibb.co.com/XZCYMtDD/image-17.png"
  },
 
 
  {
    "id": 21,
    "brandName": "Ensure",
    "brandImg": "https://i.ibb.co.com/kgDzwLnL/download-18.jpg",
    "brandColor": "linear-gradient(45deg, #4b6cb7, #182848)",
    "brandLogo": "https://i.ibb.co.com/S4FdMBJs/download-13.png"
  },
  {
    "id": 4,
    "brandName": "Zatarain's",
    "brandImg": "https://i.ibb.co.com/PZxLbCt0/7a7bb377116a6729b183cc40bead6f20962ea53dad276869807d51396796724e.jpg",
    "brandColor": "linear-gradient(45deg, #ff9a9e, #fad0c4)",
    "brandLogo": "https://i.ibb.co.com/JWTGNsGY/Zatarain-s-logo-1.jpg"
  },
  {
    "id": 5,
    "brandName": "Stouffer's",
    "brandImg": "https://i.ibb.co.com/mFRx6cBn/images-5.jpg",
    "brandColor": "linear-gradient(45deg, #ff512f, #dd2476)",
    "brandLogo": "https://i.ibb.co.com/rG77cdTd/Stouffers-Logo-2006.png"
  },
  
  
  
  {
    "id": 13,
    "brandName": "Best Yet",
    "brandImg": "https://i.ibb.co.com/vxhXqq8y/download-11.jpg",
    "brandColor": "linear-gradient(45deg, #ff758c, #ff7eb3)",
    "brandLogo": "https://i.ibb.co.com/5hDj3vgh/download-5.png"
  },
  {
    "id": 14,
    "brandName": "Hefty",
    "brandImg": "https://i.ibb.co.com/fV1DmJVB/download-12.jpg",
    "brandColor": "linear-gradient(45deg, #e100ff, #7f00ff)",
    "brandLogo": "https://i.ibb.co.com/7dT1m6R2/download-6.png"
  },
  {
    "id": 15,
    "brandName": "Solo",
    "brandImg": "https://i.ibb.co.com/WpgyT4tp/00041165017397-1.jpg",
    "brandColor": "linear-gradient(45deg, #ff416c, #ff4b2b)",
    "brandLogo": "https://i.ibb.co.com/nsxDBhJK/download-7.png"
  },
  {
    "id": 16,
    "brandName": "Lays",
    "brandImg": "https://i.ibb.co.com/DHJdDhp3/download-14.jpg",
    "brandColor": "linear-gradient(45deg, #00c9ff, #92fe9d)",
    "brandLogo": "https://i.ibb.co.com/ZRGKNx3y/download-8.png"
  },
  {
    "id": 17,
    "brandName": "Mariani",
    "brandImg": "https://i.ibb.co.com/Y7qgV64S/images-7.jpg",
    "brandColor": "linear-gradient(45deg, #b92b27, #1565c0)",
    "brandLogo": "https://i.ibb.co.com/fd6VM7sF/download-15.jpg"
  },
 
  {
    "id": 19,
    "brandName": "Nabisco",
    "brandImg": "https://i.ibb.co.com/mCGCq60M/81u-Uu5-Mqx-SL-SL1500.jpg",
    "brandColor": "linear-gradient(45deg, #ff9a9e, #fad0c4)",
    "brandLogo": "https://i.ibb.co.com/1f0wtVL2/download-11.png"
  },
  {
    "id": 20,
    "brandName": "Cheez It",
    "brandImg": "https://i.ibb.co.com/G4pc1MZ2/download-17.jpg",
    "brandColor": "linear-gradient(45deg, #fc4a1a, #f7b733)",
    "brandLogo": "https://i.ibb.co.com/k2fQjB3x/download-12.png"
  },
  {
    "id": 3,
    "brandName": "Tina's",
    "brandImg": "https://i.ibb.co.com/LXb3NDRM/images-4.jpg",
    "brandColor": "linear-gradient(45deg, #4b6cb7, #182848)",
    "brandLogo": "https://i.ibb.co.com/HTTmCg9Y/Tina-s-Logo-w-registered-trademark-fixed.jpg"
  },
  // edit start

  
  
  
  {
    "id": 22,
    "brandName": "Nestle",
    "brandImg": "https://i.ibb.co.com/SX5mFgZg/images-8.jpg",
    "brandColor": "linear-gradient(45deg, #ff512f, #dd2476)",
    "brandLogo": "https://i.ibb.co.com/7NXW0r0Q/download-14.png"
  },
  {
    "id": 23,
    "brandName": "Abbott",
    "brandImg": "https://i.ibb.co.com/XZJg459r/download-19.jpg",
    "brandColor": "linear-gradient(45deg, #56ab2f, #a8e063)",
    "brandLogo": "https://i.ibb.co.com/VcscpQZd/download-15.png"
  },
  {
    "id": 24,
    "brandName": "Quest",
    "brandImg": "https://i.ibb.co.com/yn7Mkb4b/download-20.jpg",
    "brandColor": "linear-gradient(45deg,rgb(8, 8, 8), #182848)",
    "brandLogo": "https://i.ibb.co.com/k6XhPc2Y/download-16.png"
  },
  {
    "id": 25,
    "brandName": "Atkins",
    "brandImg": "https://i.ibb.co.com/FktBXs5q/images-9.jpg",
    "brandColor": "linear-gradient(45deg, #ff9a9e, #fad0c4)",
    "brandLogo": "https://i.ibb.co.com/QjmYDmKy/download-21.jpg"
  },
  {
    "id": 26,
    "brandName": "Yakult",
    "brandImg": "https://i.ibb.co.com/1JKzxTfV/download-22.jpg",
    "brandColor": "linear-gradient(45deg, #ff512f, #dd2476)",
    "brandLogo": "https://i.ibb.co.com/SDv9vWgb/download-17.png"
  },
  {
    "id": 27,
    "brandName": "Tampico",
    "brandImg": "https://i.ibb.co.com/Swv23ZWT/download-23.jpg",
    "brandColor": "linear-gradient(45deg, #ff758c, #ff7eb3)",
    "brandLogo": "https://i.ibb.co.com/Lh6TcD7C/download-18.png"
  },
  {
    "id": 28,
    "brandName": "Sunny D",
    "brandImg": "https://i.ibb.co.com/8Lby10cf/download-24.jpg",
    "brandColor": "linear-gradient(45deg, #e100ff, #7f00ff)",
    "brandLogo": "https://i.ibb.co.com/wrJnhwfp/download-19.png"
  },
  {
    "id": 29,
    "brandName": "Tropicana",
    "brandImg": "https://i.ibb.co.com/chC9xyHw/download-26.jpg",
    "brandColor": "linear-gradient(45deg, #ff416c, #ff4b2b)",
    "brandLogo": "https://i.ibb.co.com/xt5qdNpY/download-25.jpg"
  },
  {
    "id": 30,
    "brandName": "Simply Pulp",
    "brandImg": "https://i.ibb.co.com/GQJ6ZcS1/download-27.jpg",
    "brandColor": "linear-gradient(45deg, #00c9ff, #92fe9d)",
    "brandLogo": "https://i.ibb.co.com/tTXqcMmY/download-20.png"
  },
  {
    "id": 31,
    "brandName": "Niagara",
    "brandImg": "https://i.ibb.co.com/RpwFxRZm/images-10.jpg",
    "brandColor": "linear-gradient(45deg, #b92b27, #1565c0)",
    "brandLogo": "https://i.ibb.co.com/N6MZnfGH/download-21.png"
  },
 
  {
    "id": 32,
    "brandName": "Lacroix",
    "brandImg": "https://i.ibb.co.com/qFBJFVzk/download-29.jpg",
    "brandColor": "linear-gradient(45deg, #ff9a9e, #fad0c4)",
    "brandLogo": "https://i.ibb.co.com/chpXPvD9/download-28.jpg"
  },
  {
    "id": 33,
    "brandName": "Fiji",
    "brandImg": "https://i.ibb.co.com/RpCJ7W8X/images-11.jpg",
    "brandColor": "linear-gradient(45deg, #fc4a1a, #f7b733)",
    "brandLogo": "https://i.ibb.co.com/Y7QQ9h3B/download-22.png"
  },
  {
    "id": 34,
    "brandName": "Blue Ribbon",
    "brandImg": "https://i.ibb.co.com/DDW2LTXZ/images-12.jpg",
    "brandColor": "linear-gradient(45deg, #4b6cb7, #182848)",
    "brandLogo": "https://i.ibb.co.com/Y7w69b3C/images-2.png"
  },
  {
    "id": 35,
    "brandName": "Blue Bunny",
    "brandImg": "https://i.ibb.co.com/6c6wZxGV/download-30.jpg",
    "brandColor": "linear-gradient(45deg, #4b6cb7, #182848)",
    "brandLogo": "https://i.ibb.co.com/wNQdnS6j/download-23.png"
  },







  {
    "id": 6,
    "brandName": "Chung's",
    "brandImg": "https://i.ibb.co.com/x8MkMnxY/vegemil-soy-drink-with-amondwalnut-190ml.jpg",
    "brandColor": "linear-gradient(45deg, #ff9966, #ff5e62)",
    "brandLogo": "https://i.ibb.co.com/7twVc2vz/Chungs-Logo-300x115.png"
  },
  {
    "id": 7,
    "brandName": "Digiorno",
    "brandImg": "https://i.ibb.co.com/bTRfYCw/8104-Hc-Pn-Sf-L-SL1500.jpg",
    "brandColor": "linear-gradient(45deg, #00b09b, #96c93d)",
    "brandLogo": "https://i.ibb.co.com/hzNwtrV/digiorno-logo-png-transparent.png"
  },
  {
    "id": 8,
    "brandName": "Lean Cuisine",
    "brandImg": "https://i.ibb.co.com/H6YdDgw/download-5.jpg",
    "brandColor": "linear-gradient(45deg, #8e2de2, #4a00e0)",
    "brandLogo": "https://i.ibb.co.com/svrV4n5v/images-1.png"
  },
  {
    "id": 9,
    "brandName": "Bibigo",
    "brandImg": "https://i.ibb.co.com/bM5NtgXg/download-6.jpg",
    "brandColor": "linear-gradient(45deg, #ff7e5f, #feb47b)",
    "brandLogo": "https://i.ibb.co.com/JWC2zRR8/download-1.png"
  },
  {
    "id": 10,
    "brandName": "Night Hawk",
    "brandImg": "https://i.ibb.co.com/8njJJGc1/download-7.jpg",
    "brandColor": "linear-gradient(45deg, #4b6cb7, #182848)",
    "brandLogo": "https://i.ibb.co.com/8gHRY5jj/download-2.png"
  },
  {
    "id": 11,
    "brandName": "Innovasian",
    "brandImg": "https://i.ibb.co.com/DP4210ZH/download-8.jpg",
    "brandColor": "linear-gradient(45deg, #1e3c72, #2a5298)",
    "brandLogo": "https://i.ibb.co.com/ZRb9tR8S/download-3.png"
  },
  {
    "id": 12,
    "brandName": "Smart Ones",
    "brandImg": "https://i.ibb.co.com/gMXxC3sP/download-9.jpg",
    "brandColor": "linear-gradient(45deg, #667eea, #764ba2)",
    "brandLogo": "https://i.ibb.co.com/pj2Fjc3G/download-4.png"
  },
  {
    "id": 18,
    "brandName": "Cazo De Oro",
    "brandImg": "https://i.ibb.co.com/ZzHnyVP3/download-16.jpg",
    "brandColor": "linear-gradient(45deg, #5433ff, #20bdff, #a5fecb)",
    "brandLogo": "https://i.ibb.co.com/qKHBJ4s/download-9.png"
  },
]
  

const PartneredBrands = () => {
    // const [items, setItems] = useState([])
    // useEffect(() => {
    //     fetch('/public/brands.json')
    //         .then(res => res.json())
    //         .then(data => setItems(data))
    // }, [])
    return (
        <div className='max-w-[380px]  md:max-w-[750px] lg:max-w-[1550px] mx-auto lg:px-10 '>
            <div className='text-center inter-font'>
                <h5 className='text-[20px] font-bold text-[#FF6868]'>Our Partnered Brands</h5>
                <h1 className='text-3xl md:text-4xl md:mt-7 mt-0 lg:text-[60px] font-bold'>Trusted Brands, Premium Quality</h1>

            </div>
            <div className='mt-8 md:mt-16 mb-20 md:mb-0 pl-8 md:pl-6 lg:pl-0 md:py-6 '>
            
               
                <Swiper

                    modules={[Autoplay]}
                    spaceBetween={10}
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
                        750: {
                            slidesPerView: 2,
                            spaceBetween: 30,
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