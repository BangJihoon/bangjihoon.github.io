import React from 'react'
import Typed from 'react-typed'

import arrowDownGif from '../../../assets/images/gif/arrowDown.gif'
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
              <Text className={styles.greetingText} text={'Hello World 👋'}></Text>
              <Text className={styles.greetingText} text={"I'm jihoon Bang "}></Text>
            </div>
          )}
        </div>
        <Text className={styles.wiseSayingText} text={"Get into the New World"}></Text>
        {isDesktopView ? (
          <Typed
            className={styles.myselfText}
            strings={['내 소개를 하지, 나는 방지훈, 자바 개발자']}
            typeSpeed={40}
          />
        ) : (
          <>
            <Text className={styles.myselfText} text={'그냥 흘러갈 순 없지'} />
            <Text className={styles.myselfText} text={'부딪히고 넘어져도 괜찮아'} />
          </>
        )}
        <div className={styles.guideBox}>
          <Text className={styles.downArrowText} text={'Scroll'}></Text>
          <Image className={styles.downArrowImage} src={arrowDownGif}></Image>
        </div>
      </div>
    </div>
  )
}

export default App
