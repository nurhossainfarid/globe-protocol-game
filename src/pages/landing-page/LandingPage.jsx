import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import GameName from "../../images/gameName.png";
import LandingVideo from "../../video/GameLanding.mp4";
import "./style.css";

const LandingPage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
      }}
    >
     <Box
        component="video"
        src={LandingVideo}
        autoPlay
        loop
        muted
        sx={{
          width: "100%",
          height: "100vh",
          position: "absolute",
          top: "0",
          zIndex: "-1",
          objectFit: "cover",
        }}
      />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          top: "22%",
        }}
      >
        <img height={"400px"} src={GameName} />
        <Link to="/home" >
          <Button className="glassBtn" sx={{marginTop: '-50px', color: 'white', fontSize: "20px"}}>Explore Game</Button>
        </Link>
      </Container>
    </Box>
  );
};

export default LandingPage;
