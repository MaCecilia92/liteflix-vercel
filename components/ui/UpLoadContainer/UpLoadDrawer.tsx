import { useState, Fragment, useContext } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { UploadFile } from "../UpLoad/index";
import { UiContext } from "../../../context/Ui/index";

export const UpLoadDrawer = () => {
  const { openSideBarDesktop, closeSideBar, Anchor, Open } =
    useContext(UiContext);
  console.log(openSideBarDesktop);
  console.log(closeSideBar);
  console.log("Anchor", Anchor, Open);

  return (
    <>
      {/* <Button onClick={openSideBarDesktop}>Open Sidebar</Button> */}
      <Drawer anchor={Anchor} open={Open} onClose={closeSideBar}>
        <Box
          sx={{
            width: 761,
            "@media screen and (max-width:599px)": {
              width: "100vh",
            },
          }}
          role='presentation'
          onClick={closeSideBar}
          onKeyDown={closeSideBar}>
          <UploadFile />
        </Box>
      </Drawer>
    </>
  );
};
