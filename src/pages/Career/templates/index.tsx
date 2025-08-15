import React from 'react'

import TimelineSection from '../../../components/TimelineSection'
import useRootData from '../../../hooks/useRootData'

interface CareerTemplateProps {
  style?: React.CSSProperties
}

const App: React.FunctionComponent<CareerTemplateProps> = ({ style }: CareerTemplateProps) => {
  const { resumeArrayInLatestOrder } = useRootData(({ appStore }) => ({
    resumeArrayInLatestOrder: appStore.resumeArrayInLatestOrder,
  }))

  return <TimelineSection style={style} title="Career Timeline" items={resumeArrayInLatestOrder} />
}

export default App
