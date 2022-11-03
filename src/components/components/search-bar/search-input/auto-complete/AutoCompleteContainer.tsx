import React from 'react';
import { css } from '@emotion/react';

type Props = {
  searchText: string;
};

function AutoCompleteContainer({ searchText }: Props) {
  return (
    <div
      css={css({
        position: 'absolute',
        marginTop: '3rem',
        background: 'white',
        width: '70%',
        maxWidth: 500,
        border: 'solid',
      })}
    >
      {searchText}
    </div>
  );
}

export default AutoCompleteContainer;
