import { Box } from "@mui/material";
import { useDrag } from "react-dnd";

const CloudDrag = ({ cloud }) => {
  const { id, url, name } = cloud;
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
        width: "150px",
        height: "80px",
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

export default CloudDrag;
