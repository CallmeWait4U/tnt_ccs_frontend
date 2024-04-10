import { Button } from 'antd'
import { useState } from 'react'
import './AgGrid.css'

const AgGridCustomTextFilter = ({ onInputChange, refetchFunction }) => {
  const [searchWord, setSearchWord] = useState('')

  const handleChange = (e) => {
    const inputValue = e.target.value
    setSearchWord(inputValue)
    onInputChange(inputValue)
  }

  const onClear = () => {
    setSearchWord('')
    onInputChange('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleApply()
    }
  }

  const handleApply = () => {
    // refetchFunction(0, 10, searchWord)
  }

  return (
    <div className='customTextFilter'>
      <div className='searchWrapper'>
        <div className='fieldWrapper column'>
          <div className='inputWrapper'>
            <input
              // type={`${param.type}`}
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
