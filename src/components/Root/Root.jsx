import { Outlet } from 'react-router-dom';
import Navbar from '../Home/Navbar';
// import Headroom from 'react-headroom';
import Footer from "../Home/Footer";



const Root = () => {
    return (
        <div
        //  className='lg:max-w-[1440px] mx-auto'
        >




            <Navbar ></Navbar>

            <Outlet></Outlet>


            <Footer></Footer>

        </div>
    );
};

export default Root;