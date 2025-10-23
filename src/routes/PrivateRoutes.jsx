import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { PacmanLoader } from "react-spinners";
import { Navigate, useLocation } from "react-router";

const PrivateRoutes = ({ children }) => {
  const { user, userLoading } = useContext(AuthContext);
  const location = useLocation();

  if (userLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <PacmanLoader color="#00f0ff" size={40} />
      </div>
    );
  if (!user) <Navigate state={location.pathname} to={"/login"}></Navigate>;
  return children;
};

export default PrivateRoutes;
