import { Button, Input } from 'antd'
import { ButtonOk } from '../../assets/styles/button.style'

const FilterColumn = ({
  setSelectedKeys,
  selectedKeys,
  confirm,
  clearFilters
}) => {
  return (
    <div style={{ padding: 8 }}>
      <Input
        placeholder='Search address'
        value={selectedKeys[0]}
        onChange={(e) =>
          setSelectedKeys(e.target.value ? [e.target.value] : [])
        }
        onPressEnter={confirm}
        style={{ marginBottom: 8, display: 'block' }}
      />
      <ButtonOk
        type='primary'
        onClick={confirm}
        size='small'
        style={{
          width: 90,
          marginRight: 8,
          height: 35,
          justifyContent: 'center',
          alignItems: 'center',
          display: 'inline-flex' // Sử dụng inline-flex thay vì flex
        }}
      >
        Search
      </ButtonOk>
      <Button
        onClick={clearFilters}
        size='small'
        danger
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
