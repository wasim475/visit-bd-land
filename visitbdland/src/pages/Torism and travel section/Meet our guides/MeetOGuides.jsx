
import { useEffect, useState } from 'react';
import HeadingTitle from '../../../Components/Re-use componets/Heading and title/HeadingTitle';
import ViewGuide from '../Packages/singlePackage/ViewGuide';
import {motion} from "framer-motion"

const MeetOGuides = () => {
    let [guidess, setGuides]= useState([])

    useEffect(()=>{
      fetch('https://visit-bd-land-server.vercel.app/users')
      .then(res=>res.json())
      .then(resData=>setGuides(resData))
    },[])
    // const guides = guidess.users?.find((gds)=>gds.role === 'guest')

    // console.log(guides?.name);

    
    
    return (
        <div>
            <section className='mb-5'>
                <HeadingTitle
                    heading={"Meet Our Guides"}
                    title={"Unlock hidden Bangladesh! Our expert guides craft your dream trip. Meet them on Visit Bangladesh Land."}
                />
            </section>
            <motion.section
               initial={{y:'-100vw'}}
                animate={{y:0}}
                transition={{ duration:1, type: 'spring'}}
            >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {
                          guidess.users?.map((guide,index)=>(
                            guide.role==="guest" &&
                            <ViewGuide key={index} guide={guide}></ViewGuide>
                          ))
                        }
                    </div>
            </motion.section>

        </div>
    );
};

export default MeetOGuides;