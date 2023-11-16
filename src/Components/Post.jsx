import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Post = ({ post, profile, time, name }) => {
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  let color1 = getRandomColor();
  let color2 = getRandomColor();

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" , width: "100%" , padding: "00px 20px"}}>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center"}}>
          <img
            src={profile}
            alt="profile"
            width={50}
            height={50}
            style={{ borderRadius: "50%", border: "2px solid #1565C0" }}
          />
          <Typography textTransform={"capitalize"} fontSize={"20px"}>
            {name}
          </Typography>
        </Box>
        <IconButton>
            <MoreVertIcon/>
        </IconButton>
      </Box>
      <Box
        sx={{
          width: "100%",
          background: `linear-gradient(${color1},${color2})`,
          minHeight: "400px",
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
          {post}
        </Typography>
      </Box>
    </>
  );
};

export default Post;
