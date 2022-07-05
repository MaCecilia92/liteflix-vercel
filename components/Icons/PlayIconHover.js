import * as React from "react";

const SvgPlayIconHover = (props) => (
  <svg
    width={24}
    height={24}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}>
    <circle
      cx={12}
      cy={12}
      r={11.5}
      fill={props.fillcircle}
      stroke={props.strokecircle}
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M15.99 12.162 9.6 7.8v8.4l6.39-4.038Z'
      fill={props.fillpath}
      stroke={props.strokepath}
    />
  </svg>
);

export default SvgPlayIconHover;
