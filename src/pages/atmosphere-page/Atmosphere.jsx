import { Box } from "@mui/material";
import GameInto from "../../components/gamePhase/GameInto";

const Atmosphere = () => {
  return (
    <Box>
      <GameInto
        bg1="https://i.ibb.co.com/3f8xDVR/hydro-bg.png"
        bg2="https://i.ibb.co.com/3f8xDVR/hydro-bg.png"
        bg3="https://i.ibb.co.com/xgW3LHm/sky.png"
        pic1="https://i.ibb.co.com/GxhfZ8p/atmogame-info.png"
        pic2="https://i.ibb.co.com/MP5NVgL/atmogame-reward-info.png"
        pic3="https://i.ibb.co.com/S0VVFW0/atmogame-demo.png"
        title="Sky Keepers"
        comment="Learn How to Play Step by Step, Learn About Atmosphere
and Speared Awareness !"
        nextPage="/home/atmogame"
      />
    </Box>
  );
};

export default Atmosphere;