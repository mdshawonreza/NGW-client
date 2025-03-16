import { useEffect, useState } from 'react';
import './navbar.css'
import { BsTelephoneInbound } from 'react-icons/bs';
import { FaChevronDown, FaSearch } from 'react-icons/fa';
import { BiShoppingBag } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import navLogo from '../../assets/NGW.png'


const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    // Event listener to detect scrolling
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) { // Adjust this value based on when you want to change color
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navLinks = <>
        <li><NavLink to="/" className=" text-black text-lg font-medium  hover:text-[#F26B24]">Home</NavLink></li>
        <li><NavLink to="/aboutUs" className=" text-black text-lg font-medium  hover:text-[#F26B24]">About Us</NavLink></li>
        <li><NavLink to="/ourBrands" className=" text-black text-lg font-medium  hover:text-[#F26B24]" >Our Brands</NavLink></li>
        <li><NavLink to="/ourProducts" className=" text-black text-lg font-medium  hover:text-[#F26B24]" >Our Products</NavLink></li>
        <li><NavLink to="/ourTeam" className=" text-black text-lg font-medium  hover:text-[#F26B24]" >Our Team</NavLink></li>
        <li><NavLink to="/contactUs" className=" text-black text-lg font-medium  hover:text-[#F26B24]" >Contact US</NavLink></li>




    </>
    return (

        <div
            className={`bg-white  py-4 md:py-8 fixed w-full z-[100] shadow-sm`}
        >

            <div className='z-[100] max-w-[380px] md:max-w-[750px]  lg:max-w-[1550px]   mx-auto '>
                <div className='flex justify-between   items-center'>
                    <div className="flex justify-start items-center  md:w-1/6">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu inter-font font-normal text-base menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-blue-950 rounded-box w-52">
                                {navLinks}
                            </ul>
                        </div>
                        {/* <h2 className=" text-[32px]  md:text-[34px]  inter-font font-extrabold text-[#000000] ">
                            <span className='bg-[#F26B24]  rounded-md '>N</span>GW
                        </h2> */}
                        <div className='w-[60px] md:w-[70px] lg:w-[130px] '>
                            <img src={navLogo} alt="" />
                        </div>
                    </div>
                    <div className=" hidden  md:w-4/6  lg:flex justify-center items-center ">
                        <ul className="flex justify-between font-normal text-base inter-font gap-12 items-center ">
                            {/* <NavLink to='/' className=" text-black text-lg font-medium  hover:text-[#F26B24]">Home</NavLink>
                            <div className=" text-black  hover:text-[#F26B24]">
                                <a href="">
                                    <div className="dropdown dropdown-hover">
                                        <div tabIndex={0} role="button" className=" m-1 flex justify-center items-center gap-2 text-lg font-medium">About Us
                                            <FaChevronDown className='text-[#F26B24]' />
                                        </div>
                                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                            <li><a>Item 1</a></li>
                                            <li><a>Item 2</a></li>
                                        </ul>
                                    </div>
                                </a>
                            </div>
                            <div className=" text-black  hover:text-[#F26B24]">
                                <a href="">
                                    <div className="dropdown dropdown-hover">
                                        <div tabIndex={0} role="button" className=" m-1 flex justify-center items-center gap-2 text-lg font-medium">Inventory
                                            <FaChevronDown className='text-[#F26B24]' />
                                        </div>
                                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                            <li><a>Item 1</a></li>
                                            <li><a>Item 2</a></li>
                                        </ul>
                                    </div>
                                </a>
                            </div>


                            <div className=" text-black text-lg font-medium hover:text-[#F26B24]"><a href="#roadmap">Our Team </a></div> */}
                            {navLinks}

                        </ul>
                    </div>
                    <div className="mr-5 md:w-1/6  md:mr-0 flex justify-end items-center gap-3 md:gap-8">
                        <FaSearch className='text-black text-[20px]' />
                        <div>
                            <p className='bg-[#F26B24] text-xs rounded-full px-[4px] absolute ml-3 inter-font'>8</p>
                            <BiShoppingBag className='text-black text-[24px]' />
                        </div>
                        {/* <a href="">
                            <button className=' h-[26px] md:h-[60px] w-[100px] md:w-[206px] inter-font rounded-full bg-[#F26B24] text-white text-xs md:text-xl font-medium  flex justify-center items-center gap-1 md:gap-3'>
                                <BsTelephoneInbound className='text-xm md:text-[24px] font-medium' />
                                Contact Us

                            </button>
                        </a> */}

                    </div>
                </div>
            </div>

        </div>

    );
};

export default Navbar;