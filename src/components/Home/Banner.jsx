
import { FaTelegramPlane, FaTwitter } from 'react-icons/fa';
import { RiWechat2Fill } from "react-icons/ri";
import './banner.css'


const Banner = () => {
    return (
        <section id="home"  >
            <div className="max-w-[500px] lg:max-w-[1100px] mx-auto flex items-center  min-h-[65vh]  md:min-h-[120vh]">
                <div className="ml-10 md:ml-[70px] mt-10 md:mt-0   ">

                    <div className="max-w-[250px] md:max-w-[653px]  mx-auto">
                        <h1 className="text-[22px] leading-6 md:leading-[66px] rubik-font  text-white md:text-[57px] font-normal">Welcome to Bluey <br />The Future of Meme <br /> Coins!</h1>
                        
                        <div className="max-w-[200px] pl-0 md:pl-1 md:max-w-[520px] mt-1 md:mt-2 mb-2 md:mb-6  ">
                            <p className="text-base md:text-sm poppins-font font-normal text-[#fff] leading-5 md:leading-5">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed  diam  nonummy nibh euismod tincidunt ut laoreet dolore magna!
                            </p>
                        </div>
                        <div className="flex  items-center gap-1 md:gap-8">
                            <button className="w-[101px] md:w-[161px] h-[32px] md:h-[61px] bg-[#fff] rounded-2xl text-sm md:text-base rubik-font font-semibold text-[#003084] banner-buy-button banner-stroke-button">Buy Turbo</button>
                            <div className="space-x-1 md:space-x-7">
                                
                                
                                <button className=" btn btn-sm md:btn-md  btn-circle  border-[1px] md:border-[2px] border-black">
                                    <FaTelegramPlane className="text-sm md:text-xl font-bold banner-rounded-button text-[#0f2c69]"></FaTelegramPlane>
                                </button>
                                <button className="btn btn-sm md:btn-md  btn-circle border-[1px] md:border-[2px] border-black">
                                    <FaTwitter className="text-sm md:text-xl font-bold text-[#0f2c69]"></FaTwitter>
                                </button>
                                <button className="btn btn-sm md:btn-md  btn-circle border-[1px] md:border-[2px] border-black">
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