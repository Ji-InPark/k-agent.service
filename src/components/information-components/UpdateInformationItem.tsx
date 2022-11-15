import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

function UpdateInformationItem({ children }: Props) {
  return (
    <li>
      <h3>{children}</h3>
    </li>
  );
}

export default UpdateInformationItem;
