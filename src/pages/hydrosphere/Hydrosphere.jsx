import { Box } from "@mui/material";
import GameInto from "../../components/gamePhase/GameInto";

const Hydrosphere = () => {
  return (
    <Box>
      <GameInto
        bg1="https://i.ibb.co.com/3f8xDVR/hydro-bg.png"
        bg2="https://i.ibb.co.com/3f8xDVR/hydro-bg.png"
        bg3="https://i.ibb.co.com/xgW3LHm/sky.png"
        pic1="https://i.ibb.co.com/hVd4dk8/hydro-Info1.png"
        pic2="https://i.ibb.co.com/Z8k51y4/hydro-Info2.png"
        pic3="https://i.ibb.co.com/9g32Vnz/hydro-Info3.png"
        title="Aqua Guardians"
        comment="Learn How to Play Step by Step, Learn About HYDROSPHERE
and Speared Awareness !"
        nextPage="/home/hydrogame"
      />
    </Box>
  );
};

export default Hydrosphere;
