import { Box, Divider, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import HydroDrag from "../../components/dragDrop/HydroDrag";
import HydroDrop from "../../components/dragDrop/HydroDrop";
import Award from "../../components/gamePhase/Award";
import LearningPhase from "../../components/gamePhase/LearningPhase";
import BackButton from "../../components/layouts/BackButton";
import BigWingButton from "../../components/layouts/BigWingButton";

const FishList = [
  {
    id: 0,
    url: "https://i.ibb.co.com/m568bMf/tortoise.gif",
    name: "Tortoise",
    Salinity: "35 - 45 ppt (High Saltwater)",
    Oxygen: "5 - 9 mg/L (Moderate)",
    WaterType: "Warm-Season Fruits and Vegetables",
    Available: "India, China, Turkey",
    top: 220,
    left: 520,
  },
  {
    id: 1,
    url: "https://i.ibb.co.com/BrVvFxR/redfish.gif",
    name: "Orange Fish",
    Salinity: "35 - 45 ppt (High Saltwater)",
    Oxygen: "5 - 9 mg/L (Moderate)",
    WaterType: "Warm-Season Fruits and Vegetables",
    Available: "India, China, Turkey",
    top: 270,
    left: 125,
  },
  {
    id: 2,
    url: "https://i.ibb.co.com/D423Jxq/whitefish.gif",
    name: "White",
    Salinity: "35 - 45 ppt (High Saltwater)",
    Oxygen: "5 - 9 mg/L (Moderate)",
    WaterType: "Warm-Season Fruits and Vegetables",
    Available: "India, China, Turkey",
    top: 270,
    left: 250,
  },
  {
    id: 3,
    url: "https://i.ibb.co.com/4pmM9xQ/jellyfish.gif",
    name: "Jelly Fish",
    Salinity: "35 - 45 ppt (High Saltwater)",
    Oxygen: "5 - 9 mg/L (Moderate)",
    WaterType: "Warm-Season Fruits and Vegetables",
    Available: "India, China, Turkey",
    top: 270,
    left: 400,
  },
  {
    id: 4,
    url: "https://i.ibb.co.com/cv8N4Ky/sea-hourse.gif",
    name: "Sea Horse",
    Salinity: "35 - 45 ppt (High Saltwater)",
    Oxygen: "5 - 9 mg/L (Moderate)",
    WaterType: "Warm-Season Fruits and Vegetables",
    Available: "India, China, Turkey",
    top: 280,
    left: 500,
  },
  {
    id: 5,
    url: "https://i.ibb.co.com/crFQ2wP/Naffe.png",
    name: "Red Fish",
    Salinity: "35 - 45 ppt (High Saltwater)",
    Oxygen: "5 - 9 mg/L (Moderate)",
    WaterType: "Warm-Season Fruits and Vegetables",
    Available: "India, China, Turkey",
    top: 320,
    left: 200,
  },
  {
    id: 6,
    url: "https://i.ibb.co.com/hCqZWgL/octopus.gif",
    name: "Octopus",
    Salinity: "35 - 45 ppt (High Saltwater)",
    Oxygen: "5 - 9 mg/L (Moderate)",
    WaterType: "Warm-Season Fruits and Vegetables",
    Available: "India, China, Turkey",
    top: 330,
    left: 330,
  },
  {
    id: 7,
    url: "https://i.ibb.co.com/WtcRpGc/crab.gif[/img]",
    name: "Crab",
    Salinity: "0 - 5 ppt (Freshwater)",
    Oxygen: "0 - 3 mg/L (Very Low)",
    WaterType: "Very Low Oxygen, Freshwater (Low Salinity) Pond",
    Available: "Asia, Europe, North America",
    top: 350,
    left: 450,
  },
];

const HydroGame = () => {
  const [board, setBoard] = useState([]);
  const [gameStart, setGameStart] = useState(false);
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleGameStart = (value) => {
    setGameStart(value);
  };

  // Available fish after drop
  let availableFish = FishList;
  availableFish = availableFish.filter(function (el) {
    return board.indexOf(el) < 0;
  });
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
        backgroundImage: `url(${"https://i.ibb.co.com/qdj8m9P/hydro-bg-blur.png"})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
      }}
    >
      <LearningPhase
        Datalist={FishList}
        handleGameStart={handleGameStart}
        imgW={"200px"}
        firstData={"Salinity:"}
        secondData={"Oxygen:"}
        thirdData={"WaterType:"}
        fourthData={"Available:"}
      />
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "start",
          }}
        >
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
          <Box sx={{}}>
            <Award start={gameStart} />
          </Box>
        </Box>
        {/* Pond */}
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
          }}
        >
          {/* Quarantine pond */}
          <Box>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              <Box
                sx={{ width: "700px", height: "480px" }}
                component="img"
                src="https://i.ibb.co.com/rfL9mmq/quarantine-pond.png"
              />
              {/* Data */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  gap: '16px',
                  position: "absolute",
                  top: 20,
                  right: 20
                }}
              >
                <Box
                  component="div"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    border: "1px solid #f78a3b",
                    borderRadius: "5px",
                  }}
                >
                  <Typography
                    sx={{
                      backgroundColor: "#5A553BB5",
                      fontFamily: "Jaro",
                      color: "white",
                      padding: "5px",
                      fontSize: "16px",
                    }}
                  >
                    Dissolved Oxygen
                  </Typography>
                  <Typography
                    sx={{
                      color: "#5A553BB5",
                      fontFamily: "Jaro",
                      padding: "5px",
                      fontSize: "16px",
                    }}
                  >
                    5.06
                  </Typography>
                </Box>
                <Box
                  component="div"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    border: "1px solid #f78a3b",
                    borderRadius: "5px",
                    fontSize: "20px",
                  }}
                >
                  <Typography
                    sx={{
                      backgroundColor: "#5A553BB5",
                      fontFamily: "Jaro",
                      color: "white",
                      padding: "5px",
                      fontSize: "16px",
                    }}
                  >
                    Salinity
                  </Typography>
                  <Typography
                    sx={{
                      color: "#5A553BB5",
                      fontFamily: "Jaro",
                      padding: "5px",
                      fontSize: "16px",
                    }}
                  >
                    55 PPT
                  </Typography>
                </Box>
              </Box>
              {/* Fishes in pond */}
              <Box
                component="div"
                sx={{ display: "flex", justifyContent: "center" }}
              >
                {availableFish?.map((f) => (
                  <HydroDrag
                    key={f.id}
                    fish={FishList[f.id]}
                    top={f.top}
                    left={f.left}
                  />
                ))}
              </Box>
              {/* Pond Type */}
              <Box
                component="div"
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Box
                  sx={{
                    fontFamily: "Jaro",
                    border: "2px solid #544E3B",
                    color: "#5A553B",
                    fontSize: "22px",
                    borderRadius: "5px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      background:
                        "linear-gradient(180deg, #FFC195 8.89%, #FFFFFF 100%)",
                      padding: "3px 5px",
                      fontFamily: "Jaro",
                      fontSize: "22px",
                    }}
                  >
                    POND TYPE
                  </Typography>
                  <Divider orientation="vertical" flexItem />
                  <Typography
                    sx={{
                      background:
                        "linear-gradient(180deg, #FFF5C1 8.89%, #FFFFFF 100%)",
                      padding: "3px 5px",
                      fontFamily: "Jaro",
                      fontSize: "22px",
                    }}
                  >
                    HIGH SALINITY
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              <Box
                component="div"
                src=""
                sx={{
                  width: "700px",
                  height: "480px",
                  backgroundImage: `url(${"https://i.ibb.co.com/Gp2h3km/optimal-pond.png"})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                  backgroundPosition: "center",
                  borderRadius: "15px",
                }}
              >
                <HydroDrop
                  FishList={FishList}
                  board={board}
                  setBoard={setBoard}
                />
              </Box>
              {/* Pond Type */}
              <Box
                component="div"
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Box
                  sx={{
                    fontFamily: "Jaro",
                    border: "2px solid #544E3B",
                    color: "#5A553B",
                    fontSize: "22px",
                    borderRadius: "5px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      background:
                        "linear-gradient(180deg, #20E400 8.89%, #FFFFFF 100%)",
                      padding: "3px 5px",
                      fontFamily: "Jaro",
                      fontSize: "22px",
                    }}
                  >
                    POND TYPE
                  </Typography>
                  <Divider orientation="vertical" flexItem />
                  <Typography
                    sx={{
                      background:
                        "linear-gradient(180deg, #FFF5C1 8.89%, #FFFFFF 100%)",
                      padding: "3px 5px",
                      fontFamily: "Jaro",
                      fontSize: "22px",
                    }}
                  >
                    OPTIMAL
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HydroGame;
