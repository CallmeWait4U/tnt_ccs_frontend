import { Col, Form, Row } from "antd";
import BaseModal from "../../../components/modal/BaseModel";
import { Input } from "antd";
import { useState } from "react";

const QuoteForm = ({ visible, setVisible }) => {
  return (
    <BaseModal visible={visible} setVisible={setVisible} title={"Thêm báo giá"}>
      <Form layout="vertical">
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item label={"Mã Báo giá"}>
              <Input />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </BaseModal>
  );
};
export default QuoteForm;
