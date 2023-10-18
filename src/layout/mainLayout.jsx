import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "../components/Header/navbar";

const Layout = () => {
  return (
    <div>
      <Nav />
      <div className="mx-auto">
        <Outlet/>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Layout;