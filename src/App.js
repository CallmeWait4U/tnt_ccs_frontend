import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './assets/styles/main.css'
import './assets/styles/responsive.css'

import routesLayout from './routes'

function App () {
  return (
    <div className="App">
      <Routes>
        {routesLayout.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  )
}

export default App
