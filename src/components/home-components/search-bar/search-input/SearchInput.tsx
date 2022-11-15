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
    const isHoverIndexValid = 0 <= hoverIndex && hoverIndex < autoCompleteCompanyList.companyCount;

    if (event.key === 'Enter' && event.nativeEvent.isComposing === false) {
      event.preventDefault();

      if (isHoverIndexValid) {
        searchCompany(autoCompleteCompanyList.companies[hoverIndex], false);
      } else {
        searchCompany(inputElement.current!.value, true);
      }

      event.currentTarget.value = '';
      setSearchText('');
    } else if (event.key === '/' && inputElement.current !== document.activeElement) {
      event.preventDefault();

      inputElement.current?.focus();
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
    } else if (event.key === 'ArrowDown' && event.nativeEvent.isComposing == false) {
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
      />
      {searchText && <AutoCompleteContainer searchText={searchText} />}
    </div>
  );
}

export default SearchInput;
