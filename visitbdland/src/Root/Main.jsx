import { Outlet } from "react-router-dom";
import Navbar from "../SharedPages/Navbar/Navbar";
import Footer from "../SharedPages/Footer/Footer";


const Main = () => {
    return (
        <>
            <Navbar/>
            <Outlet></Outlet>
            <Footer/>
        </>
    );
};

export default Main;