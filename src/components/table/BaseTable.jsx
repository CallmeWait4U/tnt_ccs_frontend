import { Table } from 'antd'
import { useState } from 'react'
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      'selectedRows: ',
      selectedRows
    )
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === 'Disabled User',
    // Column configuration not to be checked
    name: record.name
  })
}
const BaseTable = ({ data, columns, onRow }) => {
  // const [selectionType, setSelectionType] = useState('checkbox')
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10
    }
  })

  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter
    })

    // `dataSource` is useless since `pageSize` changed
  }
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const [loading, setLoading] = useState(false)
  const start = () => {
    setLoading(true)
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([])
      setLoading(false)
    }, 1000)
  }
  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys)
    setSelectedRowKeys(newSelectedRowKeys)
  }
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange
  }
  return (
    <Table
      rowSelection={rowSelection}
      onRow={onRow}
      columns={columns}
      dataSource={data}
      pagination={tableParams.pagination}
      className='ant-border-space'
      onChange={handleTableChange}
    />
  )
}
export default BaseTable
