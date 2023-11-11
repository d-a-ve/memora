import { Navigate, Outlet } from "react-router-dom";

// import useAuth from "../hooks/useAuth";

export default function ProtectedRoute() {
  const currentUser = {};

  return currentUser ? <Outlet /> : <Navigate to="/login" />;
}
