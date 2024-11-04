import './navbar.css'


const Navbar = () => {

    const navLinks = <>
        <li><a href="#home">Home</a></li>
        <li><a href="#bluey">What is BLUEY</a></li>
        <li><a href="#tokenomics">Tokenomics</a></li>
        <li><a href="#roadmap">Roadmap</a></li>
        <li><a href="#joinUs">Join Us</a></li>

    </>
    return (

        <div className="navbar bg-color text-white  max-w-[580px] md:max-w-full lg:max-w-full mx-auto px-2 md:px-5  lg:px-24  h-[103px]" >
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-blue-950 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <h2 className="text-4xl font-medium">
                    BLUEY
                </h2>
            </div>
            <div className="navbar-center hidden lg:flex">
                <div className="flex justify-between  menu-horizontal px-1">
                    <p className=" text-white  hover:text-[#8beef7]"><a href="#home">Home</a></p>
                    <p className="ml-8 text-white  hover:text-[#8beef7]"><a href="#bluey">What is BLUEY</a></p>
                    <p className="ml-8 text-white  hover:text-[#8beef7]"><a href="#tokenomics">Tokenomics</a></p>
                    <p className="ml-8 text-white  hover:text-[#8beef7]"><a href="#roadmap">Roadmap</a></p>
                    <p className="ml-8 text-white  hover:text-[#8beef7]"><a href="#joinUs">Join Us</a></p>
                </div>
            </div>
            <div className="navbar-end">
                <button className='h-[48px] w-[161px] rounded-2xl bg-[#003084] text-white text-base font-semibold navbar-button'>
                    Buy Bluey
                </button>
            </div>
        </div>

    );
};

export default Navbar;