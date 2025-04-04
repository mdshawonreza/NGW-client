import React from 'react';
import teamMember1 from "../../assets/WhatsApp Image 2025-03-19 at 1.18.11 PM.jpeg"
import teamMember2 from "../../assets/2.png" 
import teamMember3 from "../../assets/WhatsApp Image 2025-03-26 at 12.13.13 AM.jpeg"
import teamMember4 from "../../assets/4.png"
import teamMember5 from "../../assets/5.png"
import teamMember6 from "../../assets/6.png"
import teamMember7 from "../../assets/7.png"
import teamMember8 from "../../assets/8.png"
const OurTeam = () => {
    return (
        <div className='pt-[50px] md:pt-[98px]'>
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
                    <div className="px-4 pb-10 mb:pb-16 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center ">
                            <div>
                                <p className="text-[20px] text-center inter-font font-bold text-[#FF6868]">
                                    Core Team
                                </p>
                            </div>

                            <h2 className=" font-sans tracking-tight text-white sm:text-4xl sm:leading-none text-3xl md:text-[62px] font-extrabold text-center  my-3 md:mt-0 inter-font ">

                                Our <span className='text-[#F26B24] md:leading-relaxed'>Team </span>
                            </h2>
                            <p className=" md:text-[26px] font-medium text-gray-200 inter-font px-3 md:px-0">
                                Meet Our Dedicated Team – Experts Ready to Assist You with Your Product and Service Needs!
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

            <div id='ourt' className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1580px] md:px-24 lg:px-10 lg:py-20">

                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                            <img
                                className="object-cover w-full h-56 md:h-64 xl:h-80"
                                src={teamMember1}
                                alt="Person"
                            />
                            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100  ">
                                <p className="mb-1 text-lg font-bold inter-font text-[#f26a0f]">
                                    Hanif Khowja
                                </p>
                                <p className="mb-4 text-sm text-white inter-font">Co Founder</p>
                                <p className="mb-4 text-sm tracking-wide text-gray-200 inter-font">
                                    Co-founder dedicated to quality, affordability, and reliability.
                                </p>
                                <div className="flex items-center justify-center space-x-3">
                                    <a
                                        href="/"
                                        className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                    >
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                            <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="/"
                                        className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                    >
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                            <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                        <img
                                className="object-cover w-full h-56 md:h-64 xl:h-80"
                                src={teamMember2}
                                alt="Person"
                            />
                            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                <p className="mb-1 text-lg font-bold inter-font text-[#f26a0f]">
                                    Fred Aliji


                                </p>
                                <p className="mb-4 text-sm text-white inter-font">Co Founder
                                </p>
                                <p className="mb-4 text-sm tracking-wide text-gray-200 inter-font">
                                    Co-founder dedicated to quality, affordability, and reliability.
                                </p>
                                <div className="flex items-center justify-center space-x-3">
                                    <a
                                        href="/"
                                        className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                    >
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                            <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="/"
                                        className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                    >
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                            <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                            <img
                                className="object-cover w-full h-56 md:h-64 xl:h-80"
                                src={teamMember3}
                                alt="Person"
                            />
                            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                <p className="mb-1 text-lg font-bold inter-font text-[#f26a0f]">
                                    Luis Hidalgo Jr.

                                </p>
                                <p className="mb-4 text-sm inter-font text-white">COO
                                </p>
                                <p className="mb-4 text-sm tracking-wide text-gray-200 inter-font">
                                    A strategic and proactive leader, driving efficiency and innovation.
                                </p>
                                <div className="flex items-center justify-center space-x-3">
                                    <a
                                        href="/"
                                        className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                    >
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                            <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="/"
                                        className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                    >
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                            <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                            <img
                                className="object-cover w-full h-56 md:h-64 xl:h-80"
                                src={teamMember4}
                                alt="Person"
                            />
                            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100 inter-font">
                                <p className="mb-1 text-lg font-bold inter-font text-[#f26a0f]">
                                    Cynthia Ramos
                                </p>
                                <p className="mb-4 text-sm text-white"> Warehouse Manager/ Logistics Coordinator
                                </p>
                                <p className="mb-4 text-sm tracking-wide text-gray-200">
                                    A highly organized and efficient leader, ensuring smooth warehouse operations and logistics.
                                </p>
                                <div className="flex items-center justify-center space-x-3">
                                    <a
                                        href="/"
                                        className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                    >
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                            <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="/"
                                        className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                    >
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                            <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                        <img
                                className="object-cover w-full h-56 md:h-64 xl:h-80"
                                src={teamMember5}
                                alt="Person"
                            />
                            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100 inter-font">
                                <p className="mb-1 text-lg font-bold inter-font text-[#f26a0f]">
                                    Benjamin Levi
                                </p>
                                <p className="mb-4 text-sm text-white">Vendor Relations U.S.A                                </p>
                                <p className="mb-4 text-sm tracking-wide text-gray-200">
                                    A skilled communicator and negotiator, building strong vendor relationships in the U.S.
                                </p>
                                <div className="flex items-center justify-center space-x-3">
                                    <a
                                        href="/"
                                        className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                    >
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                            <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="/"
                                        className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                    >
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                            <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl ">
                        <img
                                className="object-cover w-full h-56 md:h-64 xl:h-80"
                                src={teamMember6}
                                alt="Person"
                            />
                            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100 inter-font">
                                <p className="mb-1 text-lg font-bold inter-font text-[#f26a0f]">
                                    Salvador Palacios
                                </p>
                                <p className="mb-4 text-sm text-white">LATAM Product Specialist
                                </p>
                                <p className="mb-4 text-sm tracking-wide text-gray-200">
                                    An expert in LATAM markets, optimizing product selection and regional strategies.
                                </p>
                                <div className="flex items-center justify-center space-x-3">
                                    <a
                                        href="/"
                                        className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                    >
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                            <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="/"
                                        className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                    >
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                            <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                        <img
                                className="object-cover w-full h-56 md:h-64 xl:h-80"
                                src={teamMember7}
                                alt="Person"
                            />
                            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100 inter-font">
                                <p className="mb-1 text-lg font-bold inter-font text-[#f26a0f]">
                                    Abraham Levi
                                </p>
                                <p className="mb-4 text-sm text-white">Buyer
                                </p>
                                <p className="mb-4 text-sm tracking-wide text-gray-200">
                                    A detail-oriented negotiator, securing quality products at the best prices.
                                </p>
                                <div className="flex items-center justify-center space-x-3">
                                    <a
                                        href="/"
                                        className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                    >
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                            <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="/"
                                        className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                    >
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                            <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                        <img
                                className="object-cover w-full h-56 md:h-64 xl:h-80"
                                src={teamMember8}
                                alt="Person"
                            />
                            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100 inter-font">
                                <p className="mb-1 text-lg font-bold inter-font text-[#f26a0f]">
                                    Olivia Sharp
                                </p>
                                <p className="mb-4 text-sm text-white">Accounting AP/AR
                                </p>
                                <p className="mb-4 text-sm tracking-wide text-gray-200">
                                    A meticulous and organized professional, managing accounts payable and receivable with precision.
                                </p>
                                <div className="flex items-center justify-center space-x-3">
                                    <a
                                        href="/"
                                        className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                    >
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                            <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="/"
                                        className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                    >
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                            <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OurTeam;