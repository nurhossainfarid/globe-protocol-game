import {
  Box,
  Button,
  Dialog,
  DialogActions,
  Divider,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import HydroDrag from "../../components/dragDrop/HydroDrag";
import HydroDrop from "../../components/dragDrop/HydroDrop";
import Award from "../../components/gamePhase/Award";
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
    top: 270,
    left: 125,
  },
  {
    id: 2,
    url: "https://i.ibb.co.com/D423Jxq/whitefish.gif",
    name: "White",
    top: 270,
    left: 250,
  },
  {
    id: 3,
    url: "https://i.ibb.co.com/4pmM9xQ/jellyfish.gif",
    name: "Jelly Fish",
    top: 270,
    left: 400,
  },
  {
    id: 4,
    url: "https://i.ibb.co.com/cv8N4Ky/sea-hourse.gif",
    name: "Sea Horse",
    top: 280,
    left: 500,
  },
  {
    id: 5,
    url: "https://i.ibb.co.com/crFQ2wP/Naffe.png",
    name: "Red Fish",
    top: 320,
    left: 200,
  },
  {
    id: 6,
    url: "https://i.ibb.co.com/hCqZWgL/octopus.gif",
    name: "Octopus",
    top: 330,
    left: 330,
  },
  {
    id: 7,
    url: "https://i.ibb.co.com/WtcRpGc/crab.gif[/img]",
    name: "Crab",
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
  console.log(board);
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
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <Box
          component="div"
          className="slider-container"
          sx={{ background: "#33abb5", borderRadius: "10px", margin: "5px" }}
        >
          <Slider {...settings}>
            {FishList.map((data) => (
              <Box component="div" key={data.id}>
                <Box
                  component="div"
                  sx={{ display: "flex", flexDirection: "column" }}
                >
                  <Box
                    component="div"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "10px",
                      gap: "10px",
                    }}
                  >
                    <Box
                      component="img"
                      src={data.url}
                      sx={{ height: "200px" }}
                    />
                    {/* Plant Info */}
                    <Box component="div">
                      <Typography
                        variant="h4"
                        sx={{ fontFamily: "Jaro", color: "white" }}
                      >
                        {data.name}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "1px",
                        }}
                      >
                        <Typography sx={{ fontFamily: "Jaro", color: "white" }}>
                          Salinity: {data.Salinity}
                        </Typography>
                        <Typography sx={{ fontFamily: "Jaro", color: "white" }}>
                          Oxygen: {data.Oxygen}
                        </Typography>
                        <Typography sx={{ fontFamily: "Jaro", color: "white" }}>
                          Water Type: {data.WaterType}
                        </Typography>
                        <Typography sx={{ fontFamily: "Jaro", color: "white" }}>
                          Grow's In: {data.Available}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </Slider>
          <DialogActions sx={{ marginTop: "-20px" }}>
            <Box
              component="div"
              sx={{ display: "flex", justifyContent: "end", gap: "10px" }}
              onClick={() => setGameStart(true)}
            >
              <Button
                variant="contained"
                sx={{ background: "white", color: "black" }}
                onClick={handleClose}
              >
                Start Game
              </Button>
            </Box>
          </DialogActions>
        </Box>
      </Dialog>
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
