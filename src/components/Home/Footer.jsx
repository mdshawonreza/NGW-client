

import { FiFacebook, FiTwitter } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';
import { AiOutlineYoutube } from 'react-icons/ai';

import footerLogo from '../../assets/NGW.png'

const Footer = () => {
    return (
        <div className=' px-5 md:px-0 sm:max-w-xl md:max-w-[750px] lg:px-10 lg:max-w-[1550px] mx-auto  md:mb-16 '>
            <div className="flex flex-col md:flex-row justify-between md:gap-16 lg:gap-32 text-base-content  py-10">
                <div className=''>

                    <div className='w-[60px] md:w-[70px] lg:w-[130px] '>
                        <img src={footerLogo} alt="" />
                    </div>
                    <p className='lg:text-[24px] mt-3 md:mt-8 font-medium text-[#555555] leading-snug inter-font'>
                        Quality wholesale products with fair  <br /> pricing, reliable suppliers, and fast <br />delivery worldwide.
                    </p>

                </div>
                <div className='flex flex-row md:flex-row gap-1 md:gap-5  justify-between mt-5 md:mt-0  flex-1'>
                    <div className='space-y-2 lg:space-y-4 flex flex-col inter-font '>
                        <h6 className="text-[#000000] lg:text-[26px] font-semibold">Useful links</h6>
                        <a className="link link-hover text-[#555555] lg:text-2xl  font-medium">About us</a>
                        <a className="link link-hover  text-[#555555] lg:text-2xl  font-medium">Our Founders</a>
                        <a className="link link-hover  text-[#555555] lg:text-2xl  font-medium">Blogs</a>
                        <a className="link link-hover  text-[#555555] lg:text-2xl  font-medium">FAQ</a>
                    </div>
                    <div className='space-y-2 lg:space-y-4 flex flex-col inter-font '>
                        <h6 className="text-[#000000] lg:text-[26px] font-semibold">Main Menu</h6>
                        <a className="link link-hover text-[#555555] lg:text-[24px] font-medium">Home</a>
                        <a className="link link-hover  text-[#555555] lg:text-[24px] font-medium">Offers</a>
                        <a className="link link-hover  text-[#555555] lg:text-[24px] font-medium">Inventory</a>
                        <a className="link link-hover  text-[#555555] lg:text-[24px] font-medium">Testimonials</a>
                    </div>
                    <div className=' space-y-2 lg:space-y-4 flex flex-col inter-font '>
                        <h6 className="text-[#000000] lg:text-[26px] font-semibold">Contact Us</h6>
                        <a className="link link-hover text-[#555555] lg:text-[24px] font-medium">hanif@farzacapitals.com</a>
                        <a className="link link-hover text-[#555555] lg:text-[24px] font-medium">hanifkhowja@gmail.com</a>
                        <a className="link link-hover  text-[#555555] lg:text-[24px] font-medium">832-605-7168</a>
                        <a className="link link-hover  text-[#555555] lg:text-[24px] font-medium">Social media</a>

                    </div>
                </div>
            </div>
            <div className='my-0 lg:my-10 mb-8 -mt-4 md:mt-0 md:mb-0 '>
                <div className='flex justify-center md:justify-start gap-5 md:gap-3 lg:gap-5'>
                    <button className=" bg-[#F48B54] hover:bg-[#F26B24] lg:w-[58px] md:w-[40px] md:h-[40px] lg:h-[58px] w-[30px] h-[30px] rounded-full flex justify-center items-center  ">
                        <FiFacebook className='text-white md:text-[30px]' />

                    </button>
                    <button className=" bg-[#F48B54] hover:bg-[#F26B24] w-[30px] h-[30px] lg:w-[58px] md:w-[40px] md:h-[40px] lg:h-[58px] rounded-full flex justify-center items-center  ">
                        <FaInstagram className='text-white text-base md:text-[30px]' />

                    </button>
                    <button className=" bg-[#F48B54] hover:bg-[#F26B24] w-[30px] h-[30px] lg:w-[58px] md:w-[40px] md:h-[40px] lg:h-[58px] rounded-full flex justify-center items-center  ">
                        <FiTwitter className='text-white md:text-[27px]' />

                    </button>
                    <button className=" bg-[#F48B54] hover:bg-[#F26B24] lg:w-[58px] md:w-[40px] md:h-[40px] lg:h-[58px] w-[30px] h-[30px] rounded-full flex justify-center items-center  ">
                        <AiOutlineYoutube className='text-white md:text-[30px]' />

                    </button>
                </div>
                <div className='text-center mt-3 inter-font md:-mt-[34px] lg:-mt-12'>
                    <p className='text-[#555555] lg:text-[22px] font-medium'>Copyright 2025 YSA | All rights reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;