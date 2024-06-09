// import { FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ViewMyWishlist = ({ myWList, myWishlists, setMyWishlists }) => {
  const { image, tourType, price, title, _id, id } = myWList;

  const handleDelete = (id) => {
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
        fetch(`https://visit-bd-land-server.vercel.app/wishlist/${_id}`, {
          method: "DELETE"
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              const remainingData = myWishlists.filter(
                (myfood) => myfood._id !== id
              );
              setMyWishlists(remainingData);
            }
          });
      }
    });
  };
  return (
    <>
      {/* <div className="overflow-x-auto"> */}
      {/* <table className="table"> */}
      <tbody>
        {/* row 1 */}
        <tr>
          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img
                    className="rounded-full"
                    src={image}
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>
              <div>
                <div className="font-bold">{tourType}</div>
                <div className="text-sm opacity-50">{title}</div>
              </div>
            </div>
          </td>
          <td>
            <h1 className="flex items-center text-red-500 font-bold">
              {price}
            </h1>
          </td>
          <td>
            <br />
          </td>
          <th>
            <Link
              to={`/packages/${id}`}
              className="btn bg-green-400 text-white btn-xs"
            >
              Visit Details
            </Link>
            <Link
              onClick={() => handleDelete(_id)}
              className="btn bg-red-600 text-white btn-xs"
            >
              Delete
            </Link>
          </th>
        </tr>
      </tbody>
      {/* </table> */}
      {/* </div>  */}
    </>
  );
};

export default ViewMyWishlist;
