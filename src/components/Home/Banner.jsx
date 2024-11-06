
import { FaTelegramPlane, FaTwitter } from 'react-icons/fa';
import { RiWechat2Fill } from "react-icons/ri";
import './banner.css'


const Banner = () => {
    return (
        <section id="home"  >
            <div className="max-w-[500px] lg:max-w-[1100px] mx-auto flex items-center  min-h-[320px]  md:min-h-[850px]">
                <div className="ml-20  ">

                    <div className="max-w-[300px] md:max-w-[653px]  mx-auto">
                        <h1 className="text-2xl leading-[66px] rubik-font  text-white md:text-[57px] font-normal">Welcome to Bluey <br />The Future of Meme <br /> Coins!</h1>
                        
                        <div className=" mt-1 md:mt-2 mb-1 md:mb-6 ">
                            <p className=" text-sm poppins-font font-normal text-[#fff] leading-5">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed  diam <br /> nonummy nibh euismod tincidunt ut laoreet dolore magna!
                            </p>
                        </div>
                        <div className="flex gap-1 md:gap-8">
                            <button className="w-[101px] md:w-[161px] h-[32px] md:h-[61px] bg-[#fff] rounded-2xl text-sm md:text-base rubik-font font-semibold text-[#003084] banner-buy-button banner-stroke-button">Buy Turbo</button>
                            <div className="space-x-1 md:space-x-7">
                                
                                
                                <button className=" btn btn-sm md:btn-lg  btn-circle  border-[2px] border-black">
                                    <FaTelegramPlane className="text-sm md:text-xl font-bold banner-rounded-button text-[#0f2c69]"></FaTelegramPlane>
                                </button>
                                <button className="btn btn-sm md:btn-lg  btn-circle border-[2px] border-black">
                                    <FaTwitter className="text-sm md:text-xl font-bold text-[#0f2c69]"></FaTwitter>
                                </button>
                                <button className="btn btn-sm md:btn-lg  btn-circle border-[2px] border-black">
                                    <RiWechat2Fill className="text-sm md:text-xl text-[#0f2c69] font-bold"></RiWechat2Fill>
                                </button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default Banner;