import { Button } from 'antd'
import React, { useState } from 'react'

const CustomToggleButton = () => {
  const [selectedTag, setSelectedTag] = useState('option1')

  const handleTagChange = (tag) => {
    setSelectedTag(tag)
  }

  // const [tableParams, setTableParams] = useState({
  //   pagination: {
  //     current: 1,
  //     pageSize: 10
  //   }
  // })
  return (
    <div
      style={{
        display: 'flex',
        gap: '16px',

        borderRadius: '20px',
        background: '#f5f5f5',
        padding: '5px',
        width: '350px'
      }}
    >
      <Button
        type='primary'
        style={{
          borderRadius: '20px',
          flex: 1,
          background: selectedTag === 'option1' ? 'blue' : '#f5f5f5',
          fontSize: '13px',
          width: '100px'
        }}
        onClick={() => handleTagChange('option1')}
      >
        Tất cả
      </Button>
      <Button
        type='primary'
        style={{
          borderRadius: '20px',
          flex: 1,
          background: selectedTag === 'option2' ? 'blue' : '#f5f5f5',
          fontSize: '13px',
          width: '200px'
        }}
        onClick={() => handleTagChange('option2')}
      >
        Khách hàng của tôi
      </Button>
    </div>
  )
}

export default CustomToggleButton
