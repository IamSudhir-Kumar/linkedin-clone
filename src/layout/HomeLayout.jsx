import React from 'react'
import HomePageComponent from '../components/HomePageComponent'
import Navbar from '../Components/Common/Navbar'
export default function HomeLayout() {
  return (
    <div className="bg-gray-300">
    <Navbar />
    <HomePageComponent />
    </div>
  )
}
