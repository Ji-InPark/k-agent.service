import React from 'react';
import { css } from '@emotion/react';
import Header from '@components/common/Header';
import InformationContainer from '@components/information-components/InformationContainer';

function Information() {
  return (
    <div
      css={css({
        width: '100vw',
      })}
    >
      <Header />
      <InformationContainer />
    </div>
  );
}

export default Information;
