import { Button, Modal } from 'antd';
const ModalComponent = ({ 
  modalOpen, 
  setModalOpen, 
  setStatus,
  status,
  sendStatus
 }) => {
  return (
    <>
      <Modal
        title="Create a post"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        footer={[
          <Button 
          key="submit" 
          type="primary" 
          disabled={status.length > 0 ? false : true}
          onClick={sendStatus}
          >
            Post
          </Button>
        ]}
      >
        <input
          className="bg-white border border-gray-300 text-gray-900 text-md rounded-lg focus:border-blue-500 block w-full p-2.5 h-12"
          placeholder="What do you want to talk about?"
          onChange={(event) => setStatus(event.target.value)}
        ></input>

      </Modal>
    </>
  );
};
export default ModalComponent;