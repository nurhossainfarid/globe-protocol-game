import { Box, Typography } from "@mui/material";
import Lottie from "lottie-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Clock from "../../animation/Clock.json";
import Trophy from "./Trophy";
import { toast } from "react-toastify";

const Award = ({start}) => {
  const number = useSelector((state) => state.health);
  let [timeLeft, setTimeLeft] = useState(60);
  // Function to decrease the timer and display it
  const startGame = () => {
    if (timeLeft > 0 && start) {
      setTimeLeft((timeLeft -= 1));
    } else {
      setTimeout(() => {
        clearInterval(counterInterval);
      }, 60000);
    }
  };
  let counterInterval = setInterval(startGame, 1000);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "end",
        marginTop: "-5px",
      }}
    >
      {/* Trophy */}
      <Trophy />
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
      {/* Timer */}
      <Box
        component="div"
        sx={{ display: "flex", alignItems: "center", marginTop: "-16px" }}
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
          {timeLeft}
        </Typography>
      </Box>
    </Box>
  );
};

export default Award;
