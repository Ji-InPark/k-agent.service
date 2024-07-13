import SearchBar from '../home-components/search-bar/SearchBar';
import Header from '../common/Header';
import CompanyList from '../home-components/company/CompanyList';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { companyResponseAtoms, isLoadingAtoms } from '../../recoil/atoms';
import LoadingModal from '../common/modal/LoadingModal';
import styled from '@emotion/styled';
import useCompany from '../../hooks/useCompany';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

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
  const [searchParams] = useSearchParams();
  const { searchCompany } = useCompany();

  const resetCompanyResponse = useResetRecoilState(companyResponseAtoms);

  useEffect(() => {
    if (Array.from(searchParams).length === 0) {
      resetCompanyResponse();
      return;
    }

    const searchText = searchParams.get('searchText') || '';
    const useOption = searchParams.get('useOption') === 'true';
    if (!searchText && !useOption) return;

    const page = Number(searchParams.get('page') || '0');
    searchCompany({ searchText, useOption, page });
  }, [searchParams]);

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
