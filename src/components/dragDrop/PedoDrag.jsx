import { Box } from "@mui/material";
import { useDrag } from "react-dnd";

const PedoDrag = ({ tree }) => {
  const { id, url, name } = tree;
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    // <div>
    //   <Box
    //     ref={drag}
    //     width="100px"
    //     height="100px"
    //     component="img"
    //     src={url}
    //     key={id}
    //     sx={{
    //       border: isDragging ? "5px solid pink" : "0px",
    //       display: isDragging ? "none" : "block",
    //     }}
    //   />
    // </div>
    <Box component="div" sx={{ background: "white", borderRadius: "10px", width: "100px", height: "100px", }}>
      <Box
        ref={drag}
        component="img"
        src={url}
        sx={{ width: "100px", height: "100px", margin: "0 auto", cursor: "move" }}
      />
    </Box>
  );
};

export default PedoDrag;
