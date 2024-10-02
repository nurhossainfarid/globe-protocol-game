import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
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
    url: "https://i.ibb.co.com/jRJHv0P/cloud1.png",
    name: "Nimbostratus",
  },
  {
    id: "c2",
    url: "https://i.ibb.co.com/YTJKbMp/cloud2.png",
    name: "Cumulonimbus",
  },
  {
    id: "c3",
    url: "https://i.ibb.co.com/0KDMSjg/Cloud3.png",
    name: "Stratus",
  },
  {
    id: "c4",
    url: "https://i.ibb.co.com/GTpt53X/cloud4.png",
    name: "Stratocumulus",
  },
];

const AtmoGame = () => {
  const [board, setBoard] = useState([]);
  const [boardCloud, setBoardCloud] = useState([]);
  const [gameStart, setGameStart] = useState(false);
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  // Dialog
  useEffect(() => {
    setOpen(true);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
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
        backgroundImage: `url(${"https://i.ibb.co.com/Sy7qmpS/atmo-bg-bd.png"})`,
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
            link="/home/hydrosphere"
            width="100px"
            height="100px"
            marginLeft="-20px"
          />
          <BigWingButton
            link="/home/hydro/awareness"
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
          display: "flex",
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
        <CloudDrop CloudList={cloudList} boardCloud={boardCloud} setBoardCloud={setBoardCloud} />
        <PurifierDrop
          PurifierList={airPurification}
          SolarList={solarList}
          board={board}
          setBoard={setBoard}
        />
      </Box>
      {/* right part */}
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          position: "absolute",
          top: 250,
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
