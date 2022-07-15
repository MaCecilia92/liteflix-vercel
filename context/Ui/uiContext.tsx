import { createContext } from "react";

export interface ContextProps {
  Anchor?: "right" | "top";
  Open?: boolean;
  isMenuOpen?: boolean;

  // Methods
  openSideBarDesktop?: () => void;
  openSideBarMobile?: () => void;
  closeSideBar?: () => void;
  toggleContainer?: () => void;
}

export const UiContext = createContext<Partial<ContextProps>>({});
