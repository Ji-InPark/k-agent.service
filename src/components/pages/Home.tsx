import SearchBar from '../home-components/search-bar/SearchBar';
import { css } from '@emotion/react';
import Header from '../common/Header';
import CompanyList from '../home-components/company/CompanyList';
import { useRecoilValue } from 'recoil';
import { isLoadingAtoms } from '../../recoil/atoms';
import LoadingModal from '../common/modal/LoadingModal';

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
