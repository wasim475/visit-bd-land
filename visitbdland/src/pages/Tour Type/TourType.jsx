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
    // const newTourData = [...new Set(ToursData.map(item => item.tourType))];
    const uniqueTourTypes = new Set();

// Filter out objects with duplicate tourType values
const filteredArray = ToursData.filter(item => {
    if (!uniqueTourTypes.has(item.tourType)) {
        uniqueTourTypes.add(item.tourType);
        return true;
    }
    return false;
});
console.log( filteredArray);
    return (
        <>
           <div className="mt-10 bg-TourTypeBG bg-cover py-5">
            <section className="mb-10">
                <HeadingTitle
                    heading={"Discover Our Tour Types"}
                    title={"Choose Your Perfect Adventure"}
                />
            </section>
            <section className="grid lg:grid-cols-4 md:grid-cols-2 lg:py-10 px-5">
                {
                    filteredArray.map((tour, index)=>(
                        <ViewTourType key={index} tour={tour}></ViewTourType>
                    ))
                }
            </section>
           </div> 
        </>
    );
};

export default TourType;