import React, { useEffect, useMemo } from 'react';
import styled from '@emotion/styled';
import { getRegExp } from 'korean-regexp';
import { AutoComplete as AntdAutoComplete, AutoCompleteProps as AntdAutoCompleteProps } from 'antd';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { autocompleteCompanyListAtoms } from '@atoms/atoms';
import search from '@/axios';
import useCompany from '@hooks/useCompany';

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
  const { searchCompany } = useCompany();

  const onSelect = (value: string) => searchCompany({ searchText: value });

  const options = useMemo(() => {
    if (!searchText || !autoCompleteCompanyList?.length) return;

    return autoCompleteCompanyList.map((companyName) => ({ label: companyName, value: companyName }));
  }, [searchText, autoCompleteCompanyList]);

  useEffect(() => {
    if (!searchText) {
      setAutoCompleteCompanyList([]);
      return;
    }

    const delayDebounceFn = setTimeout(() => {
      const { source: regex } = getRegExp(searchText, { ignoreCase: false, initialSearch: true });

      search.post<string[]>('/search/autocomplete', { regex }).then((response) => {
        setAutoCompleteCompanyList(response.data);
      });
    }, 150);

    return () => clearTimeout(delayDebounceFn);
  }, [searchText]);

  return (
    <Container>
      <AutoComplete
        value={searchText}
        options={options}
        placeholder="기업을 검색하세요"
        onChange={(event) => setSearchText(event ?? '')}
        allowClear={true}
        onSelect={onSelect}
      />
    </Container>
  );
}

export default SearchInput;
