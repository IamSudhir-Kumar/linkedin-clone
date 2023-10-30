import React from 'react';

export default function PostCard({ posts }) {
  // Split the status into an array of sentences based on line length
  const status = posts.status;
  const maxLineLength = 80; 
  const sentences = [];
  let currentLine = '';

  for (const word of status.split(' ')) {
    if (currentLine.length + word.length <= maxLineLength) {
      currentLine += word + ' ';
    } else {
      sentences.push(currentLine);
      currentLine = word + ' ';
    }
  }

  if (currentLine) {
    sentences.push(currentLine);
  }

  return (
    <div className="max-w-auto  min-h-auto bg-white mt-3 mb-5 border-2 border-gray-300 rounded-lg text-ellipsis overflow-hidden">
      <p className="text-sm mt-3 ml-2 mr-2 text-gray-600 font-normal m-0">
        {posts.timeStamp}
      </p>
      <div className="m-2 mb-4 text-base font-normal text-opacity-90 text-black text-ellipsis overflow-hidden flex flex-col">
        {sentences.map((sentence, index) => (
          <p key={index}>{sentence.trim()}</p>
        ))}
      </div>
    </div>
  );
}
