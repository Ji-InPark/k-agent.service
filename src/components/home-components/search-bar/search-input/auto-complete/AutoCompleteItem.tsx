import React from 'react';
import { css } from '@emotion/react';
import { useRecoilState } from 'recoil';
import { autocompleteHoverIndexAtoms } from '../../../../../recoil/atoms';
import SearchService from '../../../../../service/SearchService';

type Props = {
  companyName: string;
  index: number;
};

function AutoCompleteItem({ companyName, index }: Props) {
  const searchCompany = SearchService();
  const [hoverIndex, setHoverIndex] = useRecoilState(autocompleteHoverIndexAtoms);

  return (
    <div
      onMouseEnter={() => setHoverIndex(index)}
      onClick={() => searchCompany({ searchText: companyName, useOption: false })}
      css={css({
        padding: '0.5rem',
        background: hoverIndex == index ? '#EEEEEE' : 'white',
        '&:hover': {
          cursor: 'pointer',
        },
      })}
    >
      {companyName}
    </div>
  );
}

export default AutoCompleteItem;
