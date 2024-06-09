import { useQuery } from "@tanstack/react-query";

// import UseAxiosS from "../Axios/UseAxiosS";
import useAuth from "../useAuth/useAuth";
import UseAxiosS from "../Axios/UseAxiosS";




const UseGuest = () => {
    const { user } = useAuth();
    const axiosSecure = UseAxiosS();
    const { data: izGuest } = useQuery({
        queryKey: [user?.email, 'izGuest'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/guest/${user.email}`);
            console.log(res.data);
            return res.data?.isGuest;
        }
    })
    return [izGuest]
};

export default UseGuest;