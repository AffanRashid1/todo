import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  ButtonGroup,
} from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";
import { useSelector } from "react-redux";
import CreatePost from "../Components/CreatePost";
import { ToastContainer } from "react-toastify";
import Post from "../Components/Post";

const Profile = () => {
  const user = useSelector((state) => state.appReducer.user);
  console.log("🚀 ~ file: Profile.jsx:8 ~ Profile ~ user:", user);

  const bgstyle = {
    borderRadius: "16px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(5px)",
    webkitBackdropFilter: "blur(5px)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    padding: "30px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    gap: "200",
    flexWrap: "wrap",
    width: "80%",
  };
  return (
    <>
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
            width={200}
            height={200}
            style={{ borderRadius: "50%", border: "5px solid #1565C0" }}
          />
          <Box>
            <Typography
              textTransform={"uppercase"}
              fontFamily={"monospace"}
              fontWeight={"bold"}
              fontSize={40}
            >
              {user.name}
            </Typography>
            <Typography
              textTransform={"uppercase"}
              fontFamily={"monospace"}
              fontSize={15}
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
                <Typography fontFamily={"monospace"} fontSize={"20px"}>
                  Posts
                </Typography>
                <Typography
                  fontFamily={"monospace"}
                  fontSize={"20px"}
                  textAlign={"center"}
                >
                  {user?.posts.length}
                </Typography>
              </Box>
              <Box>
                <Typography fontFamily={"monospace"} fontSize={"20px"}>
                  Followers
                </Typography>
                <Typography
                  fontFamily={"monospace"}
                  fontSize={"20px"}
                  textAlign={"center"}
                >
                  {user?.followers.length}
                </Typography>
              </Box>
              <Box>
                <Typography fontFamily={"monospace"} fontSize={"20px"}>
                  Following
                </Typography>
                <Typography
                  fontFamily={"monospace"}
                  fontSize={"20px"}
                  textAlign={"center"}
                >
                  {user?.following.length}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={bgstyle}>
          <CreatePost />
          <Box>
            <ButtonGroup variant="outlined" aria-label="outlined button group">
              <Button>Freinds</Button>
              <Button>Setting</Button>
              <Button>Todos</Button>
            </ButtonGroup>
          </Box>
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
          <Typography fontFamily={"monospace"} fontSize={"30px"}>
            Posts
          </Typography>
          {user.posts.map((e) => {
            return (
              <Post
                post={e.caption}
                profile={user.profile_photo}
                time={user.createdAt}
                name={user.name}
              />
            );
          }).reverse()}
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
