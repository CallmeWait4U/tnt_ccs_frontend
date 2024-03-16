import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { useEffect } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './assets/styles/main.css'
import './assets/styles/responsive.css'

import { socket } from './configs/SocketConfigs'
import routesLayout from './routes'

const queryClient = new QueryClient()
function App() {
  useEffect(() => {
    socket.on()
  }, [])
  return (
    <Router>
      {' '}
      <QueryClientProvider client={queryClient}>
        <Routes>
          {routesLayout.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </QueryClientProvider>
    </Router>
  )
}

export default App
