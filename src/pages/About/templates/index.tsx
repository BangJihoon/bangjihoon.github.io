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
    '> 현재 Riderdash에서 풀스택 개발자로 일하고 있습니다.',
    '언어는 주로 javascript(typescript), python을 다루며, 프레임워크는 reactJs, mobx, nodeJs, graphql에 능합니다.',
    '경험해보지 않고 두려워하거나 어렵다고 생각하는 걸 무척 싫어하며',
    '어떠한 문제에 닥치면 창의성과 여러 경험으로 해결하는데 강점이 있습니다.',
  ]

  return (
    <div className={styles.frame}>
      <div className={styles.container}>
        <div className={styles.leftArea}>
          <div className={styles.titleBox}>
            <Typed
              onComplete={(): void => setIsTypedComplate(true)}
              className={styles.text}
              strings={['console.log(박희승)']}
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
