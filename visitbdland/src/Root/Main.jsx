import { Outlet } from "react-router-dom";
import Navbar from "../SharedPages/Navbar/Navbar";


const Main = () => {
    return (
        <>
            <Navbar/>
            <Outlet></Outlet>
        </>
    );
};

export default Main;