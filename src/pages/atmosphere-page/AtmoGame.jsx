import { Box, Typography } from "@mui/material";
import { useState } from "react";
import CloudDrag from "../../components/dragDrop/atmosphere/CloudDrag";
import CloudDrop from "../../components/dragDrop/atmosphere/CloudDrop";
import AirPurifierDrag from "../../components/dragDrop/atmosphere/PurifierDrag";
import PurifierDrop from "../../components/dragDrop/atmosphere/PurifierDrop";
import Award from "../../components/gamePhase/Award";
import BackButton from "../../components/layouts/BackButton";
import BigWingButton from "../../components/layouts/BigWingButton";

const airPurification = [
  {
    id: "ap1",
    url: "https://i.ibb.co.com/ZXtQ37z/Air-Purification1.png",
    name: "VERTO Air Purification",
  },
  {
    id: "ap2",
    url: "https://i.ibb.co.com/m8MQh6C/Air-Purification2.png",
    name: "FU-888SV Air Purification",
  },
];

const solarList = [
  {
    id: "sp1",
    url: "https://i.ibb.co.com/GTLcZHZ/solar1.png",
    name: "Ground Mounted Solar",
  },
  {
    id: "sp2",
    url: "https://i.ibb.co.com/cvh5jLH/solar2.png",
    name: "Mirror Solar",
  },
];

const cloudList = [
  {
    id: "c1",
    url: "https://i.ibb.co.com/WgpS6Rf/cloud1.gif",
    name: "Nimbostratus",
  },
  {
    id: "c2",
    url: "https://i.ibb.co.com/6nyBbDb/cloud3.gif",
    name: "Cumulonimbus",
  },
  {
    id: "c3",
    url: "https://i.ibb.co.com/ScTJjZG/cloud6.gif",
    name: "Stratus",
  },
  {
    id: "c4",
    url: "https://i.ibb.co.com/DChgpYs/cloud4.gif",
    name: "Stratocumulus",
  },
  {
    id: "c5",
    url: "https://i.ibb.co.com/34vxnsZ/cloud5.gif",
    name: "Altostratus",
  },
];

const AtmoGame = () => {
  const [board, setBoard] = useState([]);
  const [rain, setRain] = useState(false);
  const [stopPollution, setStopPollution] = useState(false);
  const [boardCloud, setBoardCloud] = useState([]);
  const [gameStart, setGameStart] = useState(false);

  const handleRain = (value) => {
    setRain(value);
  };

  const handleStopPollution = (value) => {
    setStopPollution(value);
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  let atmo_bg;
  if (stopPollution && rain) {
    atmo_bg = "https://i.ibb.co.com/Ln6knMm/Rain.gif";
  } else if (rain) {
    atmo_bg = "https://i.ibb.co.com/Ln6knMm/Rain.gif";
  } else if (stopPollution) {
    atmo_bg = "https://i.ibb.co.com/SBbQVS8/atmo-bg-good.png";
  } else {
    atmo_bg = "https://i.ibb.co.com/Sy7qmpS/atmo-bg-bd.png";
  }
  return (
    <Box
      component="div"
      sx={{
        height: "100vh",
        position: "relative",
        top: 0,
        padding: "10px 20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundImage: `url(${atmo_bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
        }}
      >
        {/* Game Data */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            marginTop: "-20px",
          }}
        >
          <BackButton
            link="/home/atmosphere"
            width="100px"
            height="100px"
            marginLeft="-20px"
          />
          <BigWingButton
            link="/home/atmogame/awareness"
            height="50px"
            marginTop="-20px"
          />
        </Box>

        {/* Map */}
        <a href="https://worldview.earthdata.nasa.gov/?v=85.51441156565696,22.98939099828811,91.57320988900048,25.86889801393965&s=90.4152,23.8041%2B88.6004,24.3746&t=2024-09-21-T14%3A26%3A02Z">
          <Box
            component="img"
            src="https://i.ibb.co.com/JdMHyNX/map.png"
            sx={{ height: "100px", marginLeft: "-20px" }}
          />
        </a>
        {/* Award */}
        <Award start={gameStart} />
      </Box>
      {/* Left part */}
      <Box
        component="div"
        sx={{
          display: rain ? "none" : "flex",
          flexDirection: "column",
          gap: "20px",
          position: "absolute",
          top: 150,
        }}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            backgroundColor: "rgba(139, 145, 130, 0.8)",
            borderRadius: "10px",
            width: "170px",
            padding: "10px 0px",
          }}
        >
          <Typography
            sx={{ fontFamily: "Jaro", color: "white", fontSize: "20px" }}
          >
            ARI PURIFICATION
          </Typography>
          {airPurification?.map((air) => (
            <AirPurifierDrag key={air.id} air={air} />
          ))}
        </Box>
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            backgroundColor: "rgba(139, 145, 130, 0.8)",
            borderRadius: "10px",
            width: "170px",
            padding: "10px 0px",
          }}
        >
          <Typography
            sx={{ fontFamily: "Jaro", color: "white", fontSize: "20px" }}
          >
            SOLAR PANELS
          </Typography>
          {solarList?.map((air) => (
            <AirPurifierDrag key={air.id} air={air} />
          ))}
        </Box>
      </Box>
      {/* Drop */}
      <Box sx={{}}>
        <CloudDrop
          CloudList={cloudList}
          boardCloud={boardCloud}
          setBoardCloud={setBoardCloud}
          handleRain={handleRain}
        />
        <PurifierDrop
          PurifierList={airPurification}
          SolarList={solarList}
          board={board}
          setBoard={setBoard}
          handleStopPollution={handleStopPollution}
        />
      </Box>
      {/* right part */}
      <Box
        component="div"
        sx={{
          display: rain ? "none" : "flex",
          flexDirection: "column",
          gap: "20px",
          position: "absolute",
          top: 180,
          right: 20,
        }}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            backgroundColor: "rgba(139, 145, 130, 0.8)",
            borderRadius: "10px",
            width: "170px",
            padding: "10px 0px",
          }}
        >
          <Typography
            sx={{ fontFamily: "Jaro", color: "white", fontSize: "20px" }}
          >
            CLOUDS
          </Typography>
          {cloudList?.map((cloud) => (
            <CloudDrag key={cloud.id} cloud={cloud} />
          ))}
        </Box>
      </Box>
      {/* <Box sx={{}}>
        <Drop TreeList={TreeList} board={board} setBoard={setBoard} />
      </Box> */}
    </Box>
  );
};

export default AtmoGame;
