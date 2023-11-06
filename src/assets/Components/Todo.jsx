import { useEffect, useState } from "react";
import React from 'react'
import List from "./List";
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import "../Components/list.css";
import { Bars } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Todo = () => {
  const [todoInput, settodoInput] = useState("");
  const [searchInput, setsearchInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [isLoading, setisLoading] = useState(true)

  const submitHandler = async () => {
    if (todoInput == "") {
      alert("Fill First")
    }
    else {
      await axios.post("https://43a0-2400-adc1-16b-5100-e1ef-ee90-3f97-5e04.ngrok-free.app/todos/add", {
        todo: todoInput
      }
      )
      settodoInput("")
      getData()
      toast.success("Added Succesfully")

    }
  }

  const getData = async () => {
    let response = await axios.get("https://43a0-2400-adc1-16b-5100-e1ef-ee90-3f97-5e04.ngrok-free.app/todos", {
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": true,
      }
    });
    setTodos(response?.data?.Todos)
    setisLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])



  return (
    <>

      <Container maxWidth="100vw" sx={{ display: "flex", justifyContent: "center", height: "100vh" }} disableGutters={true}>
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "50%", gap: "20px" }}>
          <TextField
            label="Search Todo"
            onChange={(e) => { setsearchInput(e.target.value) }}
            value={searchInput}
            placeholder="Search Todo"
            color="warning"
            focused

          />

          <TextField id="filled-basic" label="Add Todo" variant="outlined" onChange={(e) => { settodoInput(e.target.value) }}
            value={todoInput}
            placeholder="Write Todo Here"
            color="warning"
            className="textfield"
            focused
            name="todo"
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                submitHandler();
              }
            }} />
          <Button variant="contained" onClick={submitHandler} color="warning">Add Todo</Button>

          <div style={{ display: "grid", placeItems: "center" }}>
            <Bars
              height="80"
              width="80"
              color="#E65100"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={isLoading}
            />
          </div>
          <ul>
            <List todos={todos} getData={getData} />
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
  )
}

export default Todo