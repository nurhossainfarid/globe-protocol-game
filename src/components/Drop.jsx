import { Box } from "@mui/material";
import { useState } from "react";
import { useDrop } from "react-dnd";

const Drop = ({ pictureList, board, setBoard }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id) => {
    const list = pictureList.filter((picture) => id === picture.id);
    setBoard((board) => [...board, list[0]]);
  };
  return (
    <div>
      <Box
        ref={drop}
        component="div"
        sx={{
          width: "150px",
          height: "350px",
          border: "2px solid black",
          padding: "20px",
        }}
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

export default Drop;
