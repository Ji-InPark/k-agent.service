import React, { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { recentSearchWordsAtoms } from '../../../../recoil/atoms';
import RecentSearchWord from './RecentSearchWord';
import styled from '@emotion/styled';

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
