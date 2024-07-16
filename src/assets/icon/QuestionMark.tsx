import React from 'react';

type Props = {
  width: string;
  height: string;
};

const SvgComponent = (props: Props) => (
  <svg viewBox="0 0 12 12" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M6 0a6 6 0 1 0 0 12A6 6 0 0 0 6 0zm.5 9.5h-1v-1h1v1zm.765-3.326c-.532.333-.765.51-.765.826v.5h-1V7c0-.902.714-1.349 1.235-1.674.532-.333.765-.51.765-.826 0-.552-.449-1-1-1h-1c-.551 0-1 .448-1 1V5h-1v-.5c0-1.103.897-2 2-2h1c1.103 0 2 .897 2 2 0 .902-.714 1.349-1.235 1.674z"
      fill="#1D1D1B"
    />
  </svg>
);

export default SvgComponent;
