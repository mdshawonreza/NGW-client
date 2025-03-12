import { MdStarRate } from "react-icons/md";


const ProductCard = ({product}) => {
    const { productTitle, image, description, price, rating } = product
    // console.log(product)
    return (
        <div>
            <div className="relative shadow-xl w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 inter-font">
                <div className="relative m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
                    <img
                        src={image}
                        alt="image"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="px-6 pb-8">

                    <h4 className="block mb-2  text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 inter-font">
                        {productTitle}
                    </h4>
                    {/* <p className="block mb-4 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                        {description}

                    </p> */}
                    <div className="flex justify-between items-center">
                        <h6 className="block  font-sans text-base antialiased font-semibold leading-relaxed tracking-normal uppercase inter-font">
                            Price: $ <span className=" text-[#FF6868] ">{price}</span>
                        </h6>
                        <div className='flex justify-between items-center gap-3'>
                            <MdStarRate className='text-2xl text-orange-500'></MdStarRate>
                            <p className="block font-sans font-semibold antialiased  leading-relaxed text-inherit">

                                {rating}
                            </p>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default ProductCard;