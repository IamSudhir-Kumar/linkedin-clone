import { Modal } from 'antd';
const ModalComponent = ({ modalOpen, setModalOpen }) => {
  return (
    <>
      <Modal
        title="Create a post"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
      >
        <input
          className="bg-white border border-gray-300 text-gray-900 text-md rounded-lg focus:border-blue-500 block w-full p-2.5 h-12"
          placeholder="name@flowbite.com"
        ></input>

      </Modal>
    </>
  );
};
export default ModalComponent;