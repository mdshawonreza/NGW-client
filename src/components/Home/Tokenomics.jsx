import image1 from '../../../src/assets/image boder.png'
import image2 from '../../assets/web image 4.png'
import './tokenomics.css'
const Tokenomics = () => {
    return (
        <section id='tokenomics' className=" pt-3 md:pt-[82px]  ">
            <div className='max-w-[500px] lg:max-w-[1100px] mx-auto flex flex-col md:flex-row justify-center items-center gap-6'>
                <div className='flex flex-col justify-center items-center gap-2 '>
                    <h3 className=" text-xl md:text-[57px] text-[#fff] font-normal rubik-font">
                        Tokenomics
                    </h3>

                    <div className=' '>
                        <div className=' tokenomics-image flex items-center bg-center  bg-cover' style={{
                            backgroundImage: `url(${image1})`,

                        }} >

                            <img className='mx-[43px] w-[250px] md:w-[462px] h-[250px] md:h-[462px] ' src={image2} alt="" />

                        </div>
                    </div>
                    <div className=' '>
                        <button className='w-[101px] md:w-[161px] mt-8 md:mt-1 h-[32px] md:h-[48px] rounded-2xl bg-[#003084] text-white text-base font-semibold rubik-font tokenomics-button'>
                            Buy Bluey
                        </button>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row justify-between items-center '>

                    <div className='max-w-[407px] flex justify-start'>
                        <div className=''>
                            <h3 className='text-xl md:text-[34px] font-bold text-[#fff] pb-4 md:pb-5 poppins-font'>
                                Total Supply:
                            </h3>
                            <h3 className='text-xl md:text-[34px] font-bold text-[#fff] pb-4 md:pb-7 poppins-font'>
                                00 billion $BLUEY Token
                            </h3>
                            <div className='pb-3 md:pb-5  poppins-font'>
                                <h4 className='text-base md:text-[24px] font-medium text-[#fff] pb-2 md:pb-4 poppins-font'>
                                    Initial Token Distribution
                                </h4>
                                <p className='test-sm md:text-base font-normal text-white poppins-font'>
                                    Crowdfunded - 00 bilion
                                </p>
                                <p className='test-sm md:text-base font-normal text-white poppins-font'>
                                    Founder - 00 bilion
                                </p>
                            </div>
                            <div  className='pb-3 md:pb-5'>
                                <h4 className='text-[19px] md:text-[24px] font-medium text-[#fff] pb-2 md:pb-4 poppins-font'>
                                    Key Future
                                </h4>
                                <p className='text-base font-normal poppins-font text-white'>
                                    No taxes on transactions
                                </p>
                                <p className='text-base font-normal poppins-font text-white'>
                                    Key Features: No taxes on transactions                        </p>
                                <p className='text-base font-normal poppins-font text-white'>
                                    Community driven                        </p>

                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default Tokenomics;