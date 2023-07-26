import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { RecoilState, useSetRecoilState } from 'recoil';
import { Select as AntdSelect } from 'antd';
import search from '../../../../axios';
import styled from '@emotion/styled';

const Select = styled(AntdSelect)`
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

type Props = {
  recoilVariable: RecoilState<string>;
  apiUrl: string;
  defaultText: string;
};

function SearchOption({ recoilVariable, apiUrl, defaultText }: Props) {
  const [strings, setStrings] = useState<Array<string>>([]);
  const setSelectedString = useSetRecoilState(recoilVariable);
  const cachedItem = localStorage.getItem(defaultText);

  const options = useMemo(() => {
    if (!strings) {
      return;
    }

    return [{ value: defaultText, label: defaultText }, ...strings.map((value) => ({ value, label: value }))];
  }, [strings, defaultText]);

  const onChange = useCallback(
    (selectedValue: string) => {
      if (!selectedValue) {
        return;
      }

      setSelectedString(selectedValue);
      localStorage.setItem(defaultText, selectedValue);
    },
    [defaultText],
  );

  useEffect(() => {
    search.get<Array<string>>(apiUrl).then((response) => {
      setStrings(response.data);
    });
    setSelectedString(cachedItem ?? '');
  }, []);

  if (!strings.length) {
    return <></>;
  }

  return <Select defaultValue={defaultText} options={options} onChange={(value) => onChange(value as string)} />;
}

export default SearchOption;
