import React, { RefObject, useEffect, useState } from 'react';
import { css } from '@emotion/react';
import AutoCompleteContainer from './auto-complete/AutoCompleteContainer';

type Props = {
  inputElement: RefObject<HTMLInputElement>;
  searchCompany: () => void;
};

function SearchInput({ inputElement, searchCompany }: Props) {
  const [searchText, setSearchText] = useState<string>('');
  const [isInputOnFocus, setIsInputOnFocus] = useState<boolean>(false);

  useEffect(() => {
    const focus = (e: any) => {
      if (e.key === '/' && inputElement.current !== document.activeElement) {
        e.preventDefault();

        inputElement.current?.focus();
      } else if (e.key === 'Escape') {
        e.preventDefault();

        inputElement.current?.blur();
      }
    };
    window.addEventListener('keydown', focus);
    return () => window.removeEventListener('keydown', focus);
  });

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && event.nativeEvent.isComposing === false) {
      event.preventDefault();

      searchCompany();

      event.currentTarget.value = '';
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
