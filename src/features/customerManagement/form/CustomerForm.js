import { useEffect, useState } from "react";
import { Button, Input, Table } from "antd";
import { Select } from "antd";
import { Form } from "antd";
import { Card, Col, Row, Tabs, theme } from "antd";
import {
  StyledDatepicker,
  StyledSelect,
} from "../../component/ComponentOfForm";
import { FiPlus, FiTrash } from "react-icons/fi";

const CustomerForm = () => {
  const [typeCustomer, setTypeCustomer] = useState(1);
  const [tableData, setTableData] = useState([
    {
      index: 1,
      name: "Lê Huy Ngọ",
      code: "SP-001",
    },
    {
      index: 2,
      name: "Lê Huy Ngọ",
      code: "SP-001",
    },
  ]);

  const addRow = () => {
    const maxIndex = tableData.reduce(
      (max, item) => (item.index > max ? item.index : max),
      0
    );
    const newItem = {
      index: maxIndex + 1,
      name: "",
      code: "",
    };

    setTableData([...tableData, newItem]);
    console.log("table", tableData);
  };

  const columns = [
    {
      title: "Tên Nhân viên",
      dataIndex: "name",
      key: "name",
      width: "30%",
      render: (item, record, index) => (
        <StyledSelect
          defaultValue={item}
          onChange={(e) => handleCellChange(index, "name", e.target.value)}
        />
      ),
    },
    {
      title: "Mã Nhân viên",
      dataIndex: "code",
      key: "code",
      width: "15%",
      render: (item, record, index) => (
        <Input
          defaultValue={item}
          onChange={(e) => handleCellChange(index, "code", e.target.value)}
        />
      ),
    },

    {
      title: "Action",
      width: "7%",
      render: (item) => (
        <Button
          type="link"
          icon={<FiTrash size={24} />}
          onClick={() => handleDeleteRow(item.index)}
        />
      ),
    },
  ];

  const handleCellChange = (index, field, value) => {
    const updatedTableData = [...tableData];
    updatedTableData[index][field] = value;
    setTableData(updatedTableData);
  };
  const handleDeleteRow = (index) => {
    const updatedData = tableData.filter((item) => item.index !== index);
    setTableData(updatedData);
    console.log("table", tableData);
  };

  return (
    <>
      <Row style={{ margin: "10px 0 ", paddingLeft: "10px" }}>
        <h3>Quản lý khách hàng &gt; Thêm khách hàng mới</h3>
      </Row>

      <Card title={"Thông tin chi tiết"}>
        <Form>
          <Row gutter={[16, 16]}>
            <Col xl={24} xxl={12}>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    label={"Loại khách hàng"}
                    rules={[
                      {
                        require: true,
                        message: "this field is required!",
                      },
                    ]}
                  >
                    <StyledSelect
                      value={typeCustomer}
                      onChange={setTypeCustomer}
                      options={[
                        { value: 1, label: "Công ty" },
                        { value: 2, label: "Cá nhân" },
                      ]}
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  {" "}
                  <Form.Item
                    label={"Giai đoạn"}
                    rules={[
                      {
                        require: true,
                        message: "this field is required!",
                      },
                    ]}
                  >
                    <StyledSelect />
                  </Form.Item>
                </Col>
              </Row>
            </Col>

            <Col xl={24} xxl={12}>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    label={"Nguồn khách hàng"}
                    rules={[
                      {
                        require: true,
                        message: "this field is required!",
                      },
                    ]}
                  >
                    <StyledSelect
                      value={typeCustomer}
                      onChange={setTypeCustomer}
                      options={[
                        { value: 1, label: "Công ty" },
                        { value: 2, label: "Cá nhân" },
                      ]}
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  {" "}
                  <Form.Item
                    label={"Ngày tạo"}
                    rules={[
                      {
                        require: true,
                        message: "this field is required!",
                      },
                    ]}
                  >
                    <StyledDatepicker />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
        <Row gutter={16}>
          <Col span={12}>
            <Card title="Thông tin chung của khách hàng">
              <Form layout="vertical">
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item label={"Tên khách hàng"}>
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label={"Giới tính"}>
                      <StyledSelect />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item label={"Ngày sinh"}>
                      <StyledDatepicker />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label={"CCCD"}>
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item label={"Quốc tịch"}>
                      <StyledSelect />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label={"Ghi chú"}>
                      <Input.TextArea />
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </Card>
          </Col>
          <Col span={12} gutter={16}>
            <Card title="Thông tin liên lạc của khách hàng">
              <Form layout="vertical">
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item label={"Số điện thoại"}>
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label={"Email"}>
                      <StyledSelect />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={8}>
                    <Form.Item label={"Địa chỉ"}>
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item label={" "}>
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item label={" "}>
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </Card>
            <Card title="Nhân viên phụ trách" style={{ marginTop: "16px" }}>
              <Table
                columns={columns}
                dataSource={tableData}
                pagination={false}
              />
              <Button type="dashed" onClick={addRow} block icon={<FiPlus />}>
                Thêm sản phẩm
              </Button>
            </Card>
          </Col>
        </Row>
      </Card>
    </>
  );
};
export default CustomerForm;