import { Modal } from "antd";

const PreviewModal = ({ showModal, setShowModal, preview }) => {
  return (
    <div>
      <Modal
        open={showModal}
        onCancel={() => setShowModal(!showModal)}
        width={720}
        footer={null}
      >
        <div className="wrapper">
          <video autoPlay loop controls className="w-100 h-100">
            <source src={preview} />
          </video>
        </div>
      </Modal>
    </div>
  );
};

export default PreviewModal;
