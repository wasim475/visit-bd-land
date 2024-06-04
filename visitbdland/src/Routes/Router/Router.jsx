import { createBrowserRouter } from "react-router-dom";
import Main from "../../Root/Main";
import ErrorPage from "../../Components/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home";
import Community from "../../Components/NavItems/Community/Community";
import Blogs from "../../Components/NavItems/Blogs/Blogs";
import AboutUs from "../../Components/NavItems/AboutUs/AboutUs";
import ContactUs from "../../Components/NavItems/ContactUs/ContactUs";
import Login from "../../Components/NavItems/Login/Login";
import Register from "../../Components/NavItems/Register/Register";
import Dashboard from "../../Components/NavItems/Dashboard/Dashboard";
import SinglePackage from "../../pages/Torism and travel section/Packages/singlePackage/SinglePackage";
import MeetOurGuides from "../../pages/Torism and travel section/Meet our guides/MeetOurGuides";
// import Packages from "../../pages/Torism and travel section/Packages/Packages";
// import SinglePackage from "../../pages/Torism and travel section/Packages/SinglePackage";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/community',
          element: <Community></Community>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        },
        {
          path: '/about-us',
          element: <AboutUs></AboutUs>
        },
        {
          path: '/contact-us',
          element: <ContactUs></ContactUs>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/dashboard',
          element: <Dashboard></Dashboard>
        },
        {
          path: '/packages/:id',
          element: <SinglePackage></SinglePackage>,
          loader: ()=> fetch('/Packages.json'),
          // loader: ()=>fetch("/tourGuides.json")
        },
        {
          path: '/guides/:id',
          element: <MeetOurGuides></MeetOurGuides>,
          loader: ()=> fetch('/tourGuides.json'),
          // loader: ()=>fetch("/tourGuides.json")
        },
      ]
    },
  ]);

  export default router;