import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import styled from "styled-components";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { useSelector } from "react-redux";
import LogoutIcon from "@mui/icons-material/Logout";

const Navbar = () => {
  const user = useSelector((state) => state.appReducer.user);
  const isLogged = useSelector((state) => state.appReducer.isLogged);
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
                  sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <img
                    src={user.profile_photo}
                    width={"30rem"}
                    style={{
                      borderRadius: "50%",
                      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                    }}
                  />
                  <Typography fontWeight={500} fontSize={20}>
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
    </>
  );
};

export default Navbar;
