import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const Protected = () => {
  const { user } = useSelector((state: any) => state.root.user);
  return <>{user ? <Outlet /> : <Navigate to="/" replace />}</>;
};

export default Protected;
