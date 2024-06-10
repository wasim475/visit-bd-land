import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FaDollarSign } from "react-icons/fa";

const ViewMyToursAssign = ({ tour, tours, setTours }) => {
  const {
    date,
    guideName,
    price,
    userEmail,
    userName,
    photoUrl,
    title,
    _id,
    image,
    status
  } = tour;

  const HandleAccept = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Accept it!"
    }).then((result) => {
      if (result.isConfirmed) {
        const updateData = { status: "Accepted" };
        fetch(`https://visit-bd-land-server.vercel.app/bookings/${id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(updateData)
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              Swal.fire({
                title: "Success!",
                text: "Tour Status Updated Successfully",
                icon: "success",
                confirmButtonText: "Close"
              });
              // Update the local state
              const updatedTours = tours.map(tour =>
                tour._id === id ? { ...tour, status: "Accepted" } : tour
              );
              setTours(updatedTours);
            }
          });
      }
    });
  };

  const handleReject =(id)=>{
    Swal.fire({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Accept it!"
      }).then((result) => {
        if (result.isConfirmed) {
          const updateData = { status: "Rejected" };
          fetch(`https://visit-bd-land-server.vercel.app/bookings/${id}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify(updateData)
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.modifiedCount > 0) {
                Swal.fire({
                  title: "Success!",
                  text: "Tour Status Updated Successfully",
                  icon: "success",
                  confirmButtonText: "Close"
                });
                // Update the local state
                const updatedTours = tours.map(tour =>
                  tour._id === id ? { ...tour, status: "Accepted" } : tour
                );
                setTours(updatedTours);
              }
            });
        }
      })
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
            <div>
              <div className="font-bold"></div>
            </div>
          </div>
        </td>
        <td>
          <h1 className="flex items-center text-red-500 font-bold">
            {userName}
          </h1>
        </td>
        <td>
          <h1 className="flex items-center text-red-500 font-bold">{date}</h1>
        </td>
        <td>
          <h1 className="flex items-center text-red-500 font-bold">
            <span>
              <FaDollarSign className="text-lg" />
            </span>{" "}
            {price}
          </h1>
        </td>
        <td>
        {
            status === 'In Review'
            ?
          <h1>{status}</h1>
          :
          <></>
        }
        </td>
        <th>
        {
            status=== 'Rejected'
            ?
            <h1 className="font-semibold text-red-500">Rejected</h1>
            :
            status === "Accepted"
            ?
            <h1 className="font-semibold text-green-500">Accepted</h1>
            :
            <>
                <Link onClick={() => handleReject(_id)} className="btn bg-red-600 text-white btn-xs">
                Reject
            </Link>
            <Link onClick={() => HandleAccept(_id)} className="btn bg-green-400 text-white btn-xs">
                Accept
            </Link>
            </>

        }
          
        </th>
      </tr>
    </>
  );
};

export default ViewMyToursAssign;
