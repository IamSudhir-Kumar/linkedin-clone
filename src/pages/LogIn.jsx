import { useState } from 'react';
import HomePageComponent from '../Components/HomePageComponent';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../FireBaseConfig';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import LogInPageComponent from '../Components/LogInPageComponent';
import Loader from '../Components/Common/Loader';

export default function LogIn() {
  const [loading, setLoading] = useState(true); 
  let navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (res?.acessToken) {
        navigate("/home");
      } else {
        setLoading(false);
      }
    });
  }, []);
  return loading ? <Loader /> : <LogInPageComponent />;
}
