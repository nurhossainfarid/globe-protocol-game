import { Box, Typography } from "@mui/material";
import Trophy from "../gamePhase/Trophy";
import BackButton from "../layouts/BackButton";
import ContinueButton from "../layouts/ContinueButton";
import HomeButton from "../layouts/HomeButton";

const Awareness = ({ prevPage }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundImage: `url('https://i.ibb.co.com/zPQm0HL/Pedosphere-AWERNESS.png')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        padding: "0px 16px",
      }}
    >
      {/* Awareness nav */}
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <BackButton link={prevPage} width="80px" height="80px" />
        <Box
          component="div"
          sx={{
            display: "flex",
            gap: "5px",
            justifyContent: "center",
            alignItems: "start",
          }}
        >
          <Trophy />
          <HomeButton link="/home" width="80px" height="80px" />
        </Box>
      </Box>
      {/* Awareness part */}
      <Box component="div" sx={{ display: "flex", flexDirection: "column" }}>
        {/* Text Part */}
        <Box component="div">
          <Typography
            variant="h3"
            sx={{ fontFamily: "Jaro", textAlign: "center", color: "#5A553B" }}
          >
            AWARENESS PART
          </Typography>
        </Box>
        <Box></Box>
        {/*Clam Trophy */}
        <ContinueButton />
      </Box>
    </Box>
  );
};

export default Awareness;
