import CircleIcon from "@mui/icons-material/Circle";
import CloseIcon from "@mui/icons-material/Close";
import {
  AppBar,
  Box,
  Button,
  Dialog,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import Slide from "@mui/material/Slide";
import { forwardRef, useState } from "react";
import { Link } from "react-router-dom";
import Flooding from "../../images/flooding.jpg";
import HeatWave from "../../images/heat_wave.jpg";
import Pollution from "../../images/pollution.jpg";
import Urbanization from "../../images/urbanization.jpg";
import "./style.css";

const topicData = [
  { img: Urbanization, title: "Pedosphere", link: "/pedosphere" },
  { img: Pollution, title: "Hydrosphere", link: "/hydrosphere" },
  { img: HeatWave, title: "HEAT WAVES" },
  { img: Flooding, title: "FLOODING" },
];

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const GameInfo = () => {
  const [info, setInfo] = useState("hydro");
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            position: "relative",
            left: 80,
          }}
        >
          <List
            sx={{
              width: "100%",
              color: "white",
              display: "flex",
              flexDirection: "column",
              gap: "0px",
            }}
          >
            <ListItem
              sx={{ gap: "10px", ...(info === "pedo" && { scale: 1.2 }) }}
              button
              onClick={() => setInfo("pedo")}
            >
              <CircleIcon
                sx={{ color: "white", width: "10px", height: "10px" }}
              />
              <ListItemText
                sx={{ font: "Rajdhani", weight: 500, size: "14px" }}
                primary="Pedosphere"
              />
            </ListItem>
            <ListItem
              sx={{ gap: "10px", ...(info === "hydro" && { scale: 1.2 }) }}
              button
              onClick={() => setInfo("hydro")}
            >
              <CircleIcon
                sx={{ color: "white", width: "10px", height: "10px" }}
              />
              <ListItemText
                sx={{ font: "Rajdhani", weight: 500, size: "12px" }}
                primary="Hydrosphere"
              />
            </ListItem>
            <ListItem
              sx={{ gap: "10px", ...(info === "atmo" && { scale: 1.2 }) }}
              button
              onClick={() => setInfo("atmo")}
            >
              <CircleIcon
                sx={{ color: "white", width: "10px", height: "10px" }}
              />
              <ListItemText
                sx={{ font: "Rajdhani", weight: 500, size: "14px" }}
                primary="Atmosphere"
              />
            </ListItem>
            <ListItem
              sx={{ gap: "10px", ...(info === "bio" && { scale: 1.2 }) }}
              button
              onClick={() => setInfo("bio")}
            >
              <CircleIcon
                sx={{ color: "white", width: "10px", height: "10px" }}
              />
              <ListItemText
                sx={{ font: "Rajdhani", weight: 500, size: "14px" }}
                primary="Biosphere"
              />
            </ListItem>
          </List>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "50px" }}>
          {info === "pedo" && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Rajdhani",
                  fontWeight: 600,
                  fontSize: "48px",
                  color: "#FFFFFF",
                }}
              >
                Pedosphere
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Rajdhani",
                  fontWeight: 500,
                  fontSize: "26px",
                  color: "#FFFFFF",
                  textTransform: "uppercase",
                }}
              >
                Drought
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Rajdhani",
                  fontWeight: 500,
                  fontSize: "20px",
                  color: "#FFFFFF",
                  textAlign: "center",
                  width: "80%",
                }}
              >
                The pedosphere is the Earth's soil layer where biological,
                chemical, and physical processes occur, supporting plant life
                and influencing ecosystems. It involves studying soil properties
                such as temperature, moisture, structure, and composition to
                understand its role in local environments and global cycles...{" "}
                <Button sx={{ color: "yellow" }} onClick={handleClickOpen}>
                  Game DATA
                </Button>
              </Typography>
            </Box>
          )}
          {info === "hydro" && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Rajdhani",
                  fontWeight: 600,
                  fontSize: "48px",
                  color: "#FFFFFF",
                }}
              >
                Hydrosphere
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Rajdhani",
                  fontWeight: 500,
                  fontSize: "26px",
                  color: "#FFFFFF",
                  textTransform: "uppercase",
                }}
              >
                Water Pollution
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Rajdhani",
                  fontWeight: 500,
                  fontSize: "20px",
                  color: "#FFFFFF",
                  textAlign: "center",
                  width: "80%",
                }}
              >
                Hydrosphere protocols involve monitoring water quality,
                including parameters like pH, temperature, salinity, dissolved
                oxygen, and turbidity, as well as observing water bodies’
                dynamics. These measurements help understand the health of
                aquatic ecosystems and the impact of human activities on water
                resources...{" "}
                <Button sx={{ color: "yellow" }} onClick={handleClickOpen}>
                  Game DATA
                </Button>
              </Typography>
            </Box>
          )}
          {info === "atmo" && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Rajdhani",
                  fontWeight: 600,
                  fontSize: "48px",
                  color: "#FFFFFF",
                }}
              >
                Atmosphere
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Rajdhani",
                  fontWeight: 500,
                  fontSize: "26px",
                  color: "#FFFFFF",
                  textTransform: "uppercase",
                }}
              >
                Heat Waves
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Rajdhani",
                  fontWeight: 500,
                  fontSize: "20px",
                  color: "#FFFFFF",
                  textAlign: "center",
                  width: "80%",
                }}
              >
                Atmosphere protocols focus on observing and measuring weather
                conditions such as temperature, humidity, cloud cover,
                precipitation, and air quality, helping students and researchers
                understand local weather patterns and contribute to global
                climate monitoring...
                <Button sx={{ color: "yellow" }} onClick={handleClickOpen}>
                  Game DATA
                </Button>
              </Typography>
              <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
              >
                <AppBar sx={{ position: "relative" }}>
                  <Toolbar>
                    <IconButton
                      edge="start"
                      color="inherit"
                      onClick={handleClose}
                      aria-label="close"
                    >
                      <CloseIcon />
                    </IconButton>
                    <Typography
                      sx={{ ml: 2, flex: 1 }}
                      variant="h6"
                      component="div"
                    >
                      Game Data
                    </Typography>
                    <Button autoFocus color="inherit" onClick={handleClose}>
                      Next
                    </Button>
                  </Toolbar>
                </AppBar>
                <Box className="nasaData" sx={{ height: "100vh" }}>
                  <Typography
                    sx={{
                      textAlign: "center",
                      position: "relative",
                      top: "10%",
                      color: "white",
                      fontSize: "20px",
                    }}
                  >
                    Full challenge statement details and resources will become
                    available on September 12.
                  </Typography>
                </Box>
              </Dialog>
            </Box>
          )}
          {info === "bio" && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Rajdhani",
                  fontWeight: 600,
                  fontSize: "48px",
                  color: "#FFFFFF",
                }}
              >
                Biosphere
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Rajdhani",
                  fontWeight: 500,
                  fontSize: "26px",
                  color: "#FFFFFF",
                  textTransform: "uppercase",
                }}
              >
                Urbanization
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Rajdhani",
                  fontWeight: 500,
                  fontSize: "20px",
                  color: "#FFFFFF",
                  textAlign: "center",
                  width: "80%",
                }}
              >
                Biosphere protocols focus on monitoring and studying
                biodiversity, plant growth, land cover, and the relationships
                between living organisms and their habitats to better understand
                environmental changes and sustainability...{" "}
                <Button sx={{ color: "yellow" }} onClick={handleClickOpen}>
                  Game DATA
                </Button>
              </Typography>
            </Box>
          )}
          <Box sx={{ display: "flex", gap: "30px" }}>
            {topicData.map((item) => (
              <Box
                key={item.title}
                component="div"
                sx={{ position: "relative", width: "200px" }}
              >
                <Box
                  component="img"
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: "170px",
                  }}
                  src={item.img}
                  draggable
                />
                <Box
                  component="div"
                  sx={{
                    background: "white",
                    height: "40%",
                    width: "100%",
                    position: "absolute",
                    bottom: 0,
                    opacity: 0,
                    "&:hover": {
                      opacity: 1,
                    },
                  }}
                >
                  <Link to={item.link}>
                    <Typography
                      component="h4"
                      sx={{
                        position: "relative",
                        top: "30%",
                        textAlign: "center",
                        fontFamily: "Rajdhani",
                        fontSize: "18px",
                        fontWeight: 600,
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Link>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default GameInfo;
