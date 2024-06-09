import { useEffect, useState } from "react";
import HeadingTitle from "../../Components/Re-use componets/Heading and title/HeadingTitle";
import ViewStory from "./ViewStory";
import { Link } from "react-router-dom";

const ToristStorySection = () => {
  const [toristStories, setToristStories] = useState([]);
  useEffect(() => {
    fetch("https://visit-bd-land-server.vercel.app/stories")
      .then((res) => res.json())
      .then((data) => setToristStories(data));
  }, []);
  const storyReverse = [...toristStories].reverse();
  const firstFourStory = storyReverse.slice(0, 4);
  // console.log(toristStories);
  return (
    <div>
      <section>
        <HeadingTitle
          heading={"Traveler Tales"}
          title={
            "Discover Inspiring Stories from Fellow Travelers: Real Experiences and Adventures from Journeys Across Bangladesh and Beyond"
          }
        />
      </section>
      <section className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 px-2 md:px-5 gap-y-3">
        {firstFourStory.map((touristStory, index) => (
          <ViewStory key={index} touristStory={touristStory}></ViewStory>
        ))}
      </section>
      <div className="mt-10 text-center">
        <Link
          to="/all-stories"
          className="text-xl bg-green-500 px-10 font-bold text-white hover:bg-transparent hover:text-green-500 hover:border-green-500 border transition delay-75 py-2 rounded-lg"
        >
          All Stories
        </Link>
      </div>
    </div>
  );
};

export default ToristStorySection;
