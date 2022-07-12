import { FC } from "react";
import Head from "next/head";
import { MenuDesktop, MenuMobile } from "../ui/Menu/index";
import useMediaQuery from "@mui/material/useMediaQuery";
import { SideBar } from "../../components/ui/SideBar";
import { UpLoadModal } from "../../components/ui/UpLoadContainer";
import Box from "@mui/material/Box";

interface Props {
  title: string;
  pageDescription?: string;
  imageFullUrl?: string;
  children: React.ReactNode;
}

export const HeadLayout: FC<Props> = ({ children, title }) => {
  const breakpoints = useMediaQuery("(max-width:600px)");
  console.log("breakpoint", breakpoints);
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <nav>{breakpoints ? <MenuMobile /> : <MenuDesktop />}</nav>

      <SideBar />
      <UpLoadModal />

      <main>{children}</main>
    </>
  );
};
