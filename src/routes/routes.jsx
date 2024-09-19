import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LandingPage from "../pages/landing-page/LandingPage";
import GameHome from "../pages/game-home/GameHome";
import ProblemMap from "../pages/map/ProblemMap";
import DragDrop from "../pages/drag-drop/DragDrop";
import Pedosphere from "../pages/pedosphere/Pedosphere";

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
          path: '/map',
          element: <ProblemMap />
        },
        {
          path: '/drag',
          element: <DragDrop />
        }
      ],
    }
  ]);
  
  export default routes;
  