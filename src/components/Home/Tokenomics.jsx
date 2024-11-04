import image1 from '../../../src/assets/image boder.png'
import image2 from '../../assets/web image 4.png'
import './tokenomics.css'
const Tokenomics = () => {
    return (
        <section id='tokenomics' className="max-w-[500px] lg:max-w-[950px] mx-auto py-3 md:py-10 ">
            <div className='max-w-[550px] flex justify-center'>
                <h3 className=" text-xl md:text-[57px] text-[#fff] font-semibold">
                    Tokenomics
                </h3>
            </div>
            <div className='flex flex-col md:flex-row justify-between items-center '>
                <div className=' '>
                    <div className=' tokenomics-image flex items-center bg-center  bg-cover' style={{ backgroundImage: `url(${image1})`,
                        
                }} >

                        <img className='mx-[43px] w-[250px] md:w-[462px] h-[250px] md:h-[462px] ' src={image2} alt="" />

                    </div>
                </div>
                <div className='pl-2 md:pl-5'>
                    <h3 className='text-xl md:text-[34px] font-bold text-[#fff] pb-4 md:pb-7'>
                        Total Supply: <br /> 00 billion $BLUEY Token
                    </h3>
                    <div className='pb-3 md:pb-7'>
                        <h4 className='text-base md:text-[24px] font-medium text-[#fff] pb-2 md:pb-4'>
                            Initial Token Distribution
                        </h4>
                        <p className='test-sm md:text-base font-normal text-white '>
                            Crowdfunded - 00 bilion
                        </p>
                        <p className='test-sm md:text-base font-normal text-white'>
                            Founder - 00 bilion
                        </p>
                    </div>
                    <div>
                        <h4 className='text-[19px] md:text-[24px] font-medium text-[#fff] pb-2 md:pb-4'>
                            Key Future
                        </h4>
                        <p className='text-base font-normal text-white'>
                            No taxes on transactions
                        </p>
                        <p className='text-base font-normal text-white'>
                            Key Features: No taxes on transactions                        </p>
                        <p className='text-base font-normal text-white'>
                            Community driven                        </p>

                    </div>

                </div>

            </div>
            <div className='max-w-[550px] flex justify-center'>
                <button className='w-[101px] md:w-[161px] mt-8 md:mt-1 h-[32px] md:h-[61px] rounded-2xl bg-[#003084] text-white text-base font-semibold'>
                    Buy Bluey
                </button>
            </div>

        </section>
    );
};

export default Tokenomics;