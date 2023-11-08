import { useEffect, useState } from "react";
import React from "react";
import List from "../Components/List";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import "../Components/list.css";
import { Bars } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const baseUrl = "https://abdd-103-156-136-175.ngrok-free.app/todos";

const Todo = () => {
  const [todoInput, settodoInput] = useState("");
  // const [searchInput, setsearchInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const submitHandler = async () => {
    if (todoInput == "") {
      toast.error("Must Fill The Field");
    } else {
      await axios.post(`${baseUrl}/add`, {
        todo: todoInput,
      });
      settodoInput("");
      getData();
      toast.success("Added Succesfully");
    }
  };

  const getData = async () => {
    let response = await axios.get(baseUrl, {
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": true,
      },
    });

    setTodos(response?.data?.Todos);
    setisLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Container
        maxWidth="100vw"
        sx={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
          background:
            "linear-gradient(to top, rgba(255,248,248,1) 0%, rgba(201,209,219,1) 100%, rgba(0,0,0,1) 100%)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "50%",
            gap: "20px",
          }}
        >
          {/* <TextField
            label="Search Todo"
            onChange={(e) => { setsearchInput(e.target.value) }}
            value={searchInput}
            placeholder="Search Todo"
            color="primary"
            focused
          /> */}

          <TextField
            id="filled-basic"
            label="Add Todo"
            variant="outlined"
            onChange={(e) => {
              settodoInput(e.target.value);
            }}
            value={todoInput}
            placeholder="Write Todo Here"
            color="primary"
            className="textfield"
            focused
            name="todo"
            autoFocus
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                submitHandler();
              }
            }}
          />

          <Button variant="contained" onClick={submitHandler} color="primary">
            Add Todo
          </Button>

          <div style={{ display: "grid", placeItems: "center" }}>
            <Bars
              height="80"
              width="80"
              color="#1565C0 "
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={isLoading}
            />
          </div>
          <ul>
            <List
              todos={todos}
              getData={getData}
              settodoInput={settodoInput}
              todoInput={todoInput}
              baseUrl={baseUrl}
              setTododData={setTodos}
            />
          </ul>
        </Box>
      </Container>
      <ToastContainer
        position="top-right"
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

export default Todo;
