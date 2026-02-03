import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

const ProtectedRoute = () => {
  const { isAuthenticated, authChecked } = useSelector(
    (state: RootState) => state.auth,
  );


  // ⏳ Jab tak /auth/me complete na ho
  if (!authChecked) {
    return <p>Checking session...</p>;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
