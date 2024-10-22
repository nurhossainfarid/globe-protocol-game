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

const SuccessDialog = ({
  data,
  open,
  handleCloseSuccess,
  firstData,
  secondData,
  thirdData,
  fourthData,
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
          bottom: "150px",
          borderTop: "0px",
        },
      }}
    >
      <Box
        component="div"
        className="slider-container"
        sx={{
          margin: "5px",
          backgroundImage: `url(${"https://i.ibb.co.com/pZmhYXs/correct-bg.png"})`,
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
          <Box component="div" sx={{ background: "green" }}></Box>
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
              <Box component="img" src={data?.url} sx={{ width: "150px" }} />
              <Box component="div">
                <Typography variant="h4" sx={{ fontFamily: "Jaro" }}>
                  {data?.name}
                </Typography>
                <Box sx={{}}>
                  <Typography sx={{ fontFamily: "Jaro" }}>
                    {firstData} {Object.values(data)[3]}
                  </Typography>
                  <Typography sx={{ fontFamily: "Jaro" }}>
                    {secondData} {Object.values(data)[4]}
                  </Typography>
                  <Typography sx={{ fontFamily: "Jaro" }}>
                    {thirdData} {Object.values(data)[5]}
                  </Typography>
                  <Typography sx={{ fontFamily: "Jaro" }}>
                    {fourthData} {Object.values(data)[6]}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <DialogActions onClick={handleCloseSuccess}>
              <Box
                component="img"
                src="https://i.ibb.co.com/NWLBj17/claim-Trophy-Btn.png"
                onClick={() => dispatch(increment(50))}
                sx={{ width: "180px", margin: "0 auto" }}
              />
            </DialogActions>
          </DialogContent>
        </Box>
      </Box>
    </Dialog>
  );
};

export default SuccessDialog;
