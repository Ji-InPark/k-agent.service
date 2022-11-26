import { css } from '@emotion/react';
import { useEffect, useRef } from 'react';
import SearchOptionContainer from './search-option/SearchOptionContainer';
import PaginationContainer from './page/PaginationContainer';
import SearchInput from './search-input/SearchInput';
import RecentSearchContainer from './recent-search/RecentSearchContainer';
import { useSetRecoilState } from 'recoil';
import { recentSearchWordsAtoms } from '../../../recoil/atoms';

function SearchBar() {
  const inputElement = useRef<HTMLInputElement>(null);
  const setRecentSearchWords = useSetRecoilState(recentSearchWordsAtoms);

  useEffect(() => {
    const words: Array<string> = JSON.parse(localStorage.getItem('recentSearchWords') || '[]');

    setRecentSearchWords(words);
  }, []);

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
