import { useRecoilValue } from 'recoil';
import { companyListAtoms } from '../../../recoil/atoms';
import { useEffect, useRef } from 'react';
import CompanyCard from './CompanyCard';
import styled from '@emotion/styled';

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
  const companyList = useRecoilValue(companyListAtoms).content;
  const resultView = useRef<HTMLDivElement>(null);

  useEffect(() => {
    resultView.current!.scroll(0, 0);
  }, [companyList]);

  return (
    <CompanyListContainer ref={resultView}>
      <CompanyListWrapper>
        {companyList.map((company) => (
          <CompanyItem key={company.id}>
            <CompanyCard company={company} />
          </CompanyItem>
        ))}
      </CompanyListWrapper>
    </CompanyListContainer>
  );
}

export default CompanyList;
