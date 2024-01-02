import {
  AppstoreAddOutlined,
  MailOutlined,
  SettingOutlined
} from '@ant-design/icons'
import { Menu } from 'antd'
import { useState } from 'react'
import {
  FiAlertCircle,
  FiFolder,
  FiPieChart,
  FiRefreshCw,
  FiUsers
} from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.jpg'
import { PATH } from '../../contants/common'
function Sidenav() {
  // const { pathname } = useLocation()
  // const page = pathname.replace('/', '')
  const [selectedKey, setSelectedKey] = useState('dashboard')
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type
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
      <NavLink to={PATH.ACTIVITYMANAGEMENT}>Quản lý hoạt động</NavLink>,
      'activity',
      <FiRefreshCw size={25} />
    ),
    getItem(
      <NavLink to={PATH.PROFILE}>Quản lý tổ chức</NavLink>,
      'organization',
      <FiFolder size={25} />,
      [
        getItem(
          <NavLink to={PATH.PROFILE}>Quản lý nhân viên</NavLink>,
          'employee'
        ),
        getItem(
          <NavLink to={PATH.PROFILE}>Quản lý sản phẩm</NavLink>,
          'product'
        ),
        getItem(<NavLink to={PATH.PROFILE}>Quản lý giai đoạn</NavLink>, 'phase')
      ]
    ),
    getItem(
      <NavLink to={PATH.CUSTOMER}>Quản lý khiếu nại</NavLink>,
      'complain',
      <FiAlertCircle size={25} />,
      [
        getItem(
          <NavLink to={PATH.CUSTOMER}>Danh sách khiếu nại</NavLink>,
          'complain-list'
        ),
        getItem(
          <NavLink to={PATH.CUSTOMER}>Phân loại khiếu nại</NavLink>,
          'complain-classify'
        )
      ]
    )
  ]
  const items = [
    getItem('Navigation One', 'sub1', <MailOutlined />, [
      getItem(
        'Item 1',
        'g1',
        null,
        [getItem('Option 1', '1'), getItem('Option 2', '2')],
        'group'
      ),
      getItem(
        'Item 2',
        'g2',
        null,
        [getItem('Option 3', '3'), getItem('Option 4', '4')],
        'group'
      )
    ]),
    getItem('Navigation Two', 'sub2', <AppstoreAddOutlined />, [
      getItem('Option 5', '5'),
      getItem('Option 6', '6'),
      getItem('Submenu', 'sub3', null, [
        getItem('Option 7', '7'),
        getItem('Option 8', '8')
      ])
    ]),
    {
      type: 'divider'
    },
    getItem('Navigation Three', 'sub4', <SettingOutlined />, [
      getItem('Option 9', '9'),
      getItem('Option 10', '10'),
      getItem('Option 11', '11'),
      getItem('Option 12', '12')
    ]),
    getItem(
      'Group',
      'grp',
      null,
      [getItem('Option 13', '13'), getItem('Option 14', '14')],
      'group'
    )
  ]

  return (
    <>
      <div className='flex flex-row items-center border-b-2 border-slate-300 p-4'>
        <img src={logo} alt='logo' width={60} />
        <h1 className='font-bold text-black p-2 text-2xl'>TNT CCS</h1>
      </div>
      <Menu
        style={{
          width: 256
        }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode='inline'
        items={menuItems}
      />
      {/* <Menu mode='inline' theme='light'>
        <Menu.Item
          key='dashboard'
          icon={<FiUsers size={25} />}
          onClick={() => setSelectedKey('dashboard')}
          style={{
            backgroundColor: selectedKey === 'dashboard' ? '#7364ff' : '',
            color: selectedKey === 'dashboard' ? '#fff' : ''
          }}
        >
          <NavLink to={PATH.CUSTOMER}>Quản lý khách hàng</NavLink>
        </Menu.Item>
        <Menu.Item
          key='tables'
          icon={<FiPieChart size={25} />}
          onClick={() => setSelectedKey('tables')}
          style={{
            backgroundColor: selectedKey === 'tables' ? '#7364ff' : '',
            color: selectedKey === 'tables' ? '#fff' : ''
          }}
        >
          <NavLink to={PATH.DASHBOARD}>Thống kê - báo cáo</NavLink>
        </Menu.Item>
        <Menu.Item
          key='billing'
          icon={<FiRefreshCw size={25} />}
          onClick={() => setSelectedKey('billing')}
          style={{
            backgroundColor: selectedKey === 'billing' ? '#7364ff' : '',
            color: selectedKey === 'billing' ? '#fff' : ''
          }}
        >
          <NavLink to={PATH.ACTIVITYMANAGEMENT}>Quản lý hoạt động</NavLink>
        </Menu.Item>
        <Menu.Item
          key='profile'
          icon={<FiFolder size={25} />}
          onClick={() => setSelectedKey('profile')}
          style={{
            backgroundColor: selectedKey === 'profile' ? '#7364ff' : '',
            color: selectedKey === 'profile' ? '#fff' : ''
          }}
          children='Quản lý tổ chức'
        >
          <NavLink to='/profile'>Quản lý tổ chức</NavLink>
        </Menu.Item>
        <Menu.Item
          key='customers'
          icon={<InfoCircleOutlined />}
          onClick={() => setSelectedKey('customers')}
          style={{
            backgroundColor: selectedKey === 'customers' ? '#7364ff' : '',
            color: selectedKey === 'customers' ? '#fff' : ''
          }}
        >
          <NavLink to='/customers'>Quản lý khiếu nại</NavLink>
        </Menu.Item>
      </Menu> */}
    </>
  )
}

export default Sidenav
