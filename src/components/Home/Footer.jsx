import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { RiWechat2Fill } from "react-icons/ri";
import image4 from '../../assets/Final pfp for rizzy-01.png'
import image5 from '../../assets/foter Line.png'
import icon3 from '../../assets/dextools-b.webp'
import './footer.css'

const Footer = () => {
    return (
        <div className="py-10 md:py-[82px] footer-image max-w-[1100px] mx-auto" style={{
            backgroundImage: `url(${image5})`,

        }}>
            <div>
                <div className="flex justify-around items-center pt-2 md:pt-4">

                    <div>

                        <img className="w-12 md:w-[72px]" src={image4} alt="" />

                    </div>
                    <div className="-mr-4 md:-mr-0 flex justify-center items-center space-x-2 md:space-x-6">
                        <a href="https://t.me/BlueyValley">
                        <button className="btn btn-sm md:btn-md border-[2px] border-black btn-circle">
                            <FaTelegramPlane className="text-sm md:text-xl font-bold text-[#030B18]"></FaTelegramPlane>
                        </button>
                        </a>
                        <a href="https://x.com/itsblueyonsol">
                        <button className="btn btn-sm md:btn-md border-[2px] border-black btn-circle">
                            <FaTwitter className="text-sm md:text-xl font-bold text-[#030B18]"></FaTwitter>
                        </button>
                        </a>
                        <a href="https://www.dextools.io/app/en/solana/pair-explorer/8Vwe1bxMLy8SffPTfb3D6eLPpmTmzCiRbZayCDM51pts">
                            <button className="btn btn-sm md:btn-md border-[2px] border-black btn-circle">
                                {/* <RiWechat2Fill className="text-sm md:text-xl font-bold text-[#030B18]"></RiWechat2Fill> */}
                                <img className=' h-[12px] md:h-[20px] w-[12px] md:w-[20px]' src={icon3} alt="" />
                            </button>
                        </a>
                    </div>
                    <div>

                        <p className=" text-white text-[10px] md:text-base font-normal poppins-font">
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