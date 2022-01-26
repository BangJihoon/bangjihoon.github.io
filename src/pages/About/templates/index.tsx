import React, { useState } from 'react'
import { animations } from 'react-animation'
import Typed from 'react-typed'

import Text from '../../../components/atom/Text'
import TeckStackCard from '../../../components/molecules/ContentElements/TeckStackCard'
import useRootData from '../../../hooks/useRootData'
import { mySkillObject } from '../../../stores/app/data'
import stylesDesktop from './Desktop.module.scss'
import stylesMobile from './Mobile.module.scss'

const App: React.FunctionComponent = () => {
  const { isDesktopView } = useRootData(({ appStore }) => ({
    isDesktopView: appStore.isDesktopView,
  }))
  const styles = isDesktopView ? stylesDesktop : stylesMobile

  const [isTypedComplate, setIsTypedComplate] = useState(false)

  const aboutJayceTexts = [
    '> 현재 Obzen에서 서버 관리자, 솔루션 개발자, 프로젝트 아웃소싱 인력으로 등으로 일하고 있습니다.',
    '주 언어는 Java이며, 틈틈이 "모던 자바 인 액션","Effective Java 3/E" 와 같은 책을 통해 스터디하고 지속적으로 언어 활용 능력을 개발중입니다.',
    'Java를 이용한 Spring Back-end 개발에 관심이 있어, 개인 프로젝트를 진행중이며 지속적으로 학습중에 있습니다.', 
    '아웃소싱 업체의 특성상 다양한 OS와 DBMS, WEB/WAS 환경에서 개발을 진행하여 다양한 개발 환경을 경험하였고 새로운 개발환경에 잘 적응 할 수 있습니다.',
    '고객사와의 협의 능력과 팀원들간의 의사소통이 중요한 업무다 보니, 프로젝트 설계/구축에 방향성을 정하는일에 적극적이고 능숙하게 소통합니다.',
    '주로 Ansi기반에 RDBMS Sql 사용에 능숙하며, NoSQL은 개인프로젝트 통해 사용한 바 있으며, Sqld(SQL개발자) 자격증을 가지고 있습니다.',
  ]

  return (
    <div className={styles.frame}>
      <div className={styles.container}>
        <div className={styles.leftArea}>
          <div className={styles.titleBox}>
            <Typed
              onComplete={(): void => setIsTypedComplate(true)}
              className={styles.text}
              strings={['System.out.println(&quot;방지훈&quot;);']}
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
              animationDuration: '4s',
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
