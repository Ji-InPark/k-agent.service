import SearchBar from '../components/SearchBar';
import { css } from '@emotion/react';
import Header from '../components/Header';
import CompanyList from '../components/CompanyList';

function Home() {
  return (
    <div
      css={css({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      })}
    >
      <Header />
      <SearchBar />
      <CompanyList />
    </div>
  );
}

export default Home;
