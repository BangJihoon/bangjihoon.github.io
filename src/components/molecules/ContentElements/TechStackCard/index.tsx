import React from 'react'

import Text from '../../../atom/Text'
import stylesDesktop from './Desktop.module.scss'
import stylesMobile from './Mobile.module.scss'

interface PropsTechStackCard {
  style?: React.CSSProperties
  isDesktopView: boolean
  title: string
  techStackArray: Array<string>
  techText : string
}

const App: React.FunctionComponent<PropsTechStackCard> = ({
  style,
  isDesktopView,
  title,
  techStackArray,
  techText,

}: PropsTechStackCard) => {
  const styles = isDesktopView ? stylesDesktop : stylesMobile

  return (
    <div style={style} className={styles.container}>
      <Text className={styles.titleText} text={title}></Text>

      <div className={styles.stackBox}>
        {techStackArray.map((item, index) => {
          return <Text key={index} className={styles.stackText} text={item}></Text>
        })}
      </div>

      <Text className={styles.techText} text={techText}></Text>
    </div>
  )
}

export default App
