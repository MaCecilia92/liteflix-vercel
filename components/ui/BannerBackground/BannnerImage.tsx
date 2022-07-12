import React, { useState, useEffect } from "react";
import { useTransition, animated, config, useSpring } from "react-spring";
import styles from "./bannerImage.module.css";
import { BannerImageText } from "./BannerImageText";
import Box from "@mui/material/Box";

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

const Image = ({ url, duration }: { url: string; duration: number }) => {
  const props = useSpring({
    from: {
      transform: "scale(2) translateX(25%)",
    },
    to: {
      transform: "scale(3) translateX(30%)",
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
    <div className={styles.container}>
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={{ ...props }}>
          <Image
            url={`url(https://images.unsplash.com/${item.url}&auto=format&fit=crop)`}
            duration={duration}
          />
          <BannerImageText />
        </animated.div>
      ))}
    </div>
  );
};
