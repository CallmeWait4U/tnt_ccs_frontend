import { useEffect } from 'react'

import { UserOutlined } from '@ant-design/icons'
import { useMutation } from '@tanstack/react-query'
import {
  Button,
  Card,
  Col,
  Dropdown,
  Row,
  Space,
  Typography,
  message
} from 'antd'
import { FiBell } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { useGetProfile } from '../../api/Admin/profile'
import { useSignOut } from '../../api/auth'
import { LOCAL_STORAGE_ITEM, PATH } from '../../contants/common'
const Header = ({ name }) => {
  const { data: profile } = useGetProfile()
  const domain = '/' + window.location.pathname.split('/')[1]
  const { Title } = Typography
  const { mutate: signOut } = useMutation({
    mutationFn: useSignOut,
    onSuccess: () => {
      localStorage.removeItem(`${LOCAL_STORAGE_ITEM.TOKEN}`)
      message.success('Đăng xuất thành công')
      navigate(`${domain + PATH.SIGNIN}`)
    }
  })
  useEffect(() => window.scrollTo(0, 0))

  const navigate = useNavigate()
  const onSignout = () => {
    signOut()
  }
  const handleProfile = () => {
    if (profile?.type === 'CUSTOMER') {
      navigate(`${domain + PATH.CUSTOME_URL.PROFILE}`)
    } else {
      navigate(`${domain + PATH.PROFILE}`)
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
  const noti = [
    {
      label: (
        <Card>
          <Title level={5}>Thông báo 1</Title> <Row>Nội dung thông báo 1</Row>
        </Card>
      ),
      value: '1'
    },
    {
      label: (
        <Card>
          <Title level={5}>Thông báo 2</Title> <Row>Nội dung thông báo 2</Row>
        </Card>
      ),
      value: '2'
    }
  ]
  return (
    <>
      <Row gutter={[24, 0]}>
        <Col span={18}>
          <p style={{ fontSize: 22, fontWeight: 'bold', paddingLeft: '20px' }}>
            {name}
          </p>
        </Col>

        <Col span={6}>
          <Row justify='end'>
            <Col className='pr-2'>
              <Dropdown
                menu={{ items: noti }}
                trigger={['click']}
                placement='bottomLeft'
              >
                <Button>
                  <Space>
                    <FiBell />
                  </Space>
                </Button>
              </Dropdown>
            </Col>
            <Col>
              <Dropdown.Button
                menu={{ items }}
                trigger={['click']}
                icon={<UserOutlined />}
              >
                <span>{profile?.name}</span>
              </Dropdown.Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default Header
