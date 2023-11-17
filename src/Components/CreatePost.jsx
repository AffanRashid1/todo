import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import CameraIcon from "@mui/icons-material/CameraAlt";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const CreatePost = () => {
  const [postElem, setpostElem] = useState("");
  const baseUrl = `${import.meta.env.VITE_BASE_URL}`;
  const CreatePost = async () => {
    if (postElem == "") {
      toast.error("Must Fill The Field");
    } else {
      try {
        axios.defaults.withCredentials = true;
        await axios.post(`${baseUrl}/posts/create-post`, {
          caption: postElem,
        });
        setpostElem("");
        toast.success("Added Succesfully");
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 400,
          background: "transparent",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1, width: "50%" }}
          placeholder="Create Post"
          value={postElem}
          onChange={(e) => {
            setpostElem(e.target.value);
          }}
        />
        <IconButton
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
          onClick={CreatePost}
        >
          <SendIcon />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton color="primary" sx={{ p: "10px" }} aria-label="directions">
          <CameraIcon />
        </IconButton>
      </Paper>
    </>
  );
};

export default CreatePost;
