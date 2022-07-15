import { FC } from "react";
import Head from "next/head";
import { MenuDesktop, MenuMobile } from "../ui/Menu/index";
import useMediaQuery from "@mui/material/useMediaQuery";
import { SideBar } from "../../components/ui/SideBar";
import Box from "@mui/material/Box";
import { UpLoadModal, UpLoadDrawer } from "../ui/UpLoadContainer/index";

interface Props {
  title: string;
  pageDescription?: string;
  imageFullUrl?: string;
  children: React.ReactNode;
}

export const HeadLayout: FC<Props> = ({ children, title }) => {
  const breakpoints = useMediaQuery("(max-width:600px)");
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <nav>
        {breakpoints ? (
          <MenuMobile anchor={undefined} open={false} />
        ) : (
          <MenuDesktop anchor={undefined} open={false} />
        )}
      </nav>
      <main>{children}</main>
    </>
  );
};
