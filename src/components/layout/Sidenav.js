import { Menu } from 'antd'
// import { useState } from 'react'
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
import { PATH, ROLE } from '../../contants/common'

const Sidenav = ({ keySideNav, role }) => {
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

  // const rootSubmenuKeys = ['organization', 'complain']
  // const [openKeys, setOpenKeys] = useState(['organization'])

  // const onOpenChange = (keys) => {
  //   const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1)
  //   if (rootSubmenuKeys.indexOf(latestOpenKey) !== -1) {
  //     setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
  //   } else {
  //     setOpenKeys(keys)
  //   }
  // }
  const domain = '/' + window.location.pathname.split('/')[1]
  const menuItemsForAdmin = [
    getItem(
      <NavLink to={domain + PATH.CUSTOMER} replace>
        Quản lý khách hàng
      </NavLink>,
      'customer',
      <FiUsers size={25} />
    ),
    getItem(
      <NavLink to={domain + PATH.ACTIVITY} replace>
        Quản lý hoạt động
      </NavLink>,
      'activity',
      <FiRefreshCw size={25} />
    ),
    getItem(
      <NavLink replace>Quản lý khiếu nại</NavLink>,
      'complain',
      <FiAlertCircle size={25} />,
      [
        getItem(
          <NavLink to={domain + PATH.COMPLAINT} replace>
            Danh sách khiếu nại
          </NavLink>,
          'complain-list'
        ),
        getItem(
          <NavLink to={domain + PATH.COMPLAINTCLASSIFY} replace>
            Phân loại khiếu nại
          </NavLink>,
          'complain-classify'
        )
      ]
    ),
    getItem(
      <NavLink to={domain + PATH.DASHBOARD} replace>
        Thống kê
      </NavLink>,
      'dashboard',
      <FiPieChart size={25} />
    ),
    getItem(
      <NavLink replace>Quản lý tổ chức</NavLink>,
      'organization',
      <FiFolder size={25} />,
      [
        getItem(
          <NavLink to={domain + PATH.ACCOUNT} replace>
            Quản lý tài khoản
          </NavLink>,
          'employee'
        ),
        getItem(
          <NavLink to={domain + PATH.PRODUCT} replace>
            Quản lý sản phẩm
          </NavLink>,
          'product'
        ),
        getItem(
          <NavLink to={domain + PATH.PHASE} replace>
            Quản lý giai đoạn
          </NavLink>,
          'phase'
        )
      ]
    )
  ]
  const menuItemsEmployee = [
    getItem(
      <NavLink to={domain + PATH.CUSTOMER} replace>
        Quản lý khách hàng
      </NavLink>,
      'customer',
      <FiUsers size={25} />
    ),
    getItem(
      <NavLink to={domain + PATH.ACTIVITY}>Quản lý hoạt động</NavLink>,
      'activity',
      <FiRefreshCw size={25} />
    ),
    getItem(
      <NavLink>Quản lý khiếu nại</NavLink>,
      'complain',
      <FiAlertCircle size={25} />,
      [
        getItem(
          <NavLink to={domain + PATH.COMPLAINT}>Danh sách khiếu nại</NavLink>,
          'complain-list'
        ),
        getItem(
          <NavLink to={domain + PATH.TYPECOMPLAINT}>
            Phân loại khiếu nại
          </NavLink>,
          'complain-classify'
        )
      ]
    ),
    getItem(
      <NavLink to={domain + PATH.DASHBOARD}>Thống kê</NavLink>,
      'dashboard',
      <FiPieChart size={25} />
    )
  ]

  const menuItemsForCustomer = [
    getItem(
      <NavLink to={domain + PATH.CUSTOME_URL.COMPLAINT}>
        Danh sách khiếu nại
      </NavLink>,
      'complaint',
      <FiAlertCircle size={25} />
    ),
    getItem(
      <NavLink to={domain + PATH.CUSTOME_URL.BILL}>Danh sách hóa đơn</NavLink>,
      'bill',
      <FiFileText size={25} />
    ),
    getItem(
      <NavLink to={domain + PATH.CUSTOME_URL.QUOTE}>Danh sách báo giá</NavLink>,
      'quote',
      <FiFileMinus size={25} />
    ),
    getItem(
      <NavLink to={domain + PATH.CUSTOME_URL.MESSAGE}>Tin nhắn</NavLink>,
      'message',
      <FiMessageSquare size={25} />
    )
  ]
  const menuItems =
    role === ROLE.ADMIN
      ? menuItemsForAdmin
      : role === ROLE.EMPLOYEE
        ? menuItemsEmployee
        : menuItemsForCustomer
  const openKey =
    keySideNav === 'customer' ||
    keySideNav === 'dashboard' ||
    keySideNav === 'activity' ||
    keySideNav === 'message'
      ? keySideNav
      : keySideNav === 'employee' ||
          keySideNav === 'product' ||
          keySideNav === 'phase'
        ? 'organization'
        : 'complain'
  return (
    <>
      <div className='border-b-2 border-slate-300 p-4'>
        <a
          className='flex flex-row items-center'
          href={
            role === 'CUSTOMER'
              ? `${domain + PATH.CUSTOME_URL.HOME}`
              : `${domain + PATH.HOME}`
          }
        >
          <img src={logo} alt='logo' width={60} />
          <h1 className='font-bold text-black p-2 pl-4 text-2xl'>TNT CCS</h1>
        </a>
      </div>
      <div className='my-8'>
        <Menu
          style={{
            width: 256
          }}
          // openKeys={openKeys}
          // onOpenChange={onOpenChange}
          defaultSelectedKeys={[keySideNav]}
          defaultOpenKeys={[openKey]}
          mode='inline'
          items={menuItems}
        />
      </div>
    </>
  )
}

export default Sidenav
