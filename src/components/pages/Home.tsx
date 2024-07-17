import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';
import { isLoadingAtoms } from '@atoms/atoms';
import SearchBar from '@components/home-components/search-bar/SearchBar';
import Header from '@components/common/Header';
import CompanyList from '@components/home-components/company/CompanyList';
import LoadingModal from '@components/common/modal/LoadingModal';

const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
`;

function Home() {
  const isLoading = useRecoilValue(isLoadingAtoms);

  return (
    <Container>
      <Main>
        <Header />
        <SearchBar />
        <CompanyList />
        {isLoading && <LoadingModal />}
      </Main>
    </Container>
  );
}

export default Home;
