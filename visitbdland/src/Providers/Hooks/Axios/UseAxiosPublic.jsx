

import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://visit-bd-land-server.vercel.app'
})
const UseAxiosPublic = () => {
    return axiosPublic;
};

export default UseAxiosPublic;