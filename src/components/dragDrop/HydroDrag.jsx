import { Box } from "@mui/material";
import { useDrag } from "react-dnd";

const HydroDrag = ({ fish, top, left }) => {
  const { id, url, name } = fish;
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <Box
      ref={drag}
      component="img"
      src={url}
      sx={{
        width: "100px",
        height: "100px",
        position: "absolute",
        top: { top },
        left: { left },
      }}
    />
  );
};

export default HydroDrag;
