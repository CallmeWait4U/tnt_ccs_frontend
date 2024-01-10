import { VerticalLeftOutlined } from '@ant-design/icons'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-quartz.css'
import { AgGridReact } from 'ag-grid-react'
import { Pagination } from 'antd'
import { useState } from 'react'
// import { dataCustomer } from '../../features/customerManagement/data/DataCustomer'
import './AgGrid.css'

const AgGridTable = ({
  colDefs,
  rowData,
  selectedRow,
  take,
  setTake,
  showPagination = true
}) => {
  const [gridApi, setGridApi] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  const [firstIndex, setFirstIndex] = useState(0)
  const [lastIndex, setLastIndex] = useState(0)

  const onGridReady = (params) => {
    setGridApi(params)
    setFirstIndex(1)
    setLastIndex(take)
  }

  const onFirstDataRendered = (params) => {
    params.columnApi.autoSizeAllColumns()
  }

  const onChangePageSize = (pageSize) => {
    gridApi.api.updateGridOptions({ paginationPageSize: Number(pageSize) })
    setCurrentPage(1)
    setFirstIndex(1)
    setLastIndex(pageSize)
    setTake(pageSize)
  }

  const onChangePagination = (pageNumber) => {
    setCurrentPage(pageNumber)
    setFirstIndex((pageNumber - 1) * take + 1)
    pageNumber * take > rowData.length
      ? setLastIndex(rowData.length)
      : setLastIndex(pageNumber * take)
    gridApi.api.paginationGoToPage(pageNumber - 1)
  }

  return (
    <>
      <div className='ag-theme-quartz custom-ag-grid'>
        <AgGridReact
          rowHeight={50}
          animateRows={true}
          enableCellTextSelection={true}
          suppressCellFocus={true}
          suppressMenuHide={true}
          rowSelection='multiple'
          columnDefs={colDefs}
          rowData={rowData}
          onGridReady={(params) => onGridReady(params)}
          onFirstDataRendered={(params) => onFirstDataRendered(params)}
          onSelectionChanged={(params) =>
            selectedRow(params.api.getSelectedRows())
          }
          pagination={true}
          suppressPaginationPanel={true}
          paginationPageSize={take}
          icons={{
            menu: `<span class="ag-icon ag-icon-small-down" style="font-size: 24px"></span>`
          }}
        ></AgGridReact>
      </div>
      <div
        className='footer-table'
        style={{ display: showPagination ? '' : 'none' }}
      >
        <div className='pagination-page-size'>
          <div className='pagination-page-size-title'>
            Số lượng hiển thị trên trang:
          </div>
          <select
            className='pagination-page-size-select'
            onChange={(e) => onChangePageSize(e.target.value)}
          >
            <option value='10' className='pagination-page-size-option'>
              10
            </option>
            <option value='25' className='pagination-page-size-option'>
              25
            </option>
            <option value='50' className='pagination-page-size-option'>
              50
            </option>
            <option value='100' className='pagination-page-size-option'>
              100
            </option>
          </select>
        </div>
        <div className='custom-pagination'>
          <div className='custom-pagination-title'>
            {firstIndex}-{lastIndex} trong tổng {rowData.length}
          </div>
          <Pagination
            className='custom-pagination-title'
            total={rowData.length}
            current={currentPage}
            onChange={onChangePagination}
            showSizeChanger={false}
            showQuickJumper={{
              goButton: <VerticalLeftOutlined style={{ cursor: 'pointer' }} />
            }}
            pageSize={take}
            locale={{ jump_to: 'Đi đến trang:', page: '' }}
            hideOnSinglePage={true}
          ></Pagination>
        </div>
      </div>
    </>
  )
}

export default AgGridTable
