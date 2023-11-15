import React from "react";
import { BallTriangle } from "react-loader-spinner";

const Loading = () => {
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        fontSize: "100px",
        height: "100vh",
        background:
          "linear-gradient(90deg, rgba(0,181,255,1) 0%, rgba(0,74,255,1) 100%, rgba(0,0,0,1) 100%)",
        color: "white",
      }}
    >
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#fff"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </div>
  );
};

export default Loading;
