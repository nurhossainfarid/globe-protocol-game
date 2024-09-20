import { Box, Popover, Typography } from "@mui/material";
import Lottie from "lottie-react";
import Clock from "../../animation/Clock.json";
import Earth from "../../animation/Earth.json";
import Trophy from "../../animation/Trophy.json";

import { useState } from "react";
import Drag from "../../components/dragDrop/Drag";
import Drop from "../../components/dragDrop/Drop";
import "./style.css";

const number = [1, 2, 3, 4, 5];

const TreeList = [
  {
    id: 1,
    url: "https://i.ibb.co.com/bsMgGHF/strawberry.png",
    name: "Strawberry",
  },
  {
    id: 2,
    url: "https://i.ibb.co.com/Kmr3HqF/tomato.png",
    name: "Tomato",
  },
  {
    id: 3,
    url: "https://i.ibb.co.com/qRq3NJz/carrot.png",
    name: "Carrot",
  },
  {
    id: 4,
    url: "https://i.ibb.co.com/YkZf1qt/garlic.png",
    name: "Garlic",
  },
  {
    id: 5,
    url: "https://i.ibb.co.com/jbqr66x/onion.png",
    name: "Onion",
  },
  {
    id: 6,
    url: "https://i.ibb.co.com/vBzgCf4/photato.png",
    name: "Photato",
  },
  {
    id: 7,
    url: "https://i.ibb.co.com/wSWB2nX/eggplant.png",
    name: "Eggplant",
  },
  {
    id: 8,
    url: "https://i.ibb.co.com/V9v1xcH/chilli.png",
    name: "Chilli",
  },
];

const PedoGame = () => {
  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [board, setBoard] = useState([]);

  return (
    <Box
      className="pedo_bg"
      sx={{
        height: "100vh",
        position: "relative",
        top: 0,
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* Game Data */}
        <Box
          className="glass_bg"
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "10px",
            height: "80px",
            width: "30%",
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
              MTR: 7.5
            </Typography>
          </Box>
        </Box>
        {/* Map */}
        <Box
          component="img"
          src="https://i.ibb.co.com/JdMHyNX/map.png"
          sx={{ height: "100px", marginTop: "-16px", marginLeft: "-20px" }}
        />
        {/* Award */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
            gap: "5px",
            marginTop: "-20px",
          }}
        >
          {/* Trophy */}
          <Box component="div" sx={{ display: "flex", alignItems: "end" }}>
            <Lottie
              style={{ width: "100px", height: "85px", zIndex: 2 }}
              loop
              animationData={Trophy}
            />
            <Typography
              className="jaro glass_bg"
              variant="contained"
              sx={{
                borderRadius: "1px",
                color: "white",
                padding: "5px 30px",
                fontSize: "20px",
                marginLeft: "-40px",
                marginBottom: "7px",
                zIndex: 1,
              }}
            >
              3,828,426
            </Typography>
            <Typography
              sx={{
                zIndex: 2,
                color: "black",
                background: "#ffcb44",
                marginBottom: "8px",
                padding: "0px 12px",
                borderRadius: "5px",
                marginLeft: "-10px",
                fontSize: "28px",
              }}
            >
              +
            </Typography>
          </Box>
          {/* Heart/life */}
          <Box component="div" sx={{ display: "flex", alignItems: "end" }}>
            <Box
              component="img"
              src="https://i.ibb.co.com/PCkSDn2/heart.png"
              sx={{ width: "60px", height: "60px", zIndex: 2 }}
            />
            <Box
              className="jaro glass_bg"
              variant="contained"
              sx={{
                borderRadius: "1px",
                color: "white",
                padding: "5px 10px",
                fontSize: "20px",
                marginLeft: "-40px",
                marginBottom: "7px",
                zIndex: 1,
              }}
            >
              <Box sx={{ display: "flex", gap: "10px", paddingLeft: "30px" }}>
                {number.map((n) => (
                  <Typography
                    variant="contained"
                    key={n}
                    sx={{
                      zIndex: 2,
                      background: "#5AEF42",
                      padding: "0px 7px",
                      borderRadius: "6px",
                      fontSize: "16px",
                      color: "#5A553B",
                    }}
                  >
                    {n}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Box>
          <Box
            component="div"
            sx={{ display: "flex", alignItems: "center", marginTop: "-10px" }}
          >
            <Lottie
              style={{ width: "100px", height: "90px", zIndex: 2 }}
              loop
              animationData={Clock}
            />
            <Typography
              className="jaro glass_bg"
              variant="contained"
              sx={{
                borderRadius: "1px",
                color: "white",
                padding: "0px 20px",
                fontSize: "24px",
                marginLeft: "-35px",
                zIndex: 1,
              }}
            >
              00:59
            </Typography>
          </Box>
        </Box>
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
          gap: "20px",
        }}
      >
        {TreeList.map((tree) => (
          <Drag key={tree.id} tree={tree} />
        ))}
      </Box>
    </Box>
  );
};

export default PedoGame;
