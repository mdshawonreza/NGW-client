import { useState } from "react";
import { BsTelephoneInboundFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Map from "./Map";

export default function ContactForm() {
    // const [isOpen, setIsOpen] = useState(false);

    return (
        <div className=" inter-font md:pt-[118px] ">
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
                    <div className="px-4  pb-10 mb:pb-16 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">

                            <h2 className=" font-sans tracking-tight text-white sm:text-4xl sm:leading-none text-3xl md:text-[62px] font-extrabold text-center mt-16  md:mt-0 inter-font ">
                                Contact

                                <span className='text-[#F26B24] md:leading-relaxed'> Us</span>

                            </h2>
                            <p className=" md:text-[26px] font-medium text-gray-200 inter-font px-3 md:px-0 mt-3 md:mt-0 text-center">
                                One-stop destination for high-quality wholesale products at unbeatable prices.
                            </p>


                            <a
                                href="#contactF"
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
            <div id="contactF" className=" mx-auto sm:max-w-xl  lg:max-w-[1550px] ">
                <div className="  flex justify-center items-center " >
                    <div className=" md:w-[800px]   mx-auto p-8 md:p-12 ">
                        <h2 className="text-center text-2xl md:text-4xl font-bold text-[#000000] md:mb-4" >Request Product Portfolio and Pricing</h2>
                        <p className="pt-2 md:pt-0 mb-4 md:mb-8 md:text-[20px] font-medium text-[#4A4A4A] text-center">We serve our customers 24/7 and will respond <br /> more likely within 1 hour.</p>
                        <form  >
                            
                            <div className="md:flex md:mb-3 ">
                                <div className="form-control  md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-base">Your Company Name <span className="text-red-500"> *</span></span>
                                    </label>
                                    <label className="input-group">

                                        <input type="text" name="mealTitle" placeholder="Enter..." className="input input-bordered w-full" />
                                    </label>
                                </div>
                                <div className="form-control md:ml-4  md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-base">Phone <span className="text-red-500"> *</span></span>
                                    </label>
                                    <label className="input-group">

                                        <input type="text" name="reviews" placeholder="Enter..." defaultValue={0} className="input input-bordered w-full" />
                                    </label>
                                </div>
                            </div>


                            <div className="md:flex md:mb-3">
                                <div className="form-control  md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-base">Your Name<span className="text-red-500"> *</span></span>
                                    </label>
                                    <label className="input-group">

                                        <input type="text" name="mealTitle" placeholder="Enter..." className="input input-bordered w-full" />
                                    </label>
                                </div>
                                <div className="form-control md:ml-4  md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-base">Your Email<span className="text-red-500"> *</span></span>
                                    </label>
                                    <label className="input-group">

                                        <input type="text" name="reviews" placeholder="Enter..." defaultValue={0} className="input input-bordered w-full" />
                                    </label>
                                </div>
                            </div>

                            
                            <div className="md:flex md:mb-3">

                                <div className="form-control md:w-full">
                                    <label className="label">
                                        <span className="label-text text-base">How many containers your plan to buy in 12 months<span className="text-red-500"> *</span></span>
                                    </label>
                                    <select defaultValue={"default"} name="mealCategory" className="select select-bordered  ">
                                        <option value="default" disabled>1-12 </option>
                                        <option >13-60</option>
                                        <option  >61-120</option>
                                        <option  >120 +</option>


                                    </select>
                                </div>

                                
                            </div>
                            <div className="md:flex md:mb-3 ">

                                <div className="form-control md:w-full">
                                    <label className="label">
                                        <span className="label-text text-base">Which Products are you interested in?<span className="text-red-500"> *</span>
                                        </span>
                                    </label>
                                    <select defaultValue={"default"} name="mealCategory" className="select select-bordered  ">
                                        <option value="default" disabled>Beverages </option>
                                        <option >Candy</option>
                                        <option  >Snack & Chips</option>
                                        <option  >Coffee</option>


                                    </select>
                                </div>

                                
                            </div>
                           
                           
                            <div className="md:flex md:mb-3 ">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-base">Additional Details</span>
                                    </label>
                                    <textarea placeholder="Enter..." className="textarea textarea-bordered textarea-lg w-full " ></textarea>

                                </div>



                            </div>
                            
                            <div className="flex justify-center items-center">
                                <button type="submit" className="btn w-56 text-white text-sm md:text-lg  bg-[#F48B54] hover:bg-[#F26B24] mt-4">Submit</button>

                            </div>
                        </form>
                        
                    </div>
                </div>
                <div className=" md:mt-10">
                    {/* <h2 className='text-center text-3xl font-bold pt-16'>Feel comfort to share your problem  <span className='text-orange-500'>& get helps </span></h2>
                <p className='text-center font-medium text-gray-500 mt-3'> Feel at ease to discuss your problem  and ideas with confidence,we are here to support  and <br />help you turn your dreams into reality..</p> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4 md:pb-14 md:gap-16">
                        <div className="card   ">
                            <div className="px-10 pt-10  flex justify-center items-center">
                                <div className="bg-[#F26B24] p-6 rounded-full">
                                    <BsTelephoneInboundFill className="text-4xl text-white " />
                                </div>

                            </div>
                            <div className='flex justify-center mt-6'>
                                <div className='bg-[#F26B24] w-32 h-[1px]'>

                                </div>
                            </div>
                            <div className="card-body items-center text-center -mt-3">
                                <h2 className="tracking-tight  sm:text-4xl sm:leading-none text-3xl md:text-[36px] font-extrabold text-center mt-4  md:mt-0 inter-font ">Phone</h2>
                                <p className=' pt-2 md:pt-0 mb-8 md:text-[26px] font-medium text-[#4A4A4A] text-center'>Share your vision, and together, we all shape a future filled with success and happiness</p>
                                <div className=" ">
                                    <button className="btn btn-lg btn-outline hover:bg-[#192a60] ">DETAILS</button>
                                </div>
                            </div>
                        </div>
                        <div className="card  ">
                            <div className="px-10 pt-10  flex justify-center items-center">
                                <div className="bg-[#F26B24] p-6 rounded-full ">
                                    <FaLocationDot className="text-4xl text-white " />
                                </div>

                            </div>
                            <div className='flex justify-center mt-6'>
                                <div className='bg-[#F26B24] w-32 h-[1px]'>

                                </div>
                            </div>
                            <div className="card-body items-center text-center -mt-3">
                                <h2 className=" tracking-tight  sm:text-4xl sm:leading-none text-3xl md:text-[36px] font-extrabold text-center mt-4  md:mt-0 inter-font ">Address</h2>
                                <p className='pt-2 md:pt-0 mb-8 md:text-[26px] font-medium text-[#4A4A4A] text-center'>Discover our diverse Jobs locations, where your dreams find their perfect match</p>
                                <div className="card-actions ">
                                    <button className="btn btn-lg btn-outline hover:bg-[#192a60]">DETAILS</button>
                                </div>
                            </div>
                        </div>
                        <div className="card  ">
                            <div className="px-10 pt-10  flex justify-center items-center">
                                <div className="bg-[#F26B24] p-6 rounded-full">
                                    <MdEmail className="text-4xl text-white " />
                                </div>

                            </div>
                            <div className='flex justify-center mt-6'>
                                <div className='bg-[#F26B24] w-32 h-[1px]'>

                                </div>
                            </div>
                            <div className="card-body items-center text-center -mt-3">
                                <h2 className="tracking-tight  sm:text-4xl sm:leading-none text-3xl md:text-[36px] font-extrabold text-center mt-4   md:mt-0 inter-font ">Email
                                </h2>
                                <p className=' pt-2 md:pt-0 mb-8 md:text-[26px] font-medium text-[#4A4A4A] text-center'>Discover diverse income strategies in our guides, ensuring financial security and success.</p>
                                <div className="card-actions ">
                                    <button className="btn btn-lg btn-outline  hover:bg-[#192a60]">DETAILS</button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="md:mb-10">
                <Map></Map>
                </div>

            </div>






        </div>
    );
}
