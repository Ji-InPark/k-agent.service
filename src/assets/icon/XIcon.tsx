import React from 'react';

type Props = {
  width: string;
  height: string;
};

const SvgComponent = (props: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox={'0 0 20 20'}
    {...props}
  >
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

export default SvgComponent;
