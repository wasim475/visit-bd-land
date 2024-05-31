import { createBrowserRouter } from "react-router-dom";
import Main from "../../Root/Main";
import ErrorPage from "../../Root/Components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage
      children:[
        {

        }
      ]
    },
  ]);

  export default router;