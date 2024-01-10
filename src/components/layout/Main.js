import { Affix, Layout } from 'antd'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
// import BreadCrumb from './BreadCrumb'
import CustomBreadCrumb from './BreadCrumb'
import Header from './Header'
import Sidenav from './Sidenav'

const { Header: AntHeader, Content, Sider } = Layout

const Main = ({ children, pageProps }) => {
  const [visible, setVisible] = useState(false)
  const [placement, setPlacement] = useState('right')
  const [sidenavColor, setSidenavColor] = useState('#1890ff')
  const [sidenavType, setSidenavType] = useState('transparent')

  const { keySideNav, namePage, breadcumbItems } = pageProps

  const openDrawer = () => setVisible(!visible)
  const handleSidenavType = (type) => setSidenavType(type)
  const handleSidenavColor = (color) => setSidenavColor(color)

  let { pathname } = useLocation()
  pathname = pathname.replace('/', '')
  document.title = namePage

  console.log('keySideNav', keySideNav)

  return (
    <Layout className={`layout-dashboard `}>
      <Sider
        breakpoint='lg'
        collapsedWidth='0'
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type)
        }}
        trigger={null}
        width={250}
        theme='light'
        style={{
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0
        }}
      >
        <Sidenav keySideNav={keySideNav} />
      </Sider>
      <Layout className={`layout-dashboard `}>
        <Affix>
          <AntHeader
            className={`ant-header-fixed`}
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
            />
          </AntHeader>
          <CustomBreadCrumb breadcumbItems={breadcumbItems} />
        </Affix>

        <Content className='content-ant'>{children}</Content>
      </Layout>
    </Layout>
  )
}

export default Main
