import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { getRegExp } from 'korean-regexp';
import search from '../../../../../axios';
import { CompanyListType } from '../../../../../types';
import AutoCompleteItem from './AutoCompleteItem';
import { useSetRecoilState } from 'recoil';
import { autocompleteCompanyListAtoms } from '../../../../../recoil/atoms';

type Props = {
  searchText: string;
};

function AutoCompleteContainer({ searchText }: Props) {
  const regex = getRegExp(searchText, { ignoreCase: false, initialSearch: true }).source;
  const [autoCompleteItems, setAutoCompleteItems] = useState<Array<JSX.Element>>();
  const setAutoCompleteCompanyList = useSetRecoilState(autocompleteCompanyListAtoms);

  useEffect(() => {
    search.post<CompanyListType>('/search/autocomplete', { regex }).then((response) => {
      setAutoCompleteCompanyList(response.data);

      const items = response.data.companies.map((it, index) => <AutoCompleteItem company={it} index={index} />);

      setAutoCompleteItems(items);
    });
  }, [searchText]);

  if (autoCompleteItems?.length == 0) return <></>;

  return (
    <div
      css={css({
        position: 'absolute',
        marginTop: '3rem',
        background: 'white',
        width: '70%',
        maxWidth: 500,
        borderStyle: 'solid',
        borderRadius: '0.1rem',
      })}
    >
      {autoCompleteItems}
    </div>
  );
}

export default AutoCompleteContainer;
