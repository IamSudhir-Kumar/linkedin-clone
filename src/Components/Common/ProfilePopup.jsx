import React from 'react'
import { LogOutAPI } from '../../api/AuthApi'
export default function ProfilePopup() {
    return (
        <div className="border border-gray-300 w-48 bg-whitesmoke rounded-md flex flex-col justify-center p-5">
            <ul className="cursor-pointer">
                <li className="cursor-pointer" onClick={LogOutAPI}>
                    Logout
                </li>
            </ul>
        </div>
    )
}
