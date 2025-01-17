import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { AuthContex } from "../../../Providers/AuthProvider/AuthProvider";

const ViewPackages = ({ pack }) => {
  const { image, tourType, title, button, price, id } = pack;
const {user} = useContext(AuthContex);
const userEmail = user?.email;
  const [isWishList, setWishList] = useState(false);

  const handleHeart = (tourDatas) => {
    const { image, tourType, title, id, price } = tourDatas;

    const wishlistData = { image, tourType, price, title, id ,userEmail};

    

        
          fetch("https://visit-bd-land-server.vercel.app/wishlist", {
            method: "POST",
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify(wishlistData)
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                Swal.fire({
                  title: "Success!",
                  text: "Pack Added to Your Wishlist",
                  icon: "success",
                  confirmButtonText: "Exit"
                });
                setWishList(true);
              }
            });
       
     
  };

  return (
    <>
      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ delay: 0.5, type: "spring" }}
        className="card w-96 bg-base-100 shadow-xl image-full"
      >
        <figure>
          <img src={image} alt="image" />
        </figure>
        <div className="card-body relative">
          <h2 className="card-title text-2xl">{tourType}</h2>
          <p>{title}</p>
          <p className="text-3xl text-red-500">
            {price}
            <span className="text-xl text-gray-400"> /per Person</span>
          </p>
          <div className="absolute right-4 top-10">
            <Link>
              <FaRegHeart
                onClick={() => handleHeart(pack)}
                className={`text-xl ${isWishList && "text-red-500"}`}
              />
            </Link>
          </div>
          <div className="card-actions justify-center">
            <Link to={`/packages/${id}`} className="btn btn-primary">
              {button}
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ViewPackages;
