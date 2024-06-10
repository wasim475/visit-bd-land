import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ViewMyWishlist from "./ViewMyWishlist";
import { CiHeart } from "react-icons/ci";
import { AuthContex } from "../../../../Providers/AuthProvider/AuthProvider";

const MyWishlist = () => {
  const {user} = useContext(AuthContex)
  const [myWishlistsx, setMyWishlists] = useState([]);

  useEffect(() => {
    fetch("https://visit-bd-land-server.vercel.app/wishlist")
      .then((res) => res.json())
      .then((resData) => setMyWishlists(resData));
  }, []);

  const myWishlists = myWishlistsx.filter((mywl)=>mywl.userEmail===user.email);
  console.log(myWishlists);

  return (
    <div className="mb-10">
      <section className="text-center mb-10">
        <p className="flex justify-center text-7xl">
          {" "}
          <CiHeart />{" "}
        </p>
        <h1 className="text-3xl font-bold">My Wishlist</h1>
      </section>
      <section>
        {myWishlists.length <= 0 ? (
          <div className="text-center">
            <h1>There is no data in your wishlist.</h1>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th className="text-xl">Packages Name</th>
                  <th className="text-xl">Price</th>
                </tr>
              </thead>

              {myWishlists.map((myWList, index) => (
                <ViewMyWishlist
                  key={index}
                  myWList={myWList}
                  myWishlists={myWishlists}
                  setMyWishlists={setMyWishlists}
                ></ViewMyWishlist>
              ))}
            </table>
          </div>
        )}
      </section>
    </div>
  );
};

export default MyWishlist;
