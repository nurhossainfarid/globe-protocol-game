import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import GameInfo from "../../components/gameHome/GameInfo";
import SelectCharacter from "../../components/gameHome/SelectCharacter";
import Navbar from "../../components/navbar/Navbar";
import "./style.css";

const GameHome = () => {
  return (
    <Box
      className="gamePage"
      sx={{
        width: "100%",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          background: "black",
          height: "100%",
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          opacity: "0.3",
        }}
      ></Box>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          zIndex: "100",
        }}
      >
        {/* Game Info */}
        <GameInfo />
        {/* Character Info*/}
        <SelectCharacter />
      </Box>
      <Box sx={{display: "flex",justifyContent: "center"}}>
        <Link to="/map">
          <Button variant="contained" sx={{size: '16px'}} >Start Game</Button>
        </Link>
      </Box>
    </Box>
  );
};

export default GameHome;
