import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/errorPage.jsx";
import Home from "../pages/home";
import Layout from "../layout/mainLayout.jsx";

const CustomRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      }
    ],
  },
]);

export default CustomRouter;