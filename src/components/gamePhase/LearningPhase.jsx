import { Box, Dialog, DialogActions, Slide, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { forwardRef, useEffect, useState } from "react";
import Slider from "react-slick";
import './style.css'

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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
      TransitionComponent={Transition}
      fullScreen={fullScreen}
      open={open}
      aria-labelledby="responsive-dialog-title"
      sx={{
        "& .css-c09uja-MuiPaper-root-MuiDialog-paper": {
          backgroundColor: "rgba(0, 0, 0, 0)",
          borderRadius: "100%",
          height: "400px",
        },
      }}
    >
      <Box
        component="div"
        className="slider-container"
        sx={{
          borderRadius: "10px",
          margin: "5px",
          backgroundImage: `url(${"https://i.ibb.co.com/8KmFv69/Learning-phase-bg.png"})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          width: "650px",
          height: "500px",
        }}
      >
        <Box
          component="div"
          sx={{
            width: "500px",
            margin: "0px auto",
            marginTop: "60px",
            paddingRight: '5px'
          }}
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
                      gap: "5px",
                      marginTop: "50px",
                    }}
                  >
                    <Box component="img" src={tree.url} sx={{ width: imgW }} />
                    {/* Plant Info */}
                    <Box component="div">
                      <Typography variant="h4" sx={{ fontFamily: "Jaro" }}>
                        {tree.name}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "1px",
                        }}
                      >
                        <Typography sx={{ fontFamily: "Jaro" }}>
                          {firstData} {Object.values(tree)[3]}
                        </Typography>
                        <Typography sx={{ fontFamily: "Jaro" }}>
                          {secondData} {Object.values(tree)[4]}
                        </Typography>
                        <Typography sx={{ fontFamily: "Jaro" }}>
                          {thirdData} {Object.values(tree)[5]}
                        </Typography>
                        <Typography sx={{ fontFamily: "Jaro" }}>
                          {fourthData} {Object.values(tree)[6]}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </Slider>
          <DialogActions
            sx={{ position: "relative", bottom: "4vh" }}
            onClick={() => handleGameStart(true)}
          >
            <Box
              component="img"
              src="https://i.ibb.co.com/SNfZSsn/playBtn.png"
              onClick={handleClose}
              sx={{ width: "200px", margin: "0 auto" }}
            />
          </DialogActions>
        </Box>
      </Box>
    </Dialog>
  );
};

export default LearningPhase;
