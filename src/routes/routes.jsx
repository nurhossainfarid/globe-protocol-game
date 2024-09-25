import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LandingPage from "../pages/landing-page/LandingPage";
import GameHome from "../pages/game-home/GameHome";
import ProblemMap from "../pages/map/ProblemMap";
import Pedosphere from "../pages/pedosphere/Pedosphere";
import PedoGame from "../pages/pedosphere/PedoGame";
import Hydrosphere from "../pages/hydrosphere/Hydrosphere";
import HydroGame from "../pages/hydrosphere/HydroGame";
import Home from "../pages/home/Home";

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
          path: '/pedosphere',
          element: <Pedosphere /> 
        },
        {
          path: '/pedoGame',
          element: <PedoGame /> 
        },
        {
          path: '/hydrosphere',
          element: <Hydrosphere /> 
        },
        {
          path: '/hydroGame',
          element: <HydroGame /> 
        },
        {
          path: '/map',
          element: <ProblemMap />
        },
      ],
    }
  ]);
  
  export default routes;
  