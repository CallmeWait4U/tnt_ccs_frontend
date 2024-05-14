import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { jwtDecode } from 'jwt-decode'
import React, { createContext, useContext } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './assets/styles/main.css'
import './assets/styles/responsive.css'
import { LOCAL_STORAGE_ITEM } from './contants/common'
import routesLayout from './routes'

// Tạo một context để lưu trữ domain
const DomainContext = createContext('')

// Custom hook để lấy domain từ localStorage
export const useDomain = () => {
  const domain = useContext(DomainContext)
  return domain
}

const queryClient = new QueryClient()

const App = () => {
  // Lấy token từ localStorage
  const token = localStorage.getItem(LOCAL_STORAGE_ITEM.TOKEN)
  // Lấy domain từ token sử dụng jwtDecode, hoặc mặc định là ''
  const domain = token ? '/' + jwtDecode(token)?.domain : ''

  return (
    // Cung cấp domain thông qua DomainContext.Provider
    <DomainContext.Provider value={domain}>
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
          </Routes>
        </QueryClientProvider>
      </Router>
    </DomainContext.Provider>
  )
}

export default App
