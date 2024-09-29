import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import BackButton from "../layouts/BackButton";
import HomeButton from "../layouts/HomeButton";
import ContinueButton from "../layouts/ContinueButton";

const GameInto = (props) => {
  const { bg1, bg2, bg3, pic1, pic2, pic3, title, comment, nextPage } = props;
  return (
    <Box
      component="div"
      sx={{
        position: "relative",
        top: 0,
        height: "100vh",
        backgroundImage: `url(${bg1})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
        <BackButton
          link="/home"
          width="80px"
          height="80px"
        />
        <HomeButton
          link="/home"
          width="80px"
          height="80px"
        />
      </Box>
      <Box
        className="pedo_bg"
        component="div"
        sx={{
          position: "relative",
          top: "-20px",
          height: "85%",
          width: "90%",
          margin: "0 auto",
          backgroundImage: `url(${bg2})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
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
            backgroundImage: `url(${bg3})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
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
                  {title}
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
                {comment}
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
              <Box component="img" src={pic1} sx={{ width: "100%" }} />
              <Box component="img" src={pic2} sx={{ width: "100%" }} />
            </Box>
            <Box
              component="img"
              src={pic3}
              sx={{ width: "600px", height: "360px" }}
            />
          </Box>
          {/* Continue Button */}
          <ContinueButton nextPage={nextPage} bottom="-50px" />
        </Box>
      </Box>
    </Box>
  );
};

export default GameInto;
