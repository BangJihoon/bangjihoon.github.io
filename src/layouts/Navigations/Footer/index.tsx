import React from 'react'

import GithubIcon from '../../../assets/images/icons/github.png'
import InstargramIcon from '../../../assets/images/icons/instargram.png'
import LinkedInIcon from '../../../assets/images/icons/linkedIn.png'
import TistoryIcon from '../../../assets/images/icons/TistoryIcon.png'
import YoutubeIcon from '../../../assets/images/icons/youtube.png'
import Notion from '../../../assets/images/icons/notion.png'
import Image from '../../../components/atom/Image'
import Text from '../../../components/atom/Text'
import useRootData from '../../../hooks/useRootData'
import stylesDesktop from './Desktop.module.scss'
import stylesMobile from './Mobile.module.scss'

interface LinkIcon {
  icon: string
  link: string
}

const App: React.FunctionComponent = () => {
  const { isDesktopView } = useRootData(({ appStore }) => ({
    isDesktopView: appStore.isDesktopView,
  }))

  const styles = isDesktopView ? stylesDesktop : stylesMobile

  const linkIconArray: Array<LinkIcon> = [
    {
      icon: GithubIcon,
      link: 'https://github.com/bangjihoon',
    },
    {
      icon: TistoryIcon,
      link: 'https://bangu4.tistory.com/',
    },
    {
      icon: InstargramIcon,
      link: 'https://www.instagram.com/bangu4/',
    },
    {
      icon: Notion,
      link: 'https://supreme-lupin-c1a.notion.site/2022-51a620bc703d499faffabc6d71647390',
    },
  ]

  const linkIconClickHandler = (link: string): void => {
    window.open(link, '_blank')
  }

  return (
    <footer className={styles.container}>
      <div>
        <div className={styles.flex}>
          <div className={styles.leftBox}>
            <Text className={styles.copyRightText} text={'© 2021 Jayce, Last Modify by BangJihoon in 2022.01'}></Text>
          </div>
          <div className={styles.rightBox}>
            <div className={styles.iconBox}>
              {linkIconArray.map((item, index) => {
                const { icon, link } = item

                return (
                  <Image
                    className={styles.icon}
                    key={index}
                    src={icon}
                    clickHandler={(): void => linkIconClickHandler(link)}
                  ></Image>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default App
