import React, { RefObject } from 'react';
import { css } from '@emotion/react';
import { selectedGovernmentLocationAtoms, selectedSectorAtoms } from '../../../../recoil/atoms';
import SearchOption from './SearchOption';
import SearchService from '../../../../service/SearchService';

type Props = {
  inputElement: RefObject<HTMLInputElement>;
};

function SearchOptionContainer({ inputElement }: Props) {
  const searchCompany = SearchService();

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
      <button
        onClick={() => {
          searchCompany(inputElement.current!.value, true);
        }}
      >
        조회
      </button>
    </div>
  );
}

export default SearchOptionContainer;
