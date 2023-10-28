import React from 'react'

export default function PostCard({ posts }) {
    return (
        // <div className="w-full"> {/*flex items-center justify-center*/}
            <div className="bg-blue-200  pr-44 p-22 m-7 shadow-md rounded-md  border-2 border-gray-200 ">
                <p className='flex h-32 w-full items-left items-center ' >{posts.status}</p>
            </div>
        // </div>
    )
}
