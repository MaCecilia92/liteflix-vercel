import type { NextPage } from "next";
import { CardMovieSmall } from "../components/ui/Card";
import { SideBar } from "../components/ui/SideBar";

import { HeadLayout } from "../components/layouts";

const HomePage: NextPage = () => {
  return (
    <HeadLayout title={"Liteflix- Home"}>
      <CardMovieSmall />
      <SideBar />
    </HeadLayout>
  );
};

export default HomePage;
