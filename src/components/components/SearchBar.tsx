import { css } from '@emotion/react';
import { useEffect, useRef, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { companyListAtoms, isLoadingAtoms } from '../../recoil/atoms';
import { CompanyListType } from '../../types';
import search from '../../axios';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';

function SearchBar() {
  const setCompanyList = useSetRecoilState(companyListAtoms);
  const inputElement = useRef<HTMLInputElement>(null);
  const setIsLoading = useSetRecoilState(isLoadingAtoms);
  const [governmentLocation, setGovernmentLocation] = useState<String>('');
  const [sector, setSector] = useState<String>('');
  const [governmentLocations, setGovernmentLocations] = useState<EmotionJSX.Element[]>([]);
  const [sectors, setSectors] = useState<EmotionJSX.Element[]>([]);

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

  function getGovernmentLocations() {
    search.get<Array<String>>('/government-locations').then((response) => {
      setGovernmentLocations(
        response.data.map((s) => {
          return <option value={s.toString()}>{s}</option>;
        }),
      );
    });
  }

  function getSectors() {
    search.get<Array<String>>('/sectors').then((response) => {
      setSectors(
        response.data.map((s) => {
          return <option value={s.toString()}>{s}</option>;
        }),
      );
    });
  }

  useEffect(() => {
    getGovernmentLocations();
    getSectors();
  }, []);

  function searchCompany() {
    const inputText = inputElement.current?.value;

    setIsLoading(true);

    search
      .post<CompanyListType>('/search', {
        companyName: inputText,
        governmentLocation: governmentLocation,
        sector: sector,
      })
      .then((response) => {
        setCompanyList(response.data);
      })
      .catch((error) => console.log(error));
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter' && event.nativeEvent.isComposing === false) {
      event.preventDefault();

      searchCompany();

      event.currentTarget.value = '';
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
          height: '2.5rem',
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
        <select onChange={(e) => setGovernmentLocation(e.target.value)}>
          <option
            css={css({
              textAlign: 'center',
            })}
            value=""
          >
            전체 지역
          </option>
          {governmentLocations}
        </select>
        <select
          css={css({
            width: '100%',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
          })}
          onChange={(e) => setSector(e.target.value)}
        >
          <option
            css={css({
              textAlign: 'center',
            })}
            value=""
          >
            전체 업종
          </option>
          {sectors}
        </select>
        <button onClick={searchCompany}>조회</button>
      </div>
    </div>
  );
}

export default SearchBar;
