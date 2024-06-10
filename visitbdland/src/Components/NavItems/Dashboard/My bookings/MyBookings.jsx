import React, { useContext, useEffect, useState } from "react";
import HeadingTitle from "../../../Re-use componets/Heading and title/HeadingTitle";
import ViewBookings from "./ViewBookings";
import { AuthContex } from "../../../../Providers/AuthProvider/AuthProvider";

const MyBookings = () => {
  const {user}= useContext(AuthContex)
  const [Bookingsx, setBookings] = useState([]);

  useEffect(() => {
    fetch("https://visit-bd-land-server.vercel.app/bookings")
      .then((res) => res.json())
      .then((resData) => setBookings(resData));
  }, []);
  const Bookings = Bookingsx.filter((booking)=>booking.userEmail===user.email)
  // console.log(Bookings,Bookingsx );
  return (
    <div className="mb-10">
      <section className="text-center mb-10">
        <HeadingTitle
          heading={"My Bookings"}
          title={
            "Manage and Review Your Travel Plans: View Details, Make Changes, and Keep Track of Your Upcoming and Past Trips"
          }
        />
      </section>
      <section>
        {Bookings.length <= 0 ? (
          <div className="text-center">
            <h1>There is no data in your Booking List.</h1>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th className="text-xl">Packages Name</th>
                  <th className="text-xl">Tour Guide</th>
                  <th className="text-xl">Tour Date</th>
                  <th className="text-xl">Price</th>
                  <th className="text-xl">Status</th>
                  <th className="text-xl">Action</th>
                </tr>
              </thead>
              <tbody>
                {Bookings.map((book, index) => (
                  <ViewBookings
                    key={index}
                    book={book}
                    Bookings={Bookings}
                    setBookings={setBookings}
                  ></ViewBookings>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
};

export default MyBookings;
