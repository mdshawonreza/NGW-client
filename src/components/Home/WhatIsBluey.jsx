import { FaTelegramPlane, FaTwitter } from 'react-icons/fa';
import { fadeIn } from '../variants';
import { motion } from 'framer-motion';
import image5 from '../../assets/web image two-01.png'
import { RiWechat2Fill } from 'react-icons/ri';
import './whatisbluey.css'

const WhatIsBluey = () => {
    return (
        <div className='mb-10'>
            <motion.div
                variants={fadeIn('up', 0.2)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}

                id='bluey'
                className='max-w-[300px] md:max-w-[950px] mx-auto py-3 md:py-10 '>
                <div className='space-y-5 '>
                    <h1 className='text-center font-bold text-xl md:text-[56px] text-white'>
                        What is <span className='text-[#003084]'> BLUEY?</span>
                    </h1>
                    <div className='max-w-[290px] md:max-w-3xl mx-auto'>
                        <p className='text-center text-sm md:text-base font-normal text-[#fff]'>
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
            <div className='flex justify-center pb-28'>
                <div className='bg-cover curveImage -mt-32' style={{ backgroundImage: `url(${image5})`,
                        
                    }}>
                    <div className='circle2 -mt-16 md:-mt-24 rounded-full     mx-[43px] w-[150px] md:w-[600px] h-[150px] md:h-[600px]'>

                    </div>
                    <div className='big-circle rounded-full  absolute ml-28 -mt-[530px]  mx-[43px] w-[150px] md:w-[462px] h-[150px] md:h-[462px]'>
                        {/* <img className='' src={image5} alt="" /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatIsBluey;