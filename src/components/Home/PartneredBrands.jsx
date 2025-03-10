import React from 'react';
import bandsImg1 from '../../assets/image 15.png'
import bandsImg2 from '../../assets/image 16.png'
import bandsImg3 from '../../assets/image 17.png'
import bandsImg4 from '../../assets/image 18.png'
import bandsImg5 from '../../assets/image 19.png'
import bandsImg6 from '../../assets/image 20.png'

const PartneredBrands = () => {
    return (
        <div className='max-w-[380px] md:max-w-[850px] lg:max-w-[1550px] mx-auto '>
            <div className='text-center inter-font'>
                <h5 className='text-[20px] font-bold text-[#FF6868]'>Our Partnered Brands</h5>
                <h1 className='text-3xl md:mt-7 mt-0 md:text-[60px] font-bold'>Trusted Brands, Premium Quality</h1>

            </div>
            <div className='flex flex-col md:flex-row justify-center items-center gap-6 md:gap-16 mt-8 md:mt-16 mb-20'>
                <div className="card bg-base-100 w-[326px] h-[306px] shadow-2xl">
                    <figure className="px-10 pt-16">
                        <img
                            src={bandsImg1}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center inter-font">
                        <h2 className="font-semibold text-[#1E1E1E] text-[30px]">Main Dish</h2>
                        <p className='text-[22px] font-medium text-[#555555]'>(86 varieties)</p>
                       
                    </div>
                </div>
                <div className="card bg-base-100 w-[326px] h-[306px] shadow-2xl ">
                    <figure className="px-10 pt-16">
                        <img
                            src={bandsImg2}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center inter-font">
                        <h2 className="font-semibold text-[#1E1E1E] text-[30px]">Break Fast</h2>
                        <p className='text-[22px] font-medium text-[#555555]'>(12 varieties)</p>
                       
                    </div>
                </div>
                <div className="card bg-base-100 w-[326px] h-[306px] shadow-2xl">
                    <figure className="px-10 pt-16">
                        <img
                            src={bandsImg3}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center inter-font">
                        <h2 className="font-semibold text-[#1E1E1E] text-[30px]">Snacks</h2>
                        <p className='text-[22px] font-medium text-[#555555]'>(48 varieties)</p>
                       
                    </div>
                </div>
                <div className="card bg-base-100 w-[326px] h-[306px] shadow-2xl">
                    <div className="px-10 pt-6">
                        <div className='flex justify-center items-center '>
                        <img
                            src={bandsImg5}
                            alt="Shoes"
                            className="rounded-xl" />
                        <img
                            src={bandsImg6}
                            alt="Shoes"
                            className="rounded-xl" />
                        </div>
                        <div className='flex justify-center'>
                        <img
                            src={bandsImg4}
                            alt="Shoes"
                            className="rounded-xl w-40" />
                        </div>
                    </div>
                    <div className=" items-center text-center inter-font">
                        <h2 className="font-semibold text-[#1E1E1E] text-[30px]">Main Dish</h2>
                        <p className='text-[22px] font-medium text-[#555555]'>(86 varieties)</p>
                       
                    </div>
                </div>

            </div>

        </div>
    );
};

export default PartneredBrands;