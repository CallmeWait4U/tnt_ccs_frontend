import { Button, Checkbox } from 'antd'
import React, { useState } from 'react'
import './AgGrid.css'

const AgGridCustomSetFilter = (param) => {
  const CheckboxGroup = Checkbox.Group
  const [checkedList, setCheckedList] = useState([])
  const [checkAll, setCheckAll] = useState(false)
  const indeterminate =
    checkedList.length > 0 && checkedList.length < param.itemList.length

  const onChange = (list) => {
    setCheckAll(list.length === param.itemList.length)
    setCheckedList(list)
  }

  const onCheckAllChange = (e) => {
    setCheckAll(e.target.checked)
    setCheckedList(e.target.checked ? param.itemList.map((i) => i.value) : [])
  }

  const onClear = () => {
    setCheckAll(false)
    setCheckedList([])
    param.filterChangedCallback()
  }

  const handleApply = () => {
    const searchSet = checkedList.forEach((item) => {
      const arr = param.itemList.filter((i) => i.value === item)
      return arr[0]
    })
    console.log(searchSet)
  }
  return (
    <div className='customSetFilter'>
      <div className='searchWrapper'>
        <Checkbox
          indeterminate={indeterminate}
          onChange={onCheckAllChange}
          checked={checkAll}
          style={{
            marginBottom: '15px',
            fontSize: '16px',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          Chọn tất cả
        </Checkbox>
        <CheckboxGroup
          options={param.itemList}
          value={checkedList}
          onChange={onChange}
        />
      </div>
      <div className='actionWrapper' style={{ marginTop: '5px' }}>
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

export default AgGridCustomSetFilter
