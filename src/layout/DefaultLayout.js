import React from 'react'
import { AppContent, AppHeader } from '../components/index'

const DefaultLayout = () => {
  return (
    <div>
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <h1 className="unique">Hello</h1>
        </div>
      </div>
    </div>
  )
}

export default DefaultLayout
