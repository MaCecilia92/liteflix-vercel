import type { NextPage } from "next";
import { useContext } from "react";
import { CardMovieSmall } from "../components/ui/Card";
import { HeadLayout } from "../components/layouts";
import { Dropdown } from "../components/ui/Select";
import { BannerImage } from "../components/ui/BannerBackground";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useMovieContext } from "../context/Data";
import { UpLoadModal } from "../components/ui/UpLoadContainer";
//import { useMovieLocalstorage } from "../context/MovieLocal";
import { propsMovieLocal } from "../context/MovieLocal";
import { MovieFromLocalstorageContext } from "../context/MovieLocal";

const HomePage: NextPage<propsMovieLocal> = () => {
  const { useMovies } = useMovieContext();
  const { movies, isLoading } = useMovies("/now_playing");

  const { movieLocalstorage, base64ToFile } = useContext(
    MovieFromLocalstorageContext
  ) as propsMovieLocal;

  console.log("context", base64ToFile);
  console.log(movieLocalstorage);

  const mappedData = movies?.results.reduce((acc, movie, idx) => {
    if (idx < 5) {
      acc.push({
        title: movie.title,
        img: movie.poster_path,
      });
    }
    return acc;
  }, []);

  // const datamapped2 = movies?.results.map((movie) => ({
  //   backdrop_path: movie.backdrop_path,
  //   title: movie.title,
  //   vote_average: movie.vote_average,
  //   poster_path: movie.poster_path,
  // }));

  // console.log(movies);
  // console.log(mappedData);
  // console.log(datamapped2);

  return (
    <HeadLayout title={"Liteflix- Home"}>
      <Grid container columns={12}>
        <BannerImage />
        <Box
          sx={{
            right: 0,
            top: 0,
            zIndex: 1,
            position: "fixed",
            width: "500px",
            height: "100%",
            overflowX: "hidden",
            paddingTop: "90px",

            "@media screen and (max-width:599px)": {
              bgcolor: "black",
              width: "100%",
              height: "auto",
              position: "absolute",
              top: 710,
              right: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 4,
              paddingTop: 0,
              "::-webkit-scrollbar": {
                display: "block",
              },
            },
          }}>
          <UpLoadModal />
          <Dropdown />
        </Box>
      </Grid>
    </HeadLayout>
  );
};

export default HomePage;
