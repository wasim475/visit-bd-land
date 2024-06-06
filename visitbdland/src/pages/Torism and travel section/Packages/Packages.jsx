import React, { useEffect, useState } from 'react';
import HeadingTitle from '../../../Components/Re-use componets/Heading and title/HeadingTitle'
import ViewPackages from './ViewPackages';
import { Link } from 'react-router-dom';

const Packages = () => {
    let [packData, setPackData]= useState([])
   
    useEffect(()=>{
        fetch('Packages.json')
           .then(res=> res.json())
            .then(resData=>setPackData(resData))
            
    },[])
    const firstThreePack = packData.slice(0,3)
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

                <div className='grid grid-cols-1 mt-10 gap-y-2 md:grid-cols-3 overflow-x-auto rtl'>
                {
                    firstThreePack.map((pack,index)=>(

                    <ViewPackages key={index} pack={pack}></ViewPackages>
                    ))
                }
                </div>
                <div className='text-center mt-4'>
                    <Link className='border-2 px-4 py-2 rounded-lg bg-green-400 text-white font-semibold hover:bg-white text-xl hover:text-green-400' to="/all-packages">All Packages</Link>
                </div>
            </section>
        </>
    );
};

export default Packages;