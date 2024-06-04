import React, { useEffect, useState } from 'react';
import HeadingTitle from '../../../Components/Re-use componets/Heading and title/HeadingTitle'
import ViewPackages from './ViewPackages';

const Packages = () => {
    let [packData, setPackData]= useState([])
   
    useEffect(()=>{
        fetch('Packages.json')
           .then(res=> res.json())
            .then(resData=>setPackData(resData))
            
    },[])
    // console.log(packData);
    return (
        <>
            <section>
                <div>
                    <HeadingTitle 
                    heading={"Explore Our Exclusive Travel Packages"} 
                    title={"Explore the Best of Bangladesh with Our Curated Travel Packages – Adventure, Culture, and Relaxation"}
                    />
                </div>

                <div className='grid grid-cols-1 gap-y-2 md:grid-cols-3 overflow-x-auto rtl'>
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

export default Packages;