import { Spin, notification } from 'antd'
import { jwtDecode } from 'jwt-decode'
import React from 'react'
import { Navigate } from 'react-router-dom'
import { io } from 'socket.io-client'
import { useListComapny } from '../api/company'
import { LOCAL_STORAGE_ITEM, PATH } from '../contants/common'
import NotFoundPage from '../pages/NotFoundPage'

const PrivateRoute = ({ children }) => {
  const { data: listCompany, isLoading } = useListComapny()
  const token = localStorage.getItem(LOCAL_STORAGE_ITEM.TOKEN)
  const domainFromToken = token ? '/' + jwtDecode(token)?.domain : ''
  const path = window.location.pathname

  const socket = io('http://localhost:3001', {
    auth: {
      token: localStorage.getItem(LOCAL_STORAGE_ITEM.TOKEN)
    }
  }).connect()

  socket.on('message', (message) => {
    console.log(message)
    notification.open({
      message: 'Bạn có thông báo mới',
      description: message.content
    })
  })

  if (isLoading) return <Spin spinning={isLoading} fullscreen />
  console.log(
    'private route',
    listCompany,
    listCompany.total,
    listCompany.items?.filter((item) => item.domain === path).length
  )
  if (
    !listCompany ||
    listCompany.total === 0 ||
    listCompany.items?.filter((item) => item.domain === path).length === 0
  )
    return <NotFoundPage />
  if (!token) {
    return <Navigate to={`${path + PATH.SIGNIN}`} replace={true} />
  }
  return children
}

export default PrivateRoute
