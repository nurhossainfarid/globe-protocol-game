import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  Slide,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { forwardRef } from "react";
import { useDispatch } from "react-redux";
import { increment } from "../../store/features/trophy/trophySlice";
import "./style.css";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ErrorDialog = ({
  data,
  open,
  handleCloseError,
  handleClickPop,
  comment
}) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

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
          height: "0px",
          position: "relative",
          bottom: "200px",
          borderTop: "0px",
        },
      }}
    >
      <Box
        component="div"
        className="slider-container"
        sx={{
          margin: "5px",
          backgroundImage: `url(${"https://i.ibb.co.com/4fN1f73/wrong-bg.png"})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          width: "700px",
          padding: "20px 0px",
        }}
      >
        <Box
          component="div"
          sx={{
            width: "500px",
            margin: "0px auto",
            marginTop: "60px",
            paddingRight: "5px",
          }}
        >
          <DialogContent
            dividers
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box component="img" src={data.url} sx={{ width: "150px" }} />
              <Typography sx={{ fontFamily: "Poppins", fontSize: "18px" }}>
               {comment}
              </Typography>
            </Box>
            <DialogActions>
              <Box onClick={() => dispatch(increment(10))}>
                <Box
                  component="img"
                  src="https://i.ibb.co.com/7twQBRW/Learn-Again-Btn.png"
                  onClick={handleClickPop}
                  sx={{ width: "180px", margin: "0 auto" }}
                />
              </Box>
              <Box
                component="img"
                src="https://i.ibb.co.com/Ydh99zp/RetryBtn.png"
                onClick={handleCloseError}
                sx={{ width: "180px", margin: "0 auto" }}
              />
            </DialogActions>
          </DialogContent>
        </Box>
      </Box>
    </Dialog>
  );
};

export default ErrorDialog;
