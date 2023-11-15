import React, { useState } from "react";
import { Box, IconButton, Modal, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import styled from "styled-components";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { useSelector } from "react-redux";
import LogoutIcon from "@mui/icons-material/Logout";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const user = useSelector((state) => state.appReducer.user);
  console.log(user);
  const isLogged = useSelector((state) => state.appReducer.isLogged);
  const [open, setOpen] = useState(false);

  const logoutHandler = async () => {
    let response = await axios.get("http://localhost:5000/users/logout");
    toast.success(response?.data?.message);
    window.location.reload(true);
  };

  return (
    <>
      <Box
        sx={{
          width: 1,
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 0px",
          background: "transparent",
          flexWrap: "wrap",
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "primary.main",
              fontWeight: "bold",
              fontSize: "30px",
              letterSpacing: 4,
            }}
          >
            <StickyNote2Icon sx={{ margin: "0 7px" }} />
            todo
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            userSelect: "none",
          }}
        >
          {isLogged ? (
            <>
              <Box>
                <Box
                  onClick={() => setOpen(true)}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    padding: "7px 10px",
                    borderRadius: 1.8,
                    boxShadow:
                      "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
                    bgcolor: "rgba(9, 30, 66, 0.25)"
                  }}
                >
                  <img
                    src={user.profile_photo}
                    width={"40rem"}
                    style={{
                      borderRadius: "50%",
                      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                    }}
                  />
                  <Typography
                    fontWeight={500}
                    fontSize={20}
                    textTransform={"uppercase"}
                  >
                    {user.name}
                  </Typography>
                </Box>
              </Box>
              <Button
                size="small"
                onClick={logoutHandler}
                sx={{ borderRadius: "20%" }}
              >
                <LogoutIcon />
              </Button>
            </>
          ) : (
            <>
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button variant="contained" size="medium">
                  Sign Up
                </Button>
              </Link>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button variant="contained" size="medium">
                  Login
                </Button>
              </Link>
            </>
          )}
        </Box>
      </Box>
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
        theme="dark"
      />
      <Modal
        keepMounted
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
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
            borderRadius: "10px",
            boxShadow: 24,
            p: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <IconButton
            onClick={() => setOpen(false)}
            sx={{
              position: "absolute",
              top: "10px",
              right: "10px",
            }}
          >
            <CloseIcon />
          </IconButton>
          <img
            src={user.profile_photo}
            alt="profile_img"
            width={"100px"}
            style={{
              borderRadius: "50%",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
          />
          <Typography
            id="keep-mounted-modal-title"
            variant="h6"
            component="h2"
            sx={{ textTransform: "uppercase", textAlign: "center" }}
          >
            {user.name}
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            {user.email}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default Navbar;
