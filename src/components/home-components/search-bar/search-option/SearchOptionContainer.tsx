import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import { Button as AntdButton } from 'antd';
import { selectedGovernmentLocationAtoms, selectedSectorAtoms } from '@atoms/atoms';
import SearchOption from '@components/home-components/search-bar/search-option/SearchOption';
import useCompany from '@hooks/useCompany';

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
  const { searchCompany } = useCompany();

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
