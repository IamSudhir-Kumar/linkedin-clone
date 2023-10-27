
const Modal = ({ modalOpen, setModalOpen}) => {
  return (
    <div className="p-4 space-y-4">

      {modalOpen && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2">
          <div className="bg-white p-4 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-4">20px to Top</h2>
            <p>some contents...</p>
            <p>some contents...</p>
            <p>some contents...</p>
            <button
              onClick={() => setModalOpen(false)}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setModalOpen(true)}
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
      >
        Vertically centered modal dialog
      </button>

      {modalOpen && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-white p-4 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-4">Vertically centered modal dialog</h2>
            <p>some contents...</p>
            <p>some contents...</p>
            <p>some contents...</p>
            <button
              onClick={() => setModalOpen(false)}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
