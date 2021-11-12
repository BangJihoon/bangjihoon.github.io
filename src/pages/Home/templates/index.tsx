import React from 'react'
import Typed from 'react-typed'

import downArrowGif from '../../../assets/images/gif/downArrow.gif'
import ProfileSrc from '../../../assets/images/profile.jpg'
import Image from '../../../components/atom/Image'
import Text from '../../../components/atom/Text'
import RotateImage from '../../../components/molecules/ContentElements/RotateImage'
import useRootData from '../../../hooks/useRootData'
import stylesDesktop from './Desktop.module.scss'
import stylesMobile from './Mobile.module.scss'

interface HomeTemplateProps {
  style?: React.CSSProperties
}

const App: React.FunctionComponent<HomeTemplateProps> = ({ style }: HomeTemplateProps) => {
  const { isDesktopView } = useRootData(({ appStore }) => ({
    isDesktopView: appStore.isDesktopView,
  }))
  const styles = isDesktopView ? stylesDesktop : stylesMobile

  return (
    <div style={style} className={styles.frame}>
      <div className={styles.container}>
        <div className={styles.titleBox}>
          <RotateImage className={styles.profileImage} src={ProfileSrc}></RotateImage>
          {isDesktopView && (
            <div className={styles.titleTextBox}>
              <Text className={styles.greetingText} text={'Hi, 👋'}></Text>
              <Text className={styles.greetingText} text={"I'm Jayce"}></Text>
            </div>
          )}
        </div>
        <Text className={styles.wiseSayingText} text={"Code doesn't lie."}></Text>
        {isDesktopView ? (
          <Typed
            className={styles.myselfText}
            strings={['만족하지 못하면 찜찜함에 잠을 못자는 개발자 "박희승"입니다.']}
            typeSpeed={40}
          />
        ) : (
          <>
            <Text className={styles.myselfText} text={'만족하지 못하면 찜찜함에'} />
            <Text className={styles.myselfText} text={'잠을 못자는 개발자 "박희승"입니다.'} />
          </>
        )}
        <div className={styles.guideBox}>
          <Text className={styles.downArrowText} text={'Scroll'}></Text>
          <Image className={styles.downArrowImage} src={downArrowGif}></Image>
        </div>
      </div>
    </div>
  )
}

export default App
