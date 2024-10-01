import { Box } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Drop from "../../components/dragDrop/PedoDrop";
import Award from "../../components/gamePhase/Award";
import BackButton from "../../components/layouts/BackButton";
import BigWingButton from "../../components/layouts/BigWingButton";

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

const AtmoGame = () => {
  const dispatch = useDispatch();
  const [board, setBoard] = useState([]);
  const [gameStart, setGameStart] = useState(false);

  // Available fish after drop
  let availableTree = TreeList;
  availableTree = availableTree.filter(function (el) {
    return board.indexOf(el) < 0;
  });

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
      <Box sx={{}}>
        <Drop TreeList={TreeList} board={board} setBoard={setBoard} />
      </Box>
    </Box>
  );
};

export default AtmoGame;
