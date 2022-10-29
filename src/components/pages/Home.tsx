import SearchBar from '../components/search-bar/SearchBar';
import { css } from '@emotion/react';
import Header from '../components/Header';
import CompanyList from '../components/company/CompanyList';
import { useRecoilValue } from 'recoil';
import { isLoadingAtoms } from '../../recoil/atoms';
import LoadingModal from '../components/modal/LoadingModal';

function Home() {
  const isLoading = useRecoilValue(isLoadingAtoms);
  return (
    <div
      css={css({
        width: '100vw',
      })}
    >
      <Header />
      <SearchBar />
      <CompanyList />
      {isLoading && <LoadingModal />}
    </div>
  );
}

export default Home;
