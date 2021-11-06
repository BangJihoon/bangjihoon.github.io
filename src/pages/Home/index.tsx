import React from 'react'

import DefaultLayout from '../../layouts/Layouts/Default'
import CareerTemplate from '../Career/templates'
import HomeTemplate from './templates'

const App: React.FunctionComponent = () => {
  return (
    <DefaultLayout>
      <div
        style={{
          height: '100vh',
          overflowY: 'auto',
          scrollSnapType: 'y mandatory',
        }}
      >
        <HomeTemplate
          style={{
            scrollSnapAlign: 'start',
          }}
        ></HomeTemplate>
        <CareerTemplate
          style={{
            height: '90vh',
            overflowY: 'auto',
            scrollSnapAlign: 'start',
          }}
        ></CareerTemplate>
      </div>
    </DefaultLayout>
  )
}
export default App
