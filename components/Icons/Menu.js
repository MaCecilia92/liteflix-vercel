import * as React from "react";

const SvgMenu = (props) => (
  <svg
    width={27}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M0 1h27M0 7h27M10 13h17" stroke="#000" />
  </svg>
);

export default SvgMenu;
