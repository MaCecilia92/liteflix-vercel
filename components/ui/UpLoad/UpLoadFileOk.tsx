import { FC, useContext } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import LogoLiteflix from "../../../components/Icons/LiteflixLogo";
import { movies } from "../../../components/ui/UpLoad/index";
import { UiContext } from "../../../context/Ui/index";
import { propsMovieLocal } from "../../../context/MovieLocal";
import { MovieFromLocalstorageContext } from "../../../context/MovieLocal/index";
import useMediaQuery from "@mui/material/useMediaQuery";

export const UpLoadFileOk: FC<movies> = ({
  titleName,
  modalsButtons,
  handleClose,
}): JSX.Element => {
  const breakpoints = useMediaQuery("(max-width:600px)");
  const { toggleContainer, isMenuOpen } = useContext(UiContext);
  const { getMovieLocalstorage } = useContext(
    MovieFromLocalstorageContext
  ) as propsMovieLocal;

  const closeDrawer = () => {
    toggleContainer();
    getMovieLocalstorage;
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <LogoLiteflix />
        <Box
          sx={{
            textAlign: "center",
            margin: 5,
          }}>
          <Typography variant='h1' sx={{ fontSize: 30, color: "white" }}>
            ¡Felicitaciones!
          </Typography>
          <Typography
            sx={{
              fontSize: 20,
              letterSpacing: 2,
              color: "white",
              mt: 2,
              fontWeight: 200,
            }}>
            {titleName} fue correctamente subida.
          </Typography>
        </Box>
        <Button
          sx={modalsButtons}
          onClick={breakpoints ? closeDrawer : handleClose}>
          Salir
        </Button>
      </Box>
    </>
  );
};
