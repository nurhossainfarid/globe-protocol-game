import { Box, Button, Dialog, DialogActions, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect, useState } from "react";
import Slider from "react-slick";

const LearningPhase = ({
  Datalist,
  handleGameStart,
  imgW,
  firstData,
  secondData,
  thirdData,
  fourthData,
}) => {
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
          {Datalist?.map((tree) => (
            <Box component="div" key={tree.id}>
              <Box
                component="div"
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <Box
                  component="div"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "16px",
                    marginTop: "10px",
                  }}
                >
                  <Box component="img" src={tree.url} sx={{ width: imgW }} />
                  {/* Plant Info */}
                  <Box component="div">
                    <Typography
                      variant="h4"
                      sx={{ fontFamily: "Jaro", color: "white" }}
                    >
                      {tree.name}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1px",
                      }}
                    >
                      <Typography sx={{ fontFamily: "Jaro", color: "white" }}>
                        {firstData} {Object.values(tree)[3]}
                      </Typography>
                      <Typography sx={{ fontFamily: "Jaro", color: "white" }}>
                        {secondData} {Object.values(tree)[4]}
                      </Typography>
                      <Typography sx={{ fontFamily: "Jaro", color: "white" }}>
                        {thirdData} {Object.values(tree)[5]}
                      </Typography>
                      <Typography sx={{ fontFamily: "Jaro", color: "white" }}>
                        {fourthData} {Object.values(tree)[6]}
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
            onClick={() => handleGameStart(true)}
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
  );
};

export default LearningPhase;
