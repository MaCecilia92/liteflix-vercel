import * as React from "react";

const SvgPlayIcon = (props) => (
  <svg
    width={40}
    height={40}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}>
    <circle
      cx={20}
      cy={20}
      r={19.5}
      fill='#242424'
      fillOpacity={0.5}
      stroke='#fff'
    />
    <path
      clipRule='evenodd'
      d='M26.648 20.27 16 13v14l10.648-6.73Z'
      stroke='#fff'
    />
  </svg>
);

export default SvgPlayIcon;
