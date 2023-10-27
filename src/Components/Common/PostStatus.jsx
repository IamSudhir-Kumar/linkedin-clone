import React from 'react';
import ModalComponent from './Modal';
import { useState } from 'react';
const PostStatus = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="bg-white mt-3  shadow-md rounded-md w-full h-32 max-w-xl max-h-64 border-2 border-gray-200 flex justify-center items-center">
          <button className=' bg-white hover:bg-gray-100 border
           border-gray-300 text-gray-400 w-10/12 rounded-full h-14 
           text-left pl-3 overflow-hidden mb-10  font-semibold font-Assistant'
           onClick={() => setModalOpen(true)}>Start a post</button>
        </div>
      </div>
      <ModalComponent modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
};

export default PostStatus;
