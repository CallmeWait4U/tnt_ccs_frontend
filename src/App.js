import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './assets/styles/main.css'
import './assets/styles/responsive.css'
import { routesLayout, routesLayoutNoDomain } from './routes/routes'

const queryClient = new QueryClient()

const App = () => {
  // Lấy token từ localStorage
  // const token = localStorage.getItem(LOCAL_STORAGE_ITEM.TOKEN)
  // Lấy domain từ token sử dụng jwtDecode, hoặc mặc định là ''
  const domain = '/:domain'

  return (
    // Cung cấp domain thông qua DomainContext.Provider

    <Router>
      <QueryClientProvider client={queryClient}>
        <Routes>
          {routesLayout.map((route, index) => (
            <Route
              key={index}
              path={domain + route.path}
              element={route.element}
            />
          ))}
          {routesLayoutNoDomain.map((route, index) => (
            <Route
              key={index + 100}
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
      </QueryClientProvider>
    </Router>
  )
}

export default App
