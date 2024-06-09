import { useQuery } from "@tanstack/react-query";

import UseAxiosS from "../Axios/UseAxiosS";
import useAuth from "../useAuth/useAuth";



const UseAdmin = () => {
    const { user } = useAuth();
    const axiosSecure = UseAxiosS();
    const { data: isAdmin } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user.email}`);
            console.log(res.data);
            return res.data?.admin;
        }
    })
    return [isAdmin]
};

export default UseAdmin;