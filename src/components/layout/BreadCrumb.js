import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const BreadCrumb = () => {
  const location = useLocation()
  console.log(location)
  // const breadCrumbView = () => {
  const { pathname } = location
  const pathnames = pathname.split('/').filter((item) => item)
  console.log(pathnames)
  return (
    <div>
      <BreadCrumb>
        <Link to='/'>Home</Link>
        {/* {pathname.length > 0
            ? (
              <BreadCrumb.Item>
                <Link to="/">Home</Link>
              </BreadCrumb.Item>
            )
            : (
              <BreadCrumb.Item>Home</BreadCrumb.Item>
            )}
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
            const isLast = index === pathnames.length - 1
            return isLast
              ? (
                <BreadCrumb.Item>{name}</BreadCrumb.Item>
              )
              : (
                <BreadCrumb.Item>
                  <Link to={`${routeTo}`}>{name}</Link>
                </BreadCrumb.Item>
              )
          })} */}
      </BreadCrumb>
    </div>
  )
  // }

  // return <>{breadCrumbView()}</>
}

export default BreadCrumb
