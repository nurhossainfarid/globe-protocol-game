import CssBaseline from "@mui/material/CssBaseline";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div
    >
      <CssBaseline />
      <Outlet />
    </div>
  );
};

export default MainLayout;
