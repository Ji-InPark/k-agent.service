import { css } from '@emotion/react';
import { useRef } from 'react';
import SearchOptionContainer from './search-option/SearchOptionContainer';
import PaginationContainer from './page/PaginationContainer';
import SearchInput from './search-input/SearchInput';
import RecentSearchContainer from './recent-search/RecentSearchContainer';

function SearchBar() {
  const inputElement = useRef<HTMLInputElement>(null);

  return (
    <div
      css={css({
        display: 'grid',
        gridTemplateRows: 'repeat(4, 1fr)',
        gap: '1rem',
        alignItems: 'center',
        padding: '1.5rem',
      })}
    >
      <RecentSearchContainer />
      <SearchInput inputElement={inputElement} />
      <SearchOptionContainer inputElement={inputElement} />
      <PaginationContainer />
    </div>
  );
}

export default SearchBar;
