import {
  Row,
  Col,
  Card,
  Radio,
  Table,
  Upload,
  message,
  Progress,
  Button,
  Avatar,
  Typography,
} from "antd";
import { HiInformationCircle, HiOutlineTrash } from "react-icons/hi";
import Highlighter from "react-highlight-words";

import { SearchOutlined, ToTopOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

// Images

import face2 from "../../assets/images/face-2.jpg";

import { AiFillFilter } from "react-icons/ai";
import BaseTable from "../../components/table/BaseTable";
import { useNavigate } from "react-router-dom";
import { Flex } from "antd";
import CustomToggleButton from "../component/CustomToggleButton";
import FilterColumn from "../../components/filterColumn/FilterColumn";
import { useRef, useState } from "react";
import { Input } from "antd";
import { Space } from "antd";

const dataCustomer = [
  {
    id: "1",
    avatar: face2,
    code: "#1234",
    name: "Nguyễn Hà Yến Nhi",
    email: "ny@thinhpham.com",
    number: "0122323233",
    employee: "Phạm Nhật Thịnh",
    source: "Landing Page",
    phase: "Tiềm năng",
  },
  {
    id: "1",
    avatar: face2,
    code: "#1234",
    name: "Nguyễn Hà Yến Nhi",
    email: "ny@thinhpham.com",
    number: "0122323233",
    employee: "Phạm Nhật Thịnh",
    source: "Landing Page",
    phase: "Tiềm năng",
  },
  {
    id: "1",
    avatar: face2,
    code: "#1234",
    name: "Nguyễn Hà Yến Nhi",
    email: "ny@thinhpham.com",
    number: "0122323233",
    employee: "Phạm Nhật Thịnh",
    source: "Landing Page",
    phase: "Tiềm năng",
  },
  {
    id: "1",
    avatar: face2,
    code: "#1234",
    name: "Nguyễn Hà Yến Nhi",
    email: "ny@thinhpham.com",
    number: "0122323233",
    employee: "Phạm Nhật Thịnh",
    source: "Landing Page",
    phase: "Tiềm năng",
  },
  {
    id: "1",
    avatar: face2,
    code: "#1234",
    name: "Nguyễn Hà Yến Nhi",
    email: "ny@thinhpham.com",
    number: "0122323233",
    employee: "Phạm Nhật Thịnh",
    source: "Landing Page",
    phase: "Tiềm năng",
  },
  {
    id: "1",
    avatar: face2,
    code: "#1234",
    name: "Nguyễn Hà Yến Nhi",
    email: "ny@thinhpham.com",
    number: "0122323233",
    employee: "Phạm Nhật Thịnh",
    source: "Landing Page",
    phase: "Tiềm năng",
  },
  {
    id: "1",
    avatar: face2,
    code: "#1234",
    name: "Nguyễn Hà Yến Nhi",
    email: "ny@thinhpham.com",
    number: "0122323233",
    employee: "Phạm Nhật Thịnh",
    source: "Landing Page",
    phase: "Tiềm năng",
  },
  {
    id: "1",
    avatar: face2,
    code: "#1234",
    name: "Nguyễn Hà Yến Nhi",
    email: "ny@thinhpham.com",
    number: "0122323233",
    employee: "Phạm Nhật Thịnh",
    source: "Landing Page",
    phase: "Tiềm năng",
  },
  {
    id: "1",
    avatar: face2,
    code: "#1234",
    name: "Nguyễn Hà Yến Nhi",
    email: "ny@thinhpham.com",
    number: "0122323233",
    employee: "Phạm Nhật Thịnh",
    source: "Landing Page",
    phase: "Tiềm năng",
  },
  {
    id: "1",
    avatar: face2,
    code: "#1234",
    name: "Nguyễn Hà Yến Nhi",
    email: "ny@thinhpham.com",
    number: "0122323233",
    employee: "Phạm Nhật Thịnh",
    source: "Landing Page",
    phase: "Tiềm năng",
  },
  {
    id: "1",
    avatar: face2,
    code: "#1234",
    name: "Nguyễn Hà Yến Nhi",
    email: "ny@thinhpham.com",
    number: "0122323233",
    employee: "Phạm Nhật Thịnh",
    source: "Landing Page",
    phase: "Tiềm năng",
  },
  {
    id: "1",
    avatar: face2,
    code: "#1234",
    name: "Nguyễn Hà Yến Nhi",
    email: "ny@thinhpham.com",
    number: "0122323233",
    employee: "Phạm Nhật Thịnh",
    source: "Landing Page",
    phase: "Tiềm năng",
  },
  {
    id: "1",
    avatar: face2,
    code: "#1234",
    name: "Nguyễn Hà Yến Nhi",
    email: "ny@thinhpham.com",
    number: "0122323233",
    employee: "Phạm Nhật Thịnh",
    source: "Landing Page",
    phase: "Tiềm năng",
  },
  {
    id: "1",
    avatar: face2,
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
        <Avatar.Group>
          <Avatar className="shape-avatar" size={40} src={face2}></Avatar>
          <div className="avatar-info" avatar-info style={{ color: "#726BEA" }}>
            {code}
          </div>
        </Avatar.Group>
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

  const navigate = useNavigate();
  return (
    <>
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title={<CustomToggleButton />}
              extra={
                <>
                  <Flex wrap="wrap" gap="small">
                    <Button
                      type="primary"
                      style={{
                        height: "40px",

                        border: "green",
                        background: "green",
                      }}
                    >
                      Thêm hoạt động
                    </Button>
                    <Button type="primary" danger style={{ height: "40px" }}>
                      Xóa
                    </Button>
                    <Button
                      type="primary"
                      style={{ height: "40px", background: "blue" }}
                      onClick={() => navigate("/new-customer")}
                    >
                      Tạo mới
                    </Button>
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
                        console.log("bam");
                        navigate(`/customers/1`, {
                          state: { page: "detail" },
                          replace: true,
                        });
                      },
                    };
                  }}
                  className="ant-border-space"
                />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default CustomerManagement;
