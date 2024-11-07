import image6 from '../../assets/Group 63.png'
import './buybluey.css'

const Buybuley = () => {
    return (
        <section id='joinUs' className="max-w-[400px] lg:max-w-[1100px] mx-auto   flex flex-col md:flex-row justify-center items-center md:items-end gap-12 md:gap-0   pt-5 md:pt-[82px] ">

            <div className="flex  justify-center mb-5 md:mb-10 items-end ml-0 md:ml-[40px]">
                <div className="w-28 md:w-60 h-[600px] border-curve-div1 ">

                    <div className='h-[500px] border-small flex justify-center flex-col  mr-4 md:mr-12 items-center'>
                        <p className='curve-p poppins-font text-white font-semibold'>Create a Wallet</p>
                        


                    </div>

                    {/* <div className="relative h-80 border-small flex justify-center flex-col  mr-12 items-center ">
                        <svg width="80" height="80" className="absolute inset-0">
                            <path id="path" d="M 150,150 m -100, 0 a 100,100 0 1,1 200,0 a 100,100 0 1,1 -200,0" fill="transparent" stroke="transparent" />
                        </svg>

                        <div className="text-2xl font-semibold absolute inset-0">
                            <text className="text-2xl font-semibold curve-p poppins-font">
                                <textPath href="#path">
                                    Curved Text Example
                                </textPath>
                            </text>
                        </div>
                    </div> */}
                    <div className='h-32 flex justify-center -ml-8 md:-ml-16 -mt-[6px] md:-mt-[5px]'>
                        <div className='w-10 md:w-16 h-5 md:h-8 absolute bg-[#030B18] border-extra-small rounded-b-full '>


                        </div>

                    </div>
                </div>
                <div className="w-28 md:w-60 h-[510px] -mx-8 md:-mx-20 border-curve-div2 ">

                    <div className='h-[410px] border-small flex justify-center mr-4 md:mr-12 items-center'>
                        <p className='curve-p poppins-font text-white font-semibold'>Get Some Sol</p>

                    </div>
                    <div className='h-1/5 flex justify-center -ml-8 md:-ml-16 -mt-[6px] md:-mt-[5px]'>
                        <div className='w-10 md:w-16 h-5 md:h-8 absolute bg-[#030B18] border-extra-small rounded-b-full '>


                        </div>

                    </div>
                </div>
                <div className="w-28 md:w-60  h-[400px]  border-curve-div3 ">
                    <div className='h-[300px] border-small flex justify-center mr-4 md:mr-12 items-center'>
                        <p className='curve-p poppins-font text-white font-semibold'>Go to Uniswap</p>

                    </div>
                    <div className=' flex justify-center -ml-8 md:-ml-16 -mt-[6px] md:-mt-[5px]'>
                        <div className='w-10 md:w-16 h-5 md:h-8 absolute bg-[#030B18] border-extra-small rounded-b-full '>


                        </div>

                    </div>

                </div>
                <div className="w-28 md:w-60 -mx-8 md:-mx-20  h-[320px] border-curve-div4  ">

                    <div className='h-[220px] border-small flex justify-center mr-4 md:mr-12 items-center'>
                        <p className='curve-p poppins-font text-white font-semibold'>Go to BLUEY</p>

                    </div>
                    <div className='flex justify-center -ml-8 md:-ml-16 -mt-[6px] md:-mt-[5px] '>
                        <div className='w-10 md:w-16 h-5 md:h-8 absolute bg-[#030B18] border-extra-small rounded-b-full '>



                        </div>

                    </div>
                </div>


            </div>
            <div className='flex  flex-col items-center md:items-start   max-w-xl mx-auto'>
                <h1 className=' absolute rubik-font  -ml-0 md:-ml-60 -mt-10 md:-mt-36 text-xl md:text-[57px] text-[#fff] font-normal'>
                    How to buy $BLUEY
                </h1>
                <img className='w-[250px] md:w-[370px] h-[250px] md:h-[370px] ' src={image6} alt="" />
            </div>

        </section>
    );
};

export default Buybuley;