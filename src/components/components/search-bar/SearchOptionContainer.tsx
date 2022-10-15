import React from 'react';
import { css } from '@emotion/react';
import { selectedGovernmentLocationAtoms, selectedSectorAtoms } from '../../../recoil/atoms';
import SearchOption from './SearchOption';

type Props = {
  searchCompany: () => void;
};

function SearchOptionContainer({ searchCompany }: Props) {
  return (
    <div
      css={css({
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '2rem',
        justifySelf: 'center',
        width: '70%',
        maxWidth: 500,
      })}
    >
      <SearchOption recoilVariable={selectedGovernmentLocationAtoms} apiUrl={'/government-locations'} defaultText={'전체 지역'} />
      <SearchOption recoilVariable={selectedSectorAtoms} apiUrl={'/sectors'} defaultText={'전체 업종'} />
      <button onClick={searchCompany}>조회</button>
    </div>
  );
}

export default SearchOptionContainer;
