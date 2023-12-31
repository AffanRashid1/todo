import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import { TextField } from "@mui/material";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogged, setUser } from "../store/reducer";

const Login = () => {
  const isLogged = useSelector((state) => state.appReducer.isLogged);
  const user = useSelector((state) => state.appReducer.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginInput, setloginInput] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (e) => {
    setloginInput({
      ...loginInput,
      [e.target.name]: e.target.value,
    });
  };
  const handleLogin = async () => {
    if (loginInput.email == "" || loginInput.password == "") {
      toast.error("Must Fill the Field");
    } else {
      try {
        let resp = await axios.post(
          "http://localhost:5000/users/login",
          {
            email: loginInput.email,
            password: loginInput.password,
          },
          {
            withCredentials: true,
          }
        );
        setloginInput({
          email: "",
          password: "",
        });
        dispatch(setLogged());
        dispatch(setUser(resp?.data?.user));

        toast.success(resp?.data?.message);
        navigate("/");
      } catch (err) {
        toast.error(err?.response?.data?.message);
      }
    }
  };
  return (
    <>
      <Container
        maxWidth="100vw"
        sx={{
          background:
            "linear-gradient(to top, rgba(255,248,248,1) 0%, rgba(201,209,219,1) 100%, rgba(0,0,0,1) 100%)",
        }}
      >
        <Link to="/">
          <ArrowBackIosNewIcon sx={{ position: "absolute", top: "30px" }} />
        </Link>
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "40px",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: "Monospace",
                textAlign: "center",
                fontSize: "3rem",
                fontWeight: "bold",
                userSelect: "none",
              }}
            >
              Login
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              padding: "60px 30px",
              borderRadius: "10px",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
          >
            <TextField
              label="Email"
              placeholder="Enter Email"
              color="primary"
              focused
              value={loginInput.email}
              onChange={handleInputChange}
              name="email"
            />
            <TextField
              label="Password"
              placeholder="Enter Password"
              color="primary"
              focused
              value={loginInput.password}
              onChange={handleInputChange}
              name="password"
            />
            <Button variant="contained" size="medium" onClick={handleLogin}>
              Login
            </Button>
            <Typography>
              Does'nt have a account ?<Link to="/register">Sign Up</Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};
export default Login;
