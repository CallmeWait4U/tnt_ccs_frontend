import {
  Avatar,
<<<<<<< HEAD
  Button,
  Card,
  Col,
  Flex,
  Row
} from 'antd'
import React from 'react'
import { HiInformationCircle, HiOutlineTrash } from 'react-icons/hi'

// Images

import face2 from '../../assets/images/face-2.jpg'

import { AiFillFilter } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import FilterColumn from '../../components/filterColumn/FilterColumn'
import BaseTable from '../../components/table/BaseTable'
import CustomToggleButton from '../component/CustomToggleButton'

const columns = [
  {
    title: 'MÃ KHÁCH HÀNG',
    dataIndex: 'code',
    key: 'code'
  },
  {
    title: 'TÊN KHÁCH HÀNG',
    dataIndex: 'name',
    key: 'name',
    width: '25%',
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters
    }) => (
      <FilterColumn
        selectedKeys={selectedKeys}
        setSelectedKeys={setSelectedKeys}
        confirm={confirm}
        clearFilters={clearFilters}
      />
    ),
    filterIcon: (filtered) => (
      <AiFillFilter style={{ color: filtered ? '#1890ff' : undefined }} />
    )
  },

  {
    title: 'EMAIL',
    key: 'email',
    dataIndex: 'email'
  },
  {
    title: 'SỐ ĐIỆN THOẠI',
    key: 'number',
    dataIndex: 'number'
  },
  {
    title: 'NHÂN VIÊN CHĂM SÓC',
    key: 'employee',
    dataIndex: 'employee'
  },
  {
    title: 'NGUỒN',
    key: 'source',
    dataIndex: 'source'
  },
  {
    title: 'GIAI ĐOẠN',
    key: 'phase',
    dataIndex: 'phase'
  },
  {
    title: 'THAO TÁC',
    dataIndex: '',
    key: 'x',
    width: '7%',
    render: () => (
      <div style={{ gap: '15px', display: 'flex' }}>
        <HiOutlineTrash size={24} />
        <HiInformationCircle size={24} />
      </div>
    )
  }
]
=======
  Typography,
} from "antd";
import { HiInformationCircle, HiOutlineTrash } from "react-icons/hi";
import Highlighter from "react-highlight-words";

import { SearchOutlined, ToTopOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

// Images

import face2 from "../../assets/images/face-2.jpg";
import BaseTable from "../../components/table/BaseTable";
import { useNavigate } from "react-router-dom";
import { Flex } from "antd";
import CustomToggleButton from "../component/CustomToggleButton";
import FilterColumn from "../../components/filterColumn/FilterColumn";
import { useRef, useState } from "react";
import { FiPlus } from "react-icons/fi";

>>>>>>> feat/customer-detail
const dataCustomer = [
  {
    id: '1',
    avatar: face2,
    code: '#1234',
    name: 'Nguyễn Hà Yến Nhi',
    email: 'ny@thinhpham.com',
    number: '0122323233',
    employee: 'Phạm Nhật Thịnh',
    source: 'Landing Page',
    phase: 'Tiềm năng'
  },
  {
    id: '1',
    avatar: face2,
    code: '#1234',
    name: 'Nguyễn Hà Yến Nhi',
    email: 'ny@thinhpham.com',
    number: '0122323233',
    employee: 'Phạm Nhật Thịnh',
    source: 'Landing Page',
    phase: 'Tiềm năng'
  },
  {
    id: '1',
    avatar: face2,
    code: '#1234',
    name: 'Nguyễn Hà Yến Nhi',
    email: 'ny@thinhpham.com',
    number: '0122323233',
    employee: 'Phạm Nhật Thịnh',
    source: 'Landing Page',
    phase: 'Tiềm năng'
  },
  {
    id: '1',
    avatar: face2,
    code: '#1234',
    name: 'Nguyễn Hà Yến Nhi',
    email: 'ny@thinhpham.com',
    number: '0122323233',
    employee: 'Phạm Nhật Thịnh',
    source: 'Landing Page',
    phase: 'Tiềm năng'
  },
  {
    id: '1',
    avatar: face2,
    code: '#1234',
    name: 'Nguyễn Hà Yến Nhi',
    email: 'ny@thinhpham.com',
    number: '0122323233',
    employee: 'Phạm Nhật Thịnh',
    source: 'Landing Page',
    phase: 'Tiềm năng'
  },
  {
    id: '1',
    avatar: face2,
    code: '#1234',
    name: 'Nguyễn Hà Yến Nhi',
    email: 'ny@thinhpham.com',
    number: '0122323233',
    employee: 'Phạm Nhật Thịnh',
    source: 'Landing Page',
    phase: 'Tiềm năng'
  },
  {
    id: '1',
    avatar: face2,
    code: '#1234',
    name: 'Nguyễn Hà Yến Nhi',
    email: 'ny@thinhpham.com',
    number: '0122323233',
    employee: 'Phạm Nhật Thịnh',
    source: 'Landing Page',
    phase: 'Tiềm năng'
  },
  {
    id: '1',
    avatar: face2,
    code: '#1234',
    name: 'Nguyễn Hà Yến Nhi',
    email: 'ny@thinhpham.com',
    number: '0122323233',
    employee: 'Phạm Nhật Thịnh',
    source: 'Landing Page',
    phase: 'Tiềm năng'
  },
  {
    id: '1',
    avatar: face2,
    code: '#1234',
    name: 'Nguyễn Hà Yến Nhi',
    email: 'ny@thinhpham.com',
    number: '0122323233',
    employee: 'Phạm Nhật Thịnh',
    source: 'Landing Page',
    phase: 'Tiềm năng'
  },
  {
    id: '1',
    avatar: face2,
    code: '#1234',
    name: 'Nguyễn Hà Yến Nhi',
    email: 'ny@thinhpham.com',
    number: '0122323233',
    employee: 'Phạm Nhật Thịnh',
    source: 'Landing Page',
    phase: 'Tiềm năng'
  },
  {
    id: '1',
    avatar: face2,
    code: '#1234',
    name: 'Nguyễn Hà Yến Nhi',
    email: 'ny@thinhpham.com',
    number: '0122323233',
    employee: 'Phạm Nhật Thịnh',
    source: 'Landing Page',
    phase: 'Tiềm năng'
  },
  {
    id: '1',
    avatar: face2,
    code: '#1234',
    name: 'Nguyễn Hà Yến Nhi',
    email: 'ny@thinhpham.com',
    number: '0122323233',
    employee: 'Phạm Nhật Thịnh',
    source: 'Landing Page',
    phase: 'Tiềm năng'
  },
  {
    id: '1',
    avatar: face2,
    code: '#1234',
    name: 'Nguyễn Hà Yến Nhi',
    email: 'ny@thinhpham.com',
    number: '0122323233',
    employee: 'Phạm Nhật Thịnh',
    source: 'Landing Page',
    phase: 'Tiềm năng'
  },
  {
    id: '1',
    avatar: face2,
<<<<<<< HEAD
    code: '#1234',
    name: 'Nguyễn Hà Yến Nhi',
    email: 'ny@thinhpham.com',
    number: '0122323233',
    employee: 'Phạm Nhật Thịnh',
    source: 'Landing Page',
    phase: 'Tiềm năng'
  }
]

const data = dataCustomer.map((item, index) => {
  return {
    key: `dataCustomer-${index}`,
    code: (
      <>
        <Avatar.Group>
          <Avatar className="shape-avatar" size={40} src={face2}></Avatar>
          <div className="avatar-info" style={{ color: '#726BEA' }}>
            {item.code}
          </div>
        </Avatar.Group>
      </>
    ),
    name: (
      <>
        <div className="avatar-info">{item.name}</div>
      </>
    ),

    email: (
      <>
        <div className="avatar-info">{item.email}</div>
      </>
    ),
    number: (
      <>
        <div className="avatar-info">{item.number}</div>
      </>
    ),
    employee: (
      <>
        <div className="avatar-info">{item.employee}</div>
      </>
    ),
    source: (
      <>
        <div className="avatar-info">{item.source}</div>
      </>
    ),
    phase: (
      <>
        <div className="avatar-info">{item.phase}</div>
      </>
    )
  }
})

const CustomerManagement = () => {
  // const onChange = (e) => console.log(`radio checked:${e.target.value}`);
  const navigate = useNavigate()
=======
    code: "#1234",
    name: "Lê Huy Ngọ",
    email: "ny@thinhpham.com",
    number: "0122323233",
    employee: "Phạm Nhật Thịnh",
    source: "Landing Page",
    phase: "Tiềm năng",
  },
];

const CustomerManagement = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: FilterColumn,
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1677ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });
  const columns = [
    {
      title: "MÃ KHÁCH HÀNG",
      dataIndex: "code",
      key: "code",
      render: (code) => (
        <div className="avatar-info" avatar-info style={{ color: "#726BEA" }}>
          {code}
        </div>
      ),
    },
    {
      title: "TÊN KHÁCH HÀNG",
      dataIndex: "name",
      key: "name",
      width: "25%",
      ...getColumnSearchProps("name"),
    },

    {
      title: "EMAIL",
      key: "email",
      dataIndex: "email",
    },
    {
      title: "SỐ ĐIỆN THOẠI",
      key: "number",
      dataIndex: "number",
    },
    {
      title: "NHÂN VIÊN CHĂM SÓC",
      key: "employee",
      dataIndex: "employee",
    },
    {
      title: "NGUỒN",
      key: "source",
      dataIndex: "source",
    },
    {
      title: "GIAI ĐOẠN",
      key: "phase",
      dataIndex: "phase",
    },
    {
      title: "THAO TÁC",
      dataIndex: "",
      key: "x",
      width: "7%",
      render: () => (
        <div style={{ gap: "15px", display: "flex" }}>
          <HiOutlineTrash size={24} />
          <HiInformationCircle size={24} />
        </div>
      ),
    },
  ];
  const { Title } = Typography;

  const navigate = useNavigate();
>>>>>>> feat/customer-detail
  return (
    <>
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Typography>Home {">"} Quản lý khách hàng</Typography>
          </Col>
        </Row>
        <Row>
          <Col span={21}>
            <Title level={3}>Danh sách khách hàng</Title>
          </Col>
          <Col span={3}>
            <Button
              type="primary"
              style={{
                background: "blue",
                display: "flex",
                alignItems: "center",
              }}
              onClick={() => navigate("/new-customer")}
            >
              <FiPlus />
              Tạo mới
            </Button>
          </Col>
        </Row>
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title={<CustomToggleButton />}
              extra={
                <>
                  <Flex wrap="wrap" gap="small">
<<<<<<< HEAD
                    <Button
                      type="primary"
                      style={{
                        height: '40px',

                        border: 'green',
                        background: 'green'
                      }}
                    >
                      Thêm hoạt động
                    </Button>
                    <Button type="primary" danger style={{ height: '40px' }}>
                      Xóa
                    </Button>
                    <Button
                      type="primary"
                      style={{ height: '40px', background: 'blue' }}
                      onClick={() => navigate('/new-customer')}
                    >
                      Tạo mới
                    </Button>
=======
                    <Button type="primary" danger>
                      Xóa
                    </Button>
>>>>>>> feat/customer-detail
                  </Flex>
                </>
              }
            >
              <div className="table-responsive">
                <BaseTable
                  columns={columns}
                  data={dataCustomer}
                  rowKey={(record) => record.id}
                  onRow={(record, rowIndex) => {
                    return {
                      onClick: () => {
                        console.log('bam')
                        navigate('/customers/1', {
                          state: { page: 'detail' },
                          replace: true
                        })
                      }
                    }
                  }}
                  className="ant-border-space"
                />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  )
}
export default CustomerManagement
