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
        flexDirection: 'column',
        maxWidth: 700,
        width: '80%',
        marginTop: 50,
        borderRadius: 10,
        boxSizing: 'border-box',
        padding: 5,
        boxShadow: 'rgba(149, 157, 165, 0.4) 0px 8px 24px',
      })}
    >
      <div css={css({ textAlign: 'center', fontSize: '2.4rem' })}>{company.companyName}</div>
      <div>
        <hr />
      </div>
      <div
        css={css({
          display: 'flex',
          alignSelf: 'center',
          width: '70%',
          minHeight: 100,
        })}
      >
        <div
          css={css({
            display: 'flex',
            flexDirection: 'column',
            width: '70%',
            fontSize: '1rem',
            justifyContent: 'space-between',
          })}
        >
          <div css={css({ fontSize: '2rem' })}>{company.serviceType}</div>
          <div>
            {company.companyScale}({company.companySector})
          </div>
          <div>tel: {company.companyPhoneNumber}</div>
          <div>fax: {company.companyFaxNumber}</div>
        </div>
        <div
          css={css({
            width: '30%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          })}
        >
          <button onClick={() => window.open('https://map.naver.com/v5/search/' + company.companyLocation, '_blank')}>네이버 지도</button>
          <button onClick={() => window.open('https://www.wanted.co.kr/search?query=' + company.companyKeyword, '_blank')}>원티드</button>
          <button onClick={() => window.open('https://www.jobplanet.co.kr/search?query=' + company.companyKeyword, '_blank')}>잡플래닛</button>
        </div>
      </div>
    </div>
  );
}

export default Company;
