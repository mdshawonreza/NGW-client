import { FaTelegramPlane, FaTwitter } from 'react-icons/fa';
import { fadeIn } from '../variants';
import { motion } from 'framer-motion';
import image5 from '../../assets/web image two-01.png'
// import image6 from '../../assets/bg light.png'
import { RiWechat2Fill } from 'react-icons/ri';
import circleBorder1 from '../../assets/Ellipse 9.png'
import circleBorder2 from '../../assets/Ellipse 7.png'
import './whatisbluey.css'

const WhatIsBluey = () => {
    return (
        <div className='max-w-[400px] md:max-w-[1100px] mx-auto'>
            <div className=' pt-[82px] bg-cover   bg-light'
            //  style={{ backgroundImage: `url(${image6})`, }} 
            >
                <motion.div
                    variants={fadeIn('up', 0.2)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.7 }}

                    id='bluey'
                    className='max-w-[300px] md:max-w-[970px] lg:max-w-[970px] mx-auto py-3 md:py-10 '>
                    <div className='space-y-5 '>
                        <h1 className='text-center font-normal text-xl md:text-[57px] text-white rubik-font'>
                            What is <span className='text-[#003084]'> BLUEY?</span>
                        </h1>
                        <div className='max-w-[290px] md:max-w-3xl mx-auto pt-6'>
                            <p className='text-center text-sm md:text-base font-normal text-[#fff] poppins-font '>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
                            </p>
                        </div>


                    </div>
                </motion.div>
                <div className='mt-16 md:mt-24 flex justify-center gap-5 md:gap-16'>

                    <div className=''>
                        <div className='h-20'> </div>
                        <a href=""><button className="btn btn-sm md:btn-lg btn-circle">
                            <RiWechat2Fill className="text-base md:text-2xl font-bold"></RiWechat2Fill>
                        </button></a>
                    </div>
                    <div>
                        <div className='h-32'> </div>
                        <a href=""><button className="btn btn-sm md:btn-lg btn-circle">
                            <FaTelegramPlane className=" text-base md:text-2xl font-bold"></FaTelegramPlane>
                        </button></a>

                    </div>
                    <div>
                        <div className='h-10'> </div>
                        <a href=""><button className="btn btn-sm md:btn-lg btn-circle">
                            <FaTwitter className="text-base md:text-2xl font-bold"></FaTwitter>
                        </button></a>

                    </div>
                    <div className='-mt-10'>
                        <a href=""><button className="btn btn-sm md:btn-lg btn-circle">
                            <FaTelegramPlane className="text-base md:text-2xl font-bold"></FaTelegramPlane>
                        </button></a>
                    </div>
                    <div>
                        <div className='h-10'> </div>
                        <a href=""><button className="btn btn-sm md:btn-lg btn-circle">
                            <RiWechat2Fill className="text-base md:text-2xl font-bold"></RiWechat2Fill>
                        </button></a>

                    </div>
                    <div>
                        <div className='h-32'> </div>
                        <a href=""><button className="btn btn-sm md:btn-lg btn-circle">
                            <FaTelegramPlane className="text-base md:text-2xl font-bold"></FaTelegramPlane>
                        </button></a>
                    </div>
                    <div>
                        <div className='h-20'> </div>
                        <a href=""><button className="btn btn-sm md:btn-lg btn-circle">
                            <FaTwitter className="text-base md:text-2xl font-bold"></FaTwitter>
                        </button></a>
                    </div>


                </div>
                <div className='flex justify-center items-start pb-20 md:pb-28'>
                    <div className='bg-cover curve-image -mt-2 md:-mt-32' style={{
                        backgroundImage: `url(${image5})`,

                    }}>

                        <div className='-mt-[136px] md:mt-0'>
                            <img className='circle2 border-spacing-3  mt-[116px] md:-mt-20 rounded-full     mx-[43px] w-[200px] md:w-[600px] h-[200px] md:h-[600px]' src={circleBorder2} alt="" />

                            <img className='big-circle rounded-full  absolute ml-[70px] md:ml-28 -mt-[180px] md:-mt-[530px]  mx-[43px] w-[150px] md:w-[462px] h-[150px] md:h-[462px]' src={circleBorder1} alt="" />
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatIsBluey;