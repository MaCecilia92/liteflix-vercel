import { FC } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import LogoLiteflix from "../../../components/Icons/LiteflixLogo";
import { movies } from "../../../components/ui/UpLoad/index";

import { propsMovieLocal } from "../../../context/MovieLocal/index";

export const UpLoadFileOk: FC<movies> = ({
  titleName,
  modalsButtons,
}): JSX.Element => {
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
          <Typography variant='h1' sx={{ fontSize: 30 }}>
            ¡Felicitaciones!
          </Typography>
          <Typography sx={{ fontSize: 20, letterSpacing: 2 }}>
            {titleName} fue correctamente subida.
          </Typography>
        </Box>
        <Button sx={modalsButtons}> ir a home</Button>
      </Box>
    </>
  );
};
