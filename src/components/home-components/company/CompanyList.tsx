import { useRecoilValue } from 'recoil';
import { companyListAtoms, selectedPageNumberAtoms } from '../../../recoil/atoms';
import { useEffect, useRef, useState } from 'react';
import CompanyCard from './CompanyCard';
import styled from '@emotion/styled';
import { Company } from '../../../types';

const CompanyListContainer = styled.div`
  width: 100%;
  max-width: 38rem;
  display: flex;
  margin-left: auto;
  margin-right: auto;
`;

const CompanyListWrapper = styled.ul`
  display: grid;
  gap: 1rem;
  padding: 1rem;
`;

const CompanyItem = styled.li`
  list-style-type: none;
`;

function CompanyList() {
  const companyList = useRecoilValue(companyListAtoms).companies;
  const [companies, setCompanies] = useState<Company[]>([]);
  const resultView = useRef<HTMLDivElement>(null);
  const selectedPageNumber = useRecoilValue(selectedPageNumberAtoms);

  useEffect(() => {
    resultView.current!.scroll(0, 0);

    const offset = 20;
    const pageOffset = selectedPageNumber * offset;
    setCompanies(companyList.slice(pageOffset, pageOffset + offset));
  }, [companyList, selectedPageNumber]);

  return (
    <CompanyListContainer ref={resultView}>
      <CompanyListWrapper>
        {companies.map((company) => (
          <CompanyItem key={company.id}>
            <CompanyCard company={company} />
          </CompanyItem>
        ))}
      </CompanyListWrapper>
    </CompanyListContainer>
  );
}

export default CompanyList;
