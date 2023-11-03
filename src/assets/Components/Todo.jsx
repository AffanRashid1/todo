import { useEffect, useState } from "react";
import React from 'react'
import List from "./List";
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import "../Components/list.css";


const Todo = () => {
  const [todoInput, settodoInput] = useState("");
  const [searchInput, setsearchInput] = useState("");
  const [todos, setTodos] = useState([]);

  const submitHandler = () => {
    if (todoInput == "") {
      alert("Fill First")
    }
    else {
      // setTodos([...todos, todoInput])
      settodoInput("")
    }
  }

  const getData = async () => {
    let response = await axios.get("https://0f5f-103-156-136-175.ngrok-free.app/todos", {
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": true,
      }
    });
    setTodos(response?.data?.Todos)
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
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                submitHandler();
              }
            }} />
          <Button variant="contained" onClick={submitHandler} color="warning">Add Todo</Button>


          <ul>
            <List todos={todos} />
          </ul>
        </Box>
      </Container>
    </>
  )
}

export default Todo