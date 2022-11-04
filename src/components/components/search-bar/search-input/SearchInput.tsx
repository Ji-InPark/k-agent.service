import React, { RefObject, useEffect, useState } from 'react';
import { css } from '@emotion/react';
import AutoCompleteContainer from './auto-complete/AutoCompleteContainer';
import { useRecoilState, useRecoilValue } from 'recoil';
import { autocompleteCompanyListAtoms, autocompleteHoverIndexAtoms } from '../../../../recoil/atoms';

type Props = {
  inputElement: RefObject<HTMLInputElement>;
  searchCompany: (searchText: string | undefined, useOption: boolean) => void;
};

function SearchInput({ inputElement, searchCompany }: Props) {
  const [searchText, setSearchText] = useState<string>('');
  const [isInputOnFocus, setIsInputOnFocus] = useState<boolean>(false);
  const [hoverIndex, setHoverIndex] = useRecoilState(autocompleteHoverIndexAtoms);
  const autoCompleteCompanyList = useRecoilValue(autocompleteCompanyListAtoms);

  useEffect(() => {
    return setHoverIndex(-1);
  }, [isInputOnFocus]);

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const isHoverIndexValid = 0 <= hoverIndex && hoverIndex < autoCompleteCompanyList.companyCount;

    if (event.key === 'Enter' && event.nativeEvent.isComposing === false) {
      event.preventDefault();

      if (isHoverIndexValid) {
        searchCompany(autoCompleteCompanyList.companies[hoverIndex].companyName, false);
      } else {
        searchCompany(inputElement.current?.value, true);
      }

      event.currentTarget.value = '';
      setSearchText('');
    } else if (event.key === 'Tab' && isHoverIndexValid) {
      event.preventDefault();

      const text = autoCompleteCompanyList.companies[hoverIndex].companyName;

      event.currentTarget.value = text;
      setSearchText(text);

      setHoverIndex(0);
    } else if (event.key === '/' && inputElement.current !== document.activeElement) {
      event.preventDefault();

      inputElement.current?.focus();
    } else if (event.key === 'Escape') {
      event.preventDefault();

      inputElement.current?.blur();
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();

      if (hoverIndex >= 0) setHoverIndex((prev) => prev - 1);
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();

      setHoverIndex((prev) => (prev + 1) % autoCompleteCompanyList.companyCount);
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
        onFocus={() => setIsInputOnFocus(true)}
        onBlur={() => setIsInputOnFocus(false)}
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
      {searchText && isInputOnFocus && <AutoCompleteContainer searchText={searchText} />}
    </div>
  );
}

export default SearchInput;
