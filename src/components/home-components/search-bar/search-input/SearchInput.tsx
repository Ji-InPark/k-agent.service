import React, { RefObject, useEffect, useState } from 'react';
import { css } from '@emotion/react';
import AutoCompleteContainer from './auto-complete/AutoCompleteContainer';
import { useRecoilState, useRecoilValue } from 'recoil';
import { autocompleteCompanyListAtoms, autocompleteHoverIndexAtoms, companyListAtoms } from '../../../../recoil/atoms';
import SearchService from '../../../../service/SearchService';

type Props = {
  inputElement: RefObject<HTMLInputElement>;
};

function SearchInput({ inputElement }: Props) {
  const [searchText, setSearchText] = useState<string>('');
  const [hoverIndex, setHoverIndex] = useRecoilState(autocompleteHoverIndexAtoms);
  const autoCompleteCompanyList = useRecoilValue(autocompleteCompanyListAtoms);
  const companyList = useRecoilValue(companyListAtoms);
  const searchCompany = SearchService();

  useEffect(() => {
    inputElement.current!.value = '';
    setSearchText('');
  }, [companyList]);

  useEffect(() => {
    if (hoverIndex == -1) inputElement.current!.value = searchText;
  }, [hoverIndex]);

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && !event.nativeEvent.isComposing) {
      event.preventDefault();

      const isHoverIndexValid = 0 <= hoverIndex && hoverIndex < autoCompleteCompanyList.companyCount;
      const inputText = isHoverIndexValid ? autoCompleteCompanyList.companies[hoverIndex] : inputElement.current!.value;
      const useOption = !isHoverIndexValid;

      searchCompany({ searchText: inputText, useOption });

      event.currentTarget.value = '';
      setSearchText('');
    } else if (event.key === 'Escape') {
      event.preventDefault();

      inputElement.current?.blur();
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();

      const nextIndex = hoverIndex - 1;

      if (hoverIndex >= 0) {
        setHoverIndex(nextIndex);
        inputElement.current!.value = autoCompleteCompanyList.companies[nextIndex];
      }
    } else if (event.key === 'ArrowDown' && !event.nativeEvent.isComposing) {
      event.preventDefault();

      if (autoCompleteCompanyList.companyCount == 0) return;

      const nextIndex = (hoverIndex + 1) % autoCompleteCompanyList.companyCount;

      setHoverIndex(nextIndex);
      inputElement.current!.value = autoCompleteCompanyList.companies[nextIndex];
    }
  };

  return (
    <div
      css={css({
        display: 'flex',
        justifyContent: 'center',
      })}
    >
      <input
        ref={inputElement}
        onKeyDown={onKeyDown}
        onChange={(event) => setSearchText(event.target.value)}
        css={css({
          textAlign: 'center',
          justifySelf: 'center',
          fontSize: '2rem',
          width: '70%',
          maxWidth: 500,
          height: '2rem',
        })}
        type="text"
        placeholder={'기업을 검색하세요'}
        enterKeyHint={'enter'}
      />
      {searchText && <AutoCompleteContainer searchText={searchText} />}
    </div>
  );
}

export default SearchInput;
