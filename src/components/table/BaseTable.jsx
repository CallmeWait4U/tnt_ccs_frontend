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
  return (
    <Table
      rowSelection={{
        // type: selectionType,
        type: 'checkbox',
        ...rowSelection
      }}
      onRow={onRow}
      columns={columns}
      dataSource={data}
      pagination={tableParams.pagination}
      className="ant-border-space"
      onChange={handleTableChange}
    />
  )
}
export default BaseTable
