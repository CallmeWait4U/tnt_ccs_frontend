import React, { useEffect } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { LOCAL_STORAGE_ITEM, PATH } from '../contants/common'

const PrivateRoute = ({ children }) => {
  const location = useLocation()

  useEffect(() => {}, [])

  if (!localStorage.getItem(LOCAL_STORAGE_ITEM.TOKEN)) {
    return (
      <Navigate
        to={PATH.CUSTOMERLANDINGPAGE}
        state={{ path: location.pathname }}
      />
    )
  }

  // const socket = io('http://localhost:3001', {
  //   auth: {
  //     token: localStorage.getItem(LOCAL_STORAGE_ITEM.TOKEN)
  //   }
  // }).connect()

  // socket.on('message', (message) => {
  //   console.log(message)
  // })

  return children
}

export default PrivateRoute
