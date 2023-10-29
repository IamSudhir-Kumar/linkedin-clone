import React from 'react'
// import './PostCard.scss'

export default function PostCard({ posts }) {
    return (
        <div className="max-w-auto h-32 bg-white mt-3 mb-5 border-2 border-gray-300 rounded-lg flex flex-col">
  <p className="text-left mt-10 ml-10 mr-10 text-base font-normal text-opacity-90 text-black overflow-hidden whitespace-nowrap">
    {posts.status}
  </p>
</div>


    )
}
