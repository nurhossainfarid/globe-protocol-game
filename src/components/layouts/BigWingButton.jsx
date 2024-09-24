import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const BigWingButton = ({link, width, height, marginTop}) => {
  return (
    <Link to={link}>
      <Box
        component="img"
        src="https://i.ibb.co.com/ZXk0TZ1/big-win.png"
        sx={{ width: { width }, height: { height }, marginTop: {marginTop} }}
      />
    </Link>
  );
};

export default BigWingButton;
