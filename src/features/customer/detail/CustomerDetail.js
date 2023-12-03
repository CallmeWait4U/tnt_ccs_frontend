import { Input } from "antd";
import { Select } from "antd";
import { DatePicker } from "antd";
import { Flex } from "antd";
import { Carousel } from "antd";
import { message } from "antd";
import { Form } from "antd";
import { Card, Col, Collapse, Row, Tabs, theme } from "antd";
import AdditionalInformation from "../moreData/AdditionalInformation";

const CustomerDetail = () => {
  const items = [
    {
      label: "Thông tin bổ sung",
      key: "1",
      children: <AdditionalInformation />,
    },
    {
      label: "Hoạt động",
      key: "2",
      children: `Content of Tab Pane`,
    },
    {
      label: "Gửi tin nhắn",
      key: "3",
      children: `Content of Tab Pane`,
    },
  ];
  //   const items = new Array(3).fill(null).map((_, i) => {
  //     const id = String(i + 1);
  //     return {
  //       label: `Tab ${id}`,
  //       key: id,
  //       children: `Content of Tab Pane ${id}`,
  //       style: i === 0 ? { height: 200 } : undefined,
  //     };
  //   });
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Row gutter={16} style={{ minWidth: "1000px" }}>
      <Col span={14}>
        <Card title={"Thông tin chi tiết"}>
          <Form>
            <>
              <Flex wrap="wrap" gap="small">
                <Col span={8}>
                  <Form.Item
                    label={"Loại khách hàng"}
                    rules={[
                      {
                        require: true,
                        message: "this field is required!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={8}>
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
                    <Select />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  {" "}
                  <Form.Item
                    label={"Mã khách hàng"}
                    rules={[
                      {
                        require: true,
                        message: "this field is required!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Flex>

              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label={"Tên công ty"}>
                    <Select />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label={"Ngày tạo"}>
                    <DatePicker />
                  </Form.Item>
                </Col>
              </Row>
            </>
          </Form>
          <Row>
            <Card>
              <Form layout="vertical">
                <Row gutter={16}>
                  <Col span={8}>
                    <Form.Item
                      label={"Mã số thuế"}
                      rules={[
                        {
                          require: true,
                          message: "this field is required!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    {" "}
                    <Form.Item
                      label={"Số ĐKKD"}
                      rules={[
                        {
                          require: true,
                          message: "this field is required!",
                        },
                      ]}
                    >
                      <Select />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    {" "}
                    <Form.Item
                      label={"Quốc gia"}
                      rules={[
                        {
                          require: true,
                          message: "this field is required!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={8}>
                    <Form.Item
                      label={"Lĩnh vực kinh doang"}
                      rules={[
                        {
                          require: true,
                          message: "this field is required!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
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
                      <Select />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    {" "}
                    <Form.Item
                      label={"Mã khách hàng"}
                      rules={[
                        {
                          require: true,
                          message: "this field is required!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={8}>
                    <Form.Item
                      label={"Loại khách hàng"}
                      rules={[
                        {
                          require: true,
                          message: "this field is required!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
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
                      <Select />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    {" "}
                    <Form.Item
                      label={"Mã khách hàng"}
                      rules={[
                        {
                          require: true,
                          message: "this field is required!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </Card>
          </Row>
        </Card>
      </Col>
      <Col span={10}>
        <Tabs
          defaultActiveKey="1"
          items={items}
          style={{
            background: "#ffffff",
            padding: "5px",
            borderRadius: "10px",
          }}
        />
      </Col>
    </Row>
  );
};
export default CustomerDetail;
