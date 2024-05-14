import { useEffect } from 'react'

import { Avatar, Badge, Col, Divider, Dropdown, Row } from 'antd'
import { FiBell, FiChevronDown } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { useGetProfile } from '../../api/Admin/profile'
import { LOCAL_STORAGE_ITEM, PATH } from '../../contants/common'

const Header = ({ name }) => {
  const { data: profile } = useGetProfile()
  useEffect(() => window.scrollTo(0, 0))
  const domain = window.location.pathname.split('/')[1]
  const navigate = useNavigate()
  const onSignout = () => {
    localStorage.removeItem(`${LOCAL_STORAGE_ITEM.TOKEN}`)
    navigate(`/${domain + PATH.SIGNIN}`)
  }
  const handleProfile = () => {
    if (profile?.type === 'CUSTOMER') {
      navigate(`${PATH.CUSTOME_URL.PROFILE}`)
    } else {
      navigate(`${PATH.PROFILE}`)
    }
  }
  const items = [
    {
      label: <div onClick={handleProfile}>Thông tin cá nhân</div>,
      key: '1'
    },
    {
      label: <div>Đăng xuất</div>,
      key: '2',
      onClick: onSignout
    }
  ]
  return (
    <>
      <Row gutter={[24, 0]}>
        <Col span={24} md={16}>
          <div className='ant-page-header-heading'>
            <p
              style={{ fontSize: 22, fontWeight: 'bold', paddingLeft: '20px' }}
            >
              {name}
            </p>
          </div>
        </Col>

        <Col span={24} md={8} className='header-control'>
          <div
            className='btn-sign-in'
            style={{ display: 'flex', gap: '5px', alignItems: 'center' }}
          >
            <Avatar size='small' src='' />

            <span>{profile?.name}</span>

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
