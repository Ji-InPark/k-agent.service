import React, { useEffect, useState } from 'react';
import search from '@/axios';
import UpdateInformationItem from '@components/information-components/UpdateInformationItem';

function CompanyUpdateHistoryContainer() {
  const [companyUpdateHistory, setCompanyUpdateHistory] = useState<String[]>([]);

  useEffect(() => {
    search.get('/company-update-history').then((response) => {
      setCompanyUpdateHistory(response.data.map((it: any) => it.history.replace(/(\d+)-(\d+)-(\d+)/, '$1년 $2월 $3일')));
    });
  }, []);

  return (
    <ul>
      {companyUpdateHistory.map((it, index) =>
        index == 0 ? <UpdateInformationItem>{`${it} (현재 적용)`}</UpdateInformationItem> : <UpdateInformationItem>{it}</UpdateInformationItem>,
      )}
    </ul>
  );
}

export default CompanyUpdateHistoryContainer;
