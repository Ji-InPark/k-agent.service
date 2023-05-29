import React from 'react';
import { css } from '@emotion/react';
import UpdateInformationItem from './UpdateInformationItem';

function InformationContainer() {
  return (
    <div
      css={css({
        width: '40%',
        minWidth: '25rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        userSelect: 'none',
        overflow: 'auto',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      })}
    >
      <h1>K-Agent</h1>
      <h3>K-Agent는 병역 특례 업체 조회를 간편하게 하기 위해서 만든 웹사이트입니다.</h3>
      <h3>병역일터에서 제공하는 정보외에 모든 연동정보는 일련의 자동화를 통해서 연동되어 부정확할 수도 있습니다.</h3>

      <br />

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
        <UpdateInformationItem>2023년 05월 29일 (현재 적용)</UpdateInformationItem>
        <UpdateInformationItem>2022년 12월 30일</UpdateInformationItem>
        <UpdateInformationItem>2022년 10월 26일</UpdateInformationItem>
      </ul>

      <br />

      <h1>K-Agent 업데이트 내용</h1>
      <h2>2022년 11월 26일</h2>
      <ul>
        <UpdateInformationItem>최근 검색 기록 기능 추가</UpdateInformationItem>
      </ul>

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
        <UpdateInformationItem>네이버 지도 연동</UpdateInformationItem>
        <UpdateInformationItem>채용 사이트(원티드, 잡코리아, 로켓펀치) 연동</UpdateInformationItem>
        <UpdateInformationItem>회사 평점 사이트(잡플래닛, 크레딧잡) 연동</UpdateInformationItem>
        <UpdateInformationItem>웹사이트 연동 버튼 디자인 개선</UpdateInformationItem>
      </ul>
    </div>
  );
}

export default InformationContainer;
