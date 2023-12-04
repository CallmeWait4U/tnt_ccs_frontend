import { Tag } from "antd";
import { Button, Col, Row, Table } from "antd";
import { FiPlus, FiTrash2, FiInfo } from "react-icons/fi";

const ActivityHistory = () => {
  const data = [
    {
      name: "HT-0001",
      deadLine: "23-11-2023",
      employee: ["Lê Huy Ngọ", "Phạm Hồng Thịnh"],
      status: "Đã gửi",
    },
    {
      name: "HT-0001",
      deadLine: "23-11-2023",
      employee: ["Lê Huy Ngọ"],
      status: "Đã gửi",
    },
  ];
  const columns1 = [
    {
      title: "Hoạt động",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Ngày kết thúc",
      dataIndex: "deadLine",
      key: "deadLine",
    },
    {
      title: "Nhân viên phụ trách",
      dataIndex: "employee",
      key: "employee",
      render: (item) => (
        <>
          {item.map((employeeItem, index) => (
            <div key={index}>
              <h5>{employeeItem}</h5>
            </div>
          ))}
        </>
      ),
    },

    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (item) => <Tag>{item}</Tag>,
    },
    {
      title: "THAO TÁC",
      dataIndex: "",
      key: "x",
      width: "7%",
      render: () => (
        <div style={{ gap: "15px", display: "flex" }}>
          <FiTrash2 size={24} />
          <FiInfo size={24} />
        </div>
      ),
    },
  ];
  return (
    <>
      <Row gutter={12} style={{ marginBottom: "16px" }}>
        <Col span={19}>
          <h1>Hoạt động sắp tới</h1>
        </Col>
        <Col span={5}>
          <Button icon={<FiPlus />}>Thêm mới</Button>
        </Col>
      </Row>
      <Table columns={columns1} dataSource={data} />
      <Row gutter={12} style={{ marginBottom: "16px" }}>
        <Col span={19}>
          <h1>Lịch sử hoạt động</h1>
        </Col>
        <Col span={5}></Col>
      </Row>
      <Table columns={columns1} dataSource={data} />
    </>
  );
};
export default ActivityHistory;
