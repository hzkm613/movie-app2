import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const LoadingScreen = () => {
  return (
    <div className="w-screen h-screen bg-black flex flex-col justify-center items-center text-white">
      <div>
        <p className="text-lg">Loading</p>
      </div>
      <CircularProgress />
    </div>
  );
};

export default LoadingScreen;
