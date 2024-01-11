import { Button } from 'antd'
import { useState } from 'react'
import './AgGrid.css'

const AgGridCustomTextFilter = (param) => {
  const [searchWord, setSearchWord] = useState('')

  const handleChange = (e) => {
    if (param.type === 'text') {
      setSearchWord(e.target.value)
    } else {
      setSearchWord(String(e.target.value))
    }
  }

  const onClear = () => {
    setSearchWord('')
    param.filterChangedCallback()
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleApply()
    }
  }

  const handleApply = () => {
    console.log(searchWord)
  }

  return (
    <div className='customTextFilter'>
      <div className='searchWrapper'>
        <div className='fieldWrapper column'>
          <div className='inputWrapper'>
            <input
              type={`${param.type}`}
              value={searchWord}
              className='input'
              id='search'
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              placeholder='Tìm kiếm...'
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

export default AgGridCustomTextFilter
