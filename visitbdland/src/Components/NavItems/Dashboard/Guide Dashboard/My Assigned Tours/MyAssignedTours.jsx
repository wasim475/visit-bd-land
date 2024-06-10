import React, { useEffect, useState } from "react";

import ViewMyToursAssign from "./VoewMyAssignTours";
import HeadingTitle from "../../../../Re-use componets/Heading and title/HeadingTitle";

const MyAssignTours = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetch("https://visit-bd-land-server.vercel.app/bookings")
      .then((res) => res.json())
      .then((resData) => setTours(resData));
  }, []);
  

  return (
    <div className="mb-10">
      <section className="text-center mb-10">
        <HeadingTitle
          heading={"My Assigned Tours"}
          title={
            "Manage and Review Your Travel Plans: View Details, Make Changes, and Keep Track of Your Upcoming and Past Trips"
          }
        />
      </section>
      <section>
        {tours.length <= 0 ? (
          <div className="text-center">
            <h1>There is no data in your Booking List.</h1>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th className="text-xl">Packages Name</th>
                  <th className="text-xl">Tourist Name</th>
                  <th className="text-xl">Tour Date</th>
                  <th className="text-xl">Price</th>
                  <th className="text-xl">Status</th>
                  <th className="text-xl">Action</th>
                </tr>
              </thead>
              <tbody>
                {tours.map((tour, index) => (
                  <ViewMyToursAssign
                    key={index}
                    tour={tour}
                    tours={tours}
                    setTours={setTours}
                  ></ViewMyToursAssign>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
};

export default MyAssignTours;
