import { Box, Popover, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Nature from "../../video/videoplayback.mp4";
import "./style.css";
import Lottie from "lottie-react";
import Animation from '../../animation/Animation.json'

// const ProblemMap = () => {
  // const [anchorEl, setAnchorEl] = useState(null);

  // const handlePopoverOpen = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handlePopoverClose = () => {
  //   setAnchorEl(null);
  // };

//   const open = Boolean(anchorEl);
//   return (
//     <Box
//       className="mapPage"
//       sx={{
//         width: "100%",
//         height: "100vh",
//       }}
//     >
//       <Typography>Problem Map</Typography>
      // <Box
      //   aria-owns={open ? "mouse-over-popover" : undefined}
      //   aria-haspopup="true"
      //   onMouseEnter={handlePopoverOpen}
      //   onMouseLeave={handlePopoverClose}
      //   sx={{
      //     width: "250px",
      //     height: "200px",
      //     position: "absolute",
      //     top: 450,
      //     left: 250,
      //   }}
      // >
      //   <Lottie loop={true} animationData={Animation}></Lottie>
      // </Box>
      // <Popover
      //   id="mouse-over-popover"
      //   sx={{ pointerEvents: "none", }}
      //   open={open}
      //   anchorEl={anchorEl}
      //   anchorOrigin={{
      //     vertical: "top",
      //     horizontal: "right",
      //   }}
      //   transformOrigin={{
      //     vertical: "top",
      //     horizontal: "left",
      //   }}
      //   onClose={handlePopoverClose}
      //   disableRestoreFocus
      // >
      //   <Typography sx={{ p: 1, width: "300px", }} >
      //     Create retention and detention ponds in urban areas to temporarily
      //     store excess rainwater and release it slowly, preventing overwhelming
      //     the drainage systems
      //   </Typography>
      // </Popover>
//     </Box>
//   );
// };

const ProblemMap = () => {
  const [show, setShow] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, [10000])
  },[])

  return (
    <Box sx={{ width: "100%", display: "flex", position: "relative" }}>
      <Box
        component="video"
        src={Nature}
        autoPlay
        muted
        sx={{
          width: "100%",
          height: "100vh",
          position: "absolute",
          top: "0",
          zIndex: "-1",
          objectFit: "cover",
        }}
      />
      {show && (
        <Box
          className="mapProblem"
          component="div"
          sx={{ width: "100%", zIndex: 1 }}
        >
           <Box
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        sx={{
          width: "250px",
          height: "200px",
          position: "absolute",
          top: 450,
          left: 250,
        }}
      >
        <Lottie loop={true} animationData={Animation}></Lottie>
      </Box>
      <Popover
        id="mouse-over-popover"
        sx={{ pointerEvents: "none", }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1, width: "300px", }} >
          Create retention and detention ponds in urban areas to temporarily
          store excess rainwater and release it slowly, preventing overwhelming
          the drainage systems
        </Typography>
      </Popover>
        </Box>
      )}
    </Box>
  );
};

export default ProblemMap;
