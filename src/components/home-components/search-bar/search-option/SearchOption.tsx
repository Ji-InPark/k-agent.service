import React, { useCallback, useEffect, useMemo, useState } from 'react';
import styled from '@emotion/styled';
import { RecoilState, useSetRecoilState } from 'recoil';
import { Select as AntdSelect } from 'antd';
import search from '@/axios';

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
  const [optionStrings, setOptionStrings] = useState<Array<string>>([]);
  const setSelectedOptionString = useSetRecoilState(recoilVariable);
  const cachedItem = localStorage.getItem(defaultText);

  const options = useMemo(() => {
    if (!optionStrings) return;

    return [{ value: defaultText, label: defaultText }, ...optionStrings.map((value) => ({ value, label: value }))];
  }, [optionStrings, defaultText]);

  const onChange = useCallback(
    (selectedValue: string) => {
      if (!selectedValue) return;

      setSelectedOptionString(selectedValue);
      localStorage.setItem(defaultText, selectedValue);
    },
    [defaultText],
  );

  useEffect(() => {
    search.get<Array<string>>(apiUrl).then((response) => {
      setOptionStrings(response.data);
    });
    setSelectedOptionString(cachedItem ?? defaultText);
  }, []);

  if (!optionStrings.length) {
    return <></>;
  }

  return <Select defaultValue={cachedItem ?? defaultText} options={options} onChange={(value) => onChange(value as string)} />;
}

export default SearchOption;
