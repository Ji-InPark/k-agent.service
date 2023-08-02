import React, { useEffect, useMemo } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { autocompleteCompanyListAtoms } from '../../../recoil/atoms';
import styled from '@emotion/styled';
import { AutoComplete as AntdAutoComplete, AutoCompleteProps as AntdAutoCompleteProps } from 'antd';
import search from '../../../axios';
import { AutoCompleteCompanyList } from '../../../types';
import { getRegExp } from 'korean-regexp';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const AutoComplete = styled((props: AntdAutoCompleteProps) => <AntdAutoComplete {...props} />)`
  text-align: center;
  justify-self: center;
  font-size: 2rem;
  width: 70%;
  max-width: 500px;
`;

type Props = {
  searchText: string;
  setSearchText: (company: string) => void;
};

function SearchInput({ searchText, setSearchText }: Props) {
  const autoCompleteCompanyList = useRecoilValue(autocompleteCompanyListAtoms);
  const setAutoCompleteCompanyList = useSetRecoilState(autocompleteCompanyListAtoms);

  const options = useMemo(() => {
    if (!searchText || !autoCompleteCompanyList?.companies?.length) return;

    const { companies } = autoCompleteCompanyList;

    return companies.map((companyName) => ({ label: companyName, value: companyName }));
  }, [searchText, autoCompleteCompanyList]);

  useEffect(() => {
    if (!searchText) return;

    const { source: regex } = getRegExp(searchText, { ignoreCase: false, initialSearch: true });

    search.post<AutoCompleteCompanyList>('/search/autocomplete', { regex }).then((response) => {
      setAutoCompleteCompanyList(response.data);
    });
  }, [searchText]);

  return (
    <Container>
      <AutoComplete value={searchText} options={options} placeholder="기업을 검색하세요" onChange={(event) => setSearchText(event ?? '')} allowClear={true} />
    </Container>
  );
}

export default SearchInput;
