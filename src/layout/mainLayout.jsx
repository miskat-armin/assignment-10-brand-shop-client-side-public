import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "../components/Header/navbar";
import Footer from "../components/Footer/footer";

const Layout = () => {
  return (
    <div>
      <Nav />
      <div className="mx-auto min-h-screen">
        <Outlet/>
        <ToastContainer />
      </div>
      <Footer/>
    </div>
  );
};

export default Layout;