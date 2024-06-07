import { useLoaderData, useParams } from "react-router-dom";

const ViewSingleStory = () => {
    const stories = useLoaderData();
    const {id} = useParams()
    const storys = stories.find((str)=>str._id===id)
    const {story,title,userName,photo, _id} = storys
    return (
        <div className="">
             <section className="md:flex gap-x-9 px-10">
                    <div className=" w-1/6 h-32 relative  border-4 border-white rounded-lg overflow-hidden">
                        <img className=" w-56 h-32 object-cover object-center " src={photo}/>
                    </div>
                    <div className="w-5/6">
                        <h1 className="text-3xl font-semibold mt-5">{title}</h1>
                        <p className="mt-3 mb-10">Author: <span className="text-blue-600 font-bold">{userName}</span></p>
                        <p>{story}</p>
                        <hr className="mt-20 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                    </div>
                </section>
        </div>
    );
};

export default ViewSingleStory;