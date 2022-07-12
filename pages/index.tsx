import type { NextPage } from "next";
import { CardMovieSmall } from "../components/ui/Card";
import { HeadLayout } from "../components/layouts";
import { Dropdown } from "../components/ui/Select";
import { BannerImage } from "../components/ui/BannerBackground";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useMovieContext } from "../context/Data";

const HomePage: NextPage = () => {
  const { useMovies } = useMovieContext();
  const { movies, isLoading } = useMovies("/now_playing");

  const mappedData = movies?.results.reduce((acc, movie, idx) => {
    if (idx < 5) {
      acc.push({
        title: movie.title,
        img: movie.poster_path,
      });
    }
    return acc;
  }, []);

  const datamapped2 = movies?.results.map((movie) => ({
    backdrop_path: movie.backdrop_path,
    title: movie.title,
    vote_average: movie.vote_averange,
    poster_path: movie.poster_path,
  }));

  console.log(movies);
  console.log(mappedData);
  console.log(datamapped2);

  return (
    <HeadLayout title={"Liteflix- Home"}>
      <Grid container columns={12}>
        <BannerImage />
        <Grid item xs={12} lg={3}>
          <Box
            sx={{
              bgcolor: "black",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Dropdown />
            <CardMovieSmall />
            <CardMovieSmall />
            <CardMovieSmall />
            <CardMovieSmall />
          </Box>
        </Grid>
      </Grid>
    </HeadLayout>
  );
};

export default HomePage;
