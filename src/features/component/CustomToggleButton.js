import { Button } from 'antd'
import React, { useState } from 'react'

const CustomToggleButton = ({ options, defaultValue, onChange }) => {
  const [selectedTag, setSelectedTag] = useState(options[0])

  const handleTagChange = (tag) => {
    setSelectedTag(tag)
    onChange(tag)
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
      {options.map((option) => (
        <Button
          key={option}
          type='primary'
          style={{
            borderRadius: '20px',
            flex: 1,
            background: selectedTag === option ? 'white' : '#f2f2f2',
            color: selectedTag === option ? '#00aeef' : '#999999',
            fontSize: '13px',
            width: '150px'
          }}
          onClick={() => handleTagChange(option)}
        >
          {option}
        </Button>
      ))}
    </div>
  )
}

export default CustomToggleButton
