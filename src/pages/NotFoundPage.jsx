import { Button, Flex, Result } from 'antd'
import { useNavigate } from 'react-router-dom'
import { PATH } from '../contants/common'

const NotFoundPage = () => {
  const navigate = useNavigate()
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Result
        status='404'
        title='404'
        subTitle='Sorry, the page you visited does not exist.'
        extra={
          <Flex gap='small' wrap>
            <Button
              style={{
                background: 'white',
                color: 'black',
                height: '40px',
                width: '100px',
                fontSize: 15
              }}
              onClick={() => navigate(PATH.HOME)}
            >
              Trang chủ
            </Button>
            <Button
              style={{
                background: '#7364FF',
                color: 'white',
                height: '40px',
                width: '100px',
                fontSize: 15
              }}
              onClick={() => navigate(PATH.BUSSINESSREGISTER)}
            >
              Đăng kí
            </Button>
          </Flex>
        }
      />
    </div>
  )
}

export default NotFoundPage
