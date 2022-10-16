import { useRecoilValue } from 'recoil';
import { companyListAtoms, selectedPageNumberAtoms } from '../../../recoil/atoms';
import Company from './Company';
import { useEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';

function CompanyList() {
  const companyList = useRecoilValue(companyListAtoms).companies;
  const companyCount = useRecoilValue(companyListAtoms).companyCount;
  const [companies, setCompanies] = useState<JSX.Element[]>([]);
  const resultView = useRef<HTMLDivElement>(null);
  const selectedPageNumber = useRecoilValue(selectedPageNumberAtoms);

  useEffect(() => {
    if (!companyList) return;

    const result = [];

    for (let i = 0; i < Math.min(companyCount - selectedPageNumber, 20); i++) {
      const company = companyList[selectedPageNumber + i];
      result.push(<Company key={company.id} company={company} />);
    }

    resultView.current?.scroll(0, 0);

    setCompanies(result);
  }, [companyList, selectedPageNumber]);

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
