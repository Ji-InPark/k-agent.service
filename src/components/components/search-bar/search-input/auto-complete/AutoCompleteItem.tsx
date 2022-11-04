import React from 'react';
import { CompanyType } from '../../../../../types';
import { css } from '@emotion/react';
import { useRecoilState } from 'recoil';
import { autocompleteHoverIndexAtoms } from '../../../../../recoil/atoms';

type Props = {
  company: CompanyType;
  index: number;
};

function AutoCompleteItem({ company, index }: Props) {
  const [hoverIndex, setHoverIndex] = useRecoilState(autocompleteHoverIndexAtoms);

  return (
    <div
      onMouseEnter={() => setHoverIndex(index)}
      css={css({
        padding: '0.5rem',
        background: hoverIndex == index ? '#EEEEEE' : 'white',
      })}
    >
      {company.companyName}
    </div>
  );
}

export default AutoCompleteItem;
