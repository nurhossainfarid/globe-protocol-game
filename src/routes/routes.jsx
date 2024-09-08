import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LandingPage from "../pages/landing-page/LandingPage";
import GameHome from "../pages/game-home/GameHome";

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
        }
      ],
    }
  ]);
  
  export default routes;
  