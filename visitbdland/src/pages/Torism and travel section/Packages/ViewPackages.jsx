import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import Swal from "sweetalert2";



const ViewPackages = ({pack}) => {
    const {image,tourType,title,button, price ,id}= pack;

    const handleHeart = (tourDatas) => {
        const { image, tourType, title, id, price } = tourDatas;
    
        const wishlistData = { image, tourType, price, title, id };
    
        fetch("https://visit-bd-land-server.vercel.app/wishlist")
            .then((res) => res.json())
            .then((currentWishlist) => {
                const isExist = currentWishlist.find(item => item.id === id);
    
                if (!isExist) {
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
                            }
                        });
                } else {
                    Swal.fire({
                        title: "Warning!",
                        text: "This Pack is already in your Wishlist",
                        icon: "warning",
                        confirmButtonText: "Exit"
                    });
                }
            });
    };
    
    return (
        <>
           <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure><img src={image} alt="image" /></figure>
            <div className="card-body relative">
                <h2 className="card-title text-2xl">{tourType}</h2>
                <p>{title}</p>
                <p className="text-3xl text-red-500">{price}<span className="text-xl text-gray-400"> /per Person</span></p>
                <div className="absolute right-4 top-10">
                <Link>
                    <FaRegHeart onClick={()=>handleHeart(pack)} className="text-xl"/>

                </Link>
                </div>
                <div className="card-actions justify-center">
                <Link to={`/packages/${id}`} className="btn btn-primary">{button}</Link>
                </div>
            </div>
            </div> 
        </>
    );
};

export default ViewPackages;