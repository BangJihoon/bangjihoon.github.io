import React, { useEffect, useRef } from 'react'
import { useScreenClass } from 'react-grid-system'
import { Route, Switch, useHistory, useLocation } from 'react-router-dom'

import useRootData from './hooks/useRootData'
import About from './pages/About'
import Career from './pages/Career'
import Home from './pages/Home'
import Study from './pages/Study'

const App: React.FunctionComponent = () => {
  const { changeScreenClass, changeMainMenu } = useRootData(({ appStore }) => ({
    changeScreenClass: appStore.changeScreenClass,
    changeMainMenu: appStore.changeMainMenu,
  }))

  const componentRef = useRef(null)
  const currentScreenClass = useScreenClass(componentRef)

  const history = useHistory()
  const location = useLocation()

  useEffect(() => {
    // scroll up to top when switching pages
    window.scrollTo(0, 0)
    changeMainMenu(window.location.pathname.substring(1), true)
  }, [history, location])

  useEffect(() => {
    // Fix for react-grid-system v7
    changeScreenClass(currentScreenClass === 'xxl' ? 'xl' : currentScreenClass)
  }, [currentScreenClass])

  return (
    <div ref={componentRef}>
      <Switch>
        <Route path="/Study" component={Study} />

        <Route path="/career" component={Career} />

        <Route path="/about" component={About} />

        <Route path="/" component={Home} />
      </Switch>
    </div>
  )
}

export default App
