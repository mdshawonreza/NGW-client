import React from 'react';
import { fadeIn } from './variants';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.div
        variants={fadeIn('up',0.2)}
        initial= "hidden"
        whileInView={'show'}
        viewport={{once:false,amount:0.7}}

        
        className='max-w-[680px] mx-auto'>
            <div className='space-y-5'>
                <h1 className='text-center font-bold text-5xl text-white'>
                    Lorem ipsum dolor!
                </h1>
                <p className='text-center text-sm font-semibold text-gray-400'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam odit maiores exercitationem sequi dolorum deleniti ab debitis ratione iusto quibusdam?exercitationem sequi dolorum deleniti ab debitis ratione iusto quibusdam?
                </p>

            </div>
        </motion.div>
    );
};

export default About;