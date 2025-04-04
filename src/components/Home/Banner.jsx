
import './banner.css'
import bannerImg1 from "../../assets/Rectangle 9.png"
import bannerImg2 from "../../assets/wmremove-transformed-Photoroom 1.png"
import bannerImg3 from "../../assets/Mask group (1).png"
import bannerImg4 from "../../assets/Mask group.png"
import bannerImg5 from "../../assets/Banner (2).png"
import { FaPlay } from 'react-icons/fa';
import { BsTelephoneInbound } from 'react-icons/bs'
import { Link } from 'react-router-dom'


const Banner = () => {
    return (
        <section className='pt-0 md:pt-8 lg:pt-0 ' >
            <div className='max-w-[390px] lg:px-10 md:max-w-[750px] lg:max-w-[1550px] mx-auto flex justify-center items-center min-h-[75vh] md:min-h-[500px] lg:min-h-[900px] '>

                <div className="flex  flex-col md:flex-row gap-8 md:gap-10 lg:gap-16 mt-14 md:mt-0">
                    <div className='lg:w-4/6 flex justify-center  gap-3  '>
                        
                        <div className='flex  justify-center items-center'>
                            <img className='w-full md:w-full lg:w-[762px]' src={bannerImg5} alt="" />
                        </div>
                        

                        <div className='absolute flex flex-row justify-center items-center gap-2 lg:gap-8 mt-[195px] md:mt-[200px] lg:mt-[410px]  '>
                            <div className='w-[180px] md:w-[175px] lg:w-[300px] shadow-2xl rounded-2xl '>
                                <div className="card card-side bg-base-100 shadow-sm">
                                    <figure className='py-3 md:py-1 lg:py-3'>
                                        <img
                                            className='w-[80px] md:w-[100px] lg:w-[124px]  md:p-3'
                                            src={bannerImg4}
                                            alt="Movie" />
                                    </figure>
                                    <div className='flex justify-center items-center'>
                                        <div className="p-2 lg:p-4 lg:space-y-1">
                                            <h2 className="text-[10px] md:text-[12px] lg:card-title inter-font">Snak Club Candy</h2>
                                            <div className="rating w-16 lg:w-full">
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                                            </div>


                                            <p className='text-sm lg:text-[18px] font-semibold inter-font '><span className='text-[#FF6868] '>$</span>1.90</p>

                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className='w-[180px] md:w-[175px] lg:w-[300px] shadow-2xl rounded-2xl '>
                                <div className="card card-side bg-base-100 shadow-sm">
                                    <figure className='py-3 md:py-1 lg:py-3'>
                                        <img
                                            className='w-[80px] md:w-[100px] lg:w-[124px] p-3 '
                                            src={bannerImg3}
                                            alt="Movie" />
                                    </figure>
                                    <div className='flex justify-center items-center'>
                                        <div className=" p-2 lg:p-4 lg:space-y-1">
                                            <h2 className="text-[10px] md:text-[12px] lg:card-title inter-font">Patty Meal</h2>
                                            <div className="w-16 lg:w-full rating">
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                                            </div>


                                            <p className='text-sm lg:text-[18px] font-semibold inter-font'><span className='text-[#FF6868]'>$</span>13.99</p>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className='lg:w-3/6 flex items-center   '>
                        <div className='space-y-3 lg:space-y-10'>
                            <h1 className="text-3xl md:text-4xl lg:text-[62px] font-extrabold text-center mt-16  md:mt-0 inter-font md:leading-tight ">Your <span className='text-[#F26B24] '>trusted </span>  wholesale partner</h1>
                            <p className="pt-2 md:pt-6 md:text-xl lg:text-2xl font-medium text-[#4A4A4A] inter-font px-3 md:px-0">
                                One-stop destination for high-quality wholesale products at unbeatable prices.
                            </p>
                            <div className='flex justify-center  items-center gap-6 md:gap-6 lg:gap-6 '>
                                <button className=' h-[35px] md:h-[45px] lg:h-[60px] md:w-[150px] w-[150px] lg:w-[206px] rubik-font rounded-full bg-[#F26B24] text-white text-xs md:text-lg lg:text-[26px] font-semibold  flex justify-center items-center gap-3 inter-font
                                hover:shadow-[#F26B24] hover:shadow-lg'>

                                    Order Now

                                </button>

                                <Link to='/contactUs'>
                                    <button className='h-[35px] md:h-[45px] lg:h-[60px] md:w-[150px] w-[150px] lg:w-[206px] inter-font rounded-full hover:bg-[#1571B4] text-black hover:text-white text-xs md:text-lg lg:text-[26px] font-medium  flex justify-center items-center gap-1 md:gap-3 border-[1px] md:border-[3px]  border-[#1571B4] hover:shadow-[#1571B4] hover:shadow-lg'>
                                        
                                        Contact Us

                                </button>
                                </Link>

                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </section>
    );
};

export default Banner;