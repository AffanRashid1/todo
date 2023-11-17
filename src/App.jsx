import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setLogged, setUser } from "./store/reducer";
import Loading from "./Components/Loading";
import { routes } from "./router";
import Home from "./screens/Home";
import HOC from "./HOC";
import { ToastContainer } from "react-toastify";
import { ThemeProvider, createTheme } from "@mui/material";

const App = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const isLogged = useSelector((state) => state.appReducer.isLogged);
  const user = useSelector((state) => state.appReducer.user);
  const DataApi = async () => {
    try {
      axios.defaults.withCredentials = true;
      let response = await axios.get("http://localhost:5000/users/user");
      dispatch(setLogged());
      dispatch(setUser(response?.data?.User));
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    } catch (err) {
      console.log(err);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };
  useEffect(() => {
    DataApi();
  }, []);

  const theme = createTheme({
    direction: "rtl",
    // other theme properties
  });

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HOC childern={<Home />} />}></Route>
              <Route path="*" element={<Error />}></Route>
              {routes.map((e, i) => {
                return (
                  <Route
                    path={e.path}
                    key={i}
                    element={
                      <HOC
                        childern={e.element}
                        isProtected={e.protected}
                        isLogged={isLogged}
                      />
                    }
                  />
                );
              })}
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      )}
      <ToastContainer
        position="bottom-right"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default App;
