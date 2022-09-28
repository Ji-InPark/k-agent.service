import { CompanyType } from '../../types';
import { css } from '@emotion/react';

type Props = {
  company: CompanyType;
};

function Company({ company }: Props) {
  return (
    <div
      css={css({
        display: 'flex',
        maxWidth: 600,
        width: '50%',
        marginTop: 50,
        borderStyle: 'solid',
      })}
    >
      <div
        css={css({
          width: '50%',
        })}
      >
        <div>{company.companyName}</div>
        <div>기업 업종: {company.companySector}</div>
        <div>기업 규모: {company.companyScale}</div>
        <div>복무 형태: {company.serviceType}</div>
      </div>
      <div
        css={css({
          width: '50%',
        })}
      >
        <div>주소: {company.companyLocation}</div>
        <div>전화 번호: {company.companyPhoneNumber}</div>
        <div>팩스 번호: {company.companyFaxNumber}</div>
      </div>
    </div>
  );
}

export default Company;
