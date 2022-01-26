export enum PageEnum {
  HOME = 'Home',
  ABOUT = 'About',
  CAREER = 'Career',
}

export enum ScreenModeEnum {
  DARK,
  LIGHT,
}

export enum TeckStackEnum {
  HTML = 'Html',
  CSS = 'Css',
  SCSS = 'Scss',
  STORYBOOK = 'StoryBook',
  ZEPLIN = 'Zeplin',
  NEXT_JS = 'NextJS',
  REACT_JS = 'ReactJs',
  VUE_JS = 'VueJs',
  NODE_JS = 'NodeJs',
  MOBX = 'Mobx',
  REDUX = 'Redux',
  VUEX = 'Vuex',
  JAVASCRIPT = 'Javascript',
  TYPESCRIPT = 'Typescript',
  EXPRESS = 'Express',
  GRAPHQL = 'Graphql',
  APOLLO = 'Apollo',
  POSTGRE = 'Postgre',
  GCP = 'GCP',
  S3 = 'S3',
  GIT = 'Git',
  GA = 'GA',
  AMPLITUDE = 'Amplitude',
  HASURA = 'Hasura',
  TRELLO = 'Trello',
  FIREBASE = 'Firebase',
  DJANGO = 'Django',
  C_PLUS_PLUS = 'C++',
  PYTHON = 'Python',
  UBUNTU = 'Ubuntu',
  TENSORFLOW = 'Tensorflow',
  RASPBERRY_PI = 'RaspberryPi',
  JAVA = 'Java',
  AWS = 'AWS',
  LINUX = 'Linux',
  MYSQL = 'MySQL',
  JSP = 'JSP',
  CC = 'C#',
  MONGODB = 'MongoDB',
  CHROMEDRIVER = 'ChromeDriver',
  FLASK ='Flask',
  TELEGRAM = 'TelegramAPI',
  SLACK = 'SlackAPI',
  ALTAS = 'Atlas',  
  ORACLE = 'Oracle',
  RHEL = 'RHEL',
  MARIADB = 'MariaDB',
  WINDOWS = 'WindowsServer',
  DOTNET = '.NET',
  APACHE = 'Apache',
  TOMCAT = 'Tomcat',    
  ALGO = 'Algorithm',
  SPRING = 'Spring',
  KOTLIN = 'Kotlin',
}
export interface ResumeObject {
  startAt: Date
  endAt: Date
  title: string
  teckStack: Array<TeckStackEnum>
  description: Array<string>
}
