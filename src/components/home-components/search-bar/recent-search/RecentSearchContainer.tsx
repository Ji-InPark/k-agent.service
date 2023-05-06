import React from 'react';
import { css } from '@emotion/react';
import { useRecoilValue } from 'recoil';
import { recentSearchWordsAtoms } from '../../../../recoil/atoms';
import RecentSearchWord from './RecentSearchWord';

function RecentSearchContainer() {
  const recentSearchWords = useRecoilValue(recentSearchWordsAtoms);

  return (
    <div
      css={css({
        display: 'flex',
        justifyContent: 'center',
        height: '2rem',
      })}
    >
      {!recentSearchWords.length ? '최근 검색 기록이 없습니다.' : recentSearchWords.map((it) => <RecentSearchWord word={it} />)}
    </div>
  );
}

export default RecentSearchContainer;
