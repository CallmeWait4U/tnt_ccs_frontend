import { Button } from 'antd'
import React, { useState } from 'react'

const CustomToggleButton = ({ options, chosenTag }) => {
  const [selectedTag, setSelectedTag] = useState(options[0])

  const handleTagChange = (tag) => {
    setSelectedTag(tag)
    chosenTag(tag)
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
          background: selectedTag === options[0] ? 'white' : '#f2f2f2',
          color: selectedTag === options[0] ? '#00aeef' : '#999999',
          fontSize: '13px',
          width: '150px'
        }}
        onClick={() => handleTagChange(options[0])}
      >
        {options[0]}
      </Button>
      <Button
        type='primary'
        style={{
          borderRadius: '20px',
          flex: 1,
          background: selectedTag === options[1] ? 'white' : '#f2f2f2',
          color: selectedTag === options[1] ? '#00aeef' : '#999999',
          fontSize: '13px',
          width: '150px'
        }}
        onClick={() => handleTagChange(options[1])}
      >
        {options[1]}
      </Button>
    </div>
  )
}

export default CustomToggleButton
