import { useLoaderData, useParams } from "react-router-dom";
import ViewPackages from "../ViewPackages";
import HeadingTitle from "../../../../Components/Re-use componets/Heading and title/HeadingTitle";


const SpecificPackage = () => {
    let packData = useLoaderData()
    // let guidesData = useLoaderData()
    let {tourType}= useParams()
    let packs = packData.filter((pack)=>pack.tourType === tourType)
   
    let {image,title,price,gallery, TourDetails,Contents}= packs;
    console.log(packs);
    return (
        <>
           <div>
                <section className="text-center mt-10 mb-10">
                    <p className="text-xl"> 
                        <span className="text-red-500 font-bold">{`${packs.length}`} </span>
                        <span> Pack Available</span>
                     </p>
                </section>
                <section className="grid grid-cols-1 md:grid-cols-3 gap-y-3 lg:grid-cols-3 px-10">
                    {
                        packs.map((pack,index)=>(
                            <ViewPackages key={index} pack={pack}></ViewPackages>
                        ))
                    }
                </section>
           </div> 
        </>
    );
};

export default SpecificPackage;