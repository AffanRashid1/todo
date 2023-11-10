import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import styled from "styled-components";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const Navbar = () => {
  const handleLogout = () => {
    console.log("done");
    toast.success("Logout Successfully");
    Cookies.remove("token");
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
          <Link
            to="/register"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Button variant="contained" size="medium">
              Sign Up
            </Button>
          </Link>
          <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
            <Button variant="contained" size="medium">
              Login
            </Button>
          </Link>
          {/* <Button variant="contained" size="medium" onClick={handleLogout}>
            Logout
          </Button> */}
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
