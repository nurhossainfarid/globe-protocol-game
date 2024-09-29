import { Box, Typography } from "@mui/material";

const Side = ({ sideData }) => {
  return (
    <Box component="div" sx={{ flexGrow: 1 }}>
      <Box
        component="div"
        sx={{
          background: "#D3CFB6",
          padding: "7px",
          width: "300px",
          borderRadius: "5px",
        }}
      >
        <Box
          component="div"
          sx={{
            background: "#F0F0F4",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          {sideData?.map((data) => (
            <Box
              key={data.key}
              component="div"
              sx={{
                background: "#FFFFFF",
                width: "100%",
                padding: "10px",
                borderRadius: "5px ",
              }}
            >
              <Box component="a" href={data.url} target="_blank">
                <Box
                  component="img"
                  src={data.image}
                  sx={{ width: "100%", height: "110px", borderRadius: "5px" }}
                />
              </Box>
              <Typography
                sx={{
                  textAlign: "center",
                  fontFamily: "Jaro",
                  fontSize: "14px",
                }}
              >
                {data.title}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Side;
