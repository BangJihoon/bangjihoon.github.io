import React from 'react'

import TimelineSection from '../../../components/TimelineSection'
import useRootData from '../../../hooks/useRootData'

interface StudyTemplateProps {
  style?: React.CSSProperties
}

const App: React.FunctionComponent<StudyTemplateProps> = ({ style }: StudyTemplateProps) => {
  const { studyArrayInLatestOrder } = useRootData(({ appStore }) => ({
    studyArrayInLatestOrder: appStore.studyArrayInLatestOrder,
  }))

  return <TimelineSection style={style} title="Side Study" items={studyArrayInLatestOrder} />
}

export default App
