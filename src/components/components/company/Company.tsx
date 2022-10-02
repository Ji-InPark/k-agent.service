import { CompanyType } from '../../../types';
import { css } from '@emotion/react';
import Colors from '../../../assets/colors';
import CompanyButton from './button/CompanyButton';

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
            gridRow: '1 / 2',
            gridColumn: '1 / 3',
          })}
        >
          <CompanyButton
            buttonBackgroundColor={Colors.NAVERGREEN}
            buttonOnClickUrl={'https://map.naver.com/v5/search/' + company.companyLocation}
            buttonImageUrl={'https://mir-s3-cdn-cf.behance.net/user/276/a78c6531673609.5703570bc812f.png'}
            imageAlt={'네이버'}
            imageWidth={undefined}
            imageHeight={'80%'}
            buttonText={'네이버 지도'}
          />
        </div>
        <div>
          <CompanyButton
            buttonBackgroundColor={Colors.LIGHTVIOLET}
            buttonOnClickUrl={'https://www.wanted.co.kr/search?query=' + company.companyKeyword}
            buttonImageUrl={'https://theme.zdassets.com/theme_assets/9309779/4f2fb72a20c8e2ee37a305ef38ef1d144774a8df.png'}
            imageAlt={'원티드'}
            imageWidth={'60%'}
            imageHeight={undefined}
            buttonText={undefined}
          />
        </div>
        <div>
          <CompanyButton
            buttonBackgroundColor={Colors.LIGHTVIOLET}
            buttonOnClickUrl={'https://www.jobkorea.co.kr/Search/?stext=' + company.companyKeyword + '&tabType=corp&Page_No=1'}
            buttonImageUrl={'http://company.jobkorea.co.kr/img/common/jk_logo.png'}
            imageAlt={'잡코리아'}
            imageWidth={'60%'}
            imageHeight={undefined}
            buttonText={undefined}
          />
        </div>
        <div>
          <CompanyButton
            buttonBackgroundColor={Colors.LIGHTBEIGE}
            buttonOnClickUrl={'https://www.rocketpunch.com/companies?keywords=' + company.companyKeyword}
            buttonImageUrl={'https://www.venturesquare.net/wp-content/uploads/2018/04/rocketpunch-logo-horizontal.png'}
            imageAlt={'로켓펀치'}
            imageWidth={'60%'}
            imageHeight={undefined}
            buttonText={undefined}
          />
        </div>
        <div>
          <CompanyButton
            buttonBackgroundColor={Colors.LIGHTBEIGE}
            buttonOnClickUrl={'https://www.jobplanet.co.kr/search?query=' + company.companyKeyword}
            buttonImageUrl={'https://jpassets.jobplanet.co.kr/production/uploads/material/media/2746/img_logo_jp_200217.png'}
            imageAlt={'잡플래닛'}
            imageWidth={'60%'}
            imageHeight={undefined}
            buttonText={undefined}
          />
        </div>
      </div>
    </div>
  );
}

export default Company;
