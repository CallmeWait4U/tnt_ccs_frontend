import { Button, Input, Table } from "antd";
import { Form, Card, Row, Col } from "antd";
import { HiInformationCircle, HiOutlineTrash } from "react-icons/hi";
import { FiPlus, FiShare2 } from "react-icons/fi";
const AdditionalInformation = () => {
  const data = [
    { code: "HT-0001", date: "23-11-2023", status: "Đã gửi" },
    { code: "HT-0001", date: "23-11-2023", status: "Đã gửi" },
  ];
  const columns1 = [
    {
      title: "Mã báo giá",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Ngày tạo",
      dataIndex: "date",
      key: "date",
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
          <HiOutlineTrash size={24} />
          <HiInformationCircle size={24} />
          <FiShare2 size={24} />
        </div>
      ),
    },
  ];
  const columns2 = [
    {
      title: "Mã hóa đơn",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Ngày tạo",
      dataIndex: "date",
      key: "date",
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
          <HiOutlineTrash size={24} />
          <HiInformationCircle size={24} />
          <FiShare2 size={24} />
        </div>
      ),
    },
  ];
  return (
    <>
      <Form
        layout="vertical
      "
      >
        <Row gutter={16}>
          <Col span={12}>
            {" "}
            <Form.Item label={"Số điện thoại"}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label={"Email"}>
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <h3>Thông tin Nhân viên</h3>
        <Row gutter={16}>
          {" "}
          <Col span={10}>
            {" "}
            <Form.Item label={"Mã nhân viên"}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item label={"Tên nhân viên chăm sóc"}>
              <Input />
            </Form.Item>
          </Col>{" "}
          <Col
            span={4}
            style={{
              display: "flex",
              alignItems: "center",
              alignContent: "flex-end",
            }}
          >
            <div
              style={{
                gap: "15px",
                display: "flex",
                alignItems: "flex-end",
                alignContent: "flex-end",
              }}
            >
              <HiOutlineTrash size={24} />
              <HiInformationCircle size={24} />
            </div>
          </Col>
        </Row>
        <Row gutter={16}>
          {" "}
          <Col span={10}>
            {" "}
            <Form.Item label={"Mã nhân viên"}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item label={"Tên nhân viên chăm sóc"}>
              <Input />
            </Form.Item>
          </Col>{" "}
          <Col
            span={4}
            style={{
              display: "flex",
              alignItems: "center",
              alignContent: "flex-end",
            }}
          >
            <div
              style={{
                gap: "15px",
                display: "flex",
                alignItems: "flex-end",
                alignContent: "flex-end",
              }}
            >
              <HiOutlineTrash size={24} />
              <HiInformationCircle size={24} />
            </div>
          </Col>
        </Row>
        <Row gutter={12} style={{ marginBottom: "16px" }}>
          <Col span={20}>
            {" "}
            <h1>Danh sách Báo giá</h1>
          </Col>
          <Col span={4}>
            <Button icon={<FiPlus />}>Thêm mới</Button>
          </Col>
        </Row>
        <Table columns={columns1} dataSource={data} />
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
      </Form>
    </>
  );
};
export default AdditionalInformation;
