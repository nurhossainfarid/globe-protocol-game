import CssBaseline from "@mui/material/CssBaseline";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <CssBaseline />
        <Outlet />
      </div>
    </DndProvider>
  );
};

export default MainLayout;
