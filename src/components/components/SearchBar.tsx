import { css } from '@emotion/react';
import { useRef } from 'react';
import { isNullOrWhiteSpace } from '../../utils';
import { useSetRecoilState } from 'recoil';
import { companyListAtoms } from '../../recoil/atoms';
import axios from 'axios';
import { CompanyListType } from '../../types';

function SearchBar() {
  const setCompanyList = useSetRecoilState(companyListAtoms);
  const inputElement = useRef<HTMLInputElement>(null);
  function onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter' && event.nativeEvent.isComposing === false) {
      event.preventDefault();

      const inputText = event.currentTarget.value;

      event.currentTarget.value = '';

      if (isNullOrWhiteSpace(inputText)) {
        return;
      }

      axios.get<CompanyListType>('https://api.anydomaintotest.ml/api/search/' + inputText).then((response) => {
        setCompanyList(response.data.companies);
      });

      inputElement.current?.blur();
    }
  }
  return (
    <div>
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
          width: 500,
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
