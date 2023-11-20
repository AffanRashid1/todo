import React, { useState } from "react";
import { Box, Divider, IconButton, Modal, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { toast } from "react-toastify";
import axios from "axios";
import { useSelector } from "react-redux";
import LogoutIcon from "@mui/icons-material/Logout";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { setInitialLogged } from "../store/reducer";
import SearchIcon from "@mui/icons-material/Search";
import icon from "../assets/icon.png";

const Navbar = () => {
  const user = useSelector((state) => state.appReducer.user);
  const isLogged = useSelector((state) => state.appReducer.isLogged);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    try {
      let response = await axios.get("http://localhost:5000/users/logout");
      toast.success(response?.data?.message);
      dispatch(setInitialLogged());
    } catch (err) {
      console.log("🚀 ~ file: Navbar.jsx:26 ~ logoutHandler ~ err:", err);
    }
  };
  return (
    <>
      <Box
        sx={{
          width: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 0px",
          background: "transparent",
          flexWrap: "wrap",
        }}
      >
        <Box>
          <img src={icon} />
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 2,
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
                    borderRadius: 1.8,
                  }}
                >
                  <img
                    src={user.profile_photo}
                    width={"50rem"}
                    height={"50rem"}
                    style={{
                      borderRadius: "50%",
                      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                      border: "2px solid #1565C0",
                    }}
                  />
                  <Typography
                    fontWeight={500}
                    fontSize={20}
                    textTransform={"uppercase"}
                    sx={{
                      color: "#1565C0",
                    }}
                  >
                    {user.name}
                  </Typography>
                </Box>
              </Box>
              <IconButton onClick={logoutHandler}>
                <LogoutIcon />
              </IconButton>
              <Link to="/search">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </Link>
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
      <Modal keepMounted open={open} onClose={() => setOpen(false)}>
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
            width={"200rem"}
            height={"200rem"}
            style={{
              borderRadius: "50%",
              border: "2px solid black",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
              marginTop: "10px",
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
          <Link to="/profile" style={{ textDecoration: "none" }}>
            Visit Profile
          </Link>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            {user.email}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default Navbar;
