import { Box, Popover } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import { loseHealth } from "../../../store/features/health/healthSlice";
import { decrement } from "../../../store/features/trophy/trophySlice";
import ErrorDialog from "../../gamePhase/ErrorDialog";
import SuccessDialog from "../../gamePhase/SuccessDialog";

const PurifierDrop = ({
  PurifierList,
  SolarList,
  board,
  setBoard,
  handleStopPollution,
}) => {
  const dropList = PurifierList.concat(SolarList);
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
    comment: "",
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
    const list = dropList.filter((fish) => id === fish.id);
    if (
      list[0].name === "VERTO Air Purification" ||
      list[0].name === "FU-888SV Air Purification" ||
      list[0].name === "Ground Mounted Solar" ||
      list[0].name === "Mirror Solar"
    ) {
      setBoard((board) => [...board, list[0]]);
      setData({
        id: list[0].id,
        url: list[0].url,
        name: list[0].name,
        comment: list[0].comment,
      });
      setOpenSuccess(true);
    } else {
      dispatch(decrement(20));
      dispatch(loseHealth());
      setData({
        id: list[0].id,
        url: list[0].url,
        name: list[0].name,
        comment: list[0].comment,
      });
      setOpenError(true);
    }
    if (
      list[0].name === "VERTO Air Purification" ||
      list[0].name === "FU-888SV Air Purification"
    ) {
      handleStopPollution(true);
    }
  };

  return (
    <div>
      {/* popover about purifier */}
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
          {dropList?.map((fish) => (
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
        firstData={"Details: "}
      />
      {/* Error Dialog */}
      <ErrorDialog
        data={data}
        open={openError}
        handleCloseError={handleCloseError}
        handleClickPop={handleClickPop}
        comment={data.comment}
      />

      <Box
        ref={drop}
        component="div"
        sx={{
          width: "800px",
          height: "200px",
          padding: "20px",
          margin: "0 auto",
          position: "absolute",
          top: 450,
          left: 300,
        }}
      >
        {board?.map((item) => (
          <Box
            component="img"
            key={item.id}
            src={item.url}
            width="150px"
            height="150px"
          />
        ))}
      </Box>
    </div>
  );
};

export default PurifierDrop;
