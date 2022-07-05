import { FC } from "react";
import Head from "next/head";

import { MenuDesktop, MenuMobile } from "../ui/Menu/index";
import useMediaQuery from "@mui/material/useMediaQuery";

interface Props {
  title: string;
  pageDescription?: string;
  imageFullUrl?: string;
  children: React.ReactNode;
}

export const HeadLayout: FC<Props> = ({ children, title }) => {
  const breakpoints = useMediaQuery("(min-width:600px)");
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <nav>{breakpoints ? <MenuDesktop /> : <MenuMobile />}</nav>

      {/* <SideMenu /> */}

      <main
        style={{
          margin: "80px auto",
          maxWidth: "1440px",
          padding: "0px 30px",
        }}>
        {children}
      </main>
    </>
  );
};