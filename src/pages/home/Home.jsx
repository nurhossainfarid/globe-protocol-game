import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [topic, setTopic] = useState("");

  const handleTopic = (name) => {
    setTopic(name);
  };
  return (
    <Box
      component="div"
      sx={{
        position: "relative",
        top: 0,
        height: "100vh",
        backgroundImage: `url(${"https://i.ibb.co.com/80LbTnZ/DFGG.png"})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
    >
      {/* <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <BackButton link="/home" width="80px" height="80px" />
        <HomeButton link="/home" width="80px" height="80px" />
      </Box> */}
      <Box
        className="pedo_bg"
        component="div"
        sx={{
          position: "relative",
          top: "10%",
          height: "85%",
          width: "90%",
          margin: "0 auto",
          backgroundImage: `url(${"https://i.ibb.co.com/80LbTnZ/DFGG.png"})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          borderRadius: "20px",
        }}
      >
        <Box
          component="div"
          sx={{
            position: "relative",
            top: "5%",
            height: "91%",
            width: "96%",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            backgroundColor: "rgba(79, 185, 170, 0.5)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box component="div" sx={{ position: "absolute", top: "-60px" }}>
              <Box
                sx={{
                  background: "#A78C00",
                  paddingBottom: "10px",
                  borderRadius: "20px",
                }}
              >
                <Typography
                  sx={{
                    background: "#CAAB5D",
                    borderRadius: "15px",
                    padding: "0px 80px",
                    fontFamily: "Jaro",
                    fontOpticalSizing: "auto",
                    fontWeight: 400,
                    fontStyle: "normal",
                    color: "white",
                    fontSize: "50px",
                  }}
                >
                  MAIN MENU
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontFamily: "Jaro",
                  fontOpticalSizing: "auto",
                  fontWeight: 400,
                  fontStyle: "normal",
                  color: "#78603F",
                  margin: "0 auto",
                  textAlign: "center",
                  fontSize: "48px",
                  marginTop: "30px",
                  letterSpacing: "4px",
                }}
              >
                CHOOSE SPECIPHIC PROBLEM TO SOLVE
              </Typography>
            </Box>
          </Box>
          {/* Select Topic */}
          <Box
            component="div"
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "25px",
              marginTop: "20px",
            }}
          >
            {/* pedosphere */}
            <Box
              component="div"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
              }}
              onClick={() => handleTopic("pedosphere")}
            >
              <Box
                component="img"
                src="https://i.ibb.co.com/1ZYTxdy/Group-1321314360.png"
              />
              <Box
                component="div"
                sx={{
                  background: "#3D70AB",
                  width: "300px",
                  height: "280px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                  border: topic === "pedosphere" ? "5px solid black" : "",
                }}
              >
                <Box
                  component="img"
                  src="https://i.ibb.co.com/WpwcKxs/Rectangle-9257.png"
                  sx={{ width: "250px", height: "180px" }}
                />
                <Typography
                  sx={{
                    fontFamily: "Jaro",
                    fontOpticalSizing: "auto",
                    fontWeight: 400,
                    fontStyle: "normal",
                    color: "white",
                    margin: "0 auto",
                    textAlign: "center",
                    fontSize: "30px",
                    marginTop: "5px",
                  }}
                >
                  Pedosphere
                </Typography>
              </Box>
            </Box>
            {/* hydrosphere */}
            <Box
              component="div"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
              }}
              onClick={() => handleTopic("hydrosphere")}
            >
              <Box
                component="img"
                src="https://i.ibb.co.com/F7t824F/Group-1321314361.png"
              />
              <Box
                component="div"
                sx={{
                  background: "#3D70AB",
                  width: "300px",
                  height: "280px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px", 
                  border: topic === "hydrosphere" ? "5px solid black" : "",
                }}
              >
                <Box
                  component="iframe"
                  src="https://giphy.com/embed/MF6ftI1Ge4mApyyauo"
                  sx={{  width: '100%', height: '100%', border: 'none' }}
                />
                <Typography
                  sx={{
                    fontFamily: "Jaro",
                    fontOpticalSizing: "auto",
                    fontWeight: 400,
                    fontStyle: "normal",
                    color: "white",
                    margin: "0 auto",
                    textAlign: "center",
                    fontSize: "30px",
                    marginTop: "5px",
                  }}
                >
                  Hydrosphere
                </Typography>
              </Box>
            </Box>
            {/* atmosphere */}
            <Box
              component="div"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
              }}
              onClick={() => handleTopic("atmosphere")}
            >
              <Box
                component="img"
                src="https://i.ibb.co.com/zVKyMwB/Group-1321314362.png"
              />
              <Box
                component="div"
                sx={{
                  background: "#3D70AB",
                  width: "300px",
                  height: "280px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                  border: topic === "atmosphere" ? "5px solid black" : "",
                }}
              >
                <Box
                  component="img"
                  src="https://i.ibb.co.com/WpwcKxs/Rectangle-9257.png"
                  sx={{ width: "250px", height: "180px" }}
                />
                <Typography
                  sx={{
                    fontFamily: "Jaro",
                    fontOpticalSizing: "auto",
                    fontWeight: 400,
                    fontStyle: "normal",
                    color: "white",
                    margin: "0 auto",
                    textAlign: "center",
                    fontSize: "30px",
                    marginTop: "5px",
                  }}
                >
                  Atmosphere
                </Typography>
              </Box>
            </Box>
            {/* biosphere */}
            <Box
              component="div"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
              }}
              onClick={() => handleTopic("biosphere")}
            >
              <Box
                component="img"
                src="https://i.ibb.co.com/zVKyMwB/Group-1321314362.png"
              />
              <Box
                component="div"
                sx={{
                  background: "#3D70AB",
                  width: "300px",
                  height: "280px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                  border: topic === "biosphere" ? "5px solid black" : "",
                }}
              >
                <Box
                  component="img"
                  src="https://i.ibb.co.com/WpwcKxs/Rectangle-9257.png"
                  sx={{ width: "250px", height: "180px" }}
                />
                <Typography
                  sx={{
                    fontFamily: "Jaro",
                    fontOpticalSizing: "auto",
                    fontWeight: 400,
                    fontStyle: "normal",
                    color: "white",
                    margin: "0 auto",
                    textAlign: "center",
                    fontSize: "30px",
                    marginTop: "5px",
                  }}
                >
                  Biosphere
                </Typography>
              </Box>
            </Box>
          </Box>
          <Link to={topic}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                sx={{
                  width: "230px",
                  position: "absolute",
                  bottom: "-50px",
                  display: "flex",
                  justifyContent: "center",
                }}
                component="img"
                src="https://i.ibb.co.com/XpqCWKs/continue-Btn.png"
              />
            </Box>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
