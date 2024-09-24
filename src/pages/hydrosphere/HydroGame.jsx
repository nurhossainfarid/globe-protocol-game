import { Box, Typography } from "@mui/material";
import { useState } from "react";
import HydroDrag from "../../components/dragDrop/HydroDrag";
import HydroDrop from "../../components/dragDrop/HydroDrop";
import Award from "../../components/gamePhase/Award";
import BackButton from "../../components/layouts/BackButton";
import BigWingButton from "../../components/layouts/BigWingButton";

const FishList = [
  {
    id: 1,
    url: "https://i.ibb.co.com/m568bMf/tortoise.gif",
    name: "Tortoise",
  },
  {
    id: 2,
    url: "https://i.ibb.co.com/BrVvFxR/redfish.gif",
    name: "Red Fish",
  },
  {
    id: 3,
    url: "https://i.ibb.co.com/m568bMf/tortoise.gif",
    name: "Tortoise",
  },
  {
    id: 4,
    url: "https://i.ibb.co.com/m568bMf/tortoise.gif",
    name: "Tortoise",
  },
  {
    id: 5,
    url: "https://i.ibb.co.com/m568bMf/tortoise.gif",
    name: "Tortoise",
  },
  {
    id: 6,
    url: "https://i.ibb.co.com/m568bMf/tortoise.gif",
    name: "Tortoise",
  },
  {
    id: 7,
    url: "https://i.ibb.co.com/m568bMf/tortoise.gif",
    name: "Tortoise",
  },
  {
    id: 8,
    url: "https://i.ibb.co.com/m568bMf/tortoise.gif",
    name: "Tortoise",
  },
  {
    id: 9,
    url: "https://i.ibb.co.com/m568bMf/tortoise.gif",
    name: "Tortoise",
  },
  {
    id: 10,
    url: "https://i.ibb.co.com/m568bMf/tortoise.gif",
    name: "Tortoise",
  },
  {
    id: 11,
    url: "https://i.ibb.co.com/m568bMf/tortoise.gif",
    name: "Tortoise",
  },
];

const HydroGame = () => {
  const [board, setBoard] = useState([]);
  return (
    <Box
      component="div"
      sx={{
        height: "100vh",
        position: "relative",
        top: 0,
        padding: '20px',
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundImage: `url(${"https://i.ibb.co.com/tCrZSfR/pond-bg.png"})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box>
        <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "start",}}>
          <Box sx={{display: "flex", flexDirection: "column", alignItems: "start", marginTop: "-20px"}}>
            <BackButton link="/hydrosphere" width="100px" height="100px" marginLeft="-20px"/>
            <BigWingButton link="/hydrosphere" height="50px" marginTop='-20px' />
          </Box>
          <Box sx={{ }}>
            <Award />
          </Box>
        </Box>
        {/* Pond */}
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "-20px",
          }}
        >
          {/* Quarantine pond */}
          <Box>
            <Typography
              sx={{ fontFamily: "Jaro", size: "36px", textAlign: "center" }}
            >
              QUARANTINE POND
            </Typography>
            <Box sx={{ position: "relative" }}>
              <Box
                sx={{ width: "720px", height: "400px" }}
                component="img"
                src="https://i.ibb.co.com/rfL9mmq/quarantine-pond.png"
              />
              <Box
                component="div"
                sx={{
                  background: "#5A553B",
                  width: "720px",
                  height: "80px",
                  borderRadius: "20px",
                  padding: "2.5px 0px",
                }}
              >
                <Box
                  sx={{
                    background: "white",
                    width: "710px",
                    height: "75px",
                    borderRadius: "20px",
                    margin: "0 auto",
                  }}
                >
                  <Box
                    component="div"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Jaro",
                        fontSize: "24px",
                        color: "#5A553B",
                      }}
                    >
                      POND TYPE :{" "}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        gap: "20px",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        component="div"
                        sx={{
                          display: "flex",
                          gap: "5px",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "Jaro",
                            fontSize: "20px",
                            color: "#5A553B",
                          }}
                        >
                          PH:
                        </Typography>
                        <Typography
                          sx={{
                            background:
                              "linear-gradient(182.94deg, rgba(140, 124, 42, 0.71) 4.7%, rgba(255, 255, 255, 0.8637) 38.26%, rgba(255, 255, 255, 0.826) 71.81%, rgba(140, 124, 42, 0.71) 105.36%)",
                            padding: "1px 30px",
                          }}
                        >
                          7.5
                        </Typography>
                      </Box>
                      <Box
                        component="div"
                        sx={{
                          display: "flex",
                          gap: "5px",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "Jaro",
                            fontSize: "20px",
                            color: "#5A553B",
                          }}
                        >
                          Temperature:
                        </Typography>
                        <Typography
                          sx={{
                            background:
                              "linear-gradient(182.94deg, rgba(140, 124, 42, 0.71) 4.7%, rgba(255, 255, 255, 0.8637) 38.26%, rgba(255, 255, 255, 0.826) 71.81%, rgba(140, 124, 42, 0.71) 105.36%)",
                            padding: "1px 30px",
                          }}
                        >
                          7.5
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              {/* Fishes in pond */}
              <Box component="div" sx={{}}>
                {/* Tortoise */}
                <HydroDrag fish={FishList[0]} top={170} left={520} />
                {/* Red Fish */}
                <HydroDrag fish={FishList[1]} top={220} left={125} />
                <HydroDrag fish={FishList[2]} top={230} left={250} />
                <HydroDrag fish={FishList[3]} top={220} left={400} />
                <HydroDrag fish={FishList[4]} top={230} left={500} />
                <HydroDrag fish={FishList[5]} top={270} left={200} />
                <HydroDrag fish={FishList[6]} top={280} left={330} />
                <HydroDrag fish={FishList[7]} top={300} left={450} />
              </Box>
            </Box>
          </Box>
          <Box>
            <Typography
              sx={{ fontFamily: "Jaro", size: "36px", textAlign: "center" }}
            >
              QUARANTINE POND
            </Typography>
            <Box sx={{}}>
              <Box
                component="div"
                src=""
                sx={{
                  width: "720px",
                  height: "500px",
                  backgroundImage: `url(${"https://i.ibb.co.com/Gp2h3km/optimal-pond.png"})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderLeft: "5px solid #544E3B",
                  borderRight: "5px solid #544E3B",
                  borderRadius: "15px",
                }}
              >
                <HydroDrop
                  FishList={FishList}
                  board={board}
                  setBoard={setBoard}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HydroGame;
