import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";



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
  




const OurBrands = () => {
    // const [items, setItems] = useState([])
    // useEffect(() => {
    //     fetch('/public/brands.json')
    //         .then(res => res.json())
    //         .then(data => setItems(data))
    // }, [])
    return (
        <div className="  md:pt-[118px]  pt-20  inter-font">

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
                            <h3 className='md:text-[20px] inter-font font-bold text-[#FF6868] text-center'>wholesale & distributor</h3>

                            <h2 className=" font-sans tracking-tight text-white sm:text-4xl sm:leading-none text-3xl md:text-[62px] font-extrabold text-center  inter-font my-3">

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
                <div className="w-1/2 mx-auto md:my-6">
                    {/* <div className="text-center mt-8">
                        <h3 className='text-[20px] inter-font font-bold text-[#FF6868] '>wholesale & distributor</h3>
                        <h2 className=" font-sans tracking-tight  sm:text-4xl sm:leading-none text-3xl md:text-[62px] font-extrabold text-center mt-16  md:mt-5 inter-font ">Our  <span className="text-[#F26B24]">Multi-Brand</span> </h2>
                        <p className="pt-2 md:pt-2 md:text-[26px] font-medium text-[#4A4A4A] inter-font">We specialize in high volume wholesale of multi-brand products. Our variety includes c-store wholesale, close-out items, dollar store & party store items, and bulk restaurant supplies.</p>
                    </div> */}

                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 justify-center  w-full md:max-w-[1550px] mx-auto ">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="group flex relative flex-1 min-w-[200px]  backdrop-blur-lg  p-6 
                           transition-all duration-1000 ease-in-out cursor-pointer 
                           hover:flex-[2] hover:bg-[#2d1457] justify-center items-center md:h-[550px] hover:z-10
               text-white text-sm  transform
             hover:shadow-none  "
                            style={{ background: item.brandColor }}
                        >


                            <Link to={`/brandProducts/${item.brandName}`}>
                                <div
                                    className="relative md:w-[350px] md:h-[350px] flex justify-center items-center  perspective-1000  group  cursor-pointer text-white text-sm "



                                >

                                    <div className=''>
                                        <motion.img
                                            src={item.brandImg}
                                            alt="Title"
                                            className="w-64 md:w-72 h-[320px] md:h-[400px] transition-transform duration-500"
                                            whileHover={{
                                                rotateX: 25,
                                                translateY: -10,
                                                boxShadow: "2px 35px 32px -8px rgba(0, 0, 0, 0.75)",

                                            }}


                                        />
                                    </div>



                                    {/* Character */}

                                    <motion.img
                                        src={item.brandLogo}
                                        alt="Character"
                                        className="absolute w-full  bg-opacity-0  opacity-0 transition-all duration-700 z-[-1] group-hover:opacity-100 group-hover:translate-y-[-30%] group-hover:z-10 group-hover:bg-black
                                        group-hover:bg-opacity-60 group-hover:p-5
                                        "
                                    />

                                </div>
                            </Link>




                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurBrands;