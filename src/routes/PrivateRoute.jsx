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

  return children
}

export default PrivateRoute
