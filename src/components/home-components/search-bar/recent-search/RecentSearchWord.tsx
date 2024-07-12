import React from 'react';
import X from '../../../../assets/icon/XIcon';
import RecentSearchWordService from '../../../../service/RecentSearchWordService';
import { RecentSearchWordEnum } from '../../../../types';
import useCompany from '../../../../hooks/useCompany';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  align-items: center;
  border-style: solid;
  border-radius: 1rem;
  padding: 0.3rem 0.5rem;
  margin-right: 0.5rem;

  &:hover {
    cursor: pointer;
  }
`;

const Text = styled.span`
  white-space: nowrap;
  overflow: auto;
  margin-right: 1rem;
`;

const Icon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 2px;
  color: gray;

  &:hover {
    color: #000;
  }
`;

type Props = {
  word: string;
};

export default function RecentSearchWord({ word }: Props) {
  const deleteRecentSearchWordService = RecentSearchWordService(RecentSearchWordEnum.DELETE);
  const { searchCompany } = useCompany();

  return (
    <Container>
      <Text onClick={() => searchCompany({ searchText: word })}>{word}</Text>
      <Icon onClick={() => deleteRecentSearchWordService(word)}>
        <X width="1.2rem" height="1.2rem" />
      </Icon>
    </Container>
  );
}
