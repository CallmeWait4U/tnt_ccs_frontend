import { Col, Row, Tabs } from 'antd'

import { Typography } from 'antd'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import CustomerComplaint from '../complaint'
import ActivityForm from '../form/ActivityForm'
import BillForm from '../form/BillForm'
import QuoteForm from '../form/QuoteForm'
import MessageBox from '../message'
import ActivityHistory from '../moreData/ActivityHistory'
import AdditionalInformation from '../moreData/AdditionalInformation'
import CustomerQuoteBill from '../quote-bill'
import CompanyInformation from './CompanyInformation'
import './DetailCustomer.css'
import PersonalInformation from './PersonalInformation'

const CustomerDetail = () => {
  const [isShowQuoteForm, setIsShowQuoteForm] = useState(false)
  const [isShowBillForm, setIsShowBillForm] = useState(false)
  const [isShowActivityForm, setIsShowActivityForm] = useState(false)
  const { Title } = Typography
  const location = useLocation()
  const paramsString = location.pathname.split('/')[3]
  const paramsArray = paramsString.split('&')
  const isBusiness = paramsArray[0]
  const uuid = paramsArray[1]
  const typeCustomer = isBusiness === 'true' ? 1 : 2
  const items = [
    {
      label: 'Thông tin bổ sung',
      key: 'additionalInfo',
      children: (
        <AdditionalInformation
          id={uuid}
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
          uuid={uuid}
          setIsShowQuoteForm={setIsShowQuoteForm}
        />
      )
    },
    {
      label: 'Khiếu nại',
      key: 'complain',
      children: <CustomerComplaint uuid={uuid} />
    },
    {
      label: 'Gửi tin nhắn',
      key: 'chat',
      children: <MessageBox uuid={uuid} />
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
        {typeCustomer === 1 ? (
          <CompanyInformation id={uuid} />
        ) : (
          <PersonalInformation id={uuid} />
        )}
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
      <QuoteForm
        visible={isShowQuoteForm}
        uuid={uuid}
        setVisible={setIsShowQuoteForm}
      />
      <BillForm visible={isShowBillForm} setVisible={setIsShowBillForm} />
      <ActivityForm
        visible={isShowActivityForm}
        setVisible={setIsShowActivityForm}
      />
    </>
  )
}
export default CustomerDetail
