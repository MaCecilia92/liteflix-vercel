import type { NextPage } from "next";
import { CardMovieSmall } from "../components/ui/Card";
import { SideBar } from "../components/ui/SideBar";
import { UpLoadModal } from "../components/ui/UpLoadContainer";

import { HeadLayout } from "../components/layouts";
import { Dropdown } from "../components/ui/Select";
import { BannerImage } from "../components/ui/BannerBackground";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const HomePage: NextPage = () => {
  return (
    <HeadLayout title={"Liteflix- Home"}>
      <Box>
        <Grid container spacing={2} columns={12}>
          <Grid item md={9} lg={10}></Grid>
          <Grid item xs={12} md={3} lg={2}>
            <Box sx={{ zIndex: 900, position: "relative" }}>
              <Dropdown />
              <CardMovieSmall />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <BannerImage />
    </HeadLayout>
  );
};

export default HomePage;
