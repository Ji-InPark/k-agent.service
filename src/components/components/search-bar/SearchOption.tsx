import React, { useEffect, useState } from 'react';
import { RecoilState, useSetRecoilState } from 'recoil';
import { css } from '@emotion/react';
import search from '../../../axios';

type Props = {
  recoilVariable: RecoilState<string>;
  apiUrl: string;
  defaultText: string;
};

function SearchOption({ recoilVariable, apiUrl, defaultText }: Props) {
  const [strings, setStrings] = useState<Array<string>>([]);
  const setSelectedString = useSetRecoilState(recoilVariable);

  useEffect(() => {
    search.get<Array<string>>(apiUrl).then((response) => {
      setStrings(response.data);
    });
  });

  return (
    <select
      css={css({
        width: '100%',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
      })}
      onChange={(e) => setSelectedString(e.target.value)}
    >
      <option
        css={css({
          textAlign: 'center',
        })}
        value=""
      >
        {defaultText}
      </option>
      {strings.map((s) => {
        return (
          <option key={s.toString()} value={s.toString()}>
            {s}
          </option>
        );
      })}
    </select>
  );
}

export default SearchOption;
