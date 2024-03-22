import { Company } from '../../../types';
import { css } from '@emotion/react';
import Colors from '../../../assets/colors';
import CompanyButton from './button/CompanyButton';
import WantedInsightButton from './button/WantedInsightButton';
import styled from '@emotion/styled';

const Card = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  box-sizing: border-box;
  padding: 1rem;
  box-shadow: rgba(149, 157, 165, 0.4) 0 8px 24px;
`;
const CardTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  padding-bottom: 1rem;
  border-bottom: 2px solid black;
`;

const CardDescription = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 1rem;
  align-items: center;
  align-self: center;
  text-align: center;
  justify-content: space-around;
  margin-top: 1rem;
`;

const CardGridContent = styled.div`
  display: grid;
  align-self: center;
  margin-top: 1rem;
  grid-template-rows: repeat(4, minmax(3rem, 3rem));
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding: 0 2rem 0 2rem;
`;

const CardPanel = styled.div<{ fill?: number }>`
  grid-column: ${({ fill = 1 }) => `${fill} span / ${fill} span`};
`;

type Props = { company: Company };
function CompanyCard({ company }: Props) {
  return (
    <Card>
      <CardTitle>{company.companyName}</CardTitle>
      <CardDescription>
        <div css={css({ fontSize: '1.5rem', fontWeight: 'bold' })}>{company.serviceType}</div>
        <div>
          <div>{company.companyScale}</div>
          <div>{company.companySector}</div>
        </div>
      </CardDescription>
      <CardGridContent>
        <CardPanel fill={2}>
          <CompanyButton
            buttonBackgroundColor={Colors.NAVERGREEN}
            buttonOnClickUrl={`https://map.naver.com/v5/search/${company.companyLocation}`}
            buttonImageUrl="https://mir-s3-cdn-cf.behance.net/user/276/a78c6531673609.5703570bc812f.png"
            imageAlt="네이버"
            imageHeight="80%"
            buttonText="네이버 지도"
          />
        </CardPanel>
        <CompanyButton
          buttonBackgroundColor={Colors.LIGHTVIOLET}
          buttonOnClickUrl={`https://www.rocketpunch.com/companies?keywords=${company.companyKeyword}`}
          buttonImageUrl="https://www.venturesquare.net/wp-content/uploads/2018/04/rocketpunch-logo-horizontal.png"
          imageAlt="로켓펀치"
          imageWidth="60%"
        />
        <CompanyButton
          buttonBackgroundColor={Colors.LIGHTVIOLET}
          buttonOnClickUrl={`https://www.jobkorea.co.kr/Search/?stext=${company.companyKeyword}`}
          buttonImageUrl="https://i.jobkorea.kr/content/images/ver_1/gnb/jk_logo.png?20220926"
          imageAlt="잡코리아"
          imageWidth="60%"
        />
        <CompanyButton
          buttonBackgroundColor={Colors.LIGHTBEIGE}
          buttonOnClickUrl={`https://www.wanted.co.kr/search?query=${company.companyKeyword}`}
          buttonImageUrl="https://theme.zdassets.com/theme_assets/9309779/4f2fb72a20c8e2ee37a305ef38ef1d144774a8df.png"
          imageAlt="원티드"
          imageWidth="60%"
        />
        <CompanyButton
          buttonBackgroundColor={Colors.LIGHTBEIGE}
          buttonOnClickUrl={`https://www.jobplanet.co.kr/search?query=${company.companyKeyword}`}
          buttonImageUrl="https://jpassets.jobplanet.co.kr/production/uploads/material/media/2746/img_logo_jp_200217.png"
          imageAlt="잡플래닛"
          imageWidth="60%"
        />
        <CardPanel fill={2}>
          <WantedInsightButton
            id={company.id}
            buttonBackgroundColor={Colors.LIGHTSKY}
            wantedInsightKey={company.wantedInsightKey}
            buttonImageUrl="https://image.wanted.co.kr/insight/www/images/logos.svg"
            imageAlt="크레딧잡"
            imageHeight="80%"
          />
        </CardPanel>
      </CardGridContent>
    </Card>
  );
}

export default CompanyCard;
