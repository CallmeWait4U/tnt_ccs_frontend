import { useEffect } from 'react'

import { useMutation } from '@tanstack/react-query'
import {
  Avatar,
  Badge,
  Col,
  Divider,
  Dropdown,
  Row,
  Select,
  message
} from 'antd'
import { FiChevronDown } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { useGetProfile } from '../../api/Admin/profile'
import { useSignOut } from '../../api/auth'
import { LOCAL_STORAGE_ITEM, PATH } from '../../contants/common'
const Header = ({ name }) => {
  const { data: profile } = useGetProfile()
  const { mutate: signOut } = useMutation({
    mutationFn: useSignOut,
    onSuccess: () => {
      localStorage.removeItem(`${LOCAL_STORAGE_ITEM.TOKEN}`)
      message.success('Đăng xuất thành công')
      navigate(`${PATH.SIGNIN}`)
    }
  })
  useEffect(() => window.scrollTo(0, 0))
  const navigate = useNavigate()
  const onSignout = () => {
    signOut()
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
            <Select
              options={[{ value: 'sample', label: <div>Notification</div> }]}
            />
          </Badge>
        </Col>
      </Row>
    </>
  )
}

export default Header
