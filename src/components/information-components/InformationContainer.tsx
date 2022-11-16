import React from 'react';
import { css } from '@emotion/react';
import UpdateInformationItem from './UpdateInformationItem';

function InformationContainer() {
  return (
    <div
      css={css({
        width: '40%',
        marginLeft: 'auto',
        marginRight: 'auto',
        userSelect: 'none',
        overflow: 'auto',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      })}
    >
      <h1>정보 출처</h1>
      <h3>
        타 웹사이트 연동 이외 모든 정보는{' '}
        <a
          css={css({
            '&:visited': {
              color: 'blue',
            },
          })}
          href="https://work.mma.go.kr/caisBYIS/main.do"
          target={'_blank'}
        >
          병역일터
        </a>
        에서 가져온 자료입니다.
      </h3>

      <br />

      <h1>정보 업데이트 이력</h1>
      <ul>
        <UpdateInformationItem>2022년 10월 26일 (현재 적용)</UpdateInformationItem>
      </ul>

      <br />

      <h1>K-Agent 업데이트 내용</h1>
      <h2>2022년 11월 04일</h2>
      <ul>
        <UpdateInformationItem>검색 자동완성 기능 추가</UpdateInformationItem>
      </ul>

      <h2>2022년 10월 28일</h2>
      <ul>
        <UpdateInformationItem>검색 조건 캐싱 기능 추가</UpdateInformationItem>
      </ul>

      <h2>2022년 10월 16일</h2>
      <ul>
        <UpdateInformationItem>페이지 단위 보기 기능 추가</UpdateInformationItem>
      </ul>

      <h2>2022년 10월 07일</h2>
      <ul>
        <UpdateInformationItem>병역특례 업체 전체 조회 기능 추가</UpdateInformationItem>
        <UpdateInformationItem>검색 조건 설정 기능 추가</UpdateInformationItem>
      </ul>

      <h2>2022년 10월 04일</h2>
      <ul>
        <UpdateInformationItem>크레딧잡 웹사이트 연동</UpdateInformationItem>
      </ul>

      <h2>2022년 10월 02일</h2>
      <ul>
        <UpdateInformationItem>네이버 지도, 원티드, 잡코리아, 로켓펀치, 잡플래닛 웹사이트 연동</UpdateInformationItem>
        <UpdateInformationItem>웹사이트 연동 버튼 디자인 개선</UpdateInformationItem>
      </ul>
    </div>
  );
}

export default InformationContainer;
