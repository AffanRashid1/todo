import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import styled from "styled-components";

const Navbar = () => {
  const linkStyle = {
    textDecoration: "none",
    margin: "10px",
    fontSize: "18px",
    color: "#1565C0",
  };
  return (
    <>
      <Box
        sx={{
          width: 1,
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 50px",
          background: "transparent",
          flexWrap: "wrap"
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
            TODO
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
          <Typography>
            <Link to="/" style={linkStyle}>
              Home
            </Link>
          </Typography>
          <Typography>
            <Link to="/todos" style={linkStyle}>
              Todos
            </Link>
          </Typography>

          <Button variant="contained" size="medium">
            SignUp
          </Button>
          <Button variant="contained" size="medium">
            Login
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
