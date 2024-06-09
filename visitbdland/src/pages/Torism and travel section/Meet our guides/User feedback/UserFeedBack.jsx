import React, { useEffect, useState } from "react";
import ViewFeedBack from "./ViewFeedBack";

const UserFeedBack = () => {
  const [userFeedbackData, setuserFeedbackData] = useState([]);

  useEffect(() => {
    fetch("https://visit-bd-land-server.vercel.app/review")
      .then((res) => res.json())
      .then((resData) => setuserFeedbackData(resData));
  }, []);
  const newData = [...userFeedbackData].reverse();

  // console.log("feedbackData", userFeedbackData);
  return (
    <div className="bg-black rounded-lg">
      <div className="text-center px-40 py-10">
        <h1 className="lg:text-xl md:text-lg font-Raleway text-red-300 mb-4 mt-3">
          Reviews
        </h1>
        <h1 className="lg:text-4xl md:text-2xl text-xl font-Lora text-white mb-4">
          What Our Tourist Says <br /> About Our Guides
        </h1>
        <p className="text-gray-100">
          We understand that you have questions, and we welcome them. Below is
          the collection of queries which comes frequently from our Tour.
        </p>
      </div>
      <div className=" flex overflow-x-auto min-w-screen-xl">
        {newData.map((userFb, index) => (
          <ViewFeedBack
            key={index}
            userFb={userFb}
            userFeedbackData={userFeedbackData}
            setuserFeedbackData={setuserFeedbackData}
          ></ViewFeedBack>
        ))}
      </div>
    </div>
  );
};

export default UserFeedBack;
