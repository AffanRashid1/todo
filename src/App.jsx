import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import Todo from "./screens/Todo";
import Error from "./screens/Error";
import HOC from "./HOC";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setLogged } from "./store/reducer";

const App = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.appReducer.isLogged);
  console.log(isLogged);
  const DataApi = async () => {
    try {
      axios.defaults.withCredentials = true;
      let response = await axios.get("http://localhost:5000/users/user");
      dispatch(setLogged());
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    DataApi();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/todos"
            element={
              <MyHoc
                childern={<Todo />}
                isProtected={true}
                isLogged={isLogged}
              />
            }
          ></Route>
          <Route path="/" element={<MyHoc childern={<Home />} />}></Route>
          <Route
            path="/register"
            element={<MyHoc childern={<SignUp />} />}
          ></Route>
          <Route
            path="/login"
            element={
              <MyHoc
                childern={<Login />}
                isProtected={false}
                isLogged={isLogged}
              />
            }
          ></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

const MyHoc = ({ childern, isLogged, isProtected }) => {
  console.log("🚀 ~ file: App.jsx:60 ~ MyHoc ~ isLogged:", isLogged);
  if (isProtected) {
    if (isLogged) {
      return childern;
    }
    return <Navigate to="/login" />;
  }
  if (!isProtected) {
    if (isLogged) {
      console.log("hello");
      return <Navigate to="/" replace />;
    }
    return childern;
  }
};

export default App;
