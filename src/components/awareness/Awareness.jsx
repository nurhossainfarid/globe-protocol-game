import { Button, DialogActions } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { useTheme } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import { forwardRef, useState } from "react";
import Slider from "react-slick";
import Trophy from "../gamePhase/Trophy";
import BackButton from "../layouts/BackButton";
import HomeButton from "../layouts/HomeButton";
import Side from "./Side";
import TabPanel from "./TabPanel";

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Awareness = ({
  prevPage,
  leftData,
  awarenessData,
  resourceLink,
  rightData,
}) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let settings = {
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundImage: `url('https://i.ibb.co.com/zPQm0HL/Pedosphere-AWERNESS.png')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        padding: "0px 16px",
      }}
    >
      {/* Awareness nav */}
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <BackButton link={prevPage} width="80px" height="80px" />
        <Box
          component="div"
          sx={{
            display: "flex",
            gap: "5px",
            justifyContent: "center",
            alignItems: "start",
          }}
        >
          <Trophy />
          <HomeButton link="/home" width="80px" height="80px" />
        </Box>
      </Box>
      {/* Awareness part */}
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "60px",
          marginRight: "60px",
          marginTop: "-50px",
        }}
      >
        {/* Text Part */}
        <Box component="div">
          <Typography
            sx={{
              fontFamily: "Jaro",
              textAlign: "center",
              color: "#5A553B",
              fontSize: "36px",
            }}
          >
            AWARENESS  ODYSSEY
          </Typography>
        </Box>
        {/* Resource */}
        <Box component="div" sx={{ display: "flex", gap: "20px" }}>
          {/* Left Side */}
          <Box component="div">
            <Side sideData={leftData} />
          </Box>
          {/* central */}
          <Box
            component="div"
            sx={{
              flexGrow: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {/* Awareness Data */}
            <Box
              component="div"
              sx={{
                background: "#D3CFB6",
                padding: "10px",
                width: "100%",
                height: "370px",
                borderRadius: "5px",
              }}
            >
              <Box
                component="div"
                sx={{
                  background: "#F0F0F4",
                  padding: "10px",
                  width: "100%",
                  height: "100%",
                  borderRadius: "5px",
                  overflow: "auto",
                }}
              >
                <Box sx={{ bgcolor: "background.paper" }}>
                  <AppBar position="static">
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      indicatorColor="primary"
                      textColor="inherit"
                      variant="fullWidth"
                      aria-label="full width tabs example"
                      sx={{ backgroundColor: "#F0F0F4", color: "black" }}
                    >
                      {awarenessData?.map((data) => (
                        <Tab
                          key={data.id}
                          label={data.title}
                          {...a11yProps(data.id)}
                        />
                      ))}
                    </Tabs>
                  </AppBar>
                  {awarenessData?.map((data) => (
                    <TabPanel
                      key={data.id}
                      value={value}
                      index={data.id}
                      dir={theme.direction}
                    >
                      <Box>
                        <Box>
                          <Typography variant="h5">Why it occurs:</Typography>
                          <Typography>{data.why}</Typography>
                        </Box>
                        <Box>
                          <Typography variant="h5">How it occurs:</Typography>
                          <Typography>{data.how}</Typography>
                        </Box>
                        <Box>
                          <Typography variant="h5">What we can do:</Typography>
                          <Typography>{data.what}</Typography>
                        </Box>
                      </Box>
                    </TabPanel>
                  ))}
                </Box>
              </Box>
            </Box>
            <Box
              component="div"
              sx={{
                background: "#D3CFB6",
                padding: "2px 5px",
                width: "100%",
                height: "130px",
                borderRadius: "5px",
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "24px",
                  fontFamily: "Jaro",
                  color: "#5A553B",
                }}
              >
                Resource Links
              </Typography>
              <Box
                component="div"
                className="slider-container"
                sx={{ width: "680px", margin: "0 auto" }}
              >
                <Slider {...settings}>
                  {resourceLink?.map((data) => (
                    <Box key={data.id} sx={{ height: "80px" }}>
                      <Box
                        component="iframe"
                        width="100%"
                        height="100%"
                        src={data.url}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
                        web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                        sx={{ position: "relative" }}
                      />
                    </Box>
                  ))}
                </Slider>
              </Box>
            </Box>
          </Box>
          {/* Right Side */}
          <Box component="div" sx={{}}>
            <Side sideData={rightData} />
          </Box>
        </Box>
        {/*Claim Trophy */}
        <Box
          sx={{ display: "flex", justifyContent: "center" }}
          onClick={handleClickOpen}
        >
          <Box
            sx={{
              width: "200px",
              position: "absolute",
              bottom: "0px",
              margin: "0 auto",
            }}
            component="img"
            src="https://i.ibb.co.com/m8MkqrB/claim.png"
          />
        </Box>
        {/* Dialog */}
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
          sx={{}}
        >
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              background: "#FFFEFF",
              gap: "10px",
              borderRadius: "10px",
            }}
          >
            <Box
              component="img"
              src="https://i.ibb.co.com/TRwxXhr/complete.png"
              sx={{
                width: "300px",
                marginTop: "-100px",
                position: "relative",
                left: "5px",
              }}
            />
            <DialogTitle
              sx={{
                backgroundColor: "#F78A3B",
                padding: "2px 10px",
                fontFamily: "Jaro",
                borderRadius: "5px",
                fontSize: "24px",
                color: "#FFFFFF",
              }}
            >
              REWARD
            </DialogTitle>
            <DialogContent>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Box
                  component="img"
                  src="https://i.ibb.co.com/ggJBB9Y/icn-trophy-512-3.png"
                  sx={{ height: "70px" }}
                />
                <Typography
                  sx={{
                    fontFamily: "Jaro",
                    color: "#228AED",
                    fontSize: "40px",
                  }}
                >
                  1000
                </Typography>
              </Box>
            </DialogContent>
            <DialogActions sx={{marginTop: '-20px'}}>
              <Button variant="contained" onClick={handleClose}>
                Ok
              </Button>
            </DialogActions>
          </Box>
        </Dialog>
      </Box>
    </Box>
  );
};

export default Awareness;
