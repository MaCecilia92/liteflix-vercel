import { FC, useState } from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PlayIconHover from "../../Icons/PlayIconHover";
import { CardActions } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { propsdropdown } from "../Select";

export const CardMovieHover: FC<propsdropdown> = ({
  movieVote,
  movieTitle,
  year,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <CardContent
        sx={{
          position: "absolute",
          top: 0,
          bgcolor: "rgba(36, 36, 36, 0.7)",
          width: 220,
          height: 140,
          pt: 3,
          borderRadius: 4,
        }}>
        <CardActions
          sx={{ ml: 1, color: "white" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
          {!isHovered ? (
            <PlayIconHover
              strokecircle={"white"}
              fillcircle={"transparent"}
              fillpath={"transparent"}
              strokepath={"white"}
            />
          ) : (
            <PlayIconHover
              strokecircle={"black"}
              fillcircle={"#64EEBC"}
              fillpath={"black"}
              strokepath={"black"}
            />
          )}
          <Typography
            variant='h2'
            component='div'
            sx={{ width: "8rem", ml: 1 }}>
            {movieTitle}
          </Typography>
        </CardActions>

        <CardActions
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "space-between",
          }}>
          {movieVote ? (
            <>
              <StarIcon sx={{ color: "#64EEBC", fontSize: 16 }} />
              <Typography
                variant='h2'
                component='div'
                sx={{ color: "white", flexGrow: 1, ml: 1 }}>
                {movieVote}
              </Typography>
            </>
          ) : null}

          {year ? (
            <Typography variant='h2' component='div' sx={{ color: "white" }}>
              {year}
            </Typography>
          ) : null}
        </CardActions>
      </CardContent>
    </>
  );
};
