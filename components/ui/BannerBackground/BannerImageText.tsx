import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

export const BannerImageText = () => {
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          "@media screen and (max-width:599px)": {
            textAlign: "center",
            background:
              "linear-gradient(0deg, rgba(0,0,0,1) 23%, rgba(34,34,34,1) 51%, rgba(36,36,36,0.022846638655462215) 67%)",
            width: "100%",
            right: 0,
          },
        }}>
        <Box
          sx={{
            display: "flex",
            alignContent: "flex-end",
            height: "0.5rem",
            "@media screen and (max-width:599px)": {
              justifyContent: "center",
              width: "100%",
            },
          }}>
          <Typography
            sx={{
              fontSize: "2rem",
              color: "white",
              fontWeight: 200,
              letterSpacing: "2px",
            }}>
            Original de
          </Typography>
          <Typography
            sx={{
              fontSize: "2rem",
              color: "white",
              fontWeight: 600,
              marginLeft: "5px",
              letterSpacing: "2px",
            }}>
            Liteflix
          </Typography>
        </Box>
        <Typography
          sx={{
            fontSize: "10rem",
            color: "#64EEBC",
            "@media screen and (max-width:599px)": {
              textAlign: "center",
              fontSize: "5rem",
              marginTop: "1rem",
            },
          }}>
          La casa de papel
        </Typography>
        <Box>
          <Button
            startIcon={<PlayArrowOutlinedIcon />}
            sx={{
              bgcolor: "#242424",
              color: "white",
              borderRadius: 0,
              letterSpacing: "4px",
              width: 248,
              height: 56,
              fontSize: 18,
              margin: 5,
              "&:hover": {
                bgcolor: "rgba(36, 36, 36, 0.5)",
                border: "1px solid rgba(255, 255, 255, 0.5)",
              },
            }}>
            Reproducir
          </Button>
          <Button
            startIcon={<AddOutlinedIcon />}
            sx={{
              color: "white",
              borderRadius: 0,
              letterSpacing: "4px",
              width: 248,
              height: 56,
              fontSize: 18,
              bgcolor: "rgba(36, 36, 36, 0.5)",
              border: "1px solid rgba(255, 255, 255, 0.5)",
              margin: 2,
            }}>
            Mi lista
          </Button>
        </Box>
      </Box>
    </>
  );
};
