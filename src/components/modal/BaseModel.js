import { Modal } from "antd";
import { Button } from "antd/es/radio";

const BaseModal = ({ title, children, setVisible, visible }) => {
  return (
    <Modal
      title={<h2>{title}</h2>}
      closeIcon={
        <div style={{ display: "flex", gap: "5px" }}>
          <Button>Hủy </Button>
          <Button>Thêm </Button>
        </div>
      }
      open={visible}
      onCancel={() => {
        setVisible(false);
      }}
    >
      {children}
    </Modal>
  );
};
export default BaseModal;
