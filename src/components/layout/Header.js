import { useEffect } from 'react'

import { Avatar, Badge, Col, Divider, Dropdown, Row } from 'antd'
import { FiBell, FiChevronDown } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { LOCAL_STORAGE_ITEM, PATH } from '../../contants/common'

const ButtonContainer = styled.div`
  .ant-btn-primary {
    background-color: #1890ff;
  }
  .ant-btn-success {
    background-color: #52c41a;
  }
  .ant-btn-yellow {
    background-color: #fadb14;
  }
  .ant-btn-black {
    background-color: #262626;
    color: #fff;
    border: 0px;
    border-radius: 5px;
  }
  .ant-switch-active {
    background-color: #1890ff;
  }
`

const bell = [
  <svg
    width='20'
    height='20'
    viewBox='0 0 20 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    key='bell'
  >
    <path
      d='M10 2C6.68632 2 4.00003 4.68629 4.00003 8V11.5858L3.29292 12.2929C3.00692 12.5789 2.92137 13.009 3.07615 13.3827C3.23093 13.7564 3.59557 14 4.00003 14H16C16.4045 14 16.7691 13.7564 16.9239 13.3827C17.0787 13.009 16.9931 12.5789 16.7071 12.2929L16 11.5858V8C16 4.68629 13.3137 2 10 2Z'
      fill='#111827'
    ></path>
    <path
      d='M10 18C8.34315 18 7 16.6569 7 15H13C13 16.6569 11.6569 18 10 18Z'
      fill='#111827'
    ></path>
  </svg>
]

const wifi = [
  <svg
    width='20'
    height='20'
    viewBox='0 0 107 107'
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
    key='wifi'
  >
    <g id='Page-1' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g id='logo-spotify' fill='#2EBD59' fillRule='nonzero'>
        <path
          d='M53.5,0 C23.9517912,0 0,23.9517912 0,53.5 C0,83.0482088 23.9517912,107 53.5,107 C83.0482088,107 107,83.0482088 107,53.5 C107,23.9554418 83.0482088,0.00365063118 53.5,0 Z M78.0358922,77.1597407 C77.0757762,78.7368134 75.0204708,79.2296486 73.4506994,78.2695326 C60.8888775,70.5922552 45.0743432,68.8582054 26.4524736,73.1111907 C24.656363,73.523712 22.8675537,72.3993176 22.458683,70.6032071 C22.0461617,68.8070966 23.1669055,67.0182873 24.9666667,66.6094166 C45.3444899,61.9548618 62.8273627,63.9590583 76.9297509,72.5745479 C78.4995223,73.5419652 78.9996588,75.5899693 78.0358922,77.1597407 L78.0358922,77.1597407 Z M84.5814739,62.5973729 C83.373115,64.5614125 80.8030706,65.1747185 78.8426817,63.9700102 C64.4664961,55.1318321 42.5408052,52.5727397 25.5325145,57.7347322 C23.3275333,58.4027977 20.9984306,57.1579324 20.3267144,54.9566018 C19.6622996,52.7516206 20.9071648,50.4261685 23.1084954,49.7544524 C42.5371546,43.858683 66.6933811,46.7134766 83.2051859,56.8622313 C85.1692255,58.0705902 85.7898328,60.636984 84.5814739,62.5973729 Z M85.1436711,47.4253497 C67.8980894,37.1853292 39.4523712,36.2434664 22.9880246,41.2375299 C20.3449676,42.0406687 17.5485841,40.5475606 16.7490959,37.9045036 C15.9496076,35.2614466 17.4390652,32.4650631 20.0857728,31.6619243 C38.9850904,25.9267827 70.3987718,27.0329239 90.2509041,38.8171614 C92.627465,40.2299556 93.4087001,43.3001365 91.9995565,45.6730467 C90.5940635,48.0532583 87.5165814,48.838144 85.1436711,47.4253497 Z'
          id='Shape'
        ></path>
      </g>
    </g>
  </svg>
]

const credit = [
  <svg
    width='20'
    height='20'
    viewBox='0 0 20 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    key='credit'
  >
    <path
      fill='#1890FF'
      d='M4 4C2.89543 4 2 4.89543 2 6V7H18V6C18 4.89543 17.1046 4 16 4H4Z'
    ></path>
    <path
      fill='#1890FF'
      fillRule='evenodd'
      clipRule='evenodd'
      d='M18 9H2V14C2 15.1046 2.89543 16 4 16H16C17.1046 16 18 15.1046 18 14V9ZM4 13C4 12.4477 4.44772 12 5 12H6C6.55228 12 7 12.4477 7 13C7 13.5523 6.55228 14 6 14H5C4.44772 14 4 13.5523 4 13ZM9 12C8.44772 12 8 12.4477 8 13C8 13.5523 8.44772 14 9 14H10C10.5523 14 11 13.5523 11 13C11 12.4477 10.5523 12 10 12H9Z'
    ></path>
  </svg>
]

const clockicon = [
  <svg
    width='20'
    height='20'
    viewBox='0 0 20 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    key='clockicon'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM11 6C11 5.44772 10.5523 5 10 5C9.44772 5 9 5.44772 9 6V10C9 10.2652 9.10536 10.5196 9.29289 10.7071L12.1213 13.5355C12.5118 13.9261 13.145 13.9261 13.5355 13.5355C13.9261 13.145 13.9261 12.5118 13.5355 12.1213L11 9.58579V6Z'
      fill='#111827'
    ></path>
  </svg>
]

const logsetting = [
  <svg
    width='20'
    height='20'
    viewBox='0 0 20 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    key='logsetting'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M11.4892 3.17094C11.1102 1.60969 8.8898 1.60969 8.51078 3.17094C8.26594 4.17949 7.11045 4.65811 6.22416 4.11809C4.85218 3.28212 3.28212 4.85218 4.11809 6.22416C4.65811 7.11045 4.17949 8.26593 3.17094 8.51078C1.60969 8.8898 1.60969 11.1102 3.17094 11.4892C4.17949 11.7341 4.65811 12.8896 4.11809 13.7758C3.28212 15.1478 4.85218 16.7179 6.22417 15.8819C7.11045 15.3419 8.26594 15.8205 8.51078 16.8291C8.8898 18.3903 11.1102 18.3903 11.4892 16.8291C11.7341 15.8205 12.8896 15.3419 13.7758 15.8819C15.1478 16.7179 16.7179 15.1478 15.8819 13.7758C15.3419 12.8896 15.8205 11.7341 16.8291 11.4892C18.3903 11.1102 18.3903 8.8898 16.8291 8.51078C15.8205 8.26593 15.3419 7.11045 15.8819 6.22416C16.7179 4.85218 15.1478 3.28212 13.7758 4.11809C12.8896 4.65811 11.7341 4.17949 11.4892 3.17094ZM10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z'
      fill='#111827'
    ></path>
  </svg>
]

const toggler = [
  <svg
    width='20'
    height='20'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 448 512'
    key='toggler'
  >
    <path d='M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z'></path>
  </svg>
]
const Header = ({ name }) => {
  useEffect(() => window.scrollTo(0, 0))
  const navigate = useNavigate()
  const onSignout = () => {
    localStorage.removeItem(`${LOCAL_STORAGE_ITEM.TOKEN}`)
    navigate(`${PATH.SIGNIN}`)
  }

  const data = [
    {
      title: 'Đăng xuất',
      description: <>{clockicon} 2 days ago</>,

      avatar: <Avatar shape='square'>{wifi}</Avatar>
    }
  ]

  const dataSignout = [
    {
      title: 'Đăng xuất'
    }
  ]

  const items = data.map((item) => ({
    label: (
      <div onClick={onSignout}>
        <span style={{ fontWeight: 'bold' }}>{item.title}</span>
      </div>
    )
  }))
  const itemSignout = dataSignout.map((item) => ({
    label: (
      <div>
        <span style={{ fontWeight: 'bold' }}>{item.title}</span>
      </div>
    )
  }))
  const dataNotify = [
    {
      title: 'New message from Sophie',
      description: <>{clockicon} 2 days ago</>,

      avatar: <Avatar shape='square'>{wifi}</Avatar>
    },
    {
      title: 'New album by Travis Scott',
      description: <>{clockicon} 2 days ago</>,

      avatar: <Avatar shape='square'>{wifi}</Avatar>
    },
    {
      title: 'Payment completed',
      description: <>{clockicon} 2 days ago</>,
      avatar: <Avatar shape='square'>{credit}</Avatar>
    }
  ]

  const itemsNoty = dataNotify.map((item) => ({
    label: (
      <div>
        <span style={{ fontWeight: 'bold' }}>{item.title}</span>
        {item.description}
      </div>
    ),
    icon: item.avatar
  }))

  return (
    <>
      <Row gutter={[24, 0]}>
        <Col span={24} md={16}>
          <div className='ant-page-header-heading'>
            <p style={{ fontSize: 25, fontWeight: 'bold' }}>{name}</p>
          </div>
        </Col>

        <Col span={24} md={8} className='header-control'>
          <div
            className='btn-sign-in'
            style={{ display: 'flex', gap: '5px', alignItems: 'center' }}
          >
            <Avatar size='small' src='' />
            <span>Admin</span>
            <Dropdown menu={{ items }} trigger={['click']}>
              <FiChevronDown />
            </Dropdown>
          </div>
          <Divider
            type='vertical'
            style={{ height: '20px', margin: '0 10px' }}
          />
          <Badge size='small' count={4}>
            <Dropdown trigger={['click']}>
              <a
                href='#pablo'
                className='ant-dropdown-link'
                onClick={(e) => e.preventDefault()}
              >
                <Avatar size={'small'}>
                  <FiBell stroke='black' />
                </Avatar>
              </a>
            </Dropdown>
          </Badge>
        </Col>
      </Row>
    </>
  )
}

export default Header
