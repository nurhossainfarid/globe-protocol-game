import { Box } from "@mui/material";
import { useDrag } from "react-dnd";

const Drag = ({ id, url }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div>
      <Box
        ref={drag}
        width="100px"
        height="100px"
        component="img"
        src={url}
        key={id}
        sx={{
          border: isDragging ? "5px solid pink" : "0px",
          display: isDragging ? "none" : "block",
        }}
      />
    </div>
  );
};

export default Drag;
