import React from 'react'

import Text from '../../../atom/Text'
import stylesDesktop from './Desktop.module.scss'
import stylesMobile from './Mobile.module.scss'

interface PropsTeckStackCard {
  style?: React.CSSProperties
  isDesktopView: boolean
  title: string
  teckStackArray: Array<string>
}

const App: React.FunctionComponent<PropsTeckStackCard> = ({
  style,
  isDesktopView,
  title,
  teckStackArray,
}: PropsTeckStackCard) => {
  const styles = isDesktopView ? stylesDesktop : stylesMobile

  return (
    <div style={style} className={styles.container}>
      <Text className={styles.titleText} text={title}></Text>

      <div className={styles.stackBox}>
        {teckStackArray.map((item, index) => {
          return <Text key={index} className={styles.stackText} text={item}></Text>
        })}
      </div>
    </div>
  )
}

export default App
