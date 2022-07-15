import { FC, useState, useEffect, useCallback } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardMovieHover } from "./CardMovieHover";
import { CardMovie } from "./CardMovie";
import { propsdropdown } from "../Select/Dropdown";

export const CardMovieSmall: FC<propsdropdown> = ({
  Listmovies,
  results,
  movieVote,
  movieTitle,
}: propsdropdown): JSX.Element => {
  const [isHovered, setIsHovered] = useState([] as any[]);

  console.log("items", Listmovies);
  const updateHover = (idx, hoverState) => {
    const updatedIsHover = [...isHovered];
    updatedIsHover[idx] = hoverState;
    setIsHovered(updatedIsHover);
  };

  console.log("Listmovies", Listmovies);

  const reducedMovies =
    Listmovies &&
    Listmovies.results.map((movie) => ({
      release_date: movie.release_date,
      backdrop_path: movie.backdrop_path,
      title: movie.title,
      vote_average: movie.vote_average,
      poster_path: movie.poster_path,
    }));

  return (
    <>
      {reducedMovies?.length &&
        reducedMovies.map((movie, idx) => {
          const imageLink = `https://image.tmdb.org/t/p/w500//${movie.backdrop_path}`;
          const year = movie.release_date.slice(0, 4);
          console.log("movie", movie);
          return (
            <Card
              key={idx}
              sx={{
                width: 220,
                position: "relative",
                margin: 4,
                borderRadius: 4,
              }}
              onMouseEnter={() => updateHover(idx, true)}
              onMouseLeave={() => updateHover(idx, false)}>
              <CardMedia
                component='img'
                height='140'
                width='220'
                image={imageLink}
              />
              {!isHovered[idx] ? (
                <CardMovie movieTitle={movie.title} />
              ) : (
                <CardMovieHover
                  movieVote={movie.vote_average}
                  movieTitle={movie.title}
                  year={year}
                />
              )}
            </Card>
          );
        })}
    </>
  );
};
