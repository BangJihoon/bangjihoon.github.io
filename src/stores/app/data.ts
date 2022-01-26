import { ResumeObject, TeckStackEnum } from './type'

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
    TeckStackEnum.JAVA, 
    TeckStackEnum.DOTNET, 
    TeckStackEnum.PYTHON, 
    TeckStackEnum.JAVASCRIPT, 
  ],
  'Study': [
    TeckStackEnum.JAVA, 
    TeckStackEnum.ALGO, 
    TeckStackEnum.SPRING, 
    TeckStackEnum.KOTLIN,
  ],
}






export const myResumeArray: Array<ResumeObject> = [
   {
    startAt: new Date('2021-06'),
    endAt:  new Date('2022-01'),
    title: '[Obzen] SPC 마케팅 시스템 구축',
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
    startAt: new Date('2021-05'),
    endAt:  new Date('2021-06'),
    title: '[Obzen] 신세계백화점 SMIND 고도화',
    teckStack: [
      TeckStackEnum.JAVA,
      TeckStackEnum.ORACLE,
      ],
    description: [
	'기존 백화점 고객 분석 시스템인 SMIND 고도화',
    '추가 개발된 모형을 스케줄링하여 자동 수행',
    '동시수행을 위한 Mulit Thread Call 구현',
    '서버 프로세스 흐름 제어(restart,stop,remove) 기능추가',
    '수행후 결과 모니터링 화면 개발',
    ],
   },
    {
    startAt: new Date('2020-12'),
    endAt:  new Date('2021-04'),
    title: '[Obzen] Server Infra 담당',
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
	'Solution Lab 부서 이동',
	'Application 서버 Provisioning 사전 서버 구성 작업',
	'프로젝트 시작시, 서버 구성도, OS 환경 확인 후 방문',
	'다양한 OS,DBMS,WEB/WAS 설치 및 설정 작업 진행',
	'Server - 커널자원, 사용자, 방화벽 포트개방 등 작업',
	'DB - Oracle, MySQL, Maria 등 설치 및 초기 Schema생성 및 Data 적재',
	'WEB/WAS - Apache,Tomcat,HTTP,HTTPS 설치 및 설정',
	'Applicaiton - 앱서버 자원,네트워킹,DB 등을 설정, 기동후 테스트',
	'경복대학교, Naver 샌드박스, Missha, 롯데카드, 마이데이터 서버담당',
	'그 외에 진행중인 프로젝트 트러블슈팅 및 이슈 업무지원',
	],
   },
      {
    startAt: new Date('2020-06'),
    endAt:  new Date('2020-11'),
    title: '[Obzen] AI 솔루션 개발',
    teckStack: [
      TeckStackEnum.DOTNET,
      TeckStackEnum.JAVA,
      TeckStackEnum.ORACLE,
      TeckStackEnum.RHEL,
      ],
    description: [
	'AI Lab 부서 이동',
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
    startAt: new Date('2020-02'),
    endAt:  new Date('2020-05'),
    title: '[Obzen] SSG 마케팅 시스템 구축',
    teckStack: [
      TeckStackEnum.JAVA,
      TeckStackEnum.ORACLE,
      TeckStackEnum.RHEL,
      ],
    description: [
	'신입 OJT',
	'캠페인 시스템 구축 참여',
	],
   },
      {
    startAt: new Date('2020-02'),
    endAt: null,
    title: 'Obzen 입사',
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
    description: ['웹 마케팅 솔루션 개발업','금융, 유통, 쇼핑 분야의 기업 캠페인 시스템 아웃소싱','고객별 개인화 마케팅 솔루션 제공'],
   },
   {
    startAt: new Date('2019-04'),
    endAt: new Date('2019-06'),
    title: '[인턴] Nasdaq 데이터 수집 및 분석',
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
    startAt: new Date('2019-03'),
    endAt: new Date('2019-04'),
    title: '[인턴] 국가 공고문 수집 RSS WEB FEED',
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
		'순차적 순회 알고리즘 구현(CheckFlag)',
		'MongoDB SASS인 Atlas 사용',
		'파이썬 Flask를 이용한 WAS 서버구축',
		'ES6와 HTML/CSS를 이용해 SPA UX/UI 구성',
		'Ajax기술을 활용한 비동기적 검색기능 구현',
		'AWS ec2 UBUNTU 웹 서버 구축',
		'bvpost.shop 도메인 구입 후 네임서버 등록',
		'사내 메신저 Telegram과 Slack에 신규공고문 Push알림'
    ],
  },
  {
    startAt: new Date('2018-03'),
    endAt: new Date('2018-09'),
    title: '[학사] "학식이" - 식권발급 플랫폼',
    teckStack: [TeckStackEnum.AWS, TeckStackEnum.LINUX, TeckStackEnum.JSP,TeckStackEnum.JAVA,TeckStackEnum.MYSQL],
    description: [	'주간 / 월간 메뉴정보 (관리자를 통한 메뉴 업로드)',
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
    startAt: new Date('2013-03'),
    endAt: new Date('2020-02'),
    title: '[학사] 컴퓨터 과학과',
    teckStack: [],
    description: ['서울 4년제 컴퓨터과학 전공 • 학사 졸업'],
  },
]
