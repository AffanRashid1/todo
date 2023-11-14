import React, { useEffect, useState } from "react";
import { Outlet, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const HOC = () => {
  const isLogged = useSelector((state) => state.appReducer.isLogged);

  return <>{isLogged ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default HOC;
