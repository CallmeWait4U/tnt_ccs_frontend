import { Button, Checkbox } from 'antd'
import React, { useState } from 'react'
import './AgGrid.css'

const AgGridCustomSetFilter = (param) => {
  const CheckboxGroup = Checkbox.Group
  const [checkedList, setCheckedList] = useState([])
  const [checkAll, setCheckAll] = useState(false)
  const indeterminate =
    checkedList.length > 0 && checkedList.length < param.param.total
  const checkboxOptions = param.param.items.map((option) => ({
    label: option.name,
    value: option.uuid
  }))
  console.log(param)
  const onChange = (list) => {
    setCheckAll(list.length === param.param.total)
    setCheckedList(list)
  }

  const onCheckAllChange = (e) => {
    setCheckAll(e.target.checked)
    setCheckedList(e.target.checked ? checkboxOptions.map((i) => i.value) : [])
  }

  const onClear = () => {
    setCheckAll(false)
    setCheckedList([])
    param.filterChangedCallback()
  }

  const handleApply = () => {
    const searchSet = checkedList.forEach((item) => {
      const arr = checkboxOptions.filter((i) => i.value === item)
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
          options={checkboxOptions}
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
