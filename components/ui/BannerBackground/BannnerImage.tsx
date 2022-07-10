import { render } from "react-dom";
import React, { useState, useEffect } from "react";
import { useTransition, animated, config, useSpring } from "react-spring";
import styles from "./bannerImage.module.css";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

const slides = [
  {
    id: 0,
    url: "photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80i",
  },
  {
    id: 1,
    url: "photo-1544572571-ab94fd872ce4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1534&q=80",
  },
  {
    id: 2,
    url: "reserve/bnW1TuTV2YGcoh1HyWNQ_IMG_0207.JPG?ixlib=rb-1.2.1&w=1534&q=80",
  },
  { id: 3, url: "photo-1540206395-68808572332f?ixlib=rb-1.2.1&w=1181&q=80" },
];

console.log(slides);
const Image = ({ url, duration }: { url: string; duration: number }) => {
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

export const BannerImage = () => {
  const duration = 50000;
  const [index, set] = useState(0);

  console.log(slides[index]);

  const transitions = useTransition(slides[index], (item) => item.id, {
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
    <>
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={{ ...props }}>
          <Image
            url={`url(https://images.unsplash.com/${item.url}&auto=format&fit=crop)`}
            duration={duration}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
            }}>
            <Box
              sx={{
                display: "flex",
                alignContent: "flex-end",
                height: "0.5rem",
              }}>
              <Typography
                sx={{
                  fontSize: "2rem",
                  color: "white",
                  fontWeight: 200,
                  letterSpacing: "2px",
                }}>
                Original de
              </Typography>
              <Typography
                sx={{
                  fontSize: "2rem",
                  color: "white",
                  fontWeight: 600,
                  marginLeft: "5px",
                  letterSpacing: "2px",
                }}>
                Liteflix
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: "10rem",
                color: "#64EEBC",
              }}>
              La casa de papel
            </Typography>
            <Box>
              <Button
                sx={{
                  bgcolor: "#242424",
                  color: "white",
                  borderRadius: 0,
                  letterSpacing: "4px",
                  width: 248,
                  height: 56,
                  fontSize: 18,
                  margin: "10px",
                  "&:hover": {
                    bgcolor: "rgba(36, 36, 36, 0.5)",
                    border: "1px solid rgba(255, 255, 255, 0.5)",
                  },
                }}
                startIcon={<PlayArrowOutlinedIcon />}>
                Reproducir
              </Button>
              <Button
                sx={{
                  color: "white",
                  borderRadius: 0,
                  letterSpacing: "4px",
                  width: 248,
                  height: 56,
                  fontSize: 18,
                  bgcolor: "rgba(36, 36, 36, 0.5)",
                  border: "1px solid rgba(255, 255, 255, 0.5)",
                  margin: "10px",
                }}
                startIcon={<AddOutlinedIcon />}>
                Mi lista
              </Button>
            </Box>
          </Box>
        </animated.div>
      ))}
    </>
  );
};
