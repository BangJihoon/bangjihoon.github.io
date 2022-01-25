import { ResumeObject, TeckStackEnum } from './type'

export const mySkillObject: {
  [key: string]: Array<TeckStackEnum>
} = {
  'Front-End': [
    TeckStackEnum.REACT_JS,
    TeckStackEnum.TYPESCRIPT,
    TeckStackEnum.MOBX,
    TeckStackEnum.REDUX,
    TeckStackEnum.HTML,
    TeckStackEnum.SCSS,
  ],
  'Back-End': [TeckStackEnum.NODE_JS, TeckStackEnum.EXPRESS, TeckStackEnum.GRAPHQL, TeckStackEnum.FIREBASE],
  Etc: [TeckStackEnum.GIT, TeckStackEnum.GA, TeckStackEnum.AMPLITUDE, TeckStackEnum.SLACK, TeckStackEnum.TRELLO],
}

export const myResumeArray: Array<ResumeObject> = [
  {
    startAt: new Date('2020-05-01'),
    endAt: null,
    title: 'Caramora',
    teckStack: [
      TeckStackEnum.REACT_JS,
      TeckStackEnum.TYPESCRIPT,
      TeckStackEnum.NODE_JS,
      TeckStackEnum.GRAPHQL,
      TeckStackEnum.HASURA,
      TeckStackEnum.POSTGRE,
      TeckStackEnum.MOBX,
      TeckStackEnum.FIREBASE,
      TeckStackEnum.GA,
      TeckStackEnum.AMPLITUDE,
    ],
    description: [
      '고객과 자동차 서비스 매장을 온라인으로 연결시켜주는 플랫폼 개발 및 유지보수',
      '아토믹 디자인 설계를 통한 컴포넌트 재사용 극대화',
      '로그인, 주문, 결제 등 각종 API 제작',
      '각종 결제 모듈 연동(stripe, bootpay)',
      '채팅 솔루션 연동(zendesk)',
      '렌더링 최적화, 첫로딩 최적화',
      'ga, hotjar, vwo, amplitude를 통한 유저 사용 분석 및 A/B Test를 통해 conversion 개선',
    ],
  },
  {
    startAt: new Date('2020-05-01'),
    endAt: new Date('2021-06-01'),
    title: 'Caramora Admin',
    teckStack: [
      TeckStackEnum.REACT_JS,
      TeckStackEnum.TYPESCRIPT,
      TeckStackEnum.NODE_JS,
      TeckStackEnum.MOBX,
      TeckStackEnum.GRAPHQL,
      TeckStackEnum.HASURA,
      TeckStackEnum.POSTGRE,
    ],
    description: [
      '카라모라 내부 관리 페이지 제작',
      'postgres: subscriptions을 사용해 실시간 상담 요청 처리 및 대시보드 제작',
    ],
  },
  {
    startAt: new Date('2019-06-01'),
    endAt: new Date('2020-02-01'),
    title: 'RiderDash 인턴',
    teckStack: [],
    description: ['자율주행, 영상처리, 머신러닝, 임베디드쪽만 하다가 처음으로 웹을 접하는 시점'],
  },
  {
    startAt: new Date('2013-03'),
    endAt: new Date('2020-02'),
    title: '컴퓨터 과학과 학사',
    teckStack: [],
    description: ['서울 4년제 컴퓨터과학 전공 • 학사 졸업'],
  },
]
