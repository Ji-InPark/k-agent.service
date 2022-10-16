import { useRecoilValue, useSetRecoilState } from 'recoil';
import { companyListAtoms, isLoadingAtoms } from '../../../recoil/atoms';
import Company from './Company';
import { useEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';

function CompanyList() {
  const companyList = useRecoilValue(companyListAtoms);
  const [companies, setCompanies] = useState<JSX.Element[]>([]);
  const setIsLoading = useSetRecoilState(isLoadingAtoms);
  const resultView = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!companyList) return;

    const result = companyList.companies.map((company) => {
      return <Company key={company.id} company={company} />;
    });

    resultView.current?.scroll(0, 0);

    setCompanies(result);
  }, [companyList]);

  useEffect(() => setIsLoading(false), [companies]);

  return (
    <div
      ref={resultView}
      css={css({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100vw',
        maxHeight: '63vh',
        overflow: 'auto',
      })}
    >
      {companies}
    </div>
  );
}

export default CompanyList;
