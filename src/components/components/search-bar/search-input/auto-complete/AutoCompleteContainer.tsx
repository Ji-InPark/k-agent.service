import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { getRegExp } from 'korean-regexp';
import search from '../../../../../axios';
import { CompanyListType } from '../../../../../types';
import AutoCompleteItem from './AutoCompleteItem';

type Props = {
  searchText: string;
};

function AutoCompleteContainer({ searchText }: Props) {
  const regex = getRegExp(searchText, { ignoreCase: false, initialSearch: true }).source;
  const [autoCompleteItems, setAutoCompleteItems] = useState<Array<JSX.Element>>();

  useEffect(() => {
    search.post<CompanyListType>('/search/autocomplete', { regex }).then((response) => {
      const items = response.data.companies.map((it) => <AutoCompleteItem company={it} regex={regex} />);

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
        border: 'solid',
      })}
    >
      {autoCompleteItems}
    </div>
  );
}

export default AutoCompleteContainer;
