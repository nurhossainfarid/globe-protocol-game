import { Box } from "@mui/material";
import GameInto from "../../components/gamePhase/GameInto";
import BackButton from "../../components/layouts/BackButton";
import "./style.css";
import { useState } from "react";

const Pedosphere = () => {
  return (
    <Box>
      <GameInto
        bg1="https://i.ibb.co.com/VVdsc6b/Padosphere-bg.png"
        bg2="https://i.ibb.co.com/cQj2s37/Pado-bg.png"
        bg3="https://i.ibb.co.com/xgW3LHm/sky.png"
        pic1="https://i.ibb.co.com/YyxHmvz/Group-22711.png"
        pic2="https://i.ibb.co.com/kc0nxmv/Group-22712.png"
        pic3="https://i.ibb.co.com/k01XghB/Group-22713.png"
        title="ROOT REVIVE"
        comment="Learn How to Play Step by Step, Learn About Pedosphere and Speared Awareness !"
        nextPage="/home/pedogame"
      />
    </Box>
  );
};

export default Pedosphere;
