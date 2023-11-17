import {
  Box,
  Button,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import DeleteIcon from "@mui/icons-material/Delete";

const Post = () => {
  const user = useSelector((state) => state.appReducer.user);
  const [open, setopen] = useState(false);

  const DelApiHandler = async (id) => {
    try {
      let resp = await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/posts/delete-post/${id}`
      );
      toast.success(resp?.data?.message);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {user.posts.map((e, i) => {
        return (
          <Box key={i} sx={{ width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                padding: "00px 20px",
              }}
            >
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <img
                  src={user.profile_photo}
                  alt="profile"
                  width={50}
                  height={50}
                  style={{ borderRadius: "50%", border: "2px solid #1565C0" }}
                />
                <Typography
                  textTransform={"capitalize"}
                  sx={{
                    typography: {
                      sm: { fontSize: "20px" },
                      lg: { fontSize: "30px" },
                    },
                  }}
                >
                  {user.name}
                </Typography>
              </Box>
              <Box>
                <IconButton
                  onClick={() => {
                    setopen(true);
                  }}
                >
                  <MoreVertIcon />
                </IconButton>
                <IconButton onClick={() => DelApiHandler(e._id)}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            </Box>
            <Box
              sx={{
                width: "100%",
                background: `linear-gradient(#0288d1,#42a5f5)`,
                minHeight: { xs: "250px", sm: "400px" },

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                margin: "20px 0",
                padding: "10px",
              }}
            >
              <Typography
                sx={{
                  typography: {
                    sm: {
                      fontFamily: "Monospace",
                      textAlign: "center",
                      fontSize: "2rem",
                      fontWeight: "bold",
                      userSelect: "none",
                    },
                    xs: {
                      fontFamily: "Monospace",
                      textAlign: "center",
                      fontSize: "1.5rem",
                      userSelect: "none",
                      wordWrap: "break-word",
                    },
                  },
                }}
              >
                {e.caption}
              </Typography>
            </Box>
          </Box>
        );
      })}
      <Modal
        open={open}
        onClose={() => {
          setopen(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "none",
            boxShadow: 24,
            p: 4,
            borderRadius: "10px",
          }}
        ></Box>
      </Modal>
    </>
  );
};

export default Post;
