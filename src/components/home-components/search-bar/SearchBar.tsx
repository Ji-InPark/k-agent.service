import { useEffect, useState } from 'react';
import SearchOptionContainer from './search-option/SearchOptionContainer';
import PaginationContainer from './page/PaginationContainer';
import SearchInput from './SearchInput';
import RecentSearchContainer from './recent-search/RecentSearchContainer';
import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';
import { isLoadingAtoms } from '../../../recoil/atoms';

const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 100px);
  gap: 24px;
  align-items: center;
  padding: 1.5rem;
`;

function SearchBar() {
  const [searchText, setSearchText] = useState<string>('');
  const isLoading = useRecoilValue(isLoadingAtoms);

  useEffect(() => {
    setSearchText('');
  }, [isLoading]);

  return (
    <Container>
      <RecentSearchContainer />
      <SearchInput searchText={searchText} setSearchText={setSearchText} />
      <SearchOptionContainer searchText={searchText} />
      <PaginationContainer />
    </Container>
  );
}

export default SearchBar;
