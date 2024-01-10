import { Button, Card, Col, Form, Input, Row, Tabs } from 'antd'

import { Flex } from 'antd'
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
import PersonalInformation from './PersonalInformation'

const CustomerDetail = () => {
  const [typeCustomer, setTypeCustomer] = useState(1)
  const [isShowQuoteForm, setIsShowQuoteForm] = useState(false)
  const [isShowBillForm, setIsShowBillForm] = useState(false)
  const [isShowActivityForm, setIsShowActivityForm] = useState(false)
  const [isUpdate, setIsUpdate] = useState(false)
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
      <Row gutter={[8, 16]}>
        <Col xl={24} xxl={14}>
          <Card
            title={'Thông tin chi tiết'}
            extra={
              isUpdate ? (
                <Flex gap='small' align='flex-start' vertical>
                  <Flex gap='small' wrap='wrap'>
                    <Button
                      size={40}
                      style={{ borderColor: '#F58220', color: '#F58220' }}
                      onClick={() => setIsUpdate(false)}
                    >
                      Hủy
                    </Button>
                    <Button
                      style={{ background: '#F58220', color: 'white' }}
                      onClick={() => setIsUpdate(false)}
                      size={40}
                    >
                      Lưu
                    </Button>
                  </Flex>
                </Flex>
              ) : (
                <ButtonOk onClick={() => setIsUpdate(true)}>Chỉnh sửa</ButtonOk>
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
                      disabled={!isUpdate}
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
                    <Input disabled={!isUpdate} />
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
        <Col xs={24} sm={24} xl={24} xxl={10}>
          <Tabs
            defaultActiveKey='1'
            items={items}
            style={{
              background: '#ffffff',
              padding: '15px',
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
