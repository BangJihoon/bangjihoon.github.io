import { ResumeObject, TeckStackEnum } from './type'

const github = "https://github.com/bangjihoon/"
const nonAction = "javascript:void(0);"

export const mySkillObject: {
  [key: string]: Array<TeckStackEnum>
} = {
  'SERVER': [
    TeckStackEnum.RHEL, 
    TeckStackEnum.WINDOWS, 
    TeckStackEnum.UBUNTU, 
    TeckStackEnum.AWS
  ],
  'DBMS': [
    TeckStackEnum.ORACLE, 
    TeckStackEnum.MARIADB, 
    TeckStackEnum.MYSQL, 
    TeckStackEnum.POSTGRE, 
    TeckStackEnum.MONGODB, 
  ],
  'LANG': [
    TeckStackEnum.DART, 
    TeckStackEnum.JAVA, 
    TeckStackEnum.DOTNET, 
    TeckStackEnum.PYTHON, 
    TeckStackEnum.JAVASCRIPT, 
  ],
  'Study': [
    TeckStackEnum.FLUTTER, 
    TeckStackEnum.JAVA, 
    TeckStackEnum.ALGO, 
    TeckStackEnum.SPRING, 
  ],
}


export const mySkillText: {
  [key: string]: string
} = {
  'SERVER': '다양한 서버 환경을 구축하고, 웹서버와 AP서버 프로비저닝 작업을 진행하였습니다.',
  'DBMS':'관계형 데이터베이스 기반의 환경에서 JDBC를 이용한 Data Logic을 개발하였습니다.',
  'LANG':'Java를 이용한 MVC 개발을 주로 진행하였으며, 그 외에 프로젝트에서 Python, C#, .Net 등을 사용하였습니다.',
  'Study':'Java Spring Boot과 Flutter를 이용한 하이브리드 앱개발을 좋아합니다. \n함께 발전하는 좋은 동료가 있는곳을 희망하고있습니다. ',
}



export const myResumeArray: Array<ResumeObject> = [
  /*
  {
    link:nonAction,
    target:"_self",
    startAt: "2022.05",
    endAt:  "2022.06",
    title: '[APP] FitQA APP개발',
    teckStack: [
      TeckStackEnum.JAVA,
      TeckStackEnum.ORACLE,
      TeckStackEnum.LINUX,
      ],
    description: [
      '',
    ],
  },*/

  {
    link:nonAction,
    target:"_self",
    startAt: "2022.04",
    endAt:  "ING",
    title: '[신한카드] 마케팅 시스템 운영',
    teckStack: [
      TeckStackEnum.JAVA,
      TeckStackEnum.ORACLE,
      TeckStackEnum.LINUX,
      ],
    description: [
      '서비스 장애 대응 및 신규 APP PUSH ,SMS 마케팅 개발',
      '서버 프로세스 모니터링 시스템 구축 (100여개 프로세스 실시간 관제)',
      '고객 암호화 데이터 배치시스템 로직 리팩토링 (바이트 코드 2H ->40M 단축)',
      '계정계 & 마케팅 원장 데이터 적재 이슈 (적재 변경 UPDATE ->MERGE)',
    ],
  },
  {
    link:nonAction,
    target:"_self",
    startAt: "2021.06",
    endAt:  "2022.01",
    title: '[SPC] 마케팅 시스템 구축',
    teckStack: [
      TeckStackEnum.JAVA,
      TeckStackEnum.JAVASCRIPT,
      TeckStackEnum.ORACLE,
      TeckStackEnum.LINUX,
      ],
    description: [
      '캠페인 시스템 구축',
      'SPC 회사별, 팀별, 사용자별 타게팅 상품, 매장, 고객 권한 설정',
      '기존 시스템과 SSO, SycnUserID 연동',
      '사내 기존 업무 결제 시스템 API 연동',
      'Web 마케팅 시스템 풀스택 개발',
    ],
   },

    {
    link:github+"AI_MODELSCHEDULER",
    target:"_blank",
    startAt: "2021.05",
    endAt:  "2021.06",
    title: '[신세계백화점] AI MODEL 수행시스템 고도화',
    teckStack: [
      TeckStackEnum.JAVA,
      TeckStackEnum.ORACLE,
      TeckStackEnum.PYTHON,
      TeckStackEnum.BASH,
      ],
    description: [
    '기존 백화점 고객 분석 시스템 "SMIND" 고도화',
    'ACADEMY, PERSONA 2가지 모형 추가',
    '추가 모형을 단위 JOB별 스케줄링 기능',
    '동시수행을 위한 Mulit Thread Call 구현',
    '서버 프로세스 흐름 제어(restart,stop,remove) 기능추가',
    '수행후 결과 모니터링 화면 개발',
    ],
   },

    {
    link:nonAction,
    target:"_self",
    startAt: "2020.12",
    endAt:  "2021.04",
    title: 'SERVER Infra 담당',
    teckStack: [
      TeckStackEnum.JAVA,
      TeckStackEnum.ORACLE,
      TeckStackEnum.MYSQL,
      TeckStackEnum.MARIADB,
      TeckStackEnum.RHEL,
      TeckStackEnum.LINUX,
      TeckStackEnum.WINDOWS,
      TeckStackEnum.TOMCAT,
      TeckStackEnum.APACHE,
      ],
    description: [
  'Application 서버 Provisioning 사전 서버 구성 작업',
  '프로젝트 시작시, 서버 구성도, OS 환경 확인 후 방문',
  '다양한 OS,DBMS,WEB/WAS 설치 및 설정 작업 진행',
  'Server - 커널자원, 사용자, 방화벽 포트개방 등 작업',
  'DB - Oracle, MySQL, Maria 등 설치 및 초기 Schema 생성 및 Data 적재',
  'WEB/WAS - Apache,Tomcat,HTTP,HTTPS 설치 및 설정',
  'Applicaiton - 앱서버 자원,네트워킹,DB 등을 설정, 기동후 테스트',
  '경복대학교, Naver 샌드박스, Missha, 롯데카드 CMS 서버 담당',
  '그 외에 진행중인 프로젝트 트러블 슈팅 및 이슈 업무지원',
  ],
   },

{
    link:github+"AI_MODELSCHEDULER",
    target:"_blank",
    startAt: "2020.06",
    endAt:  "2020.11",
    title: 'AI Model Scheduler 개발',
    teckStack: [
      TeckStackEnum.DOTNET,
      TeckStackEnum.JAVA,
      TeckStackEnum.ORACLE,
      TeckStackEnum.RHEL,
      ],
    description: [
  'AI 솔루션 어플리케이션 서버 구축',
  'AI 솔루션 기능개선 및 트래블 슈팅',
  'R 기반의 데이터 전처리 기능 추가',
  'Python 기반의 모형 수행 환경 설정',
  'Java Code 리팩토링',
  '기존 DB 연결 구조 변경 및 개선',
  '모델링 작업 설정을 위한 Web 화면 개발',
  ],
   },
  {
    link:nonAction,
    target:"_self",
    startAt: "2020-02",
    endAt: "2022-05",
    title: '[SSG.COM] 타케팅 시스템 구축',
    teckStack: [
      TeckStackEnum.JAVA,
      TeckStackEnum.JAVASCRIPT,
      TeckStackEnum.DOTNET,
      TeckStackEnum.ORACLE,
      TeckStackEnum.MYSQL,
      TeckStackEnum.MARIADB,
      TeckStackEnum.RHEL,
      TeckStackEnum.UBUNTU,
      TeckStackEnum.WINDOWS,
      ],
    description: ['웹 마케팅 솔루션 구축 서버 담당'],
   },
   {
    link:github+"STOCK_DATA_US",
    target:"_blank",
    startAt: "2019.04",
    endAt: "2019.06",
    title: 'NYSE, NASDAQ 주식 데이터 수집 및 분석',
    teckStack: [
      TeckStackEnum.AWS,
      TeckStackEnum.CC,
      TeckStackEnum.PYTHON,
      TeckStackEnum.MONGODB,
      TeckStackEnum.POSTGRE,
    ],
    description: [
    'Younta API를 통한 금일 거래 종목 리스트 받아오기',
    '장 개장시간에 맞춰 프로그램 스케줄링',
    '자동 로그인, 6,000여 종목 Data Streaming',
    '실시간 데이터 Mongo DB에 적재',
    'Yonata API를 이용한 HTS 자동거래',
    '웹/앱 플랫폼을 통한 거래내역 및 손익내역 투명하게 제공',
    'PyPI 종목별 수집데이터를 이용한 일봉차트 도출',
    '종목별 그래프의 Feature Matching알고리즘을 이용한 유사도 측정',
    ],
  },
  {
    link:github+"RSS_WEB_FEED",
    target:"_blank",
    startAt: "2019.03",
    endAt: "2019.04",
    title: 'RSS WEB FEED 공고문 수집 웹 서비스',
    teckStack: [
      TeckStackEnum.AWS,
      TeckStackEnum.FLASK,
      TeckStackEnum.PYTHON,
      TeckStackEnum.CHROMEDRIVER,
      TeckStackEnum.MONGODB,
      TeckStackEnum.ALTAS,
      TeckStackEnum.TELEGRAM,
      TeckStackEnum.SLACK,
    ],
    description: [
    '매일 아침 10시 자동 크롤링 수행',
    'Python WebDriver를 이용한 20여개 사이트 신규 게시글 스크랩',
    '순차적 순회 알고리즘 구현',
    'Monog DBaaS Atlas를 이용한 DB서버사용',
    'Flask를 이용한 WAS 서버사용',
    'AWS UBUNTU 서버 구축',
    'ES6와 HTML/CSS를 이용해 SPA UX/UI 구성',
    'Ajax기술을 활용한 비동기적 검색기능 구현',
    '사내 메신저 Telegram과 Slack에 신규공고문 Push알림'
    ],
  },
  {
    link:github+"SCHOOL_MEAL_PAY_PLATFORM",
    target:"_blank",
    startAt: "2018.03",
    endAt: "2018.09",
    title: '"학식이" - 식권발급 플랫폼',
    teckStack: [TeckStackEnum.AWS, TeckStackEnum.LINUX, TeckStackEnum.JSP,TeckStackEnum.JAVA,TeckStackEnum.MYSQL],
    description: [  '주간 / 월간 메뉴정보 (관리자를 통한 메뉴 업로드)',
          '학식 결제기능 (아임포트 API)',
          '모바일 식권 발급기능 (QR코드 발급)',
          '식당별 게시판 (XSS 등 악성스크립팅 방지)',
          '게시글 추천 기능 (ID별 1회 제한)',
          '게시글 신고 기능 (Google Email API)',
          '회원가입 (JavaScript를 이용한 Validation 검사)',
          '로그인 / 로그아웃 (Session 이용)',
          'Bootstrap을 활용한 모바일 반응형 웹 구현',
  ],
  },
  {
    link:nonAction,
    target:"_self",
    startAt: "2013.03",
    endAt: "2020.02",
    title: '컴퓨터 과학과 졸업',
    teckStack: [],
    description: [],
  },
]

export const myStudyArray: Array<ResumeObject> = [
  /*
  {
    link:nonAction,
    target:"_self",
    startAt: "2022.05",
    endAt:  "2022.06",
    title: '[APP] FitQA APP개발',
    teckStack: [
      TeckStackEnum.JAVA,
      TeckStackEnum.ORACLE,
      TeckStackEnum.LINUX,
      ],
    description: [
      '',
    ],
  },*/

  {
    link:"https://www.notion.so/54d05f83106148049c64ca6a41232ef3",
    target:"_blank",
    startAt: "2023.01",
    endAt:  "2023.03",
    title: '[언뜻] 시그널 데이팅앱',
    teckStack: [
      TeckStackEnum.FLUTTER,
      TeckStackEnum.SPRING,
      TeckStackEnum.MYSQL,
      TeckStackEnum.JAVA,
      TeckStackEnum.AWS,
      ],
    description: [
      'GetX를 이용한 라우팅 및 사용자 정보 전역적 상태관리',
      'http 소켓통신을 이용한 GPS기반에 사용자 표시',
      'JWT Bearer 토큰기반의 사용자 인증 연동',
      'Spring Web Server 사용자,인증,결제 등 REST API 연동',
    ],
  },
  {
    link:"https://www.notion.so/43ffdb3cfc894d18b60de4e1f061c58b",
    target:"_blank",
    startAt: "2022.06",
    endAt:  "2022.12",
    title: '[복권 마스터] 복권 당첨알림 앱',
    teckStack: [
      TeckStackEnum.FLUTTER,
      TeckStackEnum.FIREBASE,
      TeckStackEnum.HIVE,
      ],
    description: [
      'FireAuth를 이용한 사용자 인증',
      'FireCloud Messaging과 Local Notification 당첨여부 PUSH 알림',
      'Http 통신과 FireStore, Hive를 이용한 복권정보, 구매여부, 당첨정보 저장',
      'QR Scan으로 구매내역저장 당첨알림',
      'QR 생성기능으로 오프라인 구매 코드 지원',
      'Python 연동을 통해 서버 내 결제기능 추가 예정',
    ],
   },

   {
    link:"https://www.notion.so/FitQA-2198f86a87404ac5b87abb47c5ac15d9",
    target:"_blank",
    startAt: "2022.06",
    endAt:  "2021.08",
    title: '[FitQA] 헬스 트레이닝 앱 MVP 개발',
    teckStack: [
      TeckStackEnum.FLUTTER,
      TeckStackEnum.FIREBASE,
      TeckStackEnum.SPRING,
      TeckStackEnum.JAVA,
      TeckStackEnum.AWS,
      ],
    description: [
      'Riverpod를 이용한 전역적 상태관리',
      'Spring Web Server REST API와 연동',
      'AWS S3 파일 및 영상 업로드 연동',
    ],
   },
]
