import Timeline from '@mui/lab/Timeline'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import moment from 'moment'
import React from 'react'

import ResumeCard from '../../../components/molecules/ContentElements/ResumeCard'
import TeckStackCard from '../../../components/molecules/ContentElements/TeckStackCard'
import useRootData from '../../../hooks/useRootData'
import stylesDesktop from './Desktop.module.scss'
import stylesMobile from './Mobile.module.scss'

const App: React.FunctionComponent = () => {
  const { isDesktopView, resumeArrayInLatestOrder } = useRootData(({ appStore }) => ({
    isDesktopView: appStore.isDesktopView,
    resumeArrayInLatestOrder: appStore.resumeArrayInLatestOrder,
  }))

  console.log('resumeArrayInLatestOrder :', resumeArrayInLatestOrder)
  const styles = isDesktopView ? stylesDesktop : stylesMobile

  return (
    <div className={styles.container}>
      <Timeline className={styles.timelineArea} position="alternate">
        {resumeArrayInLatestOrder.map((item, index) => {
          const { startAt, endAt } = item

          return (
            <TimelineItem key={index}>
              <TimelineOppositeContent className={styles.dateText}>
                {`${moment(startAt).format('YYYY-MM')} ~ ${endAt ? moment(endAt).format('YYYY-MM') : ''}`}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <ResumeCard
                  style={{
                    float: index % 2 ? 'right' : 'left',
                  }}
                  isDesktopView={isDesktopView}
                  resumeObject={item}
                ></ResumeCard>
              </TimelineContent>
            </TimelineItem>
          )
        })}
      </Timeline>
    </div>
  )
}

export default App
