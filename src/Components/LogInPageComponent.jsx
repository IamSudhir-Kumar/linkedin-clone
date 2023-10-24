import { LogInAPI, GoogleSignInAPI } from "../api/AuthApi"
import loginBg from "../assets/loginBg.jpg"
import { useState } from "react";
import GoogleButton from 'react-google-button'
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
export default function LogInPageComponent() {
  let navigate = useNavigate();
  const backgroundImageUrl = loginBg;
  const [credentails, setCredentails] = useState({})
  const login = async () => {
    try {
      let res = await LogInAPI(credentails.email, credentails.password)
      toast.success("Login Successfull");
      navigate('/home')
    } catch (err) {
      console.log(err);
      toast.error("Login Failed");
    }
  };

  const googleSignin = () => {
    let response = GoogleSignInAPI();
    navigate('/home');
  }

  return (
    <>
      <section className="bg-gray-50"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh"
        }}>

        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img className="w-15 h-10 mr-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png" alt="logo" />
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <p className="text-white font-thin)">Stay updated on your professional world</p>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                  <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" onChange={(event) => setCredentails({ ...credentails, email: event.target.value })} />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={(event) => setCredentails({ ...credentails, password: event.target.value })} />
                </div>
                <div className="flex items-center justify-between">
                  {/* <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                    </div>
                    <div className="ml-3 text-sm">
                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                  </div> */}
                  <a href="#" className="text-sm font-medium text-white hover:underline dark:text-primary-500">Forgot password?</a>
                </div>
                <button type="button" className="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={login}>Log In</button>

                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet? <a href="" className="font-medium text-primary-600 hover:underline dark:text-primary-500" onClick={() => navigate('/register')}>Sign up</a>
                </p>
              </form>
              <div id="google-button">
                <GoogleButton 
                  onClick={googleSignin}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
