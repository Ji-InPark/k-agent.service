import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import search from '../../../axios';
import { useSetRecoilState } from 'recoil';
import { selectedGovernmentLocationAtoms, selectedSectorAtoms } from '../../../recoil/atoms';

type Props = {
  searchCompany: () => void;
};

function SearchOption({ searchCompany }: Props) {
  const [governmentLocations, setGovernmentLocations] = useState<string[]>([]);
  const [sectors, setSectors] = useState<string[]>([]);
  const setSelectedGovernmentLocation = useSetRecoilState(selectedGovernmentLocationAtoms);
  const setSelectedSector = useSetRecoilState(selectedSectorAtoms);

  function getGovernmentLocations() {
    search.get<Array<string>>('/government-locations').then((response) => {
      setGovernmentLocations(response.data);
    });
  }

  function getSectors() {
    search.get<Array<string>>('/sectors').then((response) => {
      setSectors(response.data);
    });
  }

  useEffect(() => {
    getGovernmentLocations();
    getSectors();
  });

  function convertToOptionElements(strings: string[]) {
    return (
      <>
        {strings.map((s) => {
          return (
            <option key={s.toString()} value={s.toString()}>
              {s}
            </option>
          );
        })}
      </>
    );
  }

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
      <select onChange={(e) => setSelectedGovernmentLocation(e.target.value)}>
        <option
          css={css({
            textAlign: 'center',
          })}
          value=""
        >
          전체 지역
        </option>
        {convertToOptionElements(governmentLocations)}
      </select>
      <select
        css={css({
          width: '100%',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
        })}
        onChange={(e) => setSelectedSector(e.target.value)}
      >
        <option
          css={css({
            textAlign: 'center',
          })}
          value=""
        >
          전체 업종
        </option>
        {convertToOptionElements(sectors)}
      </select>
      <button onClick={searchCompany}>조회</button>
    </div>
  );
}

export default SearchOption;
