import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';
import { isLoadingAtoms } from '@atoms/atoms';
import { useScrollY } from '@hooks/useScrollY';
import SearchOptionContainer from '@components/home-components/search-bar/search-option/SearchOptionContainer';
import PaginationContainer from '@components/home-components/search-bar/page/PaginationContainer';
import SearchInput from '@components/home-components/search-bar/SearchInput';
import RecentSearchContainer from '@components/home-components/search-bar/recent-search/RecentSearchContainer';

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
  const scroll = useScrollY(300);
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
