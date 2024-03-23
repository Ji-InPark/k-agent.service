import SearchBar from '../home-components/search-bar/SearchBar';
import Header from '../common/Header';
import CompanyList from '../home-components/company/CompanyList';
import { useRecoilValue } from 'recoil';
import { isLoadingAtoms } from '../../recoil/atoms';
import LoadingModal from '../common/modal/LoadingModal';
import styled from '@emotion/styled';

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
