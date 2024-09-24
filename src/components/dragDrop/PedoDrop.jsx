import CloseIcon from "@mui/icons-material/Close";
import { Box, Popover } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useDrop } from "react-dnd";
import "./style.css";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const PedoDrop = ({
  TreeList,
  board,
  setBoard,
  handlePopoverClose,
  handlePopoverOpen,
}) => {
  const [open, setOpen] = useState(false);
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
  const handleClose = () => {
    setOpen(false);
  };
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id) => {
    const list = TreeList.filter((picture) => id === picture.id);
    if (
      list[0].name === "Strawberry" ||
      list[0].name === "Tomato" ||
      list[0].name === "Carrot" ||
      list[0].name === "Photato" ||
      list[0].name === "Garlic"
    ) {
      setBoard((board) => [...board, list[0]]);
    } else {
      setData({
        id: list[0].id,
        url: list[0].url,
        name: list[0].name,
      });
      setOpen(true);
    }
  };

  return (
    <div>
      {/* popover about tree */}
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
          {TreeList?.map((tree) => (
            <Box
              component="div"
              key={tree.id}
              sx={{
                display: "flex",
                gap: "5px",
                alignItems: "center",
                width: "250px",
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
                  src={tree.url}
                  sx={{ width: "100px", height: "100px" }}
                />
                <Typography
                  sx={{
                    fontFamily: "Jaro",
                    fontSize: "16px",
                    color: "#5A553B",
                  }}
                >
                  {tree.name}
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
                  pH: 7.5
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Jaro",
                    fontSize: "16px",
                    color: "#5A553B",
                  }}
                >
                  TMP: 75F
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Jaro",
                    fontSize: "16px",
                    color: "#5A553B",
                  }}
                >
                  MTR: 7.5{" "}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Popover>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={{}}
      >
        <Box component="div" sx={{ background: "#208ba2" }}>
          <DialogTitle
            sx={{
              m: 0,
              p: 2,
              textAlign: "center",
              color: "white",
              fontFamily: "Poppins",
              fontWeight: "800",
              fontSize: "24px",
            }}
            id="customized-dialog-title"
          >
            Opps...
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={(theme) => ({
              position: "absolute",
              right: 8,
              top: 8,
              color: "white",
            })}
          >
            <CloseIcon />
          </IconButton>
        </Box>
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
            <Typography gutterBottom>
              {data.name} is not a perfect tree for this soil. This tree is
              perfect for pH: 8, TMP: 80F, MTR: 8.
            </Typography>
          </Box>
          <DialogActions>
            <Button
              variant="contained"
              sx={{ background: "green" }}
              onClick={handleClickPop}
            >
              Learning Phase
            </Button>
            <Button
              variant="contained"
              sx={{ background: "red" }}
              onClick={handleClose}
            >
              Retry
            </Button>
          </DialogActions>
        </DialogContent>
      </BootstrapDialog>

      <Box
        ref={drop}
        component="div"
        sx={{
          width: "500px",
          height: "300px",
          padding: "20px",
          margin: "0 auto",
        }}
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        {board?.map((item) => (
          <Box
            component="img"
            key={item.id}
            src={item.url}
            width="100px"
            height="100px"
          />
        ))}
      </Box>
    </div>
  );
};

export default PedoDrop;
