import { useState } from "react";
import React from 'react'
import List from "./List";

const Todo = () => {
  const [todoInput, settodoInput] = useState("");
  const [searchInput, setsearchInput] = useState("");
  const [todos, settodos] = useState([])
  const submitHandler = () => {
    if (todoInput == "") {
      alert("Fill First")
    }
    else {
      settodos([...todos, todoInput])
      settodoInput("")
    }
  }


  return (
    <>
      <input type="text"
        onChange={(e) => { settodoInput(e.target.value) }}
        value={todoInput}
        placeholder="Write Todo Here"
      />

      <input type="text"
        onChange={(e) => { setsearchInput(e.target.value) }}
        value={searchInput}
        placeholder="Search Todo"
      />

      <button onClick={submitHandler}>Add Todo</button>

      <ul>
        <List todos={todos}/>
      </ul>
    </>
  )
}

export default Todo