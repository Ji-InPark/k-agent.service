import SearchBar from '../home-components/search-bar/SearchBar';
import Header from '../common/Header';
import CompanyList from '../home-components/company/CompanyList';
import { useRecoilValue } from 'recoil';
import { isLoadingAtoms } from '../../recoil/atoms';
import LoadingModal from '../common/modal/LoadingModal';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 100vw;
`;

function Home() {
  const isLoading = useRecoilValue(isLoadingAtoms);
  return (
    <Container>
      <Header />
      <SearchBar />
      <CompanyList />
      {isLoading && <LoadingModal />}
    </Container>
  );
}

export default Home;
