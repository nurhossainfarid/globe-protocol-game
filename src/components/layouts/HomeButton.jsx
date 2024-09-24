import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const HomeButton = ({ link, width, height, marginLeft }) => {
  return (
    <Link to={link}>
      <Box
        component="img"
        src="https://i.ibb.co.com/2h0c3By/back-home-05.png"
        sx={{
          width: { width },
          height: { height },
          marginLeft: { marginLeft },
        }}
      />
    </Link>
  );
};

export default HomeButton;