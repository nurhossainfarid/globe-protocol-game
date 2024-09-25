import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import "./style.css";

const LandingPage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundImage: `url('https://i.ibb.co.com/GPvXCnx/Landing-Page-bg.png')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 115%",
        backgroundPosition: "center",
      }}
    >
      <Box
        component="img"
        src="https://i.ibb.co.com/N1sT3rw/orb-logo.png"
        sx={{ width: "170px", position: "absolute",left: '10px' }}
      />
      <Box
        component="img"
        src="https://i.ibb.co.com/HxdPr1L/SAVE.png"
        sx={{
          width: "900px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          position: "relative",
          top: "5%",
          left: "2%"
        }}
      />
      <Box
        component="img"
        src="https://i.ibb.co.com/NKSsM8p/character.png"
        sx={{
          height: "600px",
          margin: "0 auto",
          position: "absolute",
          top: "0px",
          left: "32%",
          zIndex: 1,
        }}
      />
      <Box
        component="img"
        src="https://i.ibb.co.com/pXG9TwJ/Spooky.png"
        sx={{
          height: "270px",
          margin: "0 auto",
          position: "absolute",
          top: "50%",
          left: "33%",
          zIndex: 2,
        }}
      />
      <Link to='/home'>
        <Box
          component="img"
          src="https://i.ibb.co.com/DWtwwt2/start-button.png"
          sx={{
            height: "120px",
            margin: "0 auto",
            position: "absolute",
            bottom: "0%",
            left: "45%",
            zIndex: 3,
          }}
        />
      </Link>
    </Box>
  );
};

export default LandingPage;
