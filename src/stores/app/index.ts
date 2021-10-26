import { observable } from 'mobx'
import moment from 'moment'
import { ScreenClass } from 'react-grid-system'

import history from '../../utils/history'
import { myResumeArray } from './data'
import { ResumeObject } from './type'

const theFirstURL = window.location.pathname.substring(1)

const createStore = (): typeof appStore => {
  const appStore = {
    // Initial state
    currentMainMenu: observable.box<string>(theFirstURL),
    screenClass: observable.box<ScreenClass>(window.screen.width > 750 ? 'xl' : 'xs'),
    resumeArray: observable.box<Array<ResumeObject>>(myResumeArray),

    // Getter
    get isDesktopView(): boolean {
      const screenClass = appStore.screenClass.get()

      return screenClass === 'xl'
    },

    get resumeArrayInLatestOrder(): Array<ResumeObject> {
      const resumeArray = appStore.resumeArray.get()
      if (!resumeArray) return []

      return resumeArray.sort((a, b) => {
        return moment(b.startAt).unix() - moment(a.startAt).unix()
      })
    },

    // Setter
    changeMainMenu(data: string, doNotPush = false): void {
      appStore.currentMainMenu.set(data[0] === '/' ? data.substring(1) : data)

      if (doNotPush) return
      history.push(data)
    },
    changeScreenClass(data: ScreenClass): void {
      appStore.screenClass.set(data)
    },
  }

  return appStore
}

const store = createStore()
export default store
