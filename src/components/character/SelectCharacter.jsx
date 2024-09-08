import { Box } from "@mui/material";
import { useState } from "react";
import Char from "../../images/chr.png";
import Char2 from "../../images/chr2.png";
import Char3 from "../../images/chr3.png";

const SelectCharacter = () => {
  const [character, setCharacter] = useState("chr");

  return (
    <Box
      sx={{
        position: "relative",
        right: "20px",
        top: "30px"
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "30px",
        }}
      >
        {character === "chr" && (
          <Box component="img" sx={{ width: 250, height: 600 }} src={Char} />
        )}
        {character === "chr2" && (
          <Box component="img" sx={{ width: 250, height: 600 }} src={Char2} />
        )}
        {character === "chr3" && (
          <Box component="img" sx={{ width: 250, height: 600 }} src={Char3} />
        )}
        <Box
          component="div"
          sx={{ display: "flex", flexDirection: "column", gap: "30px" }}
        >
          <Box
            component="button"
            sx={{
              background: "none",
              border: "none",
              ...(character === "chr" && { scale: 1.3 }),
            }}
            onClick={() => setCharacter("chr")}
          >
            <Box component="img" src={Char} sx={{ width: 50, height: 80 }} />
          </Box>
          <Box
            component="button"
            sx={{
              background: "none",
              border: "none",
              ...(character === "chr2" && { scale: 1.5 }),
            }}
            onClick={() => setCharacter("chr2")}
          >
            <Box component="img" src={Char2} sx={{ width: 50, height: 80 }} />
          </Box>
          <Box
            component="button"
            sx={{
              background: "none",
              border: "none",
              ...(character === "chr3" && { scale: 1.5 }),
            }}
            onClick={() => setCharacter("chr3")}
          >
            <Box component="img" src={Char3} sx={{ width: 50, height: 80 }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SelectCharacter;
