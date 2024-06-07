import { Link } from "react-router-dom";


const ViewStory = ({touristStory}) => {
    const {story,title,userName,photo} = touristStory

    return (
        <>
            <div className="card w-96  bg-base-100 shadow-xl">
                <Link>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <p className="h-32 overflow-y-auto">{story}</p>
                        <div className="card-actions justify-end">
                            <h1 className="font-semibold text-sm">{userName}</h1>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default ViewStory;