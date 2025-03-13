import React, { useEffect, useState } from 'react';
import Product from './ProductCard';
import ProductCard from './ProductCard';

const allProducts=
[
    {
        "id": 1,
        "category": "FROZEN SNACKS",
        "productTitleShort": "TOT PIZZA ROLLS PEPPERONI10953",
        "productTitle": "Totino's Pepperoni Frozen Pizza Rolls - 24.8oz",
        "image": "https://go-upc.s3.amazonaws.com/images/45044171.jpg"
      },
      {
        "id": 2,
        "category": "FROZEN SNACKS",
        "productTitleShort": "HT PKT PIZZA PEPPERONI07111",
        "productTitle": "Hot Pockets Sandwiches, Premium, Pepperoni Pizza, Garlic Buttery Crust, 2 Pack",
        "image": "https://go-upc.s3.amazonaws.com/images/5059358.jpeg"
      },
      {
        "id": 3,
        "category": "FROZEN SNACKS",
        "productTitleShort": "SMKR UNCRSTBLS PB/GRP 4PK02516",
        "productTitle": "Smucker's Sandwich, Peanut Butter & Grape Jelly 4 Ea",
        "image": "https://go-upc.s3.amazonaws.com/images/57346827.jpeg"
      },
      {
        "id": 4,
        "category": "FROZEN SNACKS",
        "productTitleShort": "CRSNT PKT PEPPERONI PIZZA05631",
        "productTitle": "Hot Pockets 2 Pack Crispy Crust Pepperoni Pizza 2 Ea Box",
        "image": "https://go-upc.s3.amazonaws.com/images/57357035.jpeg"
      },
      {
        "id": 5,
        "category": "FROZEN SNACKS",
        "productTitleShort": "SMKR UNCRSTBLS PB/STR 4PK02517",
        "productTitle": "Smucker's Sandwiches, Peanut Butter & Strawberry Jam 4 Ea",
        "image": "https://go-upc.s3.amazonaws.com/images/57367758.jpeg"
      },
      {
        "id": 6,
        "category": "FROZEN SNACKS",
        "productTitleShort": "HT PKT PEPP PIZZA 5PK62899",
        "productTitle": "Hot Pockets Pepperoni Pizza Frozen Sandwiches 5 Ct. Box",
        "image": "https://go-upc.s3.amazonaws.com/images/61509275.png"
      },
      {
        "id": 7,
        "category": "FROZEN SNACKS",
        "productTitleShort": "TOT PIZZA ROLLS COMB 50CT10952",
        "productTitle": "Totino's Combination Pizza Rolls 50 Ea Bag",
        "image": "https://go-upc.s3.amazonaws.com/images/61510958.png"
      },
      {
        "id": 8,
        "category": "FROZEN SNACKS",
        "productTitleShort": "TGIF CKN WINGS BUFF00036",
        "productTitle": "TGI Fridays Frozen Appetizers Buffalo Style Chicken Wings, 9 Oz. Box",
        "image": "https://go-upc.s3.amazonaws.com/images/57320235.jpeg"
      },
      {
        "id": 9,
        "category": "FROZEN SNACKS",
        "productTitleShort": "TOT PIZZA ROLLS TRPL MEAT10915",
        "productTitle": "Totino's Pizza Rolls, Triple Meat, 50 Ct, 24.8 Oz Bag (frozen)",
        "image": "https://go-upc.s3.amazonaws.com/images/57386338.jpeg"
      },
      {
        "id": 10,
        "category": "FROZEN SNACKS",
        "productTitleShort": "HT PKT HAM AND CHEESE07112",
        "productTitle": "Hot Pockets Sandwiches, Hickory Ham & Cheddar, Crispy Buttery Crust, 2 Pack 2 Ea",
        "image": "https://go-upc.s3.amazonaws.com/images/57416765.jpeg"
      },
      {
        "id": 11,
        "category": "FROZEN SNACKS",
        "productTitleShort": "HT PKT MEATBLLS W/MOZZARL07116",
        "productTitle": "Hot Pockets Meatballs & Mozzarella Frozen Sandwiches 2 Ct Box",
        "image": "https://go-upc.s3.amazonaws.com/images/57387927.jpeg"
      },
      {
        "id": 12,
        "category": "FROZEN SNACKS",
        "productTitleShort": "TOT PIZZ RLS PERRRN 15CT28292",
        "productTitle": "Totino's Pizza Rolls, Pepperoni, 15 Ct, 7.5 Oz. Bag (frozen)",
        "image": "https://go-upc.s3.amazonaws.com/images/52787931.jpeg"
      },
      {
        "id": 13,
        "category": "FROZEN SNACKS",
        "productTitleShort": "WHTCST CHEESEBURGERS01006",
        "productTitle": "White Castle Classic Cheese Sliders 6 Ea",
        "image": "https://go-upc.s3.amazonaws.com/images/57399458.jpeg"
      },
      {
        "id": 14,
        "category": "FROZEN SNACKS",
        "productTitleShort": "BGL BT CHEESE PEPPERONI03502",
        "productTitle": "Bagel Bites Cheese & Pepperoni Mini Pizza Snacks, 9 Ct Box",
        "image": "https://go-upc.s3.amazonaws.com/images/57339321.jpeg"
      },
      {
        "id": 15,
        "category": "FROZEN SNACKS",
        "productTitleShort": "TOT PZZA ROLLS PEPP 100CT11838",
        "productTitle": "Totino's Frozen Pizza Rolls Pepperoni - 48.8oz/100ct",
        "image": "https://go-upc.s3.amazonaws.com/images/45179300.jpg"
      },
      {
        "id": 16,
        "category": "FROZEN SNACKS",
        "productTitleShort": "CRSNT PKT HAM& CHEDDAR05632",
        "productTitle": "Hot Pockets Sandwiches, Hickory Ham & Cheddar, Croissant Crust, 2 Pack 2 Ea",
        "image": "https://go-upc.s3.amazonaws.com/images/57367703.jpeg"
      },
      {
        "id": 17,
        "category": "FROZEN SNACKS",
        "productTitleShort": "TGIF MOZZ STIX06850",
        "productTitle": "Tgi Fridays Mozzarella Sticks With Marinara Sauce 11 Oz. Box",
        "image": "https://go-upc.s3.amazonaws.com/images/57313586.jpeg"
      },
      {
        "id": 18,
        "category": "FROZEN SNACKS",
        "productTitleShort": "TOT PIZZA ROLLS SUPRM 50C10924",
        "productTitle": "Totino's Supreme Pizza Rolls 50 Ea",
        "image": "https://go-upc.s3.amazonaws.com/images/57804416.png"
      },
      {
        "id": 19,
        "category": "FROZEN SNACKS",
        "productTitleShort": "TOT PIZZ RLS COMBO 15CT28293",
        "productTitle": "Totino's Pizza Rolls Combination - 15 Count",
        "image": "https://go-upc.s3.amazonaws.com/images/63320682.png"
      },
      {
        "id": 20,
        "category": "FROZEN SNACKS",
        "productTitleShort": "HT PKT 4 CHEESE07109",
        "productTitle": "Hot Pockets Four Cheese Pizza & Garlic Butter Crust Frozen Sandwich - 8.5oz/2pk",
        "image": "https://go-upc.s3.amazonaws.com/images/57366157.jpeg"
      },
      {
        "id": 21,
        "category": "FROZEN ICE CREAM",
        "productTitleShort": "TAMPICO FREEZER POP99946",
        "productTitle": "Tampico Freezer Pops",
        "image": "https://go-upc.s3.amazonaws.com/images/46061031.jpg"
      },
      {
        "id": 22,
        "category": "FROZEN ICE CREAM",
        "productTitleShort": "BLU BNY NEOPLITAN IC PAIL01158",
        "productTitle": "Blue Ribbon Classics Reduced Fat Friends + Family Size Neapolitan Ice Cream 1 Gal",
        "image": "https://go-upc.s3.amazonaws.com/images/52788705.jpeg"
      },
      {
        "id": 23,
        "category": "FROZEN ICE CREAM",
        "productTitleShort": "BDGT SVR TWN POPS 18CT90164",
        "productTitle": "Budget Saver Assorted Twin Pops - 18 CT",
        "image": "https://go-upc.s3.amazonaws.com/images/61500385.png"
      },
      {
        "id": 24,
        "category": "FROZEN ICE CREAM",
        "productTitleShort": "BRC RFAT NEAPOLITAN02012",
        "productTitle": "Blue Ribbon Classics Neapolitan Reduced Fat Ice Cream 48 Fl. Oz. Tub",
        "image": "https://go-upc.s3.amazonaws.com/images/50619743.png"
      },
      {
        "id": 25,
        "category": "FROZEN ICE CREAM",
        "productTitleShort": "BLU BNY NEOP IC SNDWICH 901929",
        "productTitle": "Blue Bunny Frozen Premium Sandwiches Neapolitan - 9ct",
        "image": "https://go-upc.s3.amazonaws.com/images/57588871.png"
      },
      {
        "id": 26,
        "category": "FROZEN ICE CREAM",
        "productTitleShort": "BLU BNY ORIGNAL BOMB POPS02169",
        "productTitle": "Bomb Pop Blue Bunny Original Pops, 12 Ct",
        "image": "https://go-upc.s3.amazonaws.com/images/57380574.jpeg"
      },
      {
        "id": 27,
        "category": "FROZEN ICE CREAM",
        "productTitleShort": "BLU BNY BOMP POP BAN FUDG02171",
        "productTitle": "Bomb Pop Banana Fudge Frozen Dairy Confection 12 - 1.75 Fl Oz Pops",
        "image": "https://go-upc.s3.amazonaws.com/images/57796727.png"
      },
      {
        "id": 28,
        "category": "FROZEN ICE CREAM",
        "productTitleShort": "BDGT SVR TROP TWIN POP 1810194",
        "productTitle": "Budget Saver Twin Pops, Tropic",
        "image": "https://go-upc.s3.amazonaws.com/images/52798690.png"
      },
      {
        "id": 29,
        "category": "FROZEN ICE CREAM",
        "productTitleShort": "MYMO STRABERRY ICE CREAM 99616",
        "productTitle": "My/Mochi Ice Cream, Ripe Strawberry, 4 Pack",
        "image": "https://go-upc.s3.amazonaws.com/images/35209870.png"
      },
      {
        "id": 30,
        "category": "FROZEN ICE CREAM",
        "productTitleShort": "BRC RFAT STRAWBERRY02013",
        "productTitle": "Blue Ribbon Classics Strawberry Reduced Fat Ice Cream 48 Fl. Oz. Tub",
        "image": "https://go-upc.s3.amazonaws.com/images/49095307.png"
      },
      {
        "id": 31,
        "category": "FROZEN ICE CREAM",
        "productTitleShort": "BLU BNY VANILLA SAND 16CT01473",
        "productTitle": "Blue Ribbon Classics Vanilla Sandwiches 16 Ct Box",
        "image": "https://go-upc.s3.amazonaws.com/images/49703276.png"
      },
      {
        "id": 32,
        "category": "FROZEN ICE CREAM",
        "productTitleShort": "BRC RFAT BUTTERPECAN02006",
        "productTitle": "Blue Ribbon Classics Butter Pecan Reduced Fat Ice Cream 48 Fl. Oz. Tub",
        "image": "https://go-upc.s3.amazonaws.com/images/50581299.png"
      },
      {
        "id": 33,
        "category": "FROZEN ICE CREAM",
        "productTitleShort": "DSTK VANILLA 8CT84811",
        "productTitle": "Drumstick 8 Pack The Original Vanilla Dessert Cones 8 Ea",
        "image": "https://go-upc.s3.amazonaws.com/images/57356849.jpeg"
      },
      {
        "id": 34,
        "category": "FROZEN ICE CREAM",
        "productTitleShort": "BRC RFAT CKIENCRM02008",
        "productTitle": "Blue Ribbon Classics Ice Cream, Reduced Fat, Cookies N Cream",
        "image": "https://go-upc.s3.amazonaws.com/images/50581282.png"
      },
      {
        "id": 35,
        "category": "FROZEN ICE CREAM",
        "productTitleShort": "BLU BNY SMPLY VAN IC SNDW01930",
        "productTitle": "Blue Bunny Sandwiches Simply Vanilla Frozen Dairy Dessert 9 - 4.25 Fl Oz Packs",
        "image": "https://go-upc.s3.amazonaws.com/images/61537988.png"
      },
      {
        "id": 36,
        "category": "FROZEN ICE CREAM",
        "productTitleShort": "LA MIC VRTY MNI IC BARS 103042",
        "productTitle": "La Michoacana Variety Mini Ice Cream Bars",
        "image": "https://images.freshop.com/00767778030423/7de4bf8463d5391afa6ceb6b4055e08a_large.png"
      },
      {
        "id": 37,
        "category": "FROZEN ICE CREAM",
        "productTitleShort": "BLU BNY BRC ORANGE DREAM 30012",
        "productTitle": "Blue Ribbon Classics Friends + Family Pack Orange Dream Frozen Dairy Dessert 20 - 2.25 Fl Oz Packs",
        "image": "https://go-upc.s3.amazonaws.com/images/50625887.png"
      },
      {
        "id": 38,
        "category": "FROZEN ICE CREAM",
        "productTitleShort": "ICEE WILD CHERRY FREEZE 403972",
        "productTitle": "Icee Freeze Wild Cherry - 4 CT",
        "image": "https://go-upc.s3.amazonaws.com/images/57495143.png"
      },
      {
        "id": 39,
        "category": "FROZEN ICE CREAM",
        "productTitleShort": "SNKR IC BAR00051",
        "productTitle": "Snickers Ice Cream Bars 6-Count Box",
        "image": "https://go-upc.s3.amazonaws.com/images/2789686.jpeg"
      },
      {
        "id": 40,
        "category": "FROZEN ICE CREAM",
        "productTitleShort": "BLU BNY CLSC VAN SUNDAE C63023",
        "productTitle": "Blue Ribbon Classics Vanilla Sundae Frozen Dairy Dessert 8 - 4.3 Fl Oz Cones",
        "image": "https://go-upc.s3.amazonaws.com/images/57823156.png"
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
    // console.log(search)



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
                            <input onChange={(e) => { setSearch(e.target.value.toLocaleLowerCase()) }} type="text" placeholder="Search…" className="flex-grow w-full h-12 px-4 mb-3 text-Black transition duration-200 bg-transparent border-2 border-gray-400 rounded appearance-none md:mr-0 md:mb-0 focus:border-deep-purple-accent-200 focus:outline-none focus:shadow-outline" />
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
                            <option>FROZEN SNACKS</option>
                            <option>FROZEN ICE CREAM</option>
                            {/* <option>CyberX</option> */}
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

// console.log(search.toLowerCase())
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