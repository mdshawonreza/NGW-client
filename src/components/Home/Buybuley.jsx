import { RiWechat2Fill } from 'react-icons/ri';
import image6 from '../../assets/Group 63.png'
import './buybluey.css'
import { FaTelegramPlane, FaTwitter } from 'react-icons/fa';

const Buybuley = () => {
    return (
        <section id='joinUs' className="max-w-[400px] lg:max-w-[1100px] mx-auto   flex  md:flex-row flex-col-reverse justify-center items-center md:items-end gap-12 md:gap-0   py-10 md:py-[82px] ">

            <div className="flex  justify-center mb-5 md:mb-10 items-end ml-0 md:ml-[40px]">
                <div className="w-28 md:w-60 h-[400px] md:h-[600px] border-curve-div1 ">

                    <div className='h-[340px] md:h-[500px] border-small flex justify-center flex-col  mr-4 md:mr-12 items-center'>
                        <p className='curve-p poppins-font text-white font-semibold'>Create a Wallet</p>



                    </div>

                    <div className='h-32 flex justify-center -ml-8 md:-ml-16 -mt-[6px] md:-mt-[5px]'>
                        <div className='w-10 md:w-16 h-5 md:h-8 absolute bg-[#030B18] border-extra-small rounded-b-full '>
                            <div className='-mt-3 md:-mt-6 flex justify-center items-start'>
                                <a href=""><button className="btn btn-xs md:btn-md btn-circle">
                                    <RiWechat2Fill className="text-sm md:text-xl text-[#030B18] font-bold"></RiWechat2Fill>
                                </button></a>
                            </div>


                        </div>

                    </div>
                </div>
                <div className="w-28 md:w-60 h-[350px] md:h-[510px] -mx-8 md:-mx-20 border-curve-div2 ">

                    <div className='h-[290px] md:h-[410px] border-small flex justify-center mr-4 md:mr-12 items-center'>
                        <p className='curve-p poppins-font text-white font-semibold'>Get Some Sol</p>

                    </div>
                    <div className='h-1/5 flex justify-center -ml-8 md:-ml-16 -mt-[6px] md:-mt-[5px]'>
                        <div className='w-10 md:w-16 h-5 md:h-8 absolute bg-[#030B18] border-extra-small rounded-b-full '>
                            <div className='-mt-3 md:-mt-6 flex justify-center items-start'>
                                <a href=""><button className="btn btn-xs md:btn-md btn-circle">
                                    <FaTelegramPlane  className="text-sm md:text-xl font-bold text-[#030B18]"></FaTelegramPlane >
                                </button></a>
                            </div>


                        </div>

                    </div>
                </div>
                <div className="w-28 md:w-60  h-[290px] md:h-[400px]  border-curve-div3 ">
                    <div className='h-[230px] md:h-[300px] border-small flex justify-center mr-4 md:mr-12 items-center'>
                        <p className='curve-p poppins-font text-white font-semibold'>Go to Uniswap</p>

                    </div>
                    <div className=' flex justify-center -ml-8 md:-ml-16 -mt-[6px] md:-mt-[5px]'>
                        <div className='w-10 md:w-16 h-5 md:h-8 absolute bg-[#030B18] border-extra-small rounded-b-full '>
                            <div className=' -mt-3 md:-mt-6 flex justify-center items-start'>
                                <a href=""><button className="btn btn-xs md:btn-md btn-circle">
                                    <FaTwitter className="text-sm md:text-xl font-bold text-[#030B18]"></FaTwitter>
                                </button></a>
                            </div>


                        </div>

                    </div>

                </div>
                <div className="w-28 md:w-60 -mx-8 md:-mx-20 h-[240px] md:h-[320px] border-curve-div4  ">

                    <div className='h-[180px] md:h-[220px] border-small flex justify-center mr-4 md:mr-12 items-center'>
                        <p className='curve-p poppins-font text-white font-semibold'>Go to BLUEY</p>

                    </div>
                    <div className='flex justify-center -ml-8 md:-ml-16 -mt-[6px] md:-mt-[5px] '>
                        <div className='w-10 md:w-16 h-5 md:h-8 absolute bg-[#030B18] border-extra-small rounded-b-full '>
                            <div className=' -mt-3 md:-mt-6 flex justify-center items-start'>
                                <a href=""><button className="btn btn-xs md:btn-md btn-circle">
                                    <RiWechat2Fill className="text-sm md:text-xl font-bold text-[#030B18]"></RiWechat2Fill>
                                </button></a>
                            </div>



                        </div>

                    </div>
                </div>


            </div>
            <div className='flex  flex-col items-center md:items-start   max-w-xl mx-auto'>
                <h1 className=' absolute rubik-font  -ml-0 md:-ml-60 -mt-[60px] md:-mt-36 text-xl md:text-[57px] text-[#fff] font-normal'>
                    How to buy $BLUEY
                </h1>
                <img className='w-[280px] md:w-[370px] h-[280px] md:h-[370px] ' src={image6} alt="" />
            </div>

        </section>
    );
};

export default Buybuley;