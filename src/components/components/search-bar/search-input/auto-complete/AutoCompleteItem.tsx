import React from 'react';
import { CompanyType } from '../../../../../types';
import { css } from '@emotion/react';
import { useRecoilState } from 'recoil';
import { autocompleteHoverIndexAtoms } from '../../../../../recoil/atoms';
import SearchService from '../../../../../service/SearchService';

type Props = {
  company: CompanyType;
  index: number;
};

function AutoCompleteItem({ company, index }: Props) {
  const searchCompany = SearchService();
  const [hoverIndex, setHoverIndex] = useRecoilState(autocompleteHoverIndexAtoms);

  return (
    <div
      onMouseEnter={() => setHoverIndex(index)}
      onClick={() => searchCompany(company.companyName, false)}
      css={css({
        padding: '0.5rem',
        background: hoverIndex == index ? '#EEEEEE' : 'white',
        '&:hover': {
          cursor: 'pointer',
        },
      })}
    >
      {company.companyName}
    </div>
  );
}

export default AutoCompleteItem;
