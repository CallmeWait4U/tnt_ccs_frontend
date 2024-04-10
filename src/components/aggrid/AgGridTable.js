import { VerticalLeftOutlined } from '@ant-design/icons'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-quartz.css'
import { AgGridReact } from 'ag-grid-react'
import { Pagination } from 'antd'
import { useEffect, useState } from 'react'
// import { dataCustomer } from '../../features/customerManagement/data/DataCustomer'
import './AgGrid.css'

const AgGridTable = ({
  colDefs,
  rowData,
  selectedRow,
  take,
  setTake,
  onDoubleClicked,
  showPagination = true,
  width = '100%',
  height = '530px',
  autoHeight = false,
  customCustomer = '',
  customCustomerAct = '',
  rowStyle = {},
  totalItem,
  setSkip,
  refetchData
}) => {
  const [gridApi, setGridApi] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  const [firstIndex, setFirstIndex] = useState(1)
  const [lastIndex, setLastIndex] = useState(10)
  const onGridReady = (params) => {
    setGridApi(params)
    setFirstIndex(1)
    take > 10 ? setLastIndex(10) : setLastIndex(take)
  }

  const onFirstDataRendered = (params) => {
    params.api.autoSizeAllColumns()
  }
  useEffect(() => {
    if (refetchData) {
      refetchData()
    }
  }, [currentPage, take, refetchData])

  const onChangePageSize = (pageSize) => {
    gridApi.api.updateGridOptions({ paginationPageSize: Number(pageSize) })
    setFirstIndex(1)
    pageSize > totalItem ? setLastIndex(totalItem) : setLastIndex(pageSize)
    setCurrentPage(1)
    setTake(pageSize)
  }

  const onChangePagination = (pageNumber) => {
    setCurrentPage(pageNumber)
    setFirstIndex((pageNumber - 1) * take + 1)
    setLastIndex(Math.min(pageNumber * take, totalItem))
    gridApi.api.paginationGoToPage(pageNumber - 1)
    setSkip((pageNumber - 1) * take)
  }

  return (
    <div className={`${customCustomer} ${customCustomerAct}`}>
      <div
        className='ag-theme-quartz'
        style={{ width: `${width}`, height: `${height}` }}
      >
        <AgGridReact
          rowHeight={50}
          rowStyle={rowStyle}
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
          defaultColDef={{
            autoHeaderHeight: true
          }}
          onRowDoubleClicked={(params) => onDoubleClicked(params)}
          pagination={true}
          suppressPaginationPanel={true}
          paginationPageSize={take}
          domLayout={autoHeight ? 'autoHeight' : 'normal'}
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
            {firstIndex}-{lastIndex} trong tổng {totalItem}
          </div>
          <Pagination
            className='custom-pagination-title'
            total={totalItem}
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
    </div>
  )
}

export default AgGridTable
