import Timeline from '@mui/lab/Timeline'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import React from 'react'

import Text from '../atom/Text'
import ResumeCard from '../molecules/ContentElements/ResumeCard'
import useRootData from '../../hooks/useRootData'
import { ResumeObject } from '../../stores/app/type'
import stylesDesktop from './Desktop.module.scss'
import stylesMobile from './Mobile.module.scss'

interface TimelineSectionProps {
  style?: React.CSSProperties
  title: string
  items: Array<ResumeObject>
}

const App: React.FunctionComponent<TimelineSectionProps> = ({ style, title, items }: TimelineSectionProps) => {
  const { isDesktopView } = useRootData(({ appStore }) => ({
    isDesktopView: appStore.isDesktopView,
  }))

  const styles = isDesktopView ? stylesDesktop : stylesMobile

  return (
    <div style={style} className={styles.container}>
      <Text className={styles.titleText} text={title} />

      <Timeline className={styles.timelineArea} position={isDesktopView ? 'alternate' : undefined}>
        {items.map((item, index) => {
          const { startAt, endAt } = item

          return (
            <TimelineItem key={index}>
              <TimelineOppositeContent className={styles.dateText}>
                {`${startAt} -   ${endAt}`}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <ResumeCard
                  style={{
                    float: isDesktopView && index % 2 ? 'right' : 'left',
                  }}
                  isDesktopView={isDesktopView}
                  resumeObject={item}
                />
              </TimelineContent>
            </TimelineItem>
          )
        })}
      </Timeline>
    </div>
  )
}

export default App
