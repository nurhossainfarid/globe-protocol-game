import {
  Box,
  Button,
  Dialog,
  DialogActions,
  Popover,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import Earth from "../../animation/Earth.json";
import Drag from "../../components/dragDrop/PedoDrag";
import Drop from "../../components/dragDrop/PedoDrop";
import Award from "../../components/gamePhase/Award";
import BackButton from "../../components/layouts/BackButton";
import BigWingButton from "../../components/layouts/BigWingButton";
import "./style.css";

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
  const [anchorEl, setAnchorEl] = useState(null);
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

  // popover
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open2 = Boolean(anchorEl);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [board, setBoard] = useState([]);

  return (
    <Box
      className="pedo_bg"
      sx={{
        height: "100vh",
        position: "relative",
        top: 0,
        padding: "0px 20px",
        paddingBottom: '16px',
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
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <Box component="div" className="slider-container">
          <Slider {...settings}>
            {TreeList.map((tree) => (
              <Box
                component="div"
                key={tree.id}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Box component="img" src={tree.url} />
                <Typography variant="h4">{tree.name}</Typography>
              </Box>
            ))}
          </Slider>
        </Box>
        <DialogActions>
          <Button onClick={handleClose}>Skip</Button>
          <Button onClick={handleClose}>Start Game</Button>
        </DialogActions>
      </Dialog>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* Game Data */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: '10px' }}>
          <Box sx={{ display: "flex", alignItems: "center",}}>
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
        <Award />
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
