import React, { useState, useContext } from "react";
import "../Components/list.css";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import { IconButton, Input, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
const List = (props) => {
  const [checkbox, setCheckbox] = useState(false);
  const [showbtn, setshowbtn] = useState("none");
  const [editInput, seteditInput] = useState("");
  const [edit, setedit] = useState(false);

  const delApi = async (id) => {
    await axios.delete(`${props.baseUrl}/remove/${id}`);
    await props.getData();
    toast.error("Deleted Successfully");
  };

  const editHandler = (todo, i) => {
    const mofifyData = props.todos.map((each) => {
      if (each._id === todo._id) {
        if (each.isEdit) {
          return { ...each, isEdit: false };
        }
        return { ...each, isEdit: true };
      }
      return each;
    });
    console.log(mofifyData);
    props.setTododData(mofifyData);
  };

  const putReqHandler = async (id, todo) => {
    const response = await axios({
      method: "PUT",
      url: `${props.baseUrl}/update`,
      data: {
        id: id,
        todo: editInput,
      },
    });
    props.getData();
    setshowbtn("none");
    toast.success("Updated Successfully");
  };

  const doneHandler = async (id) => {
    const response = await axios({
      method: "PUT",
      url: `${props.baseUrl}/update`,
      data: {
        id: id,
        done: checkbox,
      },
    });
    props.getData();
    console.log(checkbox);
  };

  return (
    <>
      {props.todos.map((elem, i) => {
        return (
          <li key={elem._id} className="todo-li">
            {elem?.isEdit ? (
              <Input
                value={elem.todo}
                onChange={(e) => {
                  seteditInput(e.target.value);
                }}
              />
            ) : (
              <Typography>{elem.todo}</Typography>
            )}
            <div className="icons-box">
              <Checkbox
                type="checkbox"
                onChange={() => {
                  setCheckbox(!checkbox);
                }}
                onClick={() => doneHandler(elem._id)}
                checked={elem.done}
              />
              <DeleteIcon onClick={() => delApi(elem._id)} />
              {!elem?.isEdit ? (
                <IconButton onClick={() => editHandler(elem, i)}>
                  <EditIcon />
                </IconButton>
              ) : (
                <IconButton onClick={() => editHandler(elem, i)}>
                  <CloseIcon />{" "}
                </IconButton>
              )}
            </div>
          </li>
        );
      })}
    </>
  );
};

export default List;
