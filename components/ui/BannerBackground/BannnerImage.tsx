import React, { useState, useEffect } from "react";
import { useTransition, animated, config, useSpring } from "react-spring";
import styles from "./bannerImage.module.css";
import { BannerImageText } from "./BannerImageText";
import { useMovieContext } from "../../../context/Data";
import useMediaQuery from "@mui/material/useMediaQuery";

const ImageDesk = ({ url, duration }: { url: string; duration: number }) => {
  const props = useSpring({
    from: {
      transform: "scale(1) translateX(0%)",
    },
    to: {
      transform: "scale(2) translateX(20%)",
    },
    config: {
      duration: duration - 200,
    },
  });
  return (
    <animated.div
      className={styles.bg}
      style={{ ...props, backgroundImage: url }}
    />
  );
};

const ImageMobile = ({ url, duration }: { url: string; duration: number }) => {
  const props = useSpring({
    from: {
      transform: "scale(2) translateX(25%) translateY(25%)",
    },
    to: {
      transform: "scale(3) translateX(30%) translateY(30%)",
    },
    config: {
      duration: duration - 200,
    },
  });
  return (
    <animated.div
      className={styles.bg}
      style={{ ...props, backgroundImage: url }}
    />
  );
};

export const BannerImage = () => {
  const breakpoints = useMediaQuery("(max-width:600px)");
  const duration = 50000;
  const [index, set] = useState(0);

  const { useMovies } = useMovieContext();
  const { movies, isLoading } = useMovies("/now_playing");

  const slides = movies?.results.reduce((acc, movie, idx) => {
    if (idx < 5) {
      acc.push({
        id: idx,
        title: movie.title,
        url: movie.backdrop_path,
      });
    }
    return acc;
  }, []);

  const transitions = useTransition(slides?.[index], (item) => item?.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  });

  useEffect(
    () => void setInterval(() => set((state) => (state + 1) % 4), duration),
    []
  );

  return (
    <div className={styles.container}>
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={{ ...props }}>
          {breakpoints ? (
            <ImageMobile
              url={`url( https://image.tmdb.org/t/p/original/${item?.url})`}
              duration={duration}
            />
          ) : (
            <ImageDesk
              url={`url( https://image.tmdb.org/t/p/original/${item?.url})`}
              duration={duration}
            />
          )}
          <BannerImageText title={item?.title} />
        </animated.div>
      ))}
    </div>
  );
};
