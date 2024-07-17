import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';
import { recentSearchWordsAtoms } from '@atoms/atoms';
import RecentSearchWord from '@components/home-components/search-bar/recent-search/RecentSearchWord';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

function RecentSearchContainer() {
  const recentSearchWords = useRecoilValue(recentSearchWordsAtoms);

  const searchWords = useMemo(() => {
    if (!recentSearchWords || !recentSearchWords?.length) {
      return '최근 검색 기록이 없습니다.';
    }

    return recentSearchWords.map((it) => <RecentSearchWord key={it} word={it} />);
  }, [recentSearchWords]);

  return <Container>{searchWords}</Container>;
}

export default RecentSearchContainer;
