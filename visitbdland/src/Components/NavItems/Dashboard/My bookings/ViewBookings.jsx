import React from 'react';
import { Link } from 'react-router-dom';

const ViewBookings = ({book,Bookings,setBookings}) => {
    const {date,
        guideName,
        price,
        userEmail,
        userName,
        photoUrl,
        title,
        _id,
        image}= book;
        console.log(title);

    const handleCancel = (id)=>{
        Swal.fire({
            title: "Are you sure?",
            // text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Cancel it!"
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`https://visit-bd-land-server.vercel.app/bookings/${_id}`, {
                method: "DELETE"
              })
                .then((res) => res.json())
                .then((data) => {
                  if (data.deletedCount > 0) {
                    Swal.fire({
                      title: "Deleted!",
                      text: "Your booking has been Canceled.",
                      icon: "success"
                  });
                  const remainingBooking = Bookings.filter((myBook) => myBook._id !== id)
                  setBookings(remainingBooking)
              }
      
                });
            }
          });
    }
    return (
        <>
            
                    {/* row 1 */}
                        <tr>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div>
                                        <h1>{title}</h1>
                                    </div>
                                    {/* <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img className="rounded-full" src={image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                        </div> */}
                                    <div>
                                        <div className="font-bold">
                                            
                                        </div>
                                        {/* <div className="text-sm opacity-50">{guideName}</div> */}
                                    </div>
                                </div>
                            </td>
                            <td>
                                <h1 className="flex items-center text-red-500 font-bold">{guideName}</h1>
                            </td>
                            <td>
                                <h1 className="flex items-center text-red-500 font-bold">{date}</h1>
                            </td>
                            <td>
                                <h1 className="flex items-center text-red-500 font-bold">{price}</h1>
                            </td>
                            <td><br/></td>
                            <th>
                                <Link to={`/packages/${_id}`} className="btn bg-green-400 text-white btn-xs">Pay</Link>
                                <Link onClick={()=>handleCancel(_id)} className="btn bg-red-600 text-white btn-xs">Cancel</Link>
                            </th>
                        </tr>
                    
        </>
    );
};

export default ViewBookings;