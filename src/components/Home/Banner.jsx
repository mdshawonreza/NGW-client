import banner from "../../assets/landing page 2-01.jpg"
import { FaTelegramPlane, FaTwitter } from 'react-icons/fa';
import { RiWechat2Fill } from "react-icons/ri";
import './banner.css'


const Banner = () => {
    return (
        <section id="home" className="bg-cover  bg-center bg-banner " style={{ backgroundImage: `url(${banner})` }} >
            <div className="max-w-[500px] lg:max-w-[1100px] mx-auto flex items-center  min-h-[320px]  md:min-h-[850px]">
                <div className="ml-10  ">

                    <div className="max-w-[300px] md:max-w-[653px]  mx-auto">
                        <h1 className="text-2xl leading-none rubik-font  text-white md:text-[57px] font-normal">Welcome to Bluey </h1>
                        <h1 className="text-2xl  rubik-font  text-white md:text-[57px] leading-none font-normal ">The Future of Meme <br /> Coins!</h1>
                        <div className="py-1 md:py-3 my-1 md:my-3 ">
                            <p className=" text-sm poppins-font font-normal text-[#fff]">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed  diam <br /> nonummy nibh euismod tincidunt ut laoreet dolore magna!
                            </p>
                        </div>
                        <div className="flex gap-1 md:gap-8">
                            <button className="w-[101px] md:w-[161px] h-[32px] md:h-[61px] bg-[#fff] rounded-2xl text-sm md:text-base rubik-font font-semibold text-[#003084] banner-buy-button">Buy Turbo</button>
                            <div className="space-x-1 md:space-x-7">
                                
                                
                                <button className=" btn btn-sm md:btn-lg  btn-circle">
                                    <FaTelegramPlane className="text-sm md:text-2xl font-bold banner-rounded-button text-[#0f2c69]"></FaTelegramPlane>
                                </button>
                                <button className="btn btn-sm md:btn-lg  btn-circle">
                                    <FaTwitter className="text-sm md:text-2xl font-bold text-[#0f2c69]"></FaTwitter>
                                </button>
                                <button className="btn btn-sm md:btn-lg  btn-circle">
                                    <RiWechat2Fill className="text-sm md:text-2xl text-[#0f2c69] font-bold"></RiWechat2Fill>
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