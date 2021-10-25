import React from 'react'

import Text from '../../../components/atom/Text'
import useRootData from '../../../hooks/useRootData'
import DefaultLayout from '../../../layouts/Layouts/Default'
import stylesDesktop from './Desktop.module.scss'
import stylesMobile from './Mobile.module.scss'

const App: React.FunctionComponent = () => {
  const { isDesktopView } = useRootData(({ appStore }) => ({
    isDesktopView: appStore.isDesktopView,
  }))
  const styles = isDesktopView ? stylesDesktop : stylesMobile

  return (
    <DefaultLayout>
      <div className={styles.container}>
        <div>
          <div>
            <Text text={'console.log('}></Text>
          </div>
        </div>
        <div></div>
      </div>
    </DefaultLayout>
  )
}

export default App
