import { useRecoilValue } from 'recoil';
import { companyListAtoms } from '../../recoil/atoms';
import Company from './Company';
import { useEffect, useState } from 'react';

function CompanyList() {
  const companyList = useRecoilValue(companyListAtoms);
  const [companies, setCompanies] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const result = companyList.map((company) => {
      return <Company company={company} />;
    });

    setCompanies(result);
  }, [companyList]);

  return <div>{companies}</div>;
}

export default CompanyList;
