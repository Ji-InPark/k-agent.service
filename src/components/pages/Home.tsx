import SearchBar from '../components/SearchBar';
import { css } from '@emotion/react';
import Header from '../components/Header';

function Home() {
  return (
    <div
      css={css({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      })}
    >
      <Header></Header>
      <SearchBar></SearchBar>
    </div>
  );
}

export default Home;
