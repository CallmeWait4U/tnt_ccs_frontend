import { Card, Col, Form, Input, Row, Tabs } from 'antd'

import { useEffect, useState } from 'react'
import ChatBox from '../../../components/boxChat/BoxChat'
import {
  StyledDatepicker,
  StyledSelect
} from '../../component/ComponentOfForm'
import ActivityForm from '../form/ActivityForm'
import BillForm from '../form/BillForm'
import QuoteForm from '../form/QuoteForm'
import ActivityHistory from '../moreData/ActivityHistory'
import AdditionalInformation from '../moreData/AdditionalInformation'
import CompanyInformation from './CompanyInformation'
import PersonalInformation from './PersonalInformation'

const CustomerDetail = () => {
  const [typeCustomer, setTypeCustomer] = useState(1)
  const [isShowQuoteForm, setIsShowQuoteForm] = useState(false)
  const [isShowBillForm, setIsShowBillForm] = useState(false)
  const [isShowActivityForm, setIsShowActivityForm] = useState(false)
  const items = [
    {
      label: 'Thông tin bổ sung',
      key: 'additionalInfo',
      children: (
        <AdditionalInformation
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
      <Row style={{ margin: '10px 0 ', paddingLeft: '10px' }}>
        <h3>Quản lý khách hàng &gt; Thông tin chi tiết</h3>
      </Row>

      <Row gutter={[8, 16]}>
        <Col xl={24} xxl={14}>
          <Card title={'Thông tin chi tiết'}>
            <Form>
              <>
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
                      <StyledSelect />
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
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>

                <Row gutter={16}>
                  <Col span={8}>
                    <Form.Item label={'Nguồn khách hàng'}>
                      <StyledSelect />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item label={'Ngày tạo'}>
                      <StyledDatepicker />
                    </Form.Item>
                  </Col>
                </Row>
              </>
            </Form>
            <Row>
              {typeCustomer === 1
                ? (
                  <CompanyInformation />
                )
                : (
                  <PersonalInformation />
                )}
            </Row>
          </Card>
        </Col>
        <Col xs={24} sm={24} xl={24} xxl={10}>
          <Tabs
            defaultActiveKey="1"
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
