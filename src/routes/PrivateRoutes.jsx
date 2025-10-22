import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { PacmanLoader } from "react-spinners";
import { Navigate, useLocation } from "react-router";

const PrivateRoutes = ({ children }) => {
  const { user, userLoading } = useContext(AuthContext);
  const location = useLocation();
  if (user) return children;
  if (userLoading) return <PacmanLoader color="#00f0ff" size={40} />;
  return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

export default PrivateRoutes;
