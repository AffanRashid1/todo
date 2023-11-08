import React from "react";
import Home from "./assets/Components/Home";
import Todo from "./assets/Components/Todo";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/todos" element={<Todo />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
