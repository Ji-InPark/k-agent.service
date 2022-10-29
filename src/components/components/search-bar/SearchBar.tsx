import { css } from '@emotion/react';
import { useEffect, useRef } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { companyListAtoms, isLoadingAtoms, selectedGovernmentLocationAtoms, selectedPageNumberAtoms, selectedSectorAtoms } from '../../../recoil/atoms';
import { CompanyListType } from '../../../types';
import search from '../../../axios';
import SearchOptionContainer from './SearchOptionContainer';
import PaginationContainer from './PaginationContainer';

function SearchBar() {
  const setCompanyList = useSetRecoilState(companyListAtoms);
  const inputElement = useRef<HTMLInputElement>(null);
  const setIsLoading = useSetRecoilState(isLoadingAtoms);
  const governmentLocation = useRecoilValue(selectedGovernmentLocationAtoms);
  const sector = useRecoilValue(selectedSectorAtoms);
  const setSelectedPageNumber = useSetRecoilState(selectedPageNumberAtoms);

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

  function searchCompany() {
    const inputText = inputElement.current?.value;

    setIsLoading(true);

    setSelectedPageNumber(0);

    search
      .post<CompanyListType>('/search', {
        companyName: inputText,
        governmentLocation: governmentLocation,
        sector: sector,
      })
      .then((response) => {
        setCompanyList(response.data);
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter' && event.nativeEvent.isComposing === false) {
      event.preventDefault();

      searchCompany();

      event.currentTarget.value = '';
    }
  }

  return (
    <div css={css({ marginLeft: 'auto', marginRight: 'auto' })}>
      <div
        css={css({
          display: 'grid',
          gridTemplateRows: 'repeat(3, 1fr)',
          gap: '1rem',
          alignItems: 'center',
          padding: '1.5rem',
        })}
      >
        <input
          ref={inputElement}
          onKeyDown={onKeyDown}
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
        <SearchOptionContainer searchCompany={searchCompany} />
        <PaginationContainer />
      </div>
    </div>
  );
}

export default SearchBar;
