import { Box } from "@mui/material";
import { useDrag } from "react-dnd";

const PurifierDrag = ({ air }) => {
  const { id, url, name } = air;
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <Box
      component="div"
      sx={{
        background: "#cdd0c9",
        borderRadius: "10px",
        width: "90px",
        height: "90px",
      }}
    >
      <Box
        ref={drag}
        component="img"
        src={url}
        sx={{
          width: "100%",
          height: "100%",
          margin: "0 auto",
          cursor: "move",
        }}
      />
    </Box>
  );
};

export default PurifierDrag;
