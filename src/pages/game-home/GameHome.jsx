import { Box, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';
import SelectCharacter from "../../components/character/SelectCharacter";
import Navbar from "../../components/navbar/Navbar";
import Topic from "../../images/topic.png";
import War from "../../images/war-stories.png";
import "./style.css";

const topicData = [
  { img: Topic, title: "URBANIZATION" },
  { img: Topic, title: "WATER POlLUTION" },
  { img: Topic, title: "HEAT WAVES" },
  { img: Topic, title: "FLOODING" },
];

const GameHome = () => {
  return (
    <Box
      className="gamePage"
      sx={{
        width: "100%",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          background: "black",
          height: "100%",
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          opacity: "0.3",
        }}
      ></Box>
      <Navbar />
      <Box sx={{ display: "flex", position: "relative", zIndex: "100" }}>
        {/* Left side*/}
        <Box sx={{ width: "100%" }}>
          <List
            sx={{ width: "100%", color: "white" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton>
              <ListItemIcon>
                <CircleIcon sx={{color: "white"}} />
              </ListItemIcon>
              <ListItemText primary="BATTLE FIELD" />
            </ListItemButton>
          </List>
        </Box>
        {/* Game Info */}
        <Box sx={{ width: "100%" }}>
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                flexGrow: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  sx={{ width: "70px", height: "80px" }}
                  src={War}
                />
                <Typography
                  sx={{
                    fontFamily: "Rajdhani",
                    fontWeight: 600,
                    fontSize: "48px",
                    color: "#FFFFFF",
                  }}
                >
                  WAR STORIES
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
                  under no flag
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
                  1942: Canoe ashore 500 miles behind enemy lines as one of the
                  first volunteers of the newly formed Special Boat Section.
                  Bring explosives, dirty tricks and black humour to bear on the
                  German Luftwaffe.
                </Typography>
              </Box>
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
                        height: "100%",
                      }}
                      src={item.img}
                    />
                    <Box
                      component="div"
                      sx={{
                        background: "white",
                        height: "50%",
                        width: "100%",
                        position: "absolute",
                        bottom: 0,
                        opacity: 0,
                        "&:hover": {
                          opacity: 1,
                        },
                      }}
                    >
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
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
              }}
            >
              <SelectCharacter />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default GameHome;
