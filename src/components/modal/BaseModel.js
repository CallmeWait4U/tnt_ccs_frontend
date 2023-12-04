import { Modal } from "antd";
import { Button } from "antd/es/radio";
import styled from "styled-components";

const BaseModal = ({ title, children, setVisible, visible }) => {
  return (
    <StyledModal
      title={
        <div
          style={{ display: "flex", gap: "5px", alignContent: "space-between" }}
        >
          {" "}
          <div style={{ width: "80%" }}>
            <h2>{title}</h2>
          </div>
          <div style={{ display: "flex", gap: "5px" }}>
            <Button onClick={setVisible(false)}>Hủy </Button>
            <Button style={{ background: "#F58220" }}>Thêm </Button>
          </div>
        </div>
      }
      closeIcon={<></>}
      open={visible}
      onCancel={() => {
        setVisible(false);
      }}
      footer={<></>}
    >
      {children}
    </StyledModal>
  );
};
const StyledModal = styled(Modal)`
  width: 800px !important;
`;
export default BaseModal;
