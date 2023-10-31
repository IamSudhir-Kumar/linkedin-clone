import React, {useMemo} from 'react'
import HomePageComponent from '../components/HomePageComponent'
import { getUserName } from '../api/FireStore'
import Navbar from '../Components/Common/Navbar'
export default function HomeLayout() {
  useMemo(() => {
    getUserName;
  }, []);
  return (
    <div className="bg-gray-300">
    <Navbar />
    <HomePageComponent />
    </div>
  )
}
