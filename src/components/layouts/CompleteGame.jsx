import { useTheme } from "@emotion/react";
import { Box, Dialog, Slide, Typography } from "@mui/material";
import { forwardRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { increment } from "../../store/features/trophy/trophySlice";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CompleteGame = ({ trophy, open, handleClose, next, replay }) => {
  const dispatch = useDispatch();

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      sx={{
        "& .css-c09uja-MuiPaper-root-MuiDialog-paper": {
          backgroundColor: "rgba(0, 0, 0, 0)",
          borderRadius: "100%",
          height: "350px",
        },
      }}
    >
      <Box component="div" sx={{ position: "relative", marginLeft: "-20px" }}>
        <Box
          component="img"
          src="https://i.ibb.co.com/Vv0BdMJ/Complete-bg.png"
          sx={{ width: "700px" }}
        />
        <Box
          component="div"
          sx={{
            position: "absolute",
            bottom: "36px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            left: "125px",
          }}
        >
          {/* Trophy */}
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
              sx={{ height: "60px" }}
            />
            <Typography
              sx={{
                fontFamily: "Jaro",
                color: "#228AED",
                fontSize: "40px",
              }}
            >
              {trophy}
            </Typography>
          </Box>
          {/* Button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
              marginTop: "10px",
            }}
          >
            <Link to="/home">
              <Box
                component="img"
                src="https://i.ibb.co.com/sJM7L32/home-button.png"
                sx={{ width: "150px" }}
              />
            </Link>
            <Link to={next}>
              <Box
                component="img"
                src="https://i.ibb.co.com/6R71w4J/next-button.png"
                sx={{ width: "150px" }}
              />
            </Link>
            <Link to={replay}>
              <Box
                component="img"
                src="https://i.ibb.co.com/zFxxNKF/replay-button.png"
                sx={{ width: "150px" }}
              />
            </Link>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};

export default CompleteGame;
