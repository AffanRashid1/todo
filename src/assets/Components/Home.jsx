import React from "react";
import Navbar from "./navbar";
import Container from "@mui/material/Container";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";


const Home = () => {
  return (
    <>
      <Container
        maxWidth
        sx={{
          background:
            "linear-gradient(to top, rgba(255,248,248,1) 0%, rgba(201,209,219,1) 100%, rgba(0,0,0,1) 100%)",
        }}
      >
        <Navbar />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            gap: "30px",
            height: "calc(100vh - 100px)",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Monospace",
              textAlign: "center",
              fontSize: "4.5rem",
              fontWeight: "bold",
              userSelect: "none"
            }}
          >
            Organize your <br />
            Work and life , Finally
          </Typography>
          <Typography
            sx={{
              fontFamily: "Monospace",
              textAlign: "center",
              fontSize: "1rem",
              userSelect: "none"
            }}
          >
            Become focused, organized and calm with todo app. <br /> The World
            #1 Task Manager App
          </Typography>
          <Button variant="contained" size="large">
            Make Todo List
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Home;
