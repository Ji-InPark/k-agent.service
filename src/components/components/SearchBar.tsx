import { css } from '@emotion/react';
import { useRef } from 'react';
import { isNullOrWhiteSpace } from '../../utils';
import { useSetRecoilState } from 'recoil';
import { companyListAtoms, isLoadingAtoms } from '../../recoil/atoms';
import { CompanyListType } from '../../types';
import search from '../../axios';

function SearchBar() {
  const setCompanyList = useSetRecoilState(companyListAtoms);
  const inputElement = useRef<HTMLInputElement>(null);
  const setIsLoading = useSetRecoilState(isLoadingAtoms);
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

      inputElement.current?.blur();
    }
  }
  return (
    <div
      css={css({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      })}
    >
      <p
        css={css({
          textAlign: 'center',
          marginTop: 50,
        })}
      >
        기업을 검색하세요.
      </p>
      <input
        onKeyDown={onKeyDown}
        css={css({
          textAlign: 'center',
          fontSize: 42,
          width: '40%',
          maxWidth: 500,
          height: 50,
        })}
        type="text"
        name=""
        id=""
      />
    </div>
  );
}

export default SearchBar;
