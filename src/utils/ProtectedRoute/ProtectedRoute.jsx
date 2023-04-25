import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, ...props }) => {
  console.log("isAuthenticated", isAuthenticated);
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
