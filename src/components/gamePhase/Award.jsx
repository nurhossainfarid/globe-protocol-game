import { Box, Typography } from "@mui/material";
import Lottie from "lottie-react";
import Clock from "../../animation/Clock.json";
import Trophy from "./Trophy";

const number = [1, 2, 3, 4, 5];

const Award = ({ trophy, setTrophy }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "end",
        gap: "5px",
        marginTop: "-5px",
      }}
    >
      {/* Trophy */}
      <Trophy trophy={trophy} />
      {/* Heart/life */}
      <Box component="div" sx={{ display: "flex", alignItems: "end" }}>
        <Box
          component="img"
          src="https://i.ibb.co.com/PCkSDn2/heart.png"
          sx={{ width: "50px", height: "50px", zIndex: 2 }}
        />
        <Box
          className="jaro glass_bg"
          variant="contained"
          sx={{
            borderRadius: "1px",
            color: "white",
            padding: "5px 5px",
            fontSize: "20px",
            marginLeft: "-24px",
            marginBottom: "7px",
            zIndex: 1,
          }}
        >
          <Box sx={{ display: "flex", gap: "8px", paddingLeft: "20px" }}>
            {number.map((n) => (
              <Typography
                variant="contained"
                key={n}
                sx={{
                  zIndex: 2,
                  background: "#5AEF42",
                  padding: "0px 7px",
                  borderRadius: "6px",
                  fontSize: "14px",
                  color: "#5A553B",
                }}
              >
                {n}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>
      <Box
        component="div"
        sx={{ display: "flex", alignItems: "center", marginTop: "-10px" }}
      >
        <Lottie
          style={{ width: "80px", height: "70px", zIndex: 2 }}
          loop
          animationData={Clock}
        />
        <Typography
          className="jaro glass_bg"
          variant="contained"
          sx={{
            borderRadius: "1px",
            color: "white",
            padding: "0px 20px",
            fontSize: "20px",
            marginLeft: "-35px",
            zIndex: 1,
          }}
        >
          00:59
        </Typography>
      </Box>
    </Box>
  );
};

export default Award;
