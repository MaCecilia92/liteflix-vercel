import { createContext } from "react";

export interface ContextProps {
  Anchor?: "right" | "top";
  Open?: boolean;

  // Methods
  openSideBarDesktop?: () => void;
  openSideBarMobile?: () => void;
  closeSideBar?: () => void;
}

export const UiContext = createContext<Partial<ContextProps>>({});
