import { Box, Typography } from "@mui/material";
import Lottie from "lottie-react";
import Earth from "../../animation/earth.json";
import "./style.css";

const PedoGame = () => {
  return (
    <Box
      className="pedo_bg"
      sx={{
        height: "100vh",
        position: "relative",
        top: 0,
        padding: "10px 20px",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box
          className="glass_bg"
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "10px",
            height: "80px",
            width: "30%",
          }}
        >
          <Box sx={{ width: "130px" }}>
            <Lottie loop animationData={Earth} />
          </Box>
          <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <Typography
              className="jaro"
              variant="contained"
              sx={{
                background: "#FFCB44",
                color: "white",
                fontSize: "18px",
                height: "30px",
                padding: "0px 16px",
                borderRadius: "5px",
                alignContent: "center",
              }}
            >
              PH: 7.5
            </Typography>
            <Typography
              className="jaro"
              variant="contained"
              sx={{
                background: "#FFCB44",
                color: "white",
                fontSize: "18px",
                height: "30px",
                padding: "0px 16px",
                borderRadius: "5px",
                alignContent: "center",
              }}
            >
              TMP: 75F
            </Typography>
            <Typography
              className="jaro"
              variant="contained"
              sx={{
                background: "#FFCB44",
                color: "white",
                fontSize: "18px",
                height: "30px",
                padding: "0px 16px",
                borderRadius: "5px",
                alignContent: "center",
              }}
            >
              MTR: 7.5
            </Typography>
          </Box>
        </Box>
        <Box
          component="img"
          src="https://i.ibb.co.com/JdMHyNX/map.png"
          sx={{ height: "100px" }}
        />
              <Box>
                  <Box component="div">
                     <Box component="img" src="../../images/trophy.png" />
                  </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PedoGame;
