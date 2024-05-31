import { Spin, notification } from 'antd'
import React from 'react'
import { Navigate } from 'react-router-dom'
import { io } from 'socket.io-client'
import { useListComapny } from '../api/company'
import { LOCAL_STORAGE_ITEM, PATH } from '../contants/common'
import NotFoundPage from '../pages/NotFoundPage'

const PrivateRoute = ({ children }) => {
  const { data: listCompany, isLoading } = useListComapny()
  const token = localStorage.getItem(LOCAL_STORAGE_ITEM.TOKEN)
  // const domainFromToken = token ? '/' + token?.domain : ''
  const domain = window.location.pathname.split('/')[1]

  // const socket = io('http://localhost:3001', {
  //   auth: {
  //     token: token
  //   }
  // }).connect()
  const socket = io('http://backend_tntccs.infotechacademy.vn:3001', {
    auth: {
      token: token
    }
  }).connect()

  socket.on('message', (message) => {
    console.log(message)
    notification.open({
      message: 'Bạn có thông báo mới',
      description: message.content
    })
  })
  if (domain === '') {
    return <Navigate to={PATH.LANDINGPAGE} replace={true} />
  }
  if (isLoading) return <Spin spinning={isLoading} fullscreen />
  // console.log(
  //   'ddd',
  //   listCompany.items?.filter((item) => item.domain === domain)
  // )
  if (
    !listCompany ||
    listCompany.total === 0 ||
    listCompany.items?.filter((item) => item.domain === domain).length === 0
  )
    return <NotFoundPage />
  // if (!token) {
  //   return <Navigate to={`${'/' + domain + PATH.SIGNIN}`} replace={true} />
  // }
  return children
}

export default PrivateRoute
