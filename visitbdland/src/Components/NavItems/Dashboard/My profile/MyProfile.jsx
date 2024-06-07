import { useContext } from "react";
import { AuthContex } from "../../../../Providers/AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const MyProfile = () => {
    let { user } = useContext(AuthContex);
    const userName = user?.userName
    const photo = user?.photoURL
    const handleStorySubmit = ()=>{
        e.preventDefault();
        const form = e.target;
        const story = form.story.value;
        const title = form.title.value;
      
        const storyData = {
          story,
          title,
          userName,
          photo
        };
      
        fetch("https://visit-bd-land-server.vercel.app/review", {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(storyData)
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              Swal.fire({
                title: "Success!",
                text: "Your Story posted successfully",
                icon: "success",
                confirmButtonText: "Okay"
              });
              
            }
          });
    }
    return (
        <>
            <div className="h-screen dark:bg-gray-700 bg-gray-200 pt-2">
    <div className="max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
        <div className="border-b px-4 pb-6">
            <div className="text-center my-4">
                <img className="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4"
                    src={user?.photoURL} alt=""/>
                <div className="py-2">
                    <h3 className="font-bold text-2xl text-gray-800 dark:text-white mb-1">{user?.displayName}</h3>
                    <div className="inline-flex text-gray-700 dark:text-gray-300 items-center">
                        <p>{user.email}</p>
                    </div>
                </div>
            </div>
            <div className=" px-2">
            <div className="mb-2">
            <h2 className="text-2xl font-bold">Add a Story</h2>
            <p>Share your experience with us.</p> 
            </div>
      <form onSubmit={handleStorySubmit} className="w-full max-w-lg">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="storyTitle">
            Title
          </label>
          <input
            type="text"
            name="title"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="storyContent">
            Write Your Story
          </label>
          <textarea
            id="storyContent"
            name="story"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit Story
        </button>
      </form>
            </div>
        </div>
    </div>

</div>
        </>
    );
};

export default MyProfile;