import React, { useEffect, useState } from 'react';
import ViewAllUsers from './ViewAllUsers';
import {useQuery, QueryClient, QueryClientProvider} from "@tanstack/react-query"
import UseAxiosS from '../../../../../Providers/Hooks/Axios/UseAxiosS';
// import {  } from 'react-query'




const ManageUsers = () => {
    const axiosSecure = UseAxiosS()
    const {data:users=[]} = useQuery({
        queryKey: ["users"],
        queryFn: async () =>{
            const res = await axiosSecure.get("/users");
            return res.data
        }
    })
  
    return (
        <>
            <div>
                <section>
                   <h1 className='text-3xl font-bold'>All Users</h1>
                   <h2>Total Users:{users.length}</h2>
                </section>
                <section>
            {
                users.length<=0 
                ?
                <div className='text-center'>
                 <h1>There is no user available there.</h1>

                </div>
                 :
                 <div className="overflow-x-auto">
            <table className="table">
                    <thead>
                        <tr>
                            <th className='text-xl'>User Name</th>
                            <th className='text-xl'>Tour Guide</th>
                            <th className='text-xl'>Tour Date</th>
                            <th className='text-xl'>Price</th>
                            <th className='text-xl'>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                
                {
                    users.map((user,index)=>(
                       <ViewAllUsers 
                             key={index}
                             user={user}
                             users={users}
                            
                           
                       ></ViewAllUsers> 
                    ))
                }
                </tbody>
                </table>
                </div>
            }
           
            </section>
            </div>
        </>
    );
};

export default ManageUsers