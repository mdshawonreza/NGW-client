import { FaTelegramPlane, FaTwitter } from 'react-icons/fa';
import { fadeIn } from '../variants';
import { motion } from 'framer-motion';
import image5 from '../../assets/web image two-01.png'
import icon1 from "../../assets/Phantom-Icon_Circle_60x60 (1).png"
import icon2 from "../../assets/dexscreener.png"
import icon3 from "../../assets/Raydium-Logo-PNG-758x473-removebg-preview.png"
import icon4 from "../../assets/dextools-b.webp"
import icon5 from "../../assets/solana-c.png"

// import { RiWechat2Fill } from 'react-icons/ri';
import circleBorder1 from '../../assets/Ellipse 9.png'
import circleBorder2 from '../../assets/Ellipse 7.png'
import './whatisbluey.css'
// import { FaTelegram } from 'react-icons/fa6';

const WhatIsBluey = () => {
    return (
        <div className='max-w-[400px] md:max-w-[1100px] mx-auto bg-cover   bg-light'

        >
            <div className='py-10 md:py-[82px] '

            >
                <motion.div
                    variants={fadeIn('up', 0.2)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.7 }}

                    id='bluey'
                    className='max-w-[300px] md:max-w-[970px] lg:max-w-[970px] mx-auto  '>
                    <div className=' '>
                        <h1 className='text-center font-normal text-xl md:text-[57px] text-white rubik-font pb-0 md:pb-12]'>
                            What is <span className='text-[#003084]'> BLUEY?</span>
                        </h1>
                        <div className='max-w-[290px] md:max-w-3xl mx-auto pt-1 md:pt-6'>
                            <p className='text-center text-base md:text-base font-normal text-[#fff] poppins-font '>
                                BLUEY is more than just a token; it’s the story of a time traveler on a quest to find his true self, blending imagination with innovation. As $BLUEY ventures through the ever-evolving timelines of blockchain technology, it invites the community to join in a journey of discovery, growth, and exploration. With a unique narrative-driven approach, BLUEY’s roadmap unfolds like chapters in a saga, offering utility, gamified experiences, and opportunities for engagement. Whether you are here for the story, the community, or the technology, $BLUEY promises an adventure like no other—one that’s about finding purpose and unlocking potential in both crypto and beyond.
                            </p>
                        </div>


                    </div>
                </motion.div>
                <div className='mt-16 md:mt-24 flex  justify-center gap-5 md:gap-16  relative z-10'>

                    <div className=''>
                        <div className='h-10 md:h-20'> </div>
                        <a href=""><button className="btn btn-sm md:btn-lg btn-circle">
                            {/* <RiWechat2Fill className="text-sm md:text-2xl font-bold text-[#030B18]"></RiWechat2Fill> */}
                            <img className= 'h-[17px] md:h-[30px] w-[17px] md:w-[30px] ' src={icon1} alt="" />
                        </button></a>
                    </div>
                    <div>
                        <div className=' h-16 md:h-32 '> </div>
                        <a href="https://dexscreener.com/solana/BXg6mQqRvUZMcjzA2PsjxNi8wFCTrsV9FeHb5yeBpump?1731933193225"><button className="btn  btn-sm md:btn-lg btn-circle">
                            {/* <FaTelegramPlane className="  text-sm md:text-2xl font-bold text-[#030B18]"></FaTelegramPlane> */}
                            <img className='h-[17px] md:h-[30px] w-[17px] md:w-[30px] bg-[#030B18] rounded-full p-0 md:p-1' src={icon2} alt="" />
                        </button></a>

                    </div>
                    <div>
                        <div className='h-5 md:h-10'> </div>
                        <a href="https://x.com/itsblueyonsol"><button className="btn  btn-sm md:btn-lg btn-circle">
                            <FaTwitter className="text-base md:text-[26px] font-bold text-[#030B18]"></FaTwitter>
                        </button></a>

                    </div>
                    <div className='-mt-5 md:-mt-10'>
                        <a href="https://raydium.io/swap/?inputMint=4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R&outputMint=BXg6mQqRvUZMcjzA2PsjxNi8wFCTrsV9FeHb5yeBpump"><button className="btn  btn-sm md:btn-lg btn-circle">
                            {/* <FaTelegramPlane className="text-base md:text-2xl font-bold text-[#030B18]"></FaTelegramPlane> */}
                            <img className='h-[17px] md:h-[30px] w-[17px] md:w-[30px]' src={icon3} alt="" />

                        </button></a>
                    </div>
                    <div>
                        <div className='h-5 md:h-10'> </div>
                        <a href="https://t.me/BlueyValley"><button className="btn  btn-sm md:btn-lg btn-circle">
                        <FaTelegramPlane className="text-base md:text-[26px] font-bold text-[#030B18]"></FaTelegramPlane>
                        </button></a>

                    </div>
                    <div>
                        <div className='h-16 md:h-32'> </div>
                        <a href="https://www.dextools.io/app/en/solana/pair-explorer/8Vwe1bxMLy8SffPTfb3D6eLPpmTmzCiRbZayCDM51pts"> <button className="btn  btn-sm md:btn-lg btn-circle">
                            
                            <img className='h-[17px] md:h-[25px] w-[17px] md:w-[25px]' src={icon4} alt="" />
                        </button></a>
                    </div>
                    <div>
                        <div className='h-10 md:h-20'> </div>
                        <a href=""><button className="btn  btn-sm md:btn-lg btn-circle">
                          
                            <img className='h-[17px] md:h-[25px] w-[17px] md:w-[25px]' src={icon5} alt="" />


                        </button></a>
                    </div>


                </div>
                <div className='flex justify-center items-start pb-20 md:pb-28'>
                    <div className='bg-cover curve-image -mt-16 md:-mt-32' style={{
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