import { Input } from "antd";
import { Form, Card, Row, Col } from "antd";

const AdditionalInformation = () => {
  return (
    <>
      <Card>
        <Form>
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
        </Form>
      </Card>
    </>
  );
};
export default AdditionalInformation;
