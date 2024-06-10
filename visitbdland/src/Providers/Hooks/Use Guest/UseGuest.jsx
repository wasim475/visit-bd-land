import { useQuery } from "@tanstack/react-query";
import UseAxiosS from "../Axios/UseAxiosS";
import useAuth from "../useAuth/useAuth";

const UseGuest = () => {
    const { user } = useAuth();
    const axiosSecure = UseAxiosS();

    const { data: isGuest, isLoading, error } = useQuery({
        queryKey: [user?.email, 'isGuest'],
        queryFn: async () => {
            if (!user?.email) return false; // Ensure user email is available
            const res = await axiosSecure.get(`/users/guest/${user.email}`);
            return res.data?.isGuest;
        },
        enabled: !!user?.email, // Only run the query if user email is available
    });

    if (isLoading) {
        // Handle loading state if needed
        console.log("Loading guest status...");
    }

    if (error) {
        // Handle error state if needed
        console.error("Error fetching guest status:", error);
    }

    return [isGuest];
};

export default UseGuest;
