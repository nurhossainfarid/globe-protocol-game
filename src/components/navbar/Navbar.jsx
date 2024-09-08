import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import BackIcon from "../../images/backIcon.png";
import NavIcon from "../../images/navIcon.png";
import NavIcon2 from "../../images/navIcon2.png";
import NavIcon3 from "../../images/navIcon3.png";
import NavIcon4 from "../../images/navIcon4.png";
import NavIcon5 from "../../images/navIcon5.png";
import NavIcon6 from "../../images/navIcon6.png";

const navItems = ["Home", "About", "Contact"];

const Navbar = () => {
  return (
    <div>
      <Box sx={{position: 'relative', zIndex: 1}}>
        <Link to="/">
          <img
            src={BackIcon}
            style={{
              position: "absolute",
              zIndex: "1",
              width: "200px",
              height: "165px",
            }}
          />
        </Link>
        <Box
          sx={{
            display: { xs: "none", sm: "block", md: "flex" },
            background: "#193634BA",
            justifyContent: "end",
            alignItems: "center",
            gap: "100px",
            padding: "5px",
            paddingRight: "50px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "50px",
            }}
          >
            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <img
                src={NavIcon}
                style={{
                  width: "32.53px",
                  height: "33.13px",
                }}
              />
              <Typography
                sx={{
                  color: "#FDF9F3",
                  fontFamily: "Quantico",
                  fontWeight: 700,
                  fontSize: "30px",
                  textTransform: "uppercase",
                }}
              >
                2486
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <img
                src={NavIcon2}
                style={{
                  width: "32.53px",
                  height: "33.13px",
                }}
              />
              <Typography
                sx={{
                  color: "#FDF9F3",
                  fontFamily: "Quantico",
                  fontWeight: 700,
                  fontSize: "30px",
                  textTransform: "uppercase",
                }}
              >
                1100
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <img
                src={NavIcon4}
                style={{
                  width: "32.53px",
                  height: "33.13px",
                }}
              />
              <Typography
                sx={{
                  color: "#FDF9F3",
                  fontFamily: "Quantico",
                  fontWeight: 700,
                  fontSize: "30px",
                  textTransform: "uppercase",
                }}
              >
                8332
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <img
                src={NavIcon3}
                style={{
                  width: "32.53px",
                  height: "33.13px",
                }}
              />
              <Typography
                sx={{
                  color: "#FDF9F3",
                  fontFamily: "Quantico",
                  fontWeight: 700,
                  fontSize: "30px",
                  textTransform: "uppercase",
                }}
              >
                105
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "block", md: "flex" },
              justifyContent: "center",
              gap: "40px",
            }}
          >
            <img
              src={NavIcon5}
              style={{
                width: "38.53px",
                height: "33.13px",
              }}
            />
            <img
              src={NavIcon6}
              style={{
                width: "35.53px",
                height: "33.13px",
              }}
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Navbar;
