import React, { useState } from 'react'
import { animations } from 'react-animation'
import Typed from 'react-typed'

import Text from '../../../components/atom/Text'
import TeckStackCard from '../../../components/molecules/ContentElements/TeckStackCard'
import useRootData from '../../../hooks/useRootData'
import { mySkillObject } from '../../../stores/app/data'
import { mySkillText } from '../../../stores/app/data'
import stylesDesktop from './Desktop.module.scss'
import stylesMobile from './Mobile.module.scss'

const App: React.FunctionComponent = () => {
  const { isDesktopView } = useRootData(({ appStore }) => ({
    isDesktopView: appStore.isDesktopView,
  }))
  const styles = isDesktopView ? stylesDesktop : stylesMobile

  const [isTypedComplate, setIsTypedComplate] = useState(false)

  const aboutJayceTexts = [
    '첫 회사에서 3년 동안 Java 기반의 서버 관리자, 솔루션 개발자, 백엔드 개발 업무를 진행하였습니다 .',
    '"모던 자바 인 액션","Effective Java 3/E" 와 같은 책을 통해 Java 1.8을 스터디하고 지속적 발전을 위해 노력해왔습니다.', 
    '다양한 OS와 DBMS, WEB/WAS 환경에서 개발을 진행하여 다양한 개발 환경을 경험하였고 새로운 개발환경에 잘 적응 할 수 있습니다.',
    '고객사와의 협의 능력과 팀원들간의 의사소통에 자신있으며, 프로젝트 설계/구축에 방향성을 정하는일에 적극적이고 능숙하게 소통합니다.',
    '주로 Ansi기반에 RDBMS SQL 사용에 능숙하며, NoSQL은 개인프로젝트 통해 사용한 바 있으며, SQLD(SQL개발자) 자격증을 가지고 있습니다.',
    '지속적 발전을 위해 매 분기별로 개인/팀 프로젝트를 목표하여 계획하여 진행하고 있습니다.',
    '새로학습한 내용을 개인블로그에 정리하여 보다 많은 사람들에게 공유하는 습관이 있습니다.',
    '지난 2022.3월부터 지금까지 Flutter 앱개발에 관심을 가지고 학습하였습니다.',
    'Flutter GetX, Reiverpod 상태관리 라이브러리를 이용하여 개발을 진행한 바 있습니다.',
    'Firebase에 FCM,Auth,Store 와 같은 기능들을 연동하여 사용한 경험이 있습니다.',
    'Spring Web서버와 REST API 연동, Http 소켓방식의 GPS공유 및 실시간 서비스를 제작한 경험이 있습니다.',
    '앞으로 Flutter 개발자로 다양한 지식을 배우고 나눠서 보다 체계적이고 최적화된 서비스를 만들고 싶습니다.',
    '저를 긍정적으로 바라봐주는 팀원들과 Flutter 개발자로 함께 일할 직장을 찾고 있습니다.',
    '관심을 가지고 봐주셔서 감사합니다.',
  ]

  return (
    <div className={styles.frame}>
      <div className={styles.container}>
        <div className={styles.leftArea}>
          <div className={styles.titleBox}>
            <Typed
              onComplete={(): void => setIsTypedComplate(true)}
              className={styles.text}
              strings={['System.out.println(whoami);']}
              typeSpeed={70}
            ></Typed>
          </div>

          {isTypedComplate && (
            <div
              style={{
                animation: animations.fadeIn,
                animationDuration: '4s',
              }}
              className={styles.aboutTextBox}
            >
              {aboutJayceTexts.map((item, index) => {
                return <Text key={index} className={styles.aboutText} text={item}></Text>
              })}
            </div>
          )}
        </div>

        {isTypedComplate && (
          <div
            style={{
              animation: animations.fadeIn,
              animationDuration: '2s',
            }}
            className={styles.rightArea}
          >
            {Object.keys(mySkillObject).map((key, index) => {
              return (
                <TeckStackCard
                  key={index}
                  isDesktopView={isDesktopView}
                  title={key}
                  teckStackArray={mySkillObject[key]}
                  teckText={mySkillText[key]}
                ></TeckStackCard>
              )
            })}

          </div>
        )}
      </div>
    </div>
  )
}

export default App
