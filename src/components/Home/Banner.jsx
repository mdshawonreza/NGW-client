
import './banner.css'
import bannerImg1 from "../../assets/Rectangle 9.png"
import bannerImg2 from "../../assets/wmremove-transformed-Photoroom 1.png"
import bannerImg3 from "../../assets/Mask group (1).png"
import bannerImg4 from "../../assets/Mask group.png"
import { FaPlay } from 'react-icons/fa';


const Banner = () => {
    return (
        <section className='pt-24' >
            <div className='max-w-[390px] md:max-w-[850px] lg:max-w-[1550px] mx-auto flex justify-center items-center min-h-[80vh] md:min-h-[900px] '>

                <div className="flex  flex-col lg:flex-row lg:gap-0 mt-14 md:mt-0">
                    <div className='md:w-4/6 flex gap-3 -mt-10 md:-mt-0 ml-10 md:ml-0'>
                        <div className='flex  justify-center items-center'>
                            <img className='w-[300px] md:w-[662px]' src={bannerImg1} alt="" />
                        </div>
                        <img className='absolute  -mt-14 md:-mt-24 md:ml-12 w-[350px]  md:w-[700px]' src={bannerImg2} alt="" />
                        <div className=' bg-white rounded-full py-1 md:py-2 px-2 md:px-6 flex justify-center items-center  absolute text-[10px] md:text-[18px] gap-1 text-[#FF6868] mt-3 md:mt-14 -ml-10 md:-ml-10 shadow-xl inter-font'>
                            <p>Best mexican options </p>
                            <p>🌶</p>
                        </div>

                        <div className='absolute flex flex-row justify-center items-center gap-2 md:gap-8 mt-[271px] md:mt-[560px] -ml-7 md:ml-2 '>
                            <div className='w-[180px] md:w-[330px] shadow-2xl rounded-2xl '>
                                <div className="card card-side bg-base-100 shadow-sm">
                                    <figure className='py-3'>
                                        <img
                                            className='w-[80px] md:w-[124px]  md:p-3'
                                            src={bannerImg4}
                                            alt="Movie" />
                                    </figure>
                                    <div className='flex justify-center items-center'>
                                        <div className="p-2 md:p-4 md:space-y-1">
                                            <h2 className="text-[10px] md:card-title inter-font">Snak Club Candy</h2>
                                            <div className="rating w-16 md:w-full">
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                                            </div>


                                            <p className='text-sm md:text-[18px] font-semibold inter-font '><span className='text-[#FF6868] '>$</span>1.90</p>

                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className='w-[180px] md:w-[330px] shadow-2xl rounded-2xl '>
                                <div className="card card-side bg-base-100 shadow-sm">
                                    <figure className='py-3'>
                                        <img
                                            className='w-[80px] md:w-[124px] p-3 '
                                            src={bannerImg3}
                                            alt="Movie" />
                                    </figure>
                                    <div className='flex justify-center items-center'>
                                        <div className=" p-2 md:p-4 md:space-y-1">
                                            <h2 className="text-[10px] md:card-title inter-font">Patty Meal</h2>
                                            <div className="w-16 md:w-full rating">
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                                            </div>


                                            <p className='text-sm md:text-[18px] font-semibold inter-font'><span className='text-[#FF6868]'>$</span>13.99</p>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className='md:w-3/6 flex items-center mb-12 md:mb-0 mt-12 md:-mt-20 '>
                        <div className='space-y-3 md:space-y-10'>
                            <h1 className="text-3xl md:text-[62px] font-extrabold text-center mt-16  md:mt-0 inter-font ">Your <span className='text-[#F26B24] md:leading-relaxed'>trusted </span> <br /> wholesale partner</h1>
                            <p className="pt-2 md:pt-6 md:text-[26px] font-medium text-[#4A4A4A] inter-font px-3 md:px-0">
                                One-stop destination for high-quality wholesale products at unbeatable prices.
                            </p>
                            <div className='flex justify-center md:justify-start items-center gap-10 ml-4'>
                                <button className=' h-[26px] md:h-[60px] w-[100px] md:w-[206px] rubik-font rounded-full bg-[#F26B24] text-white text-xs md:text-[26px] font-semibold navbar-button flex justify-center items-center gap-3 inter-font'>

                                    Order Now

                                </button>

                                <div className='flex justify-center items-center gap-8 '>
                                    <h5 className='text-sm md:text-[26px] font-semibold text-[#4D4D4D] inter-font'>Watch Video</h5>
                                    <button className=" md:w-[70px] md:h-[70px] rounded-full flex justify-center items-center  shadow-xl">
                                        <FaPlay className='ml-1 md:text-3xl ' />
                                    </button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </section>
    );
};

export default Banner;