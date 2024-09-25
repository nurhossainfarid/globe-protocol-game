import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box
      component="div"
      sx={{
        position: "relative",
        top: 0,
        height: "100vh",
        backgroundImage: `url(${"https://i.ibb.co.com/3f8xDVR/hydro-bg.png"})`,
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
          backgroundImage: `url(${"https://i.ibb.co.com/3f8xDVR/hydro-bg.png"})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "default",
          backgroundPosition: "bottom",
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
            backgroundColor: "rgba(79, 185, 170, 0.5)"
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
                  Pedosphere
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
                  width: "70%",
                  margin: "0 auto",
                  textAlign: "center",
                  fontSize: "28px",
                  marginTop: "50px",
                }}
              >
                pedo
              </Typography>
            </Box>
          </Box>
          <Box
            component="div"
            sx={{ display: "flex", justifyContent: "space-around" }}
          ></Box>
          <Link to={""}>
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
