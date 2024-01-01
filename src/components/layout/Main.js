/*!
  =========================================================
  * Muse Ant Design Dashboard - v1.0.0
  =========================================================
  * Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
  * Copyright 2021 Creative Tim (https://www.creative-tim.com)
  * Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
  * Coded by Creative Tim
  =========================================================
  * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { Affix, Layout } from 'antd'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
// import BreadCrumb from './BreadCrumb'
import Footer from './Footer'
import Header from './Header'
import Sidenav from './Sidenav'

const { Header: AntHeader, Content, Sider } = Layout

function Main ({ children, namePage }) {
  const [visible, setVisible] = useState(false)
  const [placement, setPlacement] = useState('right')
  const [sidenavColor, setSidenavColor] = useState('#1890ff')
  const [sidenavType, setSidenavType] = useState('transparent')
  const [fixed, setFixed] = useState(false)

  console.log(placement, sidenavColor, sidenavType)

  const openDrawer = () => setVisible(!visible)
  const handleSidenavType = (type) => setSidenavType(type)
  const handleSidenavColor = (color) => setSidenavColor(color)
  const handleFixedNavbar = (type) => setFixed(type)

  let { pathname } = useLocation()
  pathname = pathname.replace('/', '')
  document.title = namePage

  useEffect(() => {
    if (pathname === 'rtl') {
      setPlacement('left')
    } else {
      setPlacement('right')
    }
  }, [pathname])

  return (
    <Layout
      className={`layout-dashboard ${
        pathname === 'profile' ? 'layout-profile' : ''
      }`}
    >
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type)
        }}
        trigger={null}
        width={250}
        theme="light"
      >
        <Sidenav />
      </Sider>
      <Layout
        style={{
          marginLeft: 0
        }}
      >
        {fixed
          ? (
            <Affix>
              <AntHeader
                className={`${fixed ? 'ant-header-fixed' : ''}`}
                style={{
                  background: 'white',
                  marginTop: 'unset',
                  borderRadius: '0px 0px 8px 8px'
                }}
              >
                <Header
                  onPress={openDrawer}
                  name={namePage}
                  subName={pathname}
                  handleSidenavColor={handleSidenavColor}
                  handleSidenavType={handleSidenavType}
                  handleFixedNavbar={handleFixedNavbar}
                />
              </AntHeader>
            </Affix>
          )
          : (
            <AntHeader
              className={`${fixed ? 'ant-header-fixed' : ''}`}
              style={{
                background: 'white',
                marginTop: 'unset',
                borderRadius: '0px 0px 8px 8px'
              }}
            >
              <Header
                onPress={openDrawer}
                name={namePage}
                subName={pathname}
                handleSidenavColor={handleSidenavColor}
                handleSidenavType={handleSidenavType}
                handleFixedNavbar={handleFixedNavbar}
              />
            </AntHeader>
          )}
        {/* <BreadCrumb></BreadCrumb> */}
        <Content className="content-ant">{children}</Content>
        <Footer />
      </Layout>
    </Layout>
  )
}

export default Main
