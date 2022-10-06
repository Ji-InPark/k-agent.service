import { css } from '@emotion/react';
import { useEffect, useRef } from 'react';
import { isNullOrWhiteSpace } from '../../utils';
import { useSetRecoilState } from 'recoil';
import { companyListAtoms, isLoadingAtoms } from '../../recoil/atoms';
import { CompanyListType } from '../../types';
import search from '../../axios';

function SearchBar() {
  const setCompanyList = useSetRecoilState(companyListAtoms);
  const inputElement = useRef<HTMLInputElement>(null);
  const setIsLoading = useSetRecoilState(isLoadingAtoms);

  useEffect(() => {
    const focus = (e: any) => {
      if (e.key === '/' && !inputElement.current?.onfocus) {
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

  function onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter' && event.nativeEvent.isComposing === false) {
      event.preventDefault();

      const inputText = event.currentTarget.value;

      event.currentTarget.value = '';

      if (isNullOrWhiteSpace(inputText)) {
        return;
      }

      setIsLoading(true);
      search
        .get<CompanyListType>(inputText)
        .then((response) => {
          setCompanyList(response.data.companies);
          setIsLoading(false);
        })
        .catch((error) => console.log(error));
    }
  }
  return (
    <div
      css={css({
        display: 'grid',
        gridTemplateRows: '1fr 1fr 1fr',
        alignItems: 'center',
        width: '100%',
        marginBottom: 25,
      })}
    >
      <p
        css={css({
          textAlign: 'center',
          marginTop: '2rem',
          fontSize: '1rem',
        })}
      >
        기업을 검색하세요.
      </p>
      <input
        ref={inputElement}
        onKeyDown={onKeyDown}
        css={css({
          textAlign: 'center',
          justifySelf: 'center',
          fontSize: 42,
          width: '70%',
          maxWidth: 500,
          height: 50,
        })}
        type="text"
        name=""
        id=""
      />
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
        <select>
          <option value="none">=== 지역 ===</option>
          <option value="korean">한국어</option>
          <option value="english">영어</option>
          <option value="chinese">중국어</option>
          <option value="spanish">스페인어</option>
        </select>
        <div>test</div>
        <button>조회</button>
      </div>
    </div>
  );
}

export default SearchBar;
