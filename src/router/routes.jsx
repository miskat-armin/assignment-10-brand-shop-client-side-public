import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/errorPage.jsx";
import Home from "../pages/home";
import Layout from "../layout/mainLayout.jsx";
import MyCart from "../pages/myCart.jsx";
import ProductDetails from "../pages/productDetails.jsx";
import Products from "../pages/products.jsx";
import AddProduct from "../pages/addProduct.jsx";
import Signin from "../pages/signin.jsx";
import Registration from "../pages/registration.jsx";
import UpdateProduct from "../pages/updateProduct.jsx";

const CustomRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/reviews.json")
      },
      {
        path: "/my-cart",
        element: <MyCart />
      },
      {
        path: "/:brand/:product",
        element: <ProductDetails/>
      },
      {
        path: "/:brand/products",
        element: <Products/>
      },
      {
        path: "/update/:brand/:product",
        element: <UpdateProduct />
      },
      {
        path: "/add-product",
        element: <AddProduct />
      },
      {
        path:"/login",
        element: <Signin />
      },
      {
        path:"/registration",
        element: <Registration />
      }
    ],
  },
]);

export default CustomRouter;