import { Link } from "react-router-dom";
import '../../Hexagon.css';

const ViewTourType = ({tour}) => {
    const {logo,tourType,title,button, price ,id}=tour
    console.log(tour);
    return (
        <>
            
            <div className="hexagon mx-auto my-8 ">
                <Link to={`/specific-packs/${tourType}`}>
                    <div className="hexagon-in1 ">
                        <div className="hexagon-in2 relative">
                        <img src={logo} alt={tourType} className="hexagon-img w-1/2 h-full object-cover opacity-70" />
                        <div className="hexagon-text absolute bottom-0 w-full text-center text-white bg-black text-xl font-semibold bg-opacity-50 p-2">
                            {tourType}
                        </div>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default ViewTourType;