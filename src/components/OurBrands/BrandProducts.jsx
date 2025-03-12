import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from './Product';


const items =
    [
        {
            "id": 1,
            "productTitle": "Elite Wireless Headphones",
            "image": "https://i.ibb.co.com/DHGFLYhn/81z-Tv9-NKQAL-SX569.jpg",
            "description": "Premium over-ear headphones with deep bass and noise cancellation.",
            "price": 79.99,
            "rating": 4.7,
            "brandName": "Banquet",
            "category": "Electronics & Gadgets"
        },
        {
            "id": 2,
            "productTitle": "Smart Fitness Watch",
            "image": "https://i.ibb.co.com/DHGFLYhn/81z-Tv9-NKQAL-SX569.jpg",
            "description": "Track your steps, heart rate, and sleep with this smart wearable.",
            "price": 99.99,
            "rating": 4.5,
            "brandName": "Banquet",
            "category": "Electronics & Gadgets"
        },
        {
            "id": 3,
            "productTitle": "ErgoComfort Office Chair",
            "image": "https://i.ibb.co.com/DHGFLYhn/81z-Tv9-NKQAL-SX569.jpg",
            "description": "Ergonomic chair with adjustable lumbar support and mesh backrest.",
            "price": 189.99,
            "rating": 4.6,
            "brandName": "Banquet",
            "category": "Home & Office"
        },
        {
            "id": 4,
            "productTitle": "RGB Gaming Keyboard",
            "image": "https://via.placeholder.com/150",
            "description": "Mechanical keyboard with customizable RGB lighting and fast response keys.",
            "price": 89.99,
            "rating": 4.8,
            "brandName": "Banquet",
            "category": "Gaming & Accessories"
        },
        {
            "id": 5,
            "productTitle": "UltraThin Power Bank",
            "image": "https://via.placeholder.com/150",
            "description": "10,000mAh power bank with fast charging support.",
            "price": 34.99,
            "rating": 4.3,
            "brandName": "Banquet",
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


const BrandProducts = () => {
    const { brandName } = useParams();
    // console.log(brandName)
    // const [items, setItems] = useState([])
    // const [filteredItems, setFilteredItems] = useState([]);
    // useEffect(() => {
    //     fetch('/public/products.json')
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setItems(data);
    //             const filtered = data.filter((item) => item.brandName === brandName);
    //             setFilteredItems(filtered);
    //         })
    //         .catch((error) => console.error("Error fetching data:", error));
    // }, [brandName]);

    const filtered = items.filter((item) => item.brandName === brandName);
    // console.log(filteredItems)
    const [search, setSearch] = useState("")

    console.log(search)
    return (
        <div className='md:pt-[118px]'>
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
                    <div className="px-4 pb-4 md:pb-16 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">


                            <h2 className=" font-sans tracking-tight text-white  sm:leading-none text-3xl md:text-[62px] font-extrabold text-center mt-16  md:mt-0 inter-font ">

                                {brandName}<span className='text-[#F26B24] md:leading-relaxed'> Brand</span>

                            </h2>
                            <p className=" md:text-[26px] font-medium text-gray-200 inter-font px-3 text-center mt-3 md:px-0">
                                One-stop destination for high-quality wholesale products at unbeatable prices.
                            </p>

                            <div className="form-control  pt-2 pb-3 my-4">
                                <div className="join">
                                    <input
                                        onChange={(e) => { setSearch(e.target.value.toLocaleLowerCase()) }}
                                        type="text" placeholder="Search…" className="flex-grow  w-full h-12 px-4 mb-3 text-white transition duration-200 bg-transparent border-2 border-gray-400 rounded appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-200 focus:outline-none focus:shadow-outline" />
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

                            {/* <a
                                href=""
                                aria-label="Scroll down"
                                className="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110 hover:bg-[#F26B24] mt-5"
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
                            </a> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-[380px] md:max-w-3xl lg:max-w-[1550px] mx-auto my-4 md:my-16">
                {
                    filtered.filter((product) => {
                        const isSearchValue = search.toLowerCase() === ""
                            ? product
                            : product.productTitle.toLowerCase().includes(search);

                        // console.log(search.toLowerCase())
                        // const isCategoryValue = category.toLowerCase() === ""
                        //     ? product
                        //     : product.category.includes(category);
                        return isSearchValue 
                    }).map(product => <Product key={product.id} product={product}></Product>)
                }


                {/* {
                    filtered.map(product => <Product key={product.id} product={product}></Product>)
                } */}
            </div>
        </div>
    );
};

export default BrandProducts;