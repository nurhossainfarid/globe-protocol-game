import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const ContinueButton = ({nextPage, bottom}) => {
    return (
        <Link to={nextPage}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              width: "230px",
              position: "absolute",
              bottom: {bottom},
              display: "flex",
              justifyContent: "center",
            }}
            component="img"
            src="https://i.ibb.co.com/XpqCWKs/continue-Btn.png"
          />
        </Box>
      </Link>
    );
};

export default ContinueButton;