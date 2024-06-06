import React, { useEffect, useState } from 'react';
// import HeadingTitle from '../../../Components/Re-use componets/Heading and title/HeadingTitle'

import { Link } from 'react-router-dom';
import HeadingTitle from '../../../../Components/Re-use componets/Heading and title/HeadingTitle';
import ViewPackages from '../ViewPackages';

const AllPackages = () => {
    let [packData, setPackData]= useState([])
   
    useEffect(()=>{
        fetch('Packages.json')
           .then(res=> res.json())
            .then(resData=>setPackData(resData))
            
    },[])

    return (
        <>
           <section className=''>
                <div>
                    <HeadingTitle 
                    heading={"Explore Our Exciting Tour Packages"} 
                    title={"Discover Unforgettable Adventures- Explore the Best Tour Packages Across Bangladesh, From Sundarbans to Sylhet's Tea Gardens and More"}
                    />
                </div>

                <div className='grid grid-cols-1 gap-x-2 px-10 gap-y-3 mt-10 md:grid-cols-3 overflow-x-auto rtl'>
                {
                    packData.map((pack,index)=>(

                    <ViewPackages key={index} pack={pack}></ViewPackages>
                    ))
                }
                </div>
                
            </section> 
        </>
    );
};

export default AllPackages;