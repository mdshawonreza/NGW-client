import { useState } from "react";
import { BsTelephoneInboundFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function ContactForm() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mx-auto sm:max-w-xl  lg:max-w-[1550px]   md:pt-[118px] ">
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
                    <div className="px-4  py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">

                            <h2 className=" font-sans tracking-tight text-white sm:text-4xl sm:leading-none text-3xl md:text-[62px] font-extrabold text-center mt-16  md:mt-0 inter-font ">

                                Our <span className='text-[#F26B24] md:leading-relaxed'>Team </span>
                            </h2>
                            <p className=" md:text-[26px] font-medium text-gray-200 inter-font px-3 md:px-0">
                                One-stop destination for high-quality wholesale products at unbeatable prices.
                            </p>


                            <a
                                href="#ourt"
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

            <div className="  flex justify-center items-center " >
                <section id="contact" className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-8">
                    <h1 className="bg-[#F26B24] text-white text-xl font-bold py-3 px-4 shadow-md">CONTACT</h1>
                    <p className="mt-4 text-gray-600">
                        Yoda soon you will call me master Governor Tarkin. A new hope Boba Fett bantha forest moon.
                        Tusken raider Master Yoda do or do not never tell me the odds.
                    </p>
                    <button
                        className="w-full bg-[#F26B24] text-white py-3 mt-4 shadow-md hover:shadow-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? "Close Form" : "Open Form"}
                    </button>
                    {isOpen && (
                        <form className="mt-4 space-y-4">
                            <div className="relative">
                                <label className="absolute left-3 top-3 text-white bg-[#F26B24] px-2" htmlFor="contact_name">NAME</label>
                                <input
                                    type="text"
                                    id="contact_name"
                                    className="w-full border border-gray-300 p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-red-300"
                                />
                            </div>
                            <div className="relative">
                                <label className="absolute left-3 top-3 text-white bg-[#F26B24] px-2" htmlFor="contact_email">EMAIL</label>
                                <input
                                    type="email"
                                    id="contact_email"
                                    className="w-full border border-gray-300 p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-red-300"
                                />
                            </div>
                            <div className="relative">
                                <label className="absolute left-3 top-3 text-white bg-[#F26B24] px-2" htmlFor="contact_subject">SUBJECT</label>
                                <input
                                    type="text"
                                    id="contact_subject"
                                    className="w-full border border-gray-300 p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-red-300"
                                />
                            </div>
                            <div>
                                <textarea
                                    id="contact_message"
                                    rows="4"
                                    placeholder="Your message..."
                                    className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-red-300"
                                ></textarea>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="bg-[#F26B24] text-white px-6 py-3 shadow-md hover:shadow-none">
                                    ENVOYER
                                </button>
                            </div>
                        </form>
                    )}
                </section>
            </div>
            <div className=" my-10">
                {/* <h2 className='text-center text-3xl font-bold pt-16'>Feel comfort to share your problem  <span className='text-orange-500'>& get helps </span></h2>
                <p className='text-center font-medium text-gray-500 mt-3'> Feel at ease to discuss your problem  and ideas with confidence,we are here to support  and <br />help you turn your dreams into reality..</p> */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4 md:pb-14 md:gap-16">
                    <div className="card   ">
                        <div className="px-10 pt-10  flex justify-center items-center">
                            <div className="bg-orange-500 p-6 rounded-full">
                                <BsTelephoneInboundFill className="text-4xl text-white " />
                            </div>

                        </div>
                        <div className='flex justify-center mt-6'>
                            <div className='bg-orange-500 w-32 h-[1px]'>

                            </div>
                        </div>
                        <div className="card-body items-center text-center -mt-3">
                            <h2 className="tracking-tight  sm:text-4xl sm:leading-none text-3xl md:text-[36px] font-extrabold text-center mt-16  md:mt-0 inter-font ">Phone</h2>
                            <p className=' text-gray-500'>Share your vision, and together, we all shape a future filled with success and happiness</p>
                            <div className="card-actions mt-4">
                                <button className="btn btn-outline hover:bg-[#192a60] ">Details</button>
                            </div>
                        </div>
                    </div>
                    <div className="card  ">
                    <div className="px-10 pt-10  flex justify-center items-center">
                            <div className="bg-orange-500 p-6 rounded-full ">
                                <FaLocationDot  className="text-4xl text-white " />
                            </div>

                        </div>
                        <div className='flex justify-center mt-6'>
                            <div className='bg-orange-500 w-32 h-[1px]'>

                            </div>
                        </div>
                        <div className="card-body items-center text-center -mt-3">
                            <h2 className=" tracking-tight  sm:text-4xl sm:leading-none text-3xl md:text-[36px] font-extrabold text-center mt-16  md:mt-0 inter-font ">Address</h2>
                            <p className=' text-gray-500'>Discover our diverse Jobs locations, where your dreams find their perfect match</p>
                            <div className="card-actions mt-4">
                                <button className="btn btn-outline hover:bg-[#192a60]">Details</button>
                            </div>
                        </div>
                    </div>
                    <div className="card  ">
                       <div className="px-10 pt-10  flex justify-center items-center">
                            <div className="bg-orange-500 p-6 rounded-full">
                                <MdEmail className="text-4xl text-white " />
                            </div>

                        </div>
                        <div className='flex justify-center mt-6'>
                            <div className='bg-orange-500 w-32 h-[1px]'>

                            </div>
                        </div>
                        <div className="card-body items-center text-center -mt-3">
                            <h2 className="tracking-tight  sm:text-4xl sm:leading-none text-3xl md:text-[36px] font-extrabold text-center mt-16  md:mt-0 inter-font ">Email
                            </h2>
                            <p className=' text-gray-500'>Discover diverse income strategies in our guides, ensuring financial security and success.</p>
                            <div className="card-actions mt-4">
                                <button className="btn btn-outline  hover:bg-[#192a60]">DETAILS</button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}
