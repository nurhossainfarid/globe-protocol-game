import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Eco from "../../images/eco.png";
import "./style.css";

const LandingPage = () => {
  return (
    <Box
      className="landingPage"
      sx={{
        width: "100%",
        height: "100vh",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          top: "40%",
          gap: "16px",
        }}
      >
        <img height={"200px"} src={Eco} />
        <Typography
          variant="h5"
          sx={{
            color: "#1E1E1E",
            fontFamily: "Rajdhani",
            fontWeight: 500,
            fontStyle: 'normal',
            fontSize: '28px',
            textTransform: 'uppercase',
          }}
        >
          Personalizing the experience for you...
        </Typography>
        <Link to="/home">
          <Button variant="contained">Start Game</Button>
        </Link>
      </Container>
    </Box>
  );
};

export default LandingPage;
