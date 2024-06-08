import axios from 'axios'

const axiosSecure = axios.create({
    baseURL: "http://localhost:5173/"
})

const UseAxiosSecure =()=>{
    return axiosSecure;
};

export default UseAxiosSecure;