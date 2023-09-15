import { Navigate, Outlet } from "react-router";

export const PublicRoute = ({ authed }) =>
  !authed ? <Outlet /> : <Navigate to="/React_GB/profile" replace />;
