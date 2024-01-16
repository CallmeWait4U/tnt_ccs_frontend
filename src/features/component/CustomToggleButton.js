import { Button } from 'antd'
import React, { useState } from 'react'

const CustomToggleButton = ({ options }) => {
  const [selectedTag, setSelectedTag] = useState('option1')

  const handleTagChange = (tag) => {
    setSelectedTag(tag)
  }

  return (
    <div
      style={{
        display: 'flex',
        gap: '16px',
        height: '40px',
        borderRadius: '20px',
        background: '#F2F2F2',
        padding: '5px',
        width: '350px'
      }}
    >
      <Button
        type='primary'
        style={{
          borderRadius: '20px',
          flex: 1,
          background: selectedTag === 'option1' ? 'white' : '#f2f2f2',
          color: selectedTag === 'option1' ? '#00aeef' : '#999999',
          fontSize: '13px',
          width: '150px'
        }}
        onClick={() => handleTagChange('option1')}
      >
        {options[0]}
      </Button>
      <Button
        type='primary'
        style={{
          borderRadius: '20px',
          flex: 1,
          background: selectedTag === 'option2' ? 'white' : '#f2f2f2',
          color: selectedTag === 'option2' ? '#00aeef' : '#999999',
          fontSize: '13px',
          width: '150px'
        }}
        onClick={() => handleTagChange('option2')}
      >
        {options[1]}
      </Button>
    </div>
  )
}

export default CustomToggleButton
