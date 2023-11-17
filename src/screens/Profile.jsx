import {
  Box,
  Button,
  Container,
  Typography,
  ButtonGroup,
  IconButton,
  Modal,
} from "@mui/material";
import { red } from "@mui/material/colors";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import CreatePost from "../Components/CreatePost";
import { ToastContainer } from "react-toastify";
import Post from "../Components/Post";
import CameraIcon from "@mui/icons-material/Camera";

const Profile = () => {
  const user = useSelector((state) => state.appReducer.user);
  const [picModal, setPicModal] = useState(false);

  const headingstyle = {
    sm: {
      textAlign: "center",
      fontSize: "15px",
      userSelect: "none",
    },
    xs: {
      textAlign: "center",
      fontSize: "13px",
      userSelect: "none",
    },
  };

  const bgstyle = {
    borderRadius: "16px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(5px)",
    webkitBackdropFilter: "blur(5px)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    padding: "30px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: { xs: "center", sm: " space-evenly" },
    gap: "200",
    flexWrap: "wrap",
    width: "80%",
  };

  const showProfilePic = () => {
    setPicModal(true);
  };
  return (
    <>
      <Modal
        open={picModal}
        onClose={() => {
          setPicModal(false);
        }}
        disableAutoFocus={true}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <img
            src={user?.profile_photo}
            alt="Profile"
            width={"300em"}
            height={"300em"}
          />
        </Box>
      </Modal>
      <Container
        maxWidth="100vw"
        sx={{
          background:
            "linear-gradient(to top, rgba(255,248,248,1) 0%, rgba(201,209,219,1) 100%, rgba(0,0,0,1) 100%)",
          height: "100vh",
          padding: "20px 0",
          display: "flex",
          gap: "20px",
          alignItems: "center",
          flexDirection: "column",
          backgroundSize: "cover",
          overflowX: "hidden",
        }}
      >
        <Box sx={bgstyle}>
          <img
            src={user.profile_photo}
            alt="profile"
            width={180}
            height={180}
            style={{
              borderRadius: "50%",
              border: "3px solid #1565C0",
              margin: "10px",
            }}
            onClick={showProfilePic}
          />

          <Box>
            <Typography
              sx={{
                typography: {
                  sm: {
                    fontFamily: "Monospace",
                    textAlign: "left",
                    fontSize: "40px",
                    fontWeight: "bold",
                    userSelect: "none",
                    textTransform: "uppercase",
                  },
                  xs: {
                    fontFamily: "Monospace",
                    textAlign: "center",
                    fontSize: "35px",
                    fontWeight: "bold",
                    userSelect: "none",
                    textTransform: "uppercase",
                  },
                },
              }}
            >
              {user.name}
            </Typography>
            <Typography
              sx={{
                typography: {
                  sm: {
                    fontFamily: "Monospace",
                    textAlign: "left",
                    fontSize: "15px",
                    fontWeight: "bold",
                    userSelect: "none",
                    textTransform: "uppercase",
                  },
                  xs: {
                    textAlign: "center",
                    fontSize: "12px",
                    userSelect: "none",
                    textTransform: "uppercase",
                  },
                },
              }}
            >
              {user.email}
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: "30px",
                marginTop: "20px",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <Box>
                <Typography sx={{ typography: headingstyle }}>Posts</Typography>
                <Typography sx={{ typography: headingstyle }}>
                  {user?.posts.length}
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ typography: headingstyle }}>
                  Followers
                </Typography>
                <Typography sx={{ typography: headingstyle }}>
                  {user?.followers.length}
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ typography: headingstyle }}>
                  Following
                </Typography>
                <Typography sx={{ typography: headingstyle }}>
                  {user?.following.length}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={bgstyle}>
          <CreatePost />
          {/* <Box>
            <ButtonGroup variant="outlined" aria-label="outlined button group">
              <Button>Freinds</Button>
              <Button>Setting</Button>
              <Button variant="outlined" component="label">
                Upload Profile
                <input type="file" accept="image/*" hidden />
              </Button>{" "}
            </ButtonGroup>
          </Box> */}
        </Box>
        <Box
          sx={{
            borderRadius: "16px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(5px)",
            webkitBackdropFilter: "blur(5px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            padding: "30px 0px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: "200",
            flexWrap: "wrap",
            width: "80%",
          }}
        >
          <Post />
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
          theme="light"
        />
      </Container>
    </>
  );
};

export default Profile;
