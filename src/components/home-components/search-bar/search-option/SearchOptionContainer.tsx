import React, { useCallback } from 'react';
import { selectedGovernmentLocationAtoms, selectedSectorAtoms } from '../../../../recoil/atoms';
import SearchOption from './SearchOption';
import SearchService from '../../../../service/SearchService';
import styled from '@emotion/styled';
import { Button as AntdButton } from 'antd';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  justify-self: center;
  width: 70%;
  max-width: 500px;
`;

const Button = styled(AntdButton)`
  width: 100%;
`;

type Props = {
  searchText: string;
};

function SearchOptionContainer({ searchText }: Props) {
  const searchCompany = SearchService();

  const onSearch = useCallback(() => {
    if (!searchCompany) {
      return;
    }

    searchCompany({ searchText, useOption: true });
  }, [searchText, searchCompany]);

  return (
    <Container>
      <SearchOption recoilVariable={selectedGovernmentLocationAtoms} apiUrl={'/government-locations'} defaultText={'전체 지역'} />
      <SearchOption recoilVariable={selectedSectorAtoms} apiUrl={'/sectors'} defaultText={'전체 업종'} />
      <Button onClick={onSearch}>조회</Button>
    </Container>
  );
}

export default SearchOptionContainer;
