import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { RiWechat2Fill } from "react-icons/ri";
import image4 from '../../assets/Final pfp for rizzy-01.png'
import image5 from '../../assets/foter Line.png'
import './footer.css'

const Footer = () => {
    return (
        <div className="mt-2 md:mt-[82px] footer-image max-w-[1100px] mx-auto" style={{
            backgroundImage: `url(${image5})`,

        }}>
            <div>
                <div className="flex justify-around items-center pt-2 md:pt-4">

                    <div>

                        <img className="w-12 md:w-[72px]" src={image4} alt="" />

                    </div>
                    <div className="space-x-2 md:space-x-6">
                        <button className="btn btn-sm md:btn-md  btn-circle">
                            <FaTelegramPlane className="text-sm md:text-2xl font-bold"></FaTelegramPlane>
                        </button>
                        <button className="btn btn-sm md:btn-md  btn-circle">
                            <FaTwitter className="text-sm md:text-2xl font-bold"></FaTwitter>
                        </button>
                        <button className="btn btn-sm md:btn-md  btn-circle">
                            <RiWechat2Fill className="text-sm md:text-2xl font-bold"></RiWechat2Fill>
                        </button>
                    </div>
                    <div>

                        <p className=" text-white test-sm md:text-base font-normal poppins-font">
                            Privacy policy
                        </p>

                    </div>


                </div>

                <div className="footer px-3 md:px-10 pt-5 md:pt-8 pb-4 md:pb-12  text-white test-sm md:text-base font-normal flex justify-center poppins-font ">

                    <p className="">2024 by BLUEY. All rights reserved!</p>

                </div>
            </div>


        </div>
    );
};

export default Footer;