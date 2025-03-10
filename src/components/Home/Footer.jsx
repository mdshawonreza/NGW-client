

import { FiFacebook, FiTwitter } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';
import { AiOutlineYoutube } from 'react-icons/ai';


const Footer = () => {
    return (
        <div className='max-w-[350px] md:max-w-[850px] lg:max-w-[1550px] mx-auto  md:mb-16'>
            <footer className="flex flex-col md:flex-row  justify-between text-base-content  py-10">
                <div>
                    <aside>
                        <h2 className=" text-[26px]  md:text-[26px]  inter-font font-extrabold text-[#000000] ">
                            <span className='bg-[#F26B24]  rounded-md '>N</span>GW
                        </h2>
                        <p className='md:text-[24px] mt-3 md:mt-8 font-medium text-[#555555] leading-snug inter-font'>
                            Savor the artistry where <br /> every dish is a culinary <br /> masterpiece
                        </p>
                    </aside>

                </div>
                <div className='flex flex-row md:flex-row gap-5 md:gap-60 justify-between mt-5 md:mt-0'>
                    <div className='space-y-2 md:space-y-4 flex flex-col inter-font'>
                        <h6 className="text-[#000000] md:text-[26px] font-semibold">Useful links</h6>
                        <a className="link link-hover text-[#555555] md:text-[24px] font-medium">About us</a>
                        <a className="link link-hover  text-[#555555] md:text-[24px] font-medium">Our Founders</a>
                        <a className="link link-hover  text-[#555555] md:text-[24px] font-medium">Blogs</a>
                        <a className="link link-hover  text-[#555555] md:text-[24px] font-medium">FAQ</a>
                    </div>
                    <nav className='space-y-2 md:space-y-4 flex flex-col inter-font'>
                        <h6 className="text-[#000000] md:text-[26px] font-semibold">Main Menu</h6>
                        <a className="link link-hover text-[#555555] md:text-[24px] font-medium">Home</a>
                        <a className="link link-hover  text-[#555555] md:text-[24px] font-medium">Offers</a>
                        <a className="link link-hover  text-[#555555] md:text-[24px] font-medium">Inventory</a>
                        <a className="link link-hover  text-[#555555] md:text-[24px] font-medium">Testimonials</a>
                    </nav>
                    <nav className=' space-y-2 md:space-y-4 flex flex-col inter-font'>
                        <h6 className="text-[#000000] md:text-[26px] font-semibold">Contact Us</h6>
                        <a className="link link-hover text-[#555555] md:text-[24px] font-medium">example@email.com</a>
                        <a className="link link-hover  text-[#555555] md:text-[24px] font-medium">+1 730 062 423</a>
                        <a className="link link-hover  text-[#555555] md:text-[24px] font-medium">Social media</a>

                    </nav>
                </div>
            </footer>
            <div className='my-0 md:my-20 mb-8 -mt-4 md:mt-0 md:mb-0'>
                <div className='flex justify-center md:justify-start gap-5'>
                    <button className=" bg-[#F48B54] hover:bg-[#F26B24] md:w-[58px] md:h-[58px] w-[30px] h-[30px] rounded-full flex justify-center items-center  ">
                        <FiFacebook className='text-white md:text-[30px]' />

                    </button>
                    <button className=" bg-[#F48B54] hover:bg-[#F26B24] w-[30px] h-[30px] md:w-[58px]  md:h-[58px] rounded-full flex justify-center items-center  ">
                        <FaInstagram className='text-white text-base md:text-[30px]' />

                    </button>
                    <button className=" bg-[#F48B54] hover:bg-[#F26B24] w-[30px] h-[30px] md:w-[58px] md:h-[58px] rounded-full flex justify-center items-center  ">
                        <FiTwitter className='text-white md:text-[27px]' />

                    </button>
                    <button className=" bg-[#F48B54] hover:bg-[#F26B24] md:w-[58px] md:h-[58px] w-[30px] h-[30px] rounded-full flex justify-center items-center  ">
                        <AiOutlineYoutube className='text-white md:text-[30px]' />

                    </button>
                </div>
                <div className='text-center mt-3 inter-font md:-mt-12'>
                    <p className='text-[#555555] md:text-[22px] font-medium'>Copyright 2025 YSA | All rights reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;