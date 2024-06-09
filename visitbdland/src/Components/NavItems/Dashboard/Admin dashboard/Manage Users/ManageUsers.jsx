import React, { useState } from 'react';
import ViewAllUsers from './ViewAllUsers';
import { useQuery } from "@tanstack/react-query";
import UseAxiosS from '../../../../../Providers/Hooks/Axios/UseAxiosS';

const ManageUsers = () => {
    const [page, setPage] = useState(0);
    const [limit] = useState(10); 
    const axiosSecure = UseAxiosS();

    const { data, refetch, isLoading } = useQuery({
        queryKey: ["users", page],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users?page=${page}&limit=${limit}`);
            return res.data;
        }
    });

   

    const users = data?.users || [];
    const totalCount = data?.totalCount || 0;

    const handleNext = () => {
        if ((page + 1) * limit < totalCount) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    const handlePrevious = () => {
        setPage((prevPage) => Math.max(prevPage - 1, 0));
    };

    if (isLoading) {
        return <div><progress className="progress w-56"></progress></div>;
    }
    console.log(users);
    return (
        <>
            <div>
                <section>
                    <h1 className='text-3xl font-bold'>All Users</h1>
                    <h2>Total Users: {totalCount}</h2>
                </section>
                <section>
                    {users.length === 0 ? (
                        <div className='text-center'>
                            <h1>There are no users available.</h1>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th className='text-xl'>User</th>
                                        <th className='text-xl'>Role</th>
                                        <th className='text-xl'>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user,index) => (
                                        <ViewAllUsers 
                                            key={index}
                                            user={user}
                                            users={users}
                                            refetch={refetch}
                                            index={index}
                                        />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </section>
                <div className="flex justify-between mt-4">
                    <button 
                        className="btn btn-primary" 
                        onClick={handlePrevious} 
                        disabled={page === 0}
                    >
                        Previous
                    </button>
                    <button 
                        className="btn btn-primary" 
                        onClick={handleNext}
                        disabled={(page + 1) * limit >= totalCount} // Disable next button if we've reached the end
                    >
                        Next
                    </button>
                </div>
            </div>
        </>
    );
};

export default ManageUsers;
