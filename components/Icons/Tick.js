import * as React from "react";

const SvgTick = (props) => (
  <svg
    width={14}
    height={11}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="m1 5 4 4 8-8" stroke="#fff" strokeWidth={2} />
  </svg>
);

export default SvgTick;
