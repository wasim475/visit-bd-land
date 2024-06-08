

const ViewAllUsers = ({user}) => {
    const {name,email,image,_id}=user
    return (
        <>
            <tr>
                <td>
                    <div className="flex items-center gap-3">
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
                    {/* <h1 className="flex items-center text-red-500 font-bold">{guideName}</h1> */}
                </td>
                <td>
                    {/* <h1 className="flex items-center text-red-500 font-bold">{date}</h1> */}
                </td>
                <td>
                    {/* <h1 className="flex items-center text-red-500 font-bold"><span><FaDollarSign className='text-lg'/></span> {price}</h1> */}
                </td>
                <td><br/></td>
                <th>
                    {/* <Link to={`/packages/${_id}`} className="btn bg-green-400 text-white btn-xs">Pay</Link> */}
                    {/* <Link onClick={()=>handleCancel(_id)} className="btn bg-red-600 text-white btn-xs">Cancel</Link> */}
                </th>
            </tr>
        </>
    );
};

export default ViewAllUsers;