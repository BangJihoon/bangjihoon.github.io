import Timeline from '@mui/lab/Timeline'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import moment from 'moment'
import React, { useRef } from 'react'

import Text from '../../../components/atom/Text'
import ResumeCard from '../../../components/molecules/ContentElements/ResumeCard'
import useRootData from '../../../hooks/useRootData'
import stylesDesktop from './Desktop.module.scss'
import stylesMobile from './Mobile.module.scss'

interface StudyTemplateProps {
  style?: React.CSSProperties
}

const App: React.FunctionComponent<StudyTemplateProps> = ({ style }: StudyTemplateProps) => {
  const { isDesktopView, studyArrayInLatestOrder } = useRootData(({ appStore }) => ({
    isDesktopView: appStore.isDesktopView,
    studyArrayInLatestOrder: appStore.studyArrayInLatestOrder,
  }))

  const styles = isDesktopView ? stylesDesktop : stylesMobile
  const containerRef = useRef(null)

  return (
    <div ref={containerRef} style={style} className={styles.container}>
      <Text className={styles.titleText} text="Side Study" />

      <Timeline className={styles.timelineArea} position={isDesktopView ? 'alternate' : null}>
        {studyArrayInLatestOrder.map((item, index) => {
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
