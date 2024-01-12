import { Menu } from 'antd'
import { useState } from 'react'
import {
  FiAlertCircle,
  FiFileMinus,
  FiFileText,
  FiFolder,
  FiMessageSquare,
  FiPieChart,
  FiRefreshCw,
  FiUsers
} from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.jpg'
import { PATH } from '../../contants/common'

const Sidenav = ({ keySideNav }) => {
  // const { pathname } = useLocation()
  // const page = pathname.replace('/', '')
  // const [selectedKey, setSelectedKey] = useState('dashboard')
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type
    }
  }
  // const mapMenuItem = [
  //   { 1: 'customer' },
  //   { 2: 'dashboard' },
  //   { 3: 'activity' },
  //   { 4: 'employee' },
  //   { 5: 'product' },
  //   { 6: 'phase' },
  //   { 7: 'complain-list' },
  //   { 8: 'complain-classify' }
  // ]
  const role = 'admin'
  const rootSubmenuKeys = ['organization', 'complain']
  const [openKeys, setOpenKeys] = useState(['organization'])

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1)
    if (rootSubmenuKeys.indexOf(latestOpenKey) !== -1) {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
    } else {
      setOpenKeys(keys)
    }
  }
  const menuItems = [
    getItem(
      <NavLink to={PATH.CUSTOMER}>Quản lý khách hàng</NavLink>,
      'customer',
      <FiUsers size={25} />
    ),
    getItem(
      <NavLink to={PATH.DASHBOARD}>Thống kê - báo cáo</NavLink>,
      'dashboard',
      <FiPieChart size={25} />
    ),
    getItem(
      <NavLink to={PATH.ACTIVITY}>Quản lý hoạt động</NavLink>,
      'activity',
      <FiRefreshCw size={25} />
    ),
    getItem(
      <NavLink>Quản lý tổ chức</NavLink>,
      'organization',
      <FiFolder size={25} />,
      [
        getItem(
          <NavLink to={PATH.EMPLOYEE}>Quản lý nhân viên</NavLink>,
          'employee'
        ),
        getItem(
          <NavLink to={PATH.PRODUCT}>Quản lý sản phẩm</NavLink>,
          'product'
        ),
        getItem(<NavLink to={PATH.PHASE}>Quản lý giai đoạn</NavLink>, 'phase')
      ]
    ),
    getItem(
      <NavLink>Quản lý khiếu nại</NavLink>,
      'complain',
      <FiAlertCircle size={25} />,
      [
        getItem(
          <NavLink to={PATH.COMPLAINT}>Danh sách khiếu nại</NavLink>,
          'complain-list'
        ),
        getItem(
          <NavLink to={PATH.TYPECOMPLAINT}>Phân loại khiếu nại</NavLink>,
          'complain-classify'
        )
      ]
    )
  ]
  const menuItemsForCustomer = [
    getItem(
      <NavLink to={PATH.CUSTOMER}>Danh sách khiếu nại</NavLink>,
      'complaint',
      <FiAlertCircle size={25} />
    ),
    getItem(
      <NavLink to={PATH.DASHBOARD}>Danh sách hóa đơn</NavLink>,
      'bill',
      <FiFileText size={25} />
    ),
    getItem(
      <NavLink to={PATH.ACTIVITY}>Danh sách báo giá</NavLink>,
      'pricequote',
      <FiFileMinus size={25} />
    ),
    getItem(
      <NavLink to={PATH.ACTIVITY}>Tin nhắn</NavLink>,
      'message',
      <FiMessageSquare size={25} />
    )
  ]
  return (
    <>
      <div className='flex flex-row items-center border-b-2 border-slate-300 p-4'>
        <img src={logo} alt='logo' width={60} />
        <h1 className='font-bold text-black p-2 pl-4 text-2xl'>TNT CCS</h1>
      </div>
      <div className='my-8'>
        <Menu
          style={{
            width: 256
          }}
          // openKeys={openKeys}
          // onOpenChange={onOpenChange}
          defaultSelectedKeys={[keySideNav]}
          defaultOpenKeys={[keySideNav]}
          mode='inline'
          items={role === 'admin' ? menuItems : menuItemsForCustomer}
        />
      </div>
    </>
  )
}

export default Sidenav
