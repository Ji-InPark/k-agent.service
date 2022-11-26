import React from 'react';
import { css } from '@emotion/react';
import Header from '../common/Header';
import InformationContainer from '../information-components/InformationContainer';

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
