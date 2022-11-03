import React from 'react';
import { CompanyType } from '../../../../../types';

type Props = {
  company: CompanyType;
  regex: string;
};

function AutoCompleteItem({ company }: Props) {
  return <div>{company.companyName}</div>;
}

export default AutoCompleteItem;
