import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";



const ViewPackages = ({pack}) => {
    const {image,tourType,title,button, price ,id}= pack;
    const handleHeart =(tourDatas)=>{
        console.log(tourDatas);
    }
    return (
        <>
           <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure><img src={image} alt="image" /></figure>
            <div className="card-body relative">
                <h2 className="card-title text-2xl">{tourType}</h2>
                <p>{title}</p>
                <p className="text-3xl text-red-500">{price}<span className="text-xl text-gray-400"> /per Person</span></p>
                <div className="absolute right-4 top-10">
                <Link to={'/wishlist'}>
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