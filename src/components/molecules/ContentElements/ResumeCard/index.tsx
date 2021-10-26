import React from 'react'

import { ResumeObject } from '../../../../stores/app/type'
import Text from '../../../atom/Text'
import stylesDesktop from './Desktop.module.scss'
import stylesMobile from './Mobile.module.scss'

interface PropsResumeCard {
  style?: React.CSSProperties
  isDesktopView: boolean
  resumeObject: ResumeObject
}

const App: React.FunctionComponent<PropsResumeCard> = ({ style, isDesktopView, resumeObject }: PropsResumeCard) => {
  const styles = isDesktopView ? stylesDesktop : stylesMobile

  const { title, teckStack, description } = resumeObject

  return (
    <div style={style} className={styles.container}>
      <Text className={styles.titleText} text={title}></Text>
      {teckStack.length > 0 && (
        <div className={styles.hashtagArea}>
          {teckStack.map((item, index) => {
            return <Text key={index} className={styles.hashtag} text={item}></Text>
          })}
        </div>
      )}
      {description.length > 0 && (
        <div className={styles.descriptionArea}>
          {description.map((item, index) => {
            return <Text key={index} className={styles.descriptionText} text={`· ${item}`}></Text>
          })}
        </div>
      )}
    </div>
  )
}

export default App
