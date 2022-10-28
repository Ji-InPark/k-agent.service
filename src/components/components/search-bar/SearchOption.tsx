import React, { useEffect, useState } from 'react';
import { RecoilState, useSetRecoilState } from 'recoil';
import { css } from '@emotion/react';
import search from '../../../axios';
import '../../../utils/index';

type Props = {
  recoilVariable: RecoilState<string>;
  apiUrl: string;
  defaultText: string;
};

function SearchOption({ recoilVariable, apiUrl, defaultText }: Props) {
  const [strings, setStrings] = useState<Array<string>>([]);
  const setSelectedString = useSetRecoilState(recoilVariable);
  const cachedItem = localStorage.getItem(defaultText);

  useEffect(() => {
    search.get<Array<string>>(apiUrl).then((response) => {
      setStrings(response.data);
    });
    setSelectedString(cachedItem ?? '');
  }, []);

  if (strings.isEmpty()) return <select></select>;

  return (
    <select
      css={css({
        width: '100%',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
      })}
      onChange={(e) => {
        setSelectedString(e.target.value);
        localStorage.setItem(defaultText, e.target.value);
      }}
      value={cachedItem ?? ''}
    >
      <option
        css={css({
          textAlign: 'center',
        })}
        value=""
      >
        {defaultText}
      </option>
      {strings.map((str) => {
        return (
          <option key={str} value={str}>
            {str}
          </option>
        );
      })}
    </select>
  );
}

export default SearchOption;
