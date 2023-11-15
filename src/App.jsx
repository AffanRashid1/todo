import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setLogged } from "./store/reducer";
import Loading from "./Components/Loading";
import { routes } from "./router";
import Home from "./screens/Home";
import HOC from "./HOC";

const App = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const isLogged = useSelector((state) => state.appReducer.isLogged);
  const DataApi = async () => {
    try {
      axios.defaults.withCredentials = true;
      let response = await axios.get("http://localhost:5000/users/user");
      dispatch(setLogged());
      // setUser(response?.data?.User);
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

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
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
      )}
    </>
  );
};

export default App;
