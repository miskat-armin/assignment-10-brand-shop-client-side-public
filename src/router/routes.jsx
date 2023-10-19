import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/errorPage.jsx";
import Home from "../pages/home";
import Layout from "../layout/mainLayout.jsx";
import MyCart from "../pages/myCart.jsx";
import ProductDetails from "../pages/productDetails.jsx";
import Products from "../pages/products.jsx";
import AddProduct from "../pages/addProduct.jsx";

const CustomRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/my-cart",
        element: <MyCart />
      },
      {
        path: "/:product",
        element: <ProductDetails/>
      },
      {
        path: "/:brand/products",
        element: <Products/>
      },
      {
        path: "/add-product",
        element: <AddProduct />
      }
    ],
  },
]);

export default CustomRouter;