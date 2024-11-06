import { Outlet } from 'react-router-dom';
import Navbar from '../Home/Navbar';
// import Headroom from 'react-headroom';




const Root = () => {
    return (
        <div
        //  className='lg:max-w-[1440px] mx-auto'
         >
            <div>
                <div className=''>
                   

                    <Navbar ></Navbar>
                </div>
                <Outlet></Outlet>
            </div>


        </div>
    );
};

export default Root;