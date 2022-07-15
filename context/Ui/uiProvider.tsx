import { FC, useReducer } from "react";
import { UiContext, uiReducer } from "../Ui/index";

export interface propsSidebar {
  Anchor?: "right" | "top";
  Open?: boolean;
  isMenuOpen?: boolean;
}
export interface props {
  children?: React.ReactNode;
}

const UI_INITIAL_STATE: propsSidebar = {
  Anchor: "right",
  Open: false,
  isMenuOpen: false,
};

export const UiProvider: FC<props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSideBarDesktop = () => {
    dispatch({ type: "[UI] - openSideBarDesktop" });
  };

  const openSideBarMobile = () => {
    dispatch({ type: "[UI] - openSideBarMobile" });
  };

  const closeSideBar = () => {
    dispatch({ type: "[UI] - closeSideBar" });
  };

  const toggleContainer = () => {
    dispatch({ type: "[UI] - ToggleContainer" });
  };

  return (
    <UiContext.Provider
      value={{
        ...state,
        // Methods
        openSideBarDesktop,
        openSideBarMobile,
        closeSideBar,
        toggleContainer,
      }}>
      {children}
    </UiContext.Provider>
  );
};
