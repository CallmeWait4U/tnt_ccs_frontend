import { Button, Tabs } from 'antd'
import React, { useState } from 'react'
import './AgGrid.css'

const AgGridCustomDateFilter = (param) => {
  const [searchDate, setSearchDate] = useState()
  const [searchFromDate, setSearchFromDate] = useState()
  const [searchToDate, setSearchToDate] = useState()
  const [indexTab, setIndexTab] = useState(1)
  //   const dateFormat = 'YYYY-MM-DD'

  const onClear = () => {
    setSearchDate('')
    setSearchFromDate('')
    setSearchToDate('')
    param.filterChangedCallback()
  }

  const handleApply = () => {
    let fromDate, toDate
    if (indexTab === 1) {
      fromDate = searchDate
      toDate = searchDate
    } else {
      fromDate = searchFromDate
      toDate = searchToDate
    }
    console.log(fromDate, toDate)
  }

  const onTabClick = (key) => {
    if (key === 1) {
      setSearchFromDate('')
      setSearchToDate('')
    } else {
      setSearchDate('')
    }
    setIndexTab(key)
  }

  const TabDatePicker = () => {
    return (
      <div className='customDateFilter'>
        <div className='searchWrapper'>
          <div className='fieldWrapper column'>
            <div className='inputWrapper'>
              <input
                type='date'
                className='input'
                value={searchDate}
                id='search'
                placeholder='Chọn ngày tìm kiếm...'
                onChange={(e) => {
                  setSearchDate(e.target.value)
                }}
              />
            </div>
          </div>
        </div>
        <div className='actionWrapper'>
          <Button danger onClick={onClear}>
            Hủy bỏ
          </Button>
          <Button className='buttonApply' onClick={handleApply}>
            Áp dụng
          </Button>
        </div>
      </div>
    )
  }

  const TabRangePicker = () => {
    return (
      <div className='customDateFilter'>
        <div className='searchWrapper'>
          <div className='fieldWrapper column'>
            <div className='inputWrapper'>
              <div style={{ fontSize: '16px', marginBottom: '5px' }}>
                Từ ngày:
              </div>
              <input
                type='date'
                className='input'
                style={{ marginBottom: '10px' }}
                value={searchFromDate}
                id='searchFrom'
                placeholder='Chọn ngày tìm kiếm...'
                onChange={(e) => {
                  setSearchFromDate(e.target.value)
                }}
              />
              <div style={{ fontSize: '16px', marginBottom: '5px' }}>
                Đến ngày:
              </div>
              <input
                type='date'
                className='input'
                value={searchToDate}
                id='searchTo'
                min={searchFromDate}
                placeholder='Chọn ngày tìm kiếm...'
                onChange={(e) => {
                  setSearchToDate(e.target.value)
                }}
              />
            </div>
          </div>
        </div>
        <div className='actionWrapper'>
          <Button danger onClick={onClear}>
            Hủy bỏ
          </Button>
          <Button className='buttonApply' onClick={handleApply}>
            Áp dụng
          </Button>
        </div>
      </div>
    )
  }

  const items = [
    {
      key: '1',
      label: 'Thời gian',
      children: <TabDatePicker />
    },
    {
      key: '2',
      label: 'Khoảng thời gian',
      children: <TabRangePicker />
    }
  ]

  return (
    <Tabs
      className='customTabsDateFilter'
      defaultActiveKey='1'
      items={items}
      onTabClick={onTabClick}
      centered
    />
  )
}

export default AgGridCustomDateFilter
