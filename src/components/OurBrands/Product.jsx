import React from 'react';
import { MdStarRate } from 'react-icons/md';

const Product = ({ product }) => {
    const { productTitle, image, description, price, rating } = product
    return (
        <div>
        <div className="relative shadow-xl w-full  flex-row rounded-xl  bg-clip-border text-gray-700 inter-font h-[380px]">
            <div className="relative m-6 overflow-hidden  h-60   text-gray-700   shrink-0 rounded-xl bg-clip-border">
                <img
                    src={image}
                    alt="image"
                    className="object-cover  w-full h-full"
                />
            </div>
            <div className="mx-6 flex justify-center items-center ">

                <h4 className=" mb-2  text-lg antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 inter-font">
                    {productTitle}
                </h4>
                

            </div>
        </div>

    </div>
    );
};

export default Product;