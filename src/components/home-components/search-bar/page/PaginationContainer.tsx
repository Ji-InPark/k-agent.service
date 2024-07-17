import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';
import { companyResponseAtoms } from '@atoms/atoms';
import useCompany from '@hooks/useCompany';
import PageButton from '@components/home-components/search-bar/page/PageButton';

const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 0.2rem;
  justify-self: center;
`;

function PaginationContainer() {
  const companyResponse = useRecoilValue(companyResponseAtoms);
  const selectedPageNumber = companyResponse.pageable.pageNumber;
  const firstPageNumberInCurrentContainer = Math.floor(selectedPageNumber / 10) * 10;

  const currentPageNumberLength = Math.min(Math.max(companyResponse.totalPages - firstPageNumberInCurrentContainer, 0), 10);
  const currentPageNumbers = Array.from(Array(currentPageNumberLength)).map((_, index) => firstPageNumberInCurrentContainer + index + 1);

  const { changePage } = useCompany();

  const handleSelectPage = (page: number) => () => {
    changePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Container>
      <PageButton text="<<" onClick={handleSelectPage(0)} />
      <PageButton text="<" onClick={handleSelectPage(Math.max(firstPageNumberInCurrentContainer - 10, 0))} />
      {currentPageNumbers.map((pageNumber) => {
        if (pageNumber > companyResponse.totalPages) return null;
        return <PageButton key={pageNumber} text={pageNumber} onClick={handleSelectPage(Number(pageNumber) - 1)} />;
      })}
      <PageButton text=">" onClick={handleSelectPage(firstPageNumberInCurrentContainer + 10)} />
      <PageButton text=">>" onClick={handleSelectPage(Math.floor(companyResponse.totalPages / 10) * 10)} />
    </Container>
  );
}

export default PaginationContainer;
