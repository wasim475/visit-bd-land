import React from 'react';

const HeadingTitle = ({heading, title}) => {
    return (
        <div className='text-center'>
            <h1 className='text-3xl mb-4 font-semibold'>{heading}</h1>
            <h3 className='text-xl mb-2'>{title}</h3>
        </div>
    );
};

export default HeadingTitle;