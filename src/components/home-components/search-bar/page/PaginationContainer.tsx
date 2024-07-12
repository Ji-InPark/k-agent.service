import { css } from '@emotion/react';
import PageButton from './PageButton';
import { useRecoilValue } from 'recoil';
import { companyResponseAtoms } from '../../../../recoil/atoms';

function PaginationContainer() {
  const companyResponse = useRecoilValue(companyResponseAtoms);
  const selectedPageNumber = companyResponse.pageable.pageNumber;
  const firstPageNumberInCurrentContainer = Math.floor(selectedPageNumber / 10) * 10 + 1;

  const currentPageNumberLength = Math.min(Math.max(companyResponse.totalPages - (firstPageNumberInCurrentContainer + 9), 0), 10);
  const currentPageNumbers = Array.from(Array(currentPageNumberLength)).map((_, index) => firstPageNumberInCurrentContainer + index);

  const handleSelectPage = (value: number) => () => {
    console.log(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      css={css({
        display: 'grid',
        gridAutoFlow: 'column',
        gap: '0.2rem',
        justifySelf: 'center',
      })}
    >
      <PageButton text="<<" onClick={handleSelectPage(0)} />
      <PageButton text="<" onClick={handleSelectPage(0)} />
      {currentPageNumbers.map((it) => {
        const pageNumber = firstPageNumberInCurrentContainer + Number(it);
        if (pageNumber > companyResponse.totalPages) return null;
        return <PageButton key={it} text={it} onClick={handleSelectPage(Number(it) - 1)} />;
      })}
      <PageButton text=">" onClick={handleSelectPage(firstPageNumberInCurrentContainer + 10)} />
      <PageButton text=">>" onClick={handleSelectPage(companyResponse.totalPages - 1)} />
    </div>
  );
}

export default PaginationContainer;
