import { Button, Col, Row, Table } from "antd";
import { FiPlus, FiTrash2, FiInfo } from "react-icons/fi";

const ActivityHistory = () => {
  const data = [
    { code: "HT-0001", date: "23-11-2023", status: "Đã gửi" },
    { code: "HT-0001", date: "23-11-2023", status: "Đã gửi" },
  ];
  const columns1 = [
    {
      title: "name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "deadLine",
      dataIndex: "deadLine",
      key: "deadLine",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "address",
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
        <Col span={20}>
          {" "}
          <h1>Danh sách Hóa đơn</h1>
        </Col>
        <Col span={4}>
          <Button icon={<FiPlus />}>Thêm mới</Button>
        </Col>
      </Row>
      <Table columns={columns1} dataSource={data} />
    </>
  );
};
export default ActivityHistory;
