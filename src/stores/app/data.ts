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
  // {
  //   startAt: new Date('2021-11-01'),
  //   endAt: null,
  //   title: 'Caramora_org',
  //   teckStack: [TeckStackEnum.NEXT_JS, TeckStackEnum.FIREBASE, TeckStackEnum.GA],
  //   description: [
  //     '자동차 백과사전'
  //   ]
  // },
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
    startAt: new Date('2020-08-01'),
    endAt: new Date('2020-08-01'),
    title: '입점 매장 개인 블로그 크롤링 봇',
    teckStack: [TeckStackEnum.NODE_JS, TeckStackEnum.TYPESCRIPT, TeckStackEnum.FIREBASE, TeckStackEnum.HASURA],
    description: [
      '하루에 한번 전체 입점 매장 블로그를 카라모라에 업로드해주는 크롤링 봇 개발',
      'rss로 최신 블로그 컨텐츠가 있으면 firebase에 저장',
      'firebase trigger로 크롤링 function 실행(serverless)',
    ],
  },
  {
    startAt: new Date('2019-10-01'),
    endAt: new Date('2020-06-01'),
    title: '썬팅 상담 챗봇(박혜지 봇)',
    teckStack: [TeckStackEnum.NODE_JS, TeckStackEnum.TYPESCRIPT, TeckStackEnum.DIALOGFLOW, TeckStackEnum.GRAPHQL],
    description: [
      '사람인 척하는 고객 상담 전처리 챗봇 개발',
      'zendesk 채팅 솔루션과 연동(챗봇의 역할이 끝나면 사람 상담원에게 handover)',
      'state tracking model을 현재 유저 발화의 state를 예측 및 대화 시스템 개발',
      'dialog에 따른 유저 응대율를 테스트 해 볼 수 있는 관리, 테스트 페이지 제작',
    ],
  },
  {
    startAt: new Date('2020-03-01'),
    endAt: new Date('2020-03-01'),
    title: 'RiderDash Full Stack Develop',
    teckStack: [],
    description: ['Riderdash 정규직 개발자로 전환'],
  },
  {
    startAt: new Date('2019-08-01'),
    endAt: new Date('2020-02-01'),
    title: '썬팅 매장 매칭 플랫폼 파일럿',
    teckStack: [TeckStackEnum.REACT_JS, TeckStackEnum.REDUX, TeckStackEnum.JAVASCRIPT, TeckStackEnum.GA],
    description: [
      '자동차 온라인 마켓플레이스 테스트 파일럿 프로젝트',
      '최종 전환을 끌어올리기 위한 각종 A/B Test, Test variable진행',
    ],
  },
  {
    startAt: new Date('2019-09-01'),
    endAt: new Date('2020-02-01'),
    title: 'Llumar Admin',
    teckStack: [TeckStackEnum.VUE_JS, TeckStackEnum.VUEX, TeckStackEnum.NODE_JS],
    description: ['딜러 포인트 관리, 재고 페이지 유지보수'],
  },
  {
    startAt: new Date('2019-06-01'),
    endAt: new Date('2020-08-01'),
    title: 'Llumar go',
    teckStack: [TeckStackEnum.REACT_JS, TeckStackEnum.REDUX, TeckStackEnum.NODE_JS, TeckStackEnum.GA],
    description: ['루마썬팅 및 딜러 관리 페이지 유지보수'],
  },

  {
    startAt: new Date('2019-06-01'),
    endAt: new Date('2020-02-01'),
    title: 'RiderDash 인턴',
    teckStack: [],
    description: ['자율주행, 영상처리, 머신러닝, 임베디드쪽만 하다가 처음으로 웹을 접하는 시점'],
  },

  {
    startAt: new Date('2018-07-01'),
    endAt: new Date('2018-12-01'),
    title: '국민대학교 임베디드 연구실(KESL)',
    teckStack: [
      TeckStackEnum.OPENCV,
      TeckStackEnum.ROS,
      TeckStackEnum.UBUNTU,
      TeckStackEnum.YOLO,
      TeckStackEnum.PYTHON,
      TeckStackEnum.C_PLUS_PLUS,
    ],
    description: [
      '국민대학교 자율주행 대회 템플릿 코드 제작',
      'http://auto-contest.kookmin.ac.kr/',
      '카메라센서 전처리, 룰 베이스 자율 주행 모듈 개발',
      '자이트론(Xytron)에서 제공한 TX2보드 기반 자율주행 자동차 자이카(Xycar)를 소프트웨어를 설계하기 위한 환경을 구축하고 메뉴얼을 작성',
    ],
  },
  {
    startAt: new Date('2016-03-01'),
    endAt: new Date('2020-02-01'),
    title: '국민대 졸업',
    teckStack: [],
    description: ['컴퓨터공학 전공 • 학사', '3.64 학점 / 4.5 학점', '전공취득학점 87', '전공평점평균 3.8/4.5'],
  },
  {
    startAt: new Date('1998-01-11'),
    endAt: null,
    title: '출생',
    teckStack: [],
    description: ['인천 월미도에서 탄생'],
  },
]
