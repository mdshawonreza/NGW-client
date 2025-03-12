import React, { useEffect, useState } from 'react';
import Product from './ProductCard';
import ProductCard from './ProductCard';

const allProducts=
[
  {
    "id": 1,
    "productTitle": "Elite Wireless Headphones",
    "image": "https://i.ibb.co.com/DHGFLYhn/81z-Tv9-NKQAL-SX569.jpg",
    "description": "Premium over-ear headphones with deep bass and noise cancellation.",
    "price": 79.99,
    "rating": 4.7,
    "brandName": "SonicWave",
    "category": "Electronics & Gadgets"
  },
  {
    "id": 2,
    "productTitle": "Smart Fitness Watch",
    "image": "https://i.ibb.co.com/DHGFLYhn/81z-Tv9-NKQAL-SX569.jpg",
    "description": "Track your steps, heart rate, and sleep with this smart wearable.",
    "price": 99.99,
    "rating": 4.5,
    "brandName": "FitTrack",
    "category": "Electronics & Gadgets"
  },
  {
    "id": 3,
    "productTitle": "ErgoComfort Office Chair",
    "image": "https://i.ibb.co.com/DHGFLYhn/81z-Tv9-NKQAL-SX569.jpg",
    "description": "Ergonomic chair with adjustable lumbar support and mesh backrest.",
    "price": 189.99,
    "rating": 4.6,
    "brandName": "WorkEase",
    "category": "Home & Office"
  },
  {
    "id": 4,
    "productTitle": "RGB Gaming Keyboard",
    "image": "https://via.placeholder.com/150",
    "description": "Mechanical keyboard with customizable RGB lighting and fast response keys.",
    "price": 89.99,
    "rating": 4.8,
    "brandName": "GameMax",
    "category": "Gaming & Accessories"
  },
  {
    "id": 5,
    "productTitle": "UltraThin Power Bank",
    "image": "https://via.placeholder.com/150",
    "description": "10,000mAh power bank with fast charging support.",
    "price": 34.99,
    "rating": 4.3,
    "brandName": "VoltX",
    "category": "Personal & Travel"
  },
  {
    "id": 6,
    "productTitle": "4K Streaming Smart TV",
    "image": "https://via.placeholder.com/150",
    "description": "Ultra HD smart TV with built-in streaming apps and voice control.",
    "price": 529.99,
    "rating": 4.6,
    "brandName": "VisionTech",
    "category": "Electronics & Gadgets"
  },
  {
    "id": 7,
    "productTitle": "Adjustable Standing Desk",
    "image": "https://via.placeholder.com/150",
    "description": "Motorized height-adjustable desk for a comfortable workspace.",
    "price": 349.99,
    "rating": 4.7,
    "brandName": "WorkEase",
    "category": "Home & Office"
  },
  {
    "id": 8,
    "productTitle": "Gaming Laptop X1",
    "image": "https://via.placeholder.com/150",
    "description": "High-performance gaming laptop with RTX graphics and 16GB RAM.",
    "price": 1499.99,
    "rating": 4.9,
    "brandName": "GameMax",
    "category": "Gaming & Accessories"
  },
  {
    "id": 9,
    "productTitle": "Smart Air Purifier",
    "image": "https://via.placeholder.com/150",
    "description": "HEPA-filter air purifier with smart controls and real-time air quality monitoring.",
    "price": 199.99,
    "rating": 4.7,
    "brandName": "FreshAir",
    "category": "Home & Office"
  },
  {
    "id": 10,
    "productTitle": "Compact Travel Backpack",
    "image": "https://via.placeholder.com/150",
    "description": "Lightweight waterproof backpack with multiple compartments.",
    "price": 59.99,
    "rating": 4.5,
    "brandName": "PackPro",
    "category": "Personal & Travel"
  }
]


const OurProducts = () => {

    // useEffect(() => {
    //     fetch('/public/products.json')
    //         .then(res => res.json())
    //         .then(data => setAllProducts(data))
    // }, [])




    // const [allProducts, setAllProducts] = useState([])
    const [search, setSearch] = useState("")
    const [category, setCategory] = useState("");
    console.log(allProducts)



    return (
        <div className='md:pt-[118px] '>
            <div className="relative ">
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
                    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20">
                        <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">


                            <h2 className=" font-sans tracking-tight text-white sm:text-4xl sm:leading-none text-3xl md:text-[62px] font-extrabold text-center mt-16  md:mt-0 inter-font ">

                                Our <span className='text-[#F26B24] md:leading-relaxed'> Products</span>
                            </h2>
                            <p className=" md:text-[26px] font-medium text-gray-200 inter-font text-center px-3 md:px-0">
                                One-stop destination for high-quality wholesale products at unbeatable prices.
                            </p>



                            <a
                                href=""
                                aria-label="Scroll down"
                                className="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-[#F26B24] rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110 hover:bg-[#F26B24] mt-5"
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

            <div id='productD' className='max-w-[380px] md:max-w-3xl lg:max-w-[1550px] mx-auto mt-7' >
                {/* <div className="w-1/2 mx-auto mb-10">
                    <div className="text-center mt-8">
                        <h2 className=" font-sans tracking-tight  sm:text-4xl sm:leading-none text-3xl md:text-[62px] font-extrabold text-center mt-16  md:mt-0 inter-font ">Find Your <span className="text-[#F26B24]">Products</span> </h2>
                        <p className="pt-2 md:pt-2 md:text-[26px] font-medium text-[#4A4A4A] inter-font">Book your hostel now and unlock exclusive discounts, ensuring a budget-friendly stay with exceptional comfort and service.</p>
                    </div>

                </div> */}
                <div className='flex flex-col md:flex-row gap-4 md:mt-16 justify-center  items-center'>
                    <div className="form-control pb-3 my-4  md:w-[580px]">
                        <div className="join">
                            <input onChange={(e) => { setSearch(e.target.value) }} type="text" placeholder="Search…" className="flex-grow w-full h-12 px-4 mb-3 text-Black transition duration-200 bg-transparent border-2 border-gray-400 rounded appearance-none md:mr-0 md:mb-0 focus:border-deep-purple-accent-200 focus:outline-none focus:shadow-outline" />
                            <a href="#searchP">
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none bg-[#F26B24]"
                                >
                                    Search
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="flex gap-1 md:gap-14 justify-center mx-3 -mt-3">
                        <select onChange={(e) => {
                            setCategory(e.target.value);
                        }} className="select select-sm md:select-md  select-bordered select-warning md:w-[300px] h-12 ">
                            <option disabled selected>Select by category</option>
                            <option>Electronics & Gadgets</option>
                            <option>TechNova</option>
                            <option>CyberX</option>
                        </select>
                        {/* <div className="w-72 mb-4">
                        <input
                            onChange={(e) => {
                              setPrice(e.target.value);
                            }}
                            placeholder="Select by price"
                            className="input input-bordered input-sm w-full max-w-xs"
                            type="number"
                        />
                    </div> */}
                    </div>
                </div>


                <div id='searchP' className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10  mt-8 md:mb-16 ">


                    {
                        allProducts.filter((product) => {
                            const isSearchValue = search.toLowerCase() === ""
                                ? product
                                : product.productTitle.toLowerCase().includes(search);


                            const isCategoryValue = category.toLowerCase() === ""
                                ? product
                                : product.category.includes(category);
                            return isSearchValue && isCategoryValue
                        }).map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default OurProducts;