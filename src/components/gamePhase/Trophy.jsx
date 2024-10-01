import { Box, Typography } from "@mui/material";
import Lottie from "lottie-react";
import TrophyAnimation from "../../animation/Trophy.json";
import { useState } from "react";

const Trophy = ({trophy}) => {
  return (
    <Box component="div" sx={{ display: "flex", alignItems: "end" }}>
      <Lottie
        style={{ width: "80px", height: "60px", zIndex: 2 }}
        loop
        animationData={TrophyAnimation}
      />
      <Typography
        className="jaro glass_bg"
        variant="contained"
        sx={{
          borderRadius: "1px",
          color: "white",
          padding: "0px 30px",
          fontSize: "20px",
          marginLeft: "-40px",
          zIndex: 1,
        }}
      >
        {trophy}
      </Typography>
      <Typography
        sx={{
          zIndex: 2,
          color: "black",
          background: "#ffcb44",
          padding: "0px 10px",
          borderRadius: "5px",
          marginLeft: "-10px",
          fontSize: "21px",
        }}
      >
        +
      </Typography>
    </Box>
  );
};

export default Trophy;
