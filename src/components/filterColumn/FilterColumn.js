import { Button, Input } from 'antd'

const FilterColumn = ({
  setSelectedKeys,
  selectedKeys,
  confirm,
  clearFilters
}) => {
  return (
    <div style={{ padding: 8 }}>
      <Input
        placeholder="Input key..."
        value={selectedKeys[0]}
        onChange={(e) =>
          setSelectedKeys(e.target.value ? [e.target.value] : [])
        }
        onPressEnter={confirm}
        style={{ marginBottom: 8, display: 'block' }}
      />
      <Button
        onClick={confirm}
        size="small"
        style={{
          width: 90,
          marginRight: 8,
          height: 35,
<<<<<<< HEAD
          justifyContent: 'center',
          alignItems: 'center',
          display: 'inline-flex' // Sử dụng inline-flex thay vì flex
=======
          background: "#1677ff",
          color: "white",
          justifyContent: "center",
          alignItems: "center",
          display: "inline-flex", // Sử dụng inline-flex thay vì flex
>>>>>>> feat/customer-detail
        }}
      >
        Search
      </Button>
      <Button
        onClick={clearFilters}
        size="small"
        style={{
          width: 90,
          height: 35,
          justifyContent: 'center',
          alignItems: 'center',
          display: 'inline-flex' // Sử dụng inline-flex thay vì flex
        }}
      >
        Reset
      </Button>
    </div>
  )
}
export default FilterColumn
