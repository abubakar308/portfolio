import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Details from "../components/Details";


const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
    },
    {
        path: "/project/:id",
        element: <Details />,
      },
  ]);

  export default router