import React from 'react';
import { color, motion } from "framer-motion"

const HeadingTitle = ({heading, title}) => {
    return (
        <div className='text-center mt-12 mb-12'>
            <motion.h1 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay: 1.5, duration: 2}}
             className='text-3xl mb-4 font-semibold'> {heading}</motion.h1>
            <motion.h3 
             initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay: 1, duration: 3}}
            className='text-xl mb-2'>{title}</motion.h3>
        </div>
    );
};

export default HeadingTitle;