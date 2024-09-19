import { Box } from "@mui/material";
import { useState } from "react";
import { DndProvider, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Drag from "../../components/Drag";
import Drop from "../../components/Drop";

const picList = [
  {
    id: 1,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ50r_Eam-xGkZ2dFrZ5h7zOHP90YLxPPYxrw&s",
  },
  {
    id: 2,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYakvWBTAm46iOed1sf6RiXS-graXcmOQYNQ&s",
  },
  {
    id: 3,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI7Vi4iAYY13I5D5tNvFUW74kT7bODti9uYQ&s",
  },
];

const DragDrop = () => {
  const [board, setBoard] = useState([]);
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        {/* border */}
        <Drop pictureList={picList} board={board} setBoard={setBoard}/>
        {/* images */}
        <Box component="div" sx={{ display: "flex", gap: "5px" }}>
          {picList.map((pic) => {
            return <Drag key={pic.id} id={pic.id} url={pic.url} />;
          })}
        </Box>
      </div>
    </DndProvider>
  );
};

export default DragDrop;
