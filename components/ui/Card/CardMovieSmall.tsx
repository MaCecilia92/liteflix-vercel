import { FC, useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardMovieHover } from "./CardMovieHover";
import { CardMovie } from "./CardMovie";

export const CardMovieSmall: FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Card
        sx={{ width: 220, position: "relative", margin: 4 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <CardMedia
          component='img'
          height='140'
          width='220'
          image='https://image-us.samsung.com/SamsungUS/home/audio/galaxy-buds/MB-04-JustWhatYouWantV4.jpg?$cm-g-fb-full-bleed-img-mobile-jpg$'
        />
        {!isHovered ? <CardMovie /> : <CardMovieHover />}
      </Card>
    </>
  );
};
