import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/authContext";
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  let location = useLocation();
  let from = location.pathname || "/";


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
      return <Navigate to={"/login"} replace={true} state={{ from: from }} />;
  }
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
