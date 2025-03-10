import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from './Product';

const BrandProducts = () => {
    const { brandName } = useParams();
    // console.log(brandName)
    const [items, setItems] = useState([])
    const [filteredItems, setFilteredItems] = useState([]);
    useEffect(() => {
        fetch('/public/products.json')
            .then((res) => res.json())
            .then((data) => {
                setItems(data);
                const filtered = data.filter((item) => item.brandName === brandName);
                setFilteredItems(filtered);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, [brandName]);
    console.log(filteredItems)
    console.log(items)
    return (
        <div className='pt-40'>
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
                    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">


                            <h2 className=" font-sans tracking-tight text-white sm:text-4xl sm:leading-none text-3xl md:text-[62px] font-extrabold text-center mt-16  md:mt-0 inter-font ">

                                Our <span className='text-[#F26B24] md:leading-relaxed'> Products</span>
                            </h2>
                            <p className=" md:text-[26px] font-medium text-gray-200 inter-font px-3 md:px-0">
                                One-stop destination for high-quality wholesale products at unbeatable prices.
                            </p>

                            <div className="form-control my-4">
                                <div className="join">
                                    <input onChange={(e) => { setSearch(e.target.value) }} type="text" placeholder="Search…" className="flex-grow w-full h-12 px-4 mb-3 text-white transition duration-200 bg-transparent border-2 border-gray-400 rounded appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-200 focus:outline-none focus:shadow-outline" />
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
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-[380px] md:max-w-3xl lg:max-w-[1550px] mx-auto my-16">


                {
                    filteredItems.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default BrandProducts;