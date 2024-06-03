import { Link } from "react-router-dom";



const ViewPackages = ({pack}) => {
    const {image,tourType,title,button, price ,id}= pack;
    return (
        <>
           <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure><img src={image} alt="image" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{tourType}</h2>
                <p>{title}</p>
                <p className="text-3xl text-red-500">{price}</p>
                <div className="card-actions justify-center">
                <Link to={`/packages/${id}`} className="btn btn-primary">{button}</Link>
                </div>
            </div>
            </div> 
        </>
    );
};

export default ViewPackages;