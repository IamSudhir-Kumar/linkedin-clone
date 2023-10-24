import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterBg from '../assets/RegisterBg.jpg';
import { RegisterAPI } from '../api/AuthApi';
import { toast } from 'react-toastify';
const backgroundImageUrl = RegisterBg
const RegisterPageComponent = () => {
  const navigate = useNavigate();
  const [credentails, setCredentails] = useState({})
  const register = async () => {
    try {
      let res = await RegisterAPI(credentails.email, credentails.password)
      toast.success("Registered Successfull");
      navigate('/home')
    } catch (err) {
      console.log(err);
      toast.error("Registered Failed");
    }
  }
  return (

    <section
      className="bg-gray-50"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img className="w-15 h-10 mr-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png" alt="logo" />
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h2 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Fostering Professional Growth
              </h2>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                  <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" onChange={(event) => setCredentails({ ...credentails, email: event.target.value })} />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={(event) => setCredentails({ ...credentails, password: event.target.value })} />
                </div>
                <button type="button" className="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={register}>Sign up & Join</button>

                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  If you already have an account then,<a href="" className="font-medium text-primary-600 hover:underline dark:text-primary-500" onClick={() => navigate('/')}>Log In Here</a>
                </p>
              </form>
            </div>
          </div>
        </div>
    </section>
  );
};

export default RegisterPageComponent;
