import React from 'react';
import ModalComponent from './Modal';
import { getStatus, postStatus } from '../../api/FireStore';
import { useState, useMemo } from 'react';
import PostCard from './PostCard';
const PostStatus = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState('');
  const [allStatus, setAllStatus] = useState([]);
  const sendStatus = async () => {
    await postStatus(status);
    await setModalOpen(false);
    await setStatus(" ");
  };
  useMemo(() => {
    getStatus(setAllStatus);
  }, []);
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
      <ModalComponent
        setStatus={setStatus}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        status={status}
        value={status}
        sendStatus={sendStatus}
      />
      <div className=" mt-2 flex items-center justify-center spacein">
        <div className="">
          {allStatus.map((posts) => {
            return (
             <PostCard posts={posts}/>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PostStatus;

