import { createContext } from "react";

interface ContextProps {
  Anchor?: "right" | "top";
  Open?: boolean;

  // Methods
  openSideBarDesktop: () => void;
  openSideBarMobile: () => void;
  closeSideBar: () => void;
}

export const UiContext = createContext({} as ContextProps);
