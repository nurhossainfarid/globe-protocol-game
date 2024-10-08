import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const BackButton = ({ link, width, height, marginLeft }) => {
  return (
    <Link to={link}>
      <Box
        component="img"
        src="https://i.ibb.co.com/ckkhtLG/back-Button.png"
        sx={{
          width: { width },
          height: { height },
          marginLeft: { marginLeft },
        }}
      />
    </Link>
  );
};

export default BackButton;
