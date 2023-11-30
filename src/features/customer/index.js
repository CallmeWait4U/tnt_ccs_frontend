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

import { SearchOutlined, ToTopOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

// Images
import ava1 from "../../assets/images/logo-shopify.svg";
import ava2 from "../../assets/images/logo-atlassian.svg";
import ava3 from "../../assets/images/logo-slack.svg";
import ava5 from "../../assets/images/logo-jira.svg";
import ava6 from "../../assets/images/logo-invision.svg";
import face from "../../assets/images/face-1.jpg";
import face2 from "../../assets/images/face-2.jpg";
import face3 from "../../assets/images/face-3.jpg";
import face4 from "../../assets/images/face-4.jpg";
import face5 from "../../assets/images/face-5.jpeg";
import face6 from "../../assets/images/face-6.jpeg";
import pencil from "../../assets/images/pencil.svg";
import { AiFillFilter } from "react-icons/ai";
import BaseTable from "../../components/table/BaseTable";
import { useNavigate } from "react-router-dom";
import { Input } from "antd";
import { Flex } from "antd";
import CustomToggleButton from "../component/CustomToggleButton";
import FilterColumn from "../../components/filterColumn/FilterColumn";

const { Title } = Typography;

const formProps = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
// table code start
const columns = [
  {
    title: "MÃ KHÁCH HÀNG",
    dataIndex: "code",
    key: "code",
  },
  {
    title: "TÊN KHÁCH HÀNG",
    dataIndex: "name",
    key: "name",
    width: "25%",
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <FilterColumn
        selectedKeys={selectedKeys}
        setSelectedKeys={setSelectedKeys}
        confirm={confirm}
        clearFilters={clearFilters}
      />
    ),
    filterIcon: (filtered) => (
      <AiFillFilter style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
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
    name: "Nguyễn Hà Yến Nhi",
    email: "ny@thinhpham.com",
    number: "0122323233",
    employee: "Phạm Nhật Thịnh",
    source: "Landing Page",
    phase: "Tiềm năng",
  },
];

const data = dataCustomer.map((item) => {
  return {
    key: "1",
    code: (
      <>
        <Avatar.Group>
          <Avatar className="shape-avatar" size={40} src={face2}></Avatar>
          <div className="avatar-info" avatar-info style={{ color: "#726BEA" }}>
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
    ),
  };
});

const CustomerManagement = () => {
  const onChange = (e) => console.log(`radio checked:${e.target.value}`);
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
                  </Flex>
                </>
              }
            >
              <div className="table-responsive">
                <BaseTable
                  columns={columns}
                  data={data}
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
