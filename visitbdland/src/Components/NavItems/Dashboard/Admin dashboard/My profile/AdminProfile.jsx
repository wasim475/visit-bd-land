import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContex } from "../../../../../Providers/AuthProvider/AuthProvider";


const AdminProfile = () => {
    const {user}= useContext(AuthContex);
    const users = useLoaderData();
    let {id} = useParams()
    const Admin = users.users.filter((usrs)=>usrs._id==id)
    console.log(user);
    return (
        <>
            <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
                <div className="flex flex-col items-center">
                <div className="mb-4">
                    <img
                        src={user?.photoURL} // Replace this URL with the actual image URL
                        alt="Admin"
                        className="w-32 h-32 rounded-full object-cover"
                    />
                </div>
            <div className="text-center mt-10">
                <h2 className="text-xl font-semibold mb-2">{user?.displayName}</h2>
                <p className="text-gray-600">Email: {user.email}</p>
                <p className="text-gray-600">Role: Site Administrator</p>
            </div>
        </div>
    </div>
        </>
    );
};

export default AdminProfile;