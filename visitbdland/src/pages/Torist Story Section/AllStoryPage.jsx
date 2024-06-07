import { useEffect, useState } from "react";
import HeadingTitle from "../../Components/Re-use componets/Heading and title/HeadingTitle";
import ViewStory from "./ViewStory";


const AllStoryPage = () => {
    const [toristStories, setToristStories] = useState([])
    useEffect(()=>{
        fetch("https://visit-bd-land-server.vercel.app/stories")
        .then(res=>res.json())
        .then(data=>setToristStories(data))
    },[])
    // console.log(toristStories);
    return (
        <div>
            <section>
                <HeadingTitle
                    heading={"Traveler Tales"}
                    title={"Discover Inspiring Stories from Fellow Travelers: Real Experiences and Adventures from Journeys Across Bangladesh and Beyond"}
                />
            </section>
            <section className="grid grid-cols-3 gap-y-3">
                {
                    toristStories.map((touristStory, index)=>(
                        <ViewStory key={index} touristStory={touristStory} ></ViewStory>
                    ))
                }

            </section>
            
        </div>
    );
};

export default AllStoryPage;