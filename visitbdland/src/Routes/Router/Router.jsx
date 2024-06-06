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
import MyProfile from "../../Components/NavItems/Dashboard/My profile/MyProfile";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AllPackages from "../../pages/Torism and travel section/Packages/All Packages/AllPackages";
import SpecificPackage from "../../pages/Torism and travel section/Packages/Specific Packages/SpecificPackage";
import MeetOurAllGuides from "../../pages/Torism and travel section/Meet our guides/MeetOurAllGuides";
import MyWishlist from "../../Components/NavItems/Dashboard/My Wishlist/MyWishlist";
import MyBookings from "../../Components/NavItems/Dashboard/My bookings/MyBookings";
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
          element: <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        },
        {
          path: '/packages/:id',
          element: <SinglePackage></SinglePackage>,
          loader: ()=> fetch('/Packages.json'),
          // loader: ()=>fetch("/tourGuides.json")
        },
        {
          path: '/specific-packs/:tourType',
          element: <SpecificPackage></SpecificPackage>,
          loader: ()=> fetch('/Packages.json'),
          // loader: ()=>fetch("/tourGuides.json")
        },
        {
          path: '/guides/:id',
          element: <MeetOurGuides></MeetOurGuides>,
          loader: ()=> fetch('/tourGuides.json'),
          // loader: ()=>fetch("/tourGuides.json")
        },
        {
          path: '/all-packages',
          element: <AllPackages></AllPackages>,
          loader: ()=> fetch('/Packages.json'),
          // loader: ()=>fetch("/tourGuides.json")
        },
        {
          path: '/my-profile',
          element: <MyProfile></MyProfile>,
          
          // loader: ()=>fetch("/tourGuides.json")
        },
        {
          path: '/wishlist',
          element: <MyWishlist></MyWishlist>,
          
          // loader: ()=>fetch("https://visit-bd-land-server.vercel.app/wishlist")
        },
        {
          path: '/my-bookings',
          element: <MyBookings></MyBookings>,
          
          // loader: ()=>fetch("https://visit-bd-land-server.vercel.app/wishlist")
        },
        {
          path: '/all-guides',
          element: <MeetOurAllGuides></MeetOurAllGuides>,
          
          // loader: ()=>fetch("/tourGuides.json")
        },
      ]
    },
  ]);

  export default router;