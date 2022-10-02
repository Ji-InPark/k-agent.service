import { CompanyType } from '../../../types';
import { css } from '@emotion/react';
import Colors from '../../../assets/colors';

type Props = {
  company: CompanyType;
};

function Company({ company }: Props) {
  const buttonStyle = (color: String) => {
    return css(`
      display: flex;
      background: ${color};
      border: none;
      fontSize: 1.5rem;
      cursor: pointer;
      text-align: center;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
      transition: 0.2s;
      &:hover {
        translate: 0% -15%;
      }
    );
  `);
  };

  return (
    <div
      css={css({
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 600,
        width: '80%',
        marginTop: 25,
        marginBottom: 25,
        borderRadius: 10,
        boxSizing: 'border-box',
        padding: 5,
        boxShadow: 'rgba(149, 157, 165, 0.4) 0px 8px 24px',
      })}
    >
      <div
        css={css({
          width: '100%',
          textAlign: 'center',
          fontSize: '2rem',
          fontWeight: 'bold',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
        })}
      >
        {company.companyName}
      </div>
      <div>
        <hr />
      </div>
      <div
        css={css({
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          fontSize: '1rem',
          alignItems: 'center',
          alignSelf: 'center',
          textAlign: 'center',
          justifyContent: 'space-around',
          width: '80%',
          marginTop: '1rem',
        })}
      >
        <div css={css({ fontSize: '1.5rem', fontWeight: 'bold' })}>{company.serviceType}</div>
        <div>
          <div>{company.companyScale}</div>
          <div>{company.companySector}</div>
        </div>
      </div>
      <div
        css={css({
          display: 'grid',
          width: '80%',
          alignSelf: 'center',
          marginTop: '1rem',
          gridTemplateRows: 'repeat(3, minmax(3rem, 3rem))',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1rem',
        })}
      >
        <div
          css={css({
            display: 'flex',
            background: Colors.NAVER,
            border: 'none',
            color: 'white',
            fontSize: '1.5rem',
            cursor: 'pointer',
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%',
            transition: '0.2s',
            gridRow: '1 / 2',
            gridColumn: '1 / 3',
            '&:hover': {
              translate: '0% -15%',
            },
          })}
          onClick={() => window.open('https://map.naver.com/v5/search/' + company.companyLocation, '_blank')}
        >
          <img
            css={css({
              maxWidth: '100%',
              maxHeight: '80%',
            })}
            src="https://mir-s3-cdn-cf.behance.net/user/276/a78c6531673609.5703570bc812f.png"
            alt="네이버 지도"
          />
          네이버 지도
        </div>
        <div css={buttonStyle(Colors.WANTED)} onClick={() => window.open('https://www.wanted.co.kr/search?query=' + company.companyKeyword, '_blank')}>
          <img
            css={css({
              maxWidth: '60%',
            })}
            src="https://theme.zdassets.com/theme_assets/9309779/4f2fb72a20c8e2ee37a305ef38ef1d144774a8df.png"
            alt="원티드"
          />
        </div>
        <div
          css={buttonStyle(Colors.WANTED)}
          onClick={() => window.open('https://www.jobkorea.co.kr/Search/?stext=' + company.companyKeyword + '&tabType=corp&Page_No=1', '_blank')}
        >
          <img
            css={css({
              maxWidth: '60%',
            })}
            src="http://company.jobkorea.co.kr/img/common/jk_logo.png"
            alt="잡코리아"
          />
        </div>
        <div css={buttonStyle('#FFFFF0')} onClick={() => window.open('https://www.rocketpunch.com/companies?keywords=' + company.companyKeyword, '_blank')}>
          <img
            css={css({
              maxWidth: '60%',
            })}
            src="https://www.venturesquare.net/wp-content/uploads/2018/04/rocketpunch-logo-horizontal.png"
            alt="로켓펀치"
          />
        </div>
        <div css={buttonStyle('#FFFFF0')} onClick={() => window.open('https://www.jobplanet.co.kr/search?query=' + company.companyKeyword, '_blank')}>
          <img
            css={css({
              maxWidth: '60%',
            })}
            src="https://jpassets.jobplanet.co.kr/production/uploads/material/media/2746/img_logo_jp_200217.png"
            alt="잡플래닛"
          />
        </div>
      </div>
    </div>
  );
}

export default Company;
