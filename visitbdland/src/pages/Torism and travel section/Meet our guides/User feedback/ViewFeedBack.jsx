
import { FaStar } from "react-icons/fa";
const ViewFeedBack = ({userFb, userFeedbackData,setuserFeedbackData}) => {
    const {review, rating,userName}=userFb
    return (
        <>
            <div className="border-2 overflow-y-auto border-white px-2 py-2 flex-none w-64 h-40 rounded-lg shadow-md m-4">
                <p className="flex gap-x-1 mb-3">
                    {
                        rating==='5'
                        ?
                        <>
                        <FaStar className="text-red-200"/>
                        <FaStar className="text-red-200"/>
                        <FaStar className="text-red-200"/>
                        <FaStar className="text-red-200"/>
                        <FaStar className="text-red-200"/>
                        </>
                        :
                        rating=== "4"
                        ?
                        <>
                        <FaStar className="text-red-200"/>
                        <FaStar className="text-red-200"/>
                        <FaStar className="text-red-200"/>
                        <FaStar className="text-red-200"/>
                        </>
                        :
                        rating=== "3"
                        ?
                        <>
                        <FaStar className="text-red-200"/>
                        <FaStar className="text-red-200"/>
                        <FaStar className="text-red-200"/>
                        </>
                        :
                        rating=== "2"
                        ?
                        <>
                        <FaStar className="text-red-200"/>
                        <FaStar className="text-red-200"/>
                        </>
                        :
                        rating=== "1"
                        ?
                        <>
                        <FaStar className="text-red-200"/>
                        </>
                        :
                        <></>
                    }
                </p>
                <h3 className="text-white mb-3">{review}</h3>
                <p className="text-white">Author- {userName}</p>
            </div>
        </>
    );
};

export default ViewFeedBack;