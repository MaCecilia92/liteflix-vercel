import { FC } from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PlayIcon from "../../Icons/PlayIcon";
import { propsdropdown } from "../Select/Dropdown";

export const CardMovie: FC<propsdropdown> = ({ movieTitle }) => {
  return (
    <>
      <CardContent
        sx={{
          position: "absolute",
          top: 0,
          backgroundImage:
            "linear-gradient(180deg, rgba(0, 0, 0, 0) 22.78%, #000000 122.69%)",
          width: 220,
          height: 140,
          textAlign: "center",
          pt: 5,
          borderRadius: 4,
        }}>
        <PlayIcon />
        <Typography
          gutterBottom
          variant='h2'
          component='div'
          sx={{ mt: 1, color: "white" }}>
          {movieTitle}
        </Typography>
      </CardContent>
    </>
  );
};
