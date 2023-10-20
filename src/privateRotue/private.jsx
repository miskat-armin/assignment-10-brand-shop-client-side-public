import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  let location = useLocation();
  let from = location.pathname || "/";

  console.log(from);

  if (loading)
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <span className="loading loading-spinner text-accent"></span>
      </div>
    );
  else {
    if (user) {
      return children;
    } else
      return <Navigate to={"/signin"} replace={true} state={{ from: from }} />;
  }
};

export default PrivateRoute;
