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
        maxWidth: 600,
        width: '50%',
        marginTop: 50,
        borderStyle: 'solid',
        borderRadius: 10,
        boxSizing: 'border-box',
        padding: 5,
      })}
    >
      <div
        css={css({
          display: 'flex',
          minHeight: 100,
        })}
      >
        <div
          css={css({
            width: '70%',
          })}
        >
          <div css={css({ fontSize: 32 })}>{company.companyName}</div>
          <div css={css({ fontSize: 24 })}>{company.serviceType}</div>
          <div>
            {company.companyScale}({company.companySector})
          </div>
          <div>전화 번호: {company.companyPhoneNumber}</div>
          <div>팩스 번호: {company.companyFaxNumber}</div>
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
