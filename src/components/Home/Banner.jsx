import banner from "../../assets/landing page 2-01.jpg"
import { FaTelegramPlane, FaTwitter } from 'react-icons/fa';
import { RiWechat2Fill } from "react-icons/ri";


const Banner = () => {
    return (
        <section id="home" className="bg-cover bg-center " style={{ backgroundImage: `url(${banner})` }} >
            <div className="max-w-[300px] lg:max-w-4xl mx-auto flex items-center min-h-[300px]  md:min-h-screen">
                <div className=" flex-col lg:flex-row ">

                    <div className="">
                        <h1 className="text-xl  text-white lg:text-5xl font-bold">Welcome to Bluey </h1>
                        <h1 className="text-xl text-white lg:text-5xl font-bold">The Future of Meme <br /> Coins!</h1>
                        <div className="py-1 md:py-3 my-1 md:my-3 ">
                            <p className=" text-sm font-normal text-[#fff]">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed  diam <br /> nonummy nibh euismod tincidunt ut laoreet dolore magna!
                            </p>
                        </div>
                        <div className="flex gap-1 md:gap-8">
                            <button className="w-[101px] md:w-[161px] h-[32px] md:h-[61px] bg-[#fff] rounded-2xl text-sm md:text-base font-semibold text-[#003084]">Buy Turbo</button>
                            <div className="space-x-1 md:space-x-7">
                                <button className=" btn btn-sm md:btn-lg  btn-circle">
                                    <FaTelegramPlane className="text-sm md:text-2xl font-bold"></FaTelegramPlane>
                                </button>
                                <button className="btn btn-sm md:btn-lg  btn-circle">
                                    <FaTwitter className="text-sm md:text-2xl font-bold"></FaTwitter>
                                </button>
                                <button className="btn btn-sm md:btn-lg  btn-circle">
                                    <RiWechat2Fill className="text-sm md:text-2xl font-bold"></RiWechat2Fill>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* <div className="w-1/3">

                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default Banner;