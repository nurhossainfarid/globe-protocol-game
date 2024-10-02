import { Box, Popover, Typography } from "@mui/material";
import Lottie from "lottie-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Earth from "../../animation/Earth.json";
import Drag from "../../components/dragDrop/PedoDrag";
import Drop from "../../components/dragDrop/PedoDrop";
import Award from "../../components/gamePhase/Award";
import LearningPhase from "../../components/gamePhase/LearningPhase";
import BackButton from "../../components/layouts/BackButton";
import BigWingButton from "../../components/layouts/BigWingButton";
import "./style.css";

const TreeList = [
  {
    id: 1,
    url: "https://i.ibb.co.com/bsMgGHF/strawberry.png",
    name: "Strawberry",
    pH: "4.5-5.5",
    Temperature: "0-20°C",
    SoilType: "Berries and Evergreens, Leafy Greens and Root Vegetables",
    Available: "USA, Spain, Japan",
  },
  {
    id: 2,
    url: "https://i.ibb.co.com/Kmr3HqF/tomato.png",
    name: "Tomato",
    pH: "5.5-7.5",
    Temperature: "10-28°C",
    SoilType:
      "Leafy Greens and Root Vegetables, Warm-Season Fruits and Vegetables, Stone Fruits, Medicinal Plants",
    Available: "USA, Mexico, Italy, South Asia",
  },
  {
    id: 3,
    url: "https://i.ibb.co.com/qRq3NJz/carrot.png",
    name: "Carrot",
    pH: "5.5-7.0",
    Temperature: "8-25°C",
    SoilType:
      "Cool-Season Grains, Root Crops, Leafy Greens and Root Vegetables, Legumes and Nitrogen-Fixers",
    Available: "France, USA, South Asia",
  },
  {
    id: 4,
    url: "https://i.ibb.co.com/YkZf1qt/garlic.png",
    name: "Garlic",
    pH: "5.5-7.0",
    Temperature: "8-25°C",
    SoilType:
      "Cool-Season Grains, Root Crops, Leafy Greens and Root Vegetables, Legumes and Nitrogen-Fixers",
    Available: "China, India, Egypt",
  },
  {
    id: 5,
    url: "https://i.ibb.co.com/jbqr66x/onion.png",
    name: "Onion",
    pH: "5.5-7.0",
    Temperature: "8-28°C",
    SoilType:
      "Cool-Season Grains, Root Crops, Legumes and Nitrogen-Fixers, Medicinal Plants",
    Available: "USA, India, Egypt",
  },
  {
    id: 6,
    url: "https://i.ibb.co.com/vBzgCf4/photato.png",
    name: "Potato",
    pH: "5.5-6.5",
    Temperature: "10-18°C or 18-28°C",
    SoilType: "Root Crops, Leafy Greens and Root Vegetables, Medicinal Plants",
    Available: "Bangladesh, India, USA",
  },
  {
    id: 7,
    url: "https://i.ibb.co.com/wSWB2nX/eggplant.png",
    name: "Eggplant",
    pH: "6.5-7.5",
    Temperature: "18-25°C",
    SoilType: "Warm-Season Fruits and Vegetables",
    Available: "India, China, Turkey",
  },
  {
    id: 8,
    url: "https://i.ibb.co.com/V9v1xcH/chilli.png",
    name: "Chilli",
    pH: "5.5-7.0",
    Temperature: "8-20°C",
    SoilType: "Cool-Season Grains, Leafy Greens and Root Vegetables",
    Available: "India, Thailand, Mexico",
  },
];

const PedoGame = () => {
  const dispatch = useDispatch();
  const [board, setBoard] = useState([]);
  const [gameStart, setGameStart] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleGameStart = (value) => {
    setGameStart(value);
  };

  // Available fish after drop
  let availableTree = TreeList;
  availableTree = availableTree.filter(function (el) {
    return board.indexOf(el) < 0;
  });

  // popover
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open2 = Boolean(anchorEl);

  return (
    <Box
      className="pedo_bg"
      sx={{
        height: "100vh",
        position: "relative",
        top: 0,
        padding: "0px 20px",
        paddingBottom: "16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Popover
        id="mouse-over-popover"
        sx={{ pointerEvents: "none" }}
        open={open2}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }}>I use Popover.</Typography>
      </Popover>
      {/* Learning Phase */}
      <LearningPhase
        Datalist={TreeList}
        handleGameStart={handleGameStart}
        firstData={"Ph:"}
        secondData={"Temperature:"}
        thirdData={"SoilType:"}
        fourthData={"Available:"}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* Game Data */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <BackButton
              link="/home/pedosphere"
              width="100px"
              height="100px"
              marginLeft="-20px"
            />
            <Box
              className="glass_bg"
              sx={{
                display: "flex",
                alignItems: "center",
                borderRadius: "10px",
                height: "80px",
                paddingRight: "20px",
              }}
            >
              <Box sx={{ width: "130px" }}>
                <Lottie loop animationData={Earth} />
              </Box>
              <Box sx={{ display: "flex", gap: "10px" }}>
                <Typography
                  className="jaro"
                  variant="contained"
                  sx={{
                    background: "#FFCB44",
                    color: "white",
                    fontSize: "18px",
                    height: "30px",
                    padding: "0px 16px",
                    borderRadius: "5px",
                    alignContent: "center",
                  }}
                >
                  PH: 7.5
                </Typography>
                <Typography
                  className="jaro"
                  variant="contained"
                  sx={{
                    background: "#FFCB44",
                    color: "white",
                    fontSize: "18px",
                    height: "30px",
                    padding: "0px 16px",
                    borderRadius: "5px",
                    alignContent: "center",
                  }}
                >
                  TMP: 75F
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <BigWingButton
              link="/home/pedogame/awareness"
              height="50px"
              marginTop="-20px"
            />
          </Box>
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
      <Box sx={{}}>
        <Drop TreeList={TreeList} board={board} setBoard={setBoard} />
      </Box>
      <Box
        className="slider-container"
        sx={{
          width: "840px",
          margin: "0 auto",
          marginBottom: "-5px",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {availableTree.map((tree) => (
          <Drag key={tree.id} tree={tree} />
        ))}
      </Box>
    </Box>
  );
};

export default PedoGame;
