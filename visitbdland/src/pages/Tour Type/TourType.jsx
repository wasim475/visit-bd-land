import { useEffect, useState } from "react";
import HeadingTitle from "../../Components/Re-use componets/Heading and title/HeadingTitle";
import ViewTourType from "./ViewTourType";

const TourType = () => {
    let [ToursData, setToursData]= useState([])
   
    useEffect(()=>{
        fetch('Packages.json')
           .then(res=> res.json())
            .then(resData=>setToursData(resData))
            
    },[])
    return (
        <>
           <div className="mt-20 bg-TourTypeBG bg-cover">
            <section className="mb-10">
                <HeadingTitle
                    heading={"Discover Our Tour Types"}
                    title={"Choose Your Perfect Adventure"}
                />
            </section>
            <section>
                {
                    ToursData.map((tour, index)=>(
                        <ViewTourType key={index} tour={tour}></ViewTourType>
                    ))
                }
            </section>
           </div> 
        </>
    );
};

export default TourType;