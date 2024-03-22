import { useEffect, useState } from 'react';
import SearchOptionContainer from './search-option/SearchOptionContainer';
import PaginationContainer from './page/PaginationContainer';
import SearchInput from './SearchInput';
import RecentSearchContainer from './recent-search/RecentSearchContainer';
import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';
import { isLoadingAtoms } from '../../../recoil/atoms';
import { useScroll } from '../../../hooks/useScroll';

const Container = styled.div<{ scroll: number }>`
  position: sticky;
  background-color: white;
  z-index: 1;
  top: 0;
  transform: translateY(${({ scroll }) => `${-scroll}px`});
  display: grid;
  grid-template-rows: 50px 50px 100px 100px;
  gap: 24px;
  align-items: center;
  padding: 1.5rem 1.5rem 0;
`;

function SearchBar() {
  const scroll = useScroll(300);
  const [searchText, setSearchText] = useState<string>('');
  const isLoading = useRecoilValue(isLoadingAtoms);

  useEffect(() => {
    setSearchText('');
  }, [isLoading]);

  return (
    <Container scroll={scroll}>
      <RecentSearchContainer />
      <SearchInput searchText={searchText} setSearchText={setSearchText} />
      <SearchOptionContainer searchText={searchText} />
      <PaginationContainer />
    </Container>
  );
}

export default SearchBar;
