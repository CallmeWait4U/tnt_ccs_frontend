import { jwtDecode } from 'jwt-decode'
import { Navigate } from 'react-router-dom'

import { Spin } from 'antd'
import { useListComapny } from '../api/company'
import { LOCAL_STORAGE_ITEM, PATH } from '../contants/common'
import HomePage from '../pages/HomePage'
import NotFoundPage from '../pages/NotFoundPage'

const CompanyRoute = () => {
  const { data: listCompany, isLoading } = useListComapny()
  const token = localStorage.getItem(LOCAL_STORAGE_ITEM.TOKEN)
  const domainFromToken = token ? '/' + jwtDecode(token)?.domain : ''
  const path = window.location.pathname
  if (isLoading) return <Spin spinning={isLoading} fullscreen />
  if (
    !listCompany ||
    listCompany.total === 0 ||
    listCompany.items?.filter((item) => item.domain === path).length === 0
  )
    return <NotFoundPage />
  if (token) {
    return <HomePage />
  }
  if (domainFromToken !== path) {
    localStorage.removeItem(LOCAL_STORAGE_ITEM.TOKEN)
  }
  return <Navigate to={`${path + PATH.SIGNIN}`} replace={true} />
}

export default CompanyRoute
