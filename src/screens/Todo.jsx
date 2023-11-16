import { useEffect, useState } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const baseUrl = `${import.meta.env.VITE_BASE_URL}/todos`;

const Todo = () => {
  const [todoInput, settodoInput] = useState("");
  // const [searchInput, setsearchInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const submitHandler = async () => {
    if (todoInput == "") {
      toast.error("Must Fill The Field");
      return;
    }
    try {
      axios.defaults.withCredentials = true;
      await axios.post(`${baseUrl}/add`, {
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": true,
        },
        todo: todoInput,
      });
      settodoInput("");
      getData();
      toast.success("Added Succesfully");
    } catch (error) {
      console.log(error);
    }
  };

  const getData = async () => {
    try {
      let response = await axios.get(baseUrl, {
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": true,
        },
        withCredentials: true,
      });

      setTodos(response?.data?.Todos);
      setisLoading(false);
    } catch (err) {
      setisLoading(false);
      toast.error(err?.response?.data?.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Link to="/">
        <ArrowBackIosNewIcon sx={{ position: "absolute", top: 30, left: 20 }} />
      </Link>
      <Container
        maxWidth="100%"
        sx={{
          display: "flex",
          justifyContent: "center",
          minHeight: "100vh",
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
            margin: "100px 0",
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
            // id="filled-basic"
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
              color="#1565C0"
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
