import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const Public = () => {
  const { user } = useSelector((state: any) => state.root.user);
  return <>{user ? <Navigate to="/dashboard" replace /> : <Outlet />}</>;
};

export default Public;
