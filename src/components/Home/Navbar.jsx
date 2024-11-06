import { useEffect, useState } from 'react';
import './navbar.css'


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
        <li><a href="#home">Home</a></li>
        <li><a href="#bluey">What is BLUEY</a></li>
        <li><a href="#tokenomics">Tokenomics</a></li>
        <li><a href="#roadmap">Roadmap</a></li>
        <li><a href="#joinUs">Join Us</a></li>

    </>
    return (

        <div
            className={`  text-white fixed w-full  z-10 mx-auto   md:h-[103px] flex items-center   ${isScrolled ? 'bg-blue-900  ' : 'bg-black bg-opacity-25 bg-color'}`}
        >
            {/* className=" bg-color bg-black text-white fixed z-10 bg-opacity-25 
        w-full  mx-auto   md:h-[103px] flex items-center  " > */}
            <div className='  lg:max-w-[1100px] mx-auto'>
                <div className='flex  justify-between gap-16 md:gap-[107px] items-center'>
                    <div className="flex justify-between items-center ">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu rubik-font font-normal text-base menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-blue-950 rounded-box w-52">
                                {navLinks}
                            </ul>
                        </div>
                        <h2 className="text-2xl md:text-[34px]  rubik-font font-normal">
                            BLUEY
                        </h2>
                    </div>
                    <div className=" hidden lg:flex ">
                        <div className="flex justify-between font-normal text-base rubik-font gap-8  ">
                            <p className=" text-white  hover:text-[#8beef7]"><a href="#home">Home</a></p>
                            <p className=" text-white  hover:text-[#8beef7]"><a href="#bluey">What is BLUEY</a></p>
                            <p className=" text-white  hover:text-[#8beef7]"><a href="#tokenomics">Tokenomics</a></p>
                            <p className=" text-white  hover:text-[#8beef7]"><a href="#roadmap">Roadmap</a></p>
                            <p className=" text-white  hover:text-[#8beef7]"><a href="#joinUs">Join Us</a></p>
                        </div>
                    </div>
                    <div className=" ">
                        <button className=' h-[26px] md:h-[48px] w-[100px] md:w-[161px] rubik-font rounded-2xl bg-[#003084] text-white text-sm md:text-base font-normal navbar-button'>
                            Buy Bluey
                        </button>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Navbar;