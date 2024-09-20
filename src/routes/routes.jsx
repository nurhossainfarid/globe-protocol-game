import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LandingPage from "../pages/landing-page/LandingPage";
import GameHome from "../pages/game-home/GameHome";
import ProblemMap from "../pages/map/ProblemMap";
import Pedosphere from "../pages/pedosphere/Pedosphere";
import PedoGame from "../pages/pedosphere/PedoGame";

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
          element: <GameHome />
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
          path: '/map',
          element: <ProblemMap />
        },
      ],
    }
  ]);
  
  export default routes;
  