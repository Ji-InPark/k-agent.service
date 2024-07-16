import { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';
import { companyResponseAtoms } from '@atoms/atoms';
import CompanyCard from '@components/home-components/company/CompanyCard';

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
  const companies = useRecoilValue(companyResponseAtoms).content;
  const resultView = useRef<HTMLDivElement>(null);

  useEffect(() => {
    resultView.current!.scroll(0, 0);
  }, [companies]);

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
