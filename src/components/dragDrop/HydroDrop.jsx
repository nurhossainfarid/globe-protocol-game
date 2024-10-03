import { Box, Popover } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import { loseHealth } from "../../store/features/health/healthSlice";
import { decrement } from "../../store/features/trophy/trophySlice";
import ErrorDialog from "../gamePhase/ErrorDialog";
import SuccessDialog from "../gamePhase/SuccessDialog";
import "./style.css";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const HydroDrop = ({ FishList, board, setBoard }) => {
  const dispatch = useDispatch();
  const [openError, setOpenError] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);

  const handleCloseError = () => {
    setOpenError(false);
  };
  const handleCloseSuccess = () => {
    setOpenSuccess(false);
  };
  const [data, setData] = useState({
    id: "",
    url: "",
    name: "",
  });
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClickPop = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePop = () => {
    setAnchorEl(null);
  };

  const openPop = Boolean(anchorEl);
  const id = openPop ? "simple-popover" : undefined;
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id) => {
    const list = FishList.filter((fish) => id === fish.id);
    console.log(list);
    if (
      list[0].name === "Tortoise" ||
      list[0].name === "Jelly Fish" ||
      list[0].name === "Sea Horse" ||
      list[0].name === "Crab"
    ) {
      setBoard((board) => [...board, list[0]]);
      setData({
        id: list[0].id,
        url: list[0].url,
        name: list[0].name,
        Salinity: list[0].Salinity,
        Oxygen: list[0].Oxygen,
        WaterType: list[0].WaterType,
        Available: list[0].Available,
      });
      setOpenSuccess(true);
    } else {
      dispatch(decrement(20));
      dispatch(loseHealth());
      setData({
        id: list[0].id,
        url: list[0].url,
        name: list[0].name,
      });
      setOpenError(true);
    }
  };

  return (
    <div>
      {/* popover about fish */}
      <Popover
        id={id}
        open={openPop}
        anchorEl={anchorEl}
        onClose={handleClosePop}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        sx={{ height: "400px" }}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "20px 10px",
          }}
        >
          {FishList?.map((fish) => (
            <Box
              component="div"
              key={fish.id}
              sx={{
                display: "flex",
                gap: "5px",
                alignItems: "center",
                width: "260px",
                background: "white",
                borderRadius: "10px",
              }}
            >
              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  src={fish.url}
                  sx={{ width: "100px", height: "100px" }}
                />
                <Typography
                  sx={{
                    fontFamily: "Jaro",
                    fontSize: "16px",
                    color: "#5A553B",
                  }}
                >
                  {fish.name}
                </Typography>
              </Box>
              <Box
                component="div"
                sx={{
                  border: "1px solid #5A553B",
                  padding: "5px 10px",
                  borderRadius: "10px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Jaro",
                    fontSize: "16px",
                    color: "#5A553B",
                  }}
                >
                  Requirements
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Jaro",
                    fontSize: "16px",
                    color: "#5A553B",
                  }}
                >
                  Salinity: 35 - 45 ppt
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Jaro",
                    fontSize: "16px",
                    color: "#5A553B",
                  }}
                >
                  Oxygen: 5 - 9 mg/L
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Popover>
      {/* Success Dialog */}
      <SuccessDialog
        data={data}
        open={openSuccess}
        handleCloseSuccess={handleCloseSuccess}
        firstData={"Ph:"}
        secondData={"Temperature:"}
        thirdData={"SoilType:"}
        fourthData={"Available:"}
      />
      {/* Error Dialog */}
      <ErrorDialog
        data={data}
        open={openError}
        handleCloseError={handleCloseError}
        handleClickPop={handleClickPop}
        comment={`${data.name} is not a perfect fish for this water. This fish is
perfect for Salinity: ${data.Salinity}, Oxygen: ${data.Oxygen} and ${data.WaterType} this types of water.`}
      />

      <Box
        ref={drop}
        component="div"
        sx={{
          width: "350px",
          height: "200px",
          padding: "20px",
          margin: "0 auto",
          position: "relative",
          top: "240px",
        }}
      >
        {board?.map((item) => (
          <Box
            component="img"
            key={item.id}
            src={item.url}
            width="80px"
            height="80px"
          />
        ))}
      </Box>
    </div>
  );
};

export default HydroDrop;
