import { Box, Typography } from "@mui/material";
import { DndProvider } from "react-dnd";
import { Link } from "react-router-dom";
import "./style.css";
import { HTML5Backend } from "react-dnd-html5-backend";


const Pedosphere = () => {
  return (
      <Box
        className="pedosphere_bg"
        component="div"
        sx={{ position: "relative", top: 0, height: "100vh" }}
      >
        <Box
          className="pedo_bg"
          component="div"
          sx={{
            position: "relative",
            top: "8%",
            height: "85%",
            width: "90%",
            margin: "0 auto",
          }}
        >
          <Box
            className="sky_bg"
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
                    PEDOSPHERE
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
                  Learn How to Play Step by Step, Learn About Pedosphere and
                  Speared Awareness !
                </Typography>
              </Box>
            </Box>
            <Box
              component="div"
              sx={{ display: "flex", justifyContent: "space-around" }}
            >
              <Box
                component="div"
                sx={{
                  width: "45%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  component="img"
                  src="https://i.ibb.co.com/YyxHmvz/Group-22711.png"
                  sx={{ width: "100%" }}
                />
                <Box
                  component="img"
                  src="https://i.ibb.co.com/kc0nxmv/Group-22712.png"
                  sx={{ width: "100%" }}
                />
              </Box>
              <Box
                component="img"
                src="https://i.ibb.co.com/k01XghB/Group-22713.png"
                sx={{ width: "600px", height: "360px" }}
              />
            </Box>
            <Link to="/pedoGame">
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

export default Pedosphere;
