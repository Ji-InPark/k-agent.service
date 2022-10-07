import { useRecoilValue, useSetRecoilState } from 'recoil';
import { companyListAtoms, isLoadingAtoms } from '../../../recoil/atoms';
import Company from './Company';
import { useEffect, useState } from 'react';
import { css } from '@emotion/react';

function CompanyList() {
  const companyList = useRecoilValue(companyListAtoms);
  const [companies, setCompanies] = useState<JSX.Element[]>([]);
  const setIsLoading = useSetRecoilState(isLoadingAtoms);

  useEffect(() => {
    if (!companyList) return;

    const result = companyList.companies.map((company) => {
      return <Company company={company} />;
    });

    setCompanies(result);
  }, [companyList]);

  useEffect(() => setIsLoading(false), [companies]);

  return (
    <div
      css={css({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100vw',
        maxHeight: '63vh',
        overflow: 'auto',
      })}
    >
      <div>검색 결과: {companyList.companyCount}건</div>
      {companies}
    </div>
  );
}

export default CompanyList;
