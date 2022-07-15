import type { NextPage } from "next";
import { HeadLayout } from "../components/layouts";
import { Dropdown } from "../components/ui/Select";
import { BannerImage } from "../components/ui/BannerBackground";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const HomePage: NextPage = () => {
  return (
    <HeadLayout title={"Liteflix- Home"}>
      <Grid container columns={12}>
        <BannerImage />
        <Box
          sx={{
            right: 0,
            top: 100,
            zIndex: 1,
            position: "fixed",
            width: "30%",
            height: "95%",
            overflowX: "hidden",
            paddingTop: "190px",
            paddingBottom: 20,
            mb: 20,
            "::-webkit-scrollbar": {
              display: "block",
            },

            "@media screen and (max-width:599px)": {
              bgcolor: "black",
              width: "100%",
              height: "auto",
              position: "relative",
              top: -1,
              right: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 4,
              paddingTop: 0,
            },
          }}>
          <Dropdown />
        </Box>
      </Grid>
    </HeadLayout>
  );
};

export default HomePage;
