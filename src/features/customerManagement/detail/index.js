import { Button, Card, Col, Form, Input, Row, Tabs } from 'antd'

import { Flex, Typography } from 'antd'
import { useEffect, useState } from 'react'
import { ButtonOk } from '../../../assets/styles/button.style'
import ChatBox from '../../../components/boxChat/BoxChat'
import { StyledDatepicker, StyledSelect } from '../../component/ComponentOfForm'
import CustomerComplaint from '../complaint'
import ActivityForm from '../form/ActivityForm'
import BillForm from '../form/BillForm'
import QuoteForm from '../form/QuoteForm'
import ActivityHistory from '../moreData/ActivityHistory'
import AdditionalInformation from '../moreData/AdditionalInformation'
import CustomerQuoteBill from '../quote-bill'
import CompanyInformation from './CompanyInformation'
import './DetailCustomer.css'
import PersonalInformation from './PersonalInformation'

const CustomerDetail = ({ isBusiness }) => {
  const [typeCustomer, setTypeCustomer] = useState(isBusiness ? 1 : 2)
  const [isShowQuoteForm, setIsShowQuoteForm] = useState(false)
  const [isShowBillForm, setIsShowBillForm] = useState(false)
  const [isShowActivityForm, setIsShowActivityForm] = useState(false)
  const [isUpdate, setIsUpdate] = useState(false)
  const { Title } = Typography

  const items = [
    {
      label: 'Thông tin bổ sung',
      key: 'additionalInfo',
      children: (
        <AdditionalInformation
          typeCustomer={typeCustomer}
          setIsShowQuoteForm={setIsShowQuoteForm}
          setIsShowBillForm={setIsShowBillForm}
        />
      )
    },
    {
      label: 'Hoạt động',
      key: 'activity',
      children: (
        <ActivityHistory setIsShowActivityForm={setIsShowActivityForm} />
      )
    },
    {
      label: 'Báo giá - Hóa đơn',
      key: 'quote-bill',
      children: (
        <CustomerQuoteBill
          setIsShowBillForm={setIsShowBillForm}
          setIsShowQuoteForm={setIsShowQuoteForm}
        />
      )
    },
    {
      label: 'Khiếu nại',
      key: 'complain',
      children: <CustomerComplaint />
    },
    {
      label: 'Gửi tin nhắn',
      key: 'chat',
      children: <ChatBox />
    }
  ]

  useEffect(() => {
    console.log('is show', isShowQuoteForm)
  }, [isShowQuoteForm])
  // const {
  //   token: { colorBgContainer }
  // } = theme.useToken()
  return (
    <>
      <div className='tabled'>
        <Row gutter={[24, 0]} style={{ marginBottom: '14px' }}>
          <Col md={20}>
            <Title
              level={4}
              style={{
                marginLeft: '10px',
                marginTop: '4px',
                fontWeight: '700'
              }}
            >
              {' '}
              Chi tiết khách hàng
            </Title>
          </Col>
        </Row>
      </div>
      <Row gutter={[8, 16]} className='detailCustomer'>
        <Col xl={24} xxl={13}>
          <Card
            title={isBusiness ? 'Thông tin Doanh nghiệp' : 'Thông tin Cá nhân'}
            extra={
              isUpdate ? (
                <Flex gap='small' align='flex-start' vertical>
                  <Flex gap='small' wrap='wrap'>
                    <Button
                      size={40}
                      style={{
                        borderColor: '#F58220',
                        color: '#F58220',
                        width: '80px',
                        height: '40px'
                      }}
                      onClick={() => setIsUpdate(false)}
                    >
                      Hủy
                    </Button>
                    <Button
                      style={{
                        background: '#F58220',
                        color: 'white',
                        width: '80px',
                        height: '40px'
                      }}
                      onClick={() => setIsUpdate(false)}
                      size={40}
                    >
                      Lưu
                    </Button>
                  </Flex>
                </Flex>
              ) : (
                <Flex gap='small' align='flex-start' vertical>
                  <Flex gap='small' wrap='wrap'>
                    <div style={{ width: '80px' }}></div>
                    <ButtonOk
                      onClick={() => setIsUpdate(true)}
                      style={{
                        background: '#F58220',
                        color: 'white',
                        width: '80px',
                        height: '40px'
                      }}
                    >
                      Chỉnh sửa
                    </ButtonOk>
                  </Flex>
                </Flex>
              )
            }
          >
            <Form>
              <Row gutter={16}>
                <Col span={8}>
                  <Form.Item
                    label={'Loại khách hàng'}
                    rules={[
                      {
                        require: true,
                        message: 'this field is required!'
                      }
                    ]}
                  >
                    <StyledSelect
                      disabled={true}
                      value={typeCustomer}
                      onChange={setTypeCustomer}
                      options={[
                        { value: 1, label: 'Công ty' },
                        { value: 2, label: 'Cá nhân' }
                      ]}
                    />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  {' '}
                  <Form.Item
                    label={'Giai đoạn'}
                    rules={[
                      {
                        require: true,
                        message: 'this field is required!'
                      }
                    ]}
                  >
                    <StyledSelect disabled={!isUpdate} />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  {' '}
                  <Form.Item
                    label={'Mã khách hàng'}
                    rules={[
                      {
                        require: true,
                        message: 'this field is required!'
                      }
                    ]}
                  >
                    <Input disabled={true} />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col span={8}>
                  <Form.Item label={'Nguồn khách hàng'}>
                    <StyledSelect disabled={!isUpdate} />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label={'Ngày tạo'}>
                    <StyledDatepicker disabled={!isUpdate} />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
            <Row>
              {typeCustomer === 1 ? (
                <CompanyInformation isUpdate={isUpdate} />
              ) : (
                <PersonalInformation isUpdate={isUpdate} />
              )}
            </Row>
          </Card>
        </Col>
        <Col xs={24} sm={24} xl={24} xxl={11}>
          <Tabs
            defaultActiveKey='1'
            items={items}
            style={{
              background: '#ffffff',
              borderRadius: '10px'
            }}
          />
        </Col>
      </Row>
      <QuoteForm visible={isShowQuoteForm} setVisible={setIsShowQuoteForm} />
      <BillForm visible={isShowBillForm} setVisible={setIsShowBillForm} />
      <ActivityForm
        visible={isShowActivityForm}
        setVisible={setIsShowActivityForm}
      />
    </>
  )
}
export default CustomerDetail
