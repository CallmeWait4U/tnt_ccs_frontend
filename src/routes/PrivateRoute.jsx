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

  const socket = io('http://localhost:3001', {
    auth: {
      token: localStorage.getItem(LOCAL_STORAGE_ITEM.TOKEN)
    }
  }).connect()

  socket.on('message', (message) => {
    console.log(message)
  })

  return children
}

export default PrivateRoute
