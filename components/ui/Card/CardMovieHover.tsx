import { FC, useState } from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PlayIconHover from "../../Icons/PlayIconHover";
import { CardActions } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

export const CardMovieHover: FC = () => {
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
          pt: 6,
          borderRadius: 2,
        }}>
        <CardActions
          sx={{ mt: 2, color: "white" }}
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
          <Typography variant='h2' component='div' sx={{ ml: 1 }}>
            House of cards
          </Typography>
        </CardActions>

        <CardActions
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "space-between",
          }}>
          <StarIcon sx={{ color: "#64EEBC", fontSize: 16 }} />
          <Typography
            variant='h2'
            component='div'
            sx={{ color: "white", flexGrow: 1, ml: 1 }}>
            7,9
          </Typography>
          <Typography variant='h2' component='div' sx={{ color: "white" }}>
            2008
          </Typography>
        </CardActions>
      </CardContent>
    </>
  );
};
