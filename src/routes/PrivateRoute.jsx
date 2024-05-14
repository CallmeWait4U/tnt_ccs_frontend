import { notification } from 'antd'
import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { io } from 'socket.io-client'
import { LOCAL_STORAGE_ITEM, PATH } from '../contants/common'

const PrivateRoute = ({ children }) => {
  const location = useLocation()

  if (!localStorage.getItem(LOCAL_STORAGE_ITEM.TOKEN)) {
    return (
      <Navigate to={PATH.LANDINGPAGE} state={{ path: location.pathname }} />
    )
  }

  const socket = io('http://172.16.3.189:3001', {
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

  return children
}

export default PrivateRoute
