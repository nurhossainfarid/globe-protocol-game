import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LandingPage from "../pages/landing-page/LandingPage";
import Pedosphere from "../pages/pedosphere/Pedosphere";
import PedoGame from "../pages/pedosphere/PedoGame";
import Hydrosphere from "../pages/hydrosphere/Hydrosphere";
import HydroGame from "../pages/hydrosphere/HydroGame";
import Home from "../pages/home/Home";
import PedoAwareness from "../pages/pedosphere/PedoAwareness";
import HydroAwareness from "../pages/hydrosphere/HydroAwareness";
import Atmosphere from "../pages/atmosphere-page/Atmosphere";
import AtmoGame from "../pages/atmosphere-page/AtmoGame";

const routes = createBrowserRouter([
    {
      path: '/',
      element: (
          <App />
      ),
      children: [
        {
          index: true,
          path: '/',
          element: <LandingPage />,
        },
        {
          path: '/home',
          element: <Home />
        },
        {
          path: '/home/pedosphere',
          element: <Pedosphere /> 
        },
        {
          path: '/home/pedogame',
          element: <PedoGame /> 
        },
        {
          path: '/home/pedogame/awareness',
          element: <PedoAwareness /> 
        },
        {
          path: '/home/hydrosphere',
          element: <Hydrosphere /> 
        },
        {
          path: '/home/hydrogame',
          element: <HydroGame /> 
        },
        {
          path: '/home/hydro/awareness',
          element: <HydroAwareness />  
        },
        {
          path: '/home/atmosphere',
          element: <Atmosphere /> 
        },
        {
          path: '/home/atmogame',
          element: <AtmoGame /> 
        },
        {
          path: '/home/hydro/awareness',
          element: <HydroAwareness />  
        },
      ],
    }
  ]);
  
  export default routes;
  