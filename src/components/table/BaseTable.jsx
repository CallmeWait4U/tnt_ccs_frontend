import { Table } from 'antd'
import { useState } from 'react'

const BaseTable = ({
  data,
  columns,
  onRow,
  rowKey,
  selectedRowKeys,
  setSelectedRowKeys
}) => {
  // const [tableParams, setTableParams] = useState({
  //   pagination: {
  //     current: 1,
  //     pageSize: 10,
  //     pageSizeOptions: ['10', '20', '30', '40', '50']
  //   }
  // })

  // const handleTableChange = (pagination, filters, sorter) => {
  //   setTableParams((prevParams) => ({
  //     pagination: {
  //       ...prevParams.pagination,
  //       current: pagination.current,
  //       pageSize: pagination.pageSize
  //     },
  //     filters,
  //     ...sorter
  //   }))
  // }

  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [pagination, setPagination] = useState({
    skip: 0,
    take: 20
  })
  const onChangePagination = (page, pageSize) => {
    setPageSize(pageSize)
    setPage(page)
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
      rowSelection={{
        type: 'checkbox',
        ...rowSelection
      }}
      onRow={onRow}
      rowKey={rowKey}
      columns={columns}
      dataSource={data}
      pagination={{
        defaultPageSize: pageSize,
        onChange: onChangePagination,
        pageSizeOptions: ['10', '20', '30'],
        total: data.length
      }}
      className='ant-border-space'
    />
  )
}

export default BaseTable
