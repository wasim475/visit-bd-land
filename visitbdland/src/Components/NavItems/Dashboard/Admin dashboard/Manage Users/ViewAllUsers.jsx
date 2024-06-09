
import {Link} from "react-router-dom"
import Swal from "sweetalert2";
import UseAxiosS from "../../../../../Providers/Hooks/Axios/UseAxiosS";
const ViewAllUsers = ({user, refetch,index}) => {
    const axiosSecure = UseAxiosS();
    const handleMakeAdmin = (user)=>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res=>{
            if(res.data.modifiedCount>0){
                refetch();
                Swal.fire({
                    position: "top-right",
                    icon: "success",
                    title: `${user.name} set as admin.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
    const handleMakeGuide = (user)=>{
        axiosSecure.patch(`/users/guest/${user._id}`)
        .then(res=>{
            if(res.data.modifiedCount>0){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} set as Guest.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
    const handleDelete = (user)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });

    }
    const {name,email,image,_id}=user
    return (
        <>
            <tr>
                <td>
                    <div className="flex items-center gap-3">
                    <div><h1 className="font-semibold">{index+1}.</h1></div>
                        <div className="avatar">
                            <div className="mask mask-squircle w-6 h-6">
                                <img className="rounded-full" src={image} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">{email}</div>
                    </div>
                    </div>
                            
                </td>
                <td>
                    {
                        user.role === 'admin'
                        ?
                         "Admin"
                         :
                         user.role === 'guest'
                         ?
                         "Guest"
                         :
                         <>
                         <Link onClick={()=>handleMakeAdmin(user)} className="btn bg-green-400 text-white btn-xs">Make Admin</Link>
                        <Link onClick={()=>handleMakeGuide(user)} className="btn bg-blue-500 text-white btn-xs">Make Guide</Link>
                        </>
                    }
                    
                </td>
                <td>
                <Link onClick={()=>handleDelete(user)} className="btn bg-red-600 text-white btn-xs">Delete</Link>
                </td>
                <td>
                    {/* <h1 className="flex items-center text-red-500 font-bold"><span><FaDollarSign className='text-lg'/></span> {price}</h1> */}
                </td>
                
                {/* <th>
                    <Link to={`/packages/${_id}`} className="btn bg-green-400 text-white btn-xs">Pay</Link>
                    
                </th> */}
            </tr>
        </>
    );
};

export default ViewAllUsers;