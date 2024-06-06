import React, { useEffect, useState } from 'react';
import ViewGuide from '../Packages/singlePackage/ViewGuide';
import HeadingTitle from '../../../Components/Re-use componets/Heading and title/HeadingTitle';

const MeetOurAllGuides = () => {
    let [guides, setGuides]= useState([])

    useEffect(()=>{
      fetch('/tourGuides.json')
      .then(res=>res.json())
      .then(resData=>setGuides(resData))
    },[])

    return (
        <div>
            <section className='mb-5'>
                <HeadingTitle
                    heading={"Meet Our Guides"}
                    title={"Unlock hidden Bangladesh! Our expert guides craft your dream trip. Meet them on Visit Bangladesh Land."}
                />
            </section>
            <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {
                          guides.map((guide,index)=>(
                            <ViewGuide key={index} guide={guide}></ViewGuide>
                          ))
                        }
                    </div>
            </section>
        </div>
    );
};

export default MeetOurAllGuides;