import { css } from '@emotion/react';
import { useRef } from 'react';
import SearchOptionContainer from './search-option/SearchOptionContainer';
import PaginationContainer from './page/PaginationContainer';
import SearchInput from './search-input/SearchInput';

function SearchBar() {
  const inputElement = useRef<HTMLInputElement>(null);

  return (
    <div
      css={css({
        display: 'grid',
        gridTemplateRows: 'repeat(3, 1fr)',
        gap: '1rem',
        alignItems: 'center',
        padding: '1.5rem',
      })}
    >
      <SearchInput inputElement={inputElement} />
      <SearchOptionContainer inputElement={inputElement} />
      <PaginationContainer />
    </div>
  );
}

export default SearchBar;
