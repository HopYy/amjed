import { useState } from "react";
import { FaEnvelope, FaFingerprint } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react"

import { AppContex } from "../contex/AppContex"

const Login = () => {
  const PWD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const { user, setUser } = useContext(AppContex)

  const navigate = useNavigate()

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState({
    emailMessage: "",
    passwordMessage: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailValid = EMAIL_REGEX.test(loginData.email);
    const passwordValid = PWD_REGEX.test(loginData.password);

    setMessage({
      emailMessage: emailValid ? "Email is valid" : "Invalid email format",
      passwordMessage: passwordValid
        ? "Password is valid"
        : "Password must contain at least one uppercase letter, one lowercase letter, one number, and be 8-24 characters long",
    });

    if(emailValid && passwordValid) {
      setUser({
        email: loginData.email,
        password: loginData.password
      })
      navigate("/control")
    }
  };

  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Welcome Back!
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Login to your account
          </p>
        </div>
        <div className="relative max-w-md mx-auto mt-8 md:mt-16">
          <div className="overflow-hidden bg-white rounded-md shadow-md">
            <div className="px-4 py-6 sm:px-8 sm:py-7">
              <form onSubmit={handleSubmit}>
                <div className="space-y-5">
                  <div>
                    <label htmlFor="email" className="text-base font-medium text-gray-900">
                      Email address
                    </label>
                    <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <FaEnvelope className="h-5 w-5" />
                      </div>

                      <input
                        type="email"
                        name=""
                        id="email"
                        value={loginData.email}
                        onChange={handleChange}
                        placeholder="Enter email to get started"
                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      />
                    </div>
                  </div>
                  <p
                    style={{
                      color: message.emailMessage.includes("valid") ? "green" : "red",
                    }}
                  >
                    {message.emailMessage}
                  </p>

                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="password" className="text-base font-medium text-gray-900">
                        Password
                      </label>
                      <Link
                        title=""
                        className="text-sm font-medium text-orange-500 transition-all duration-200 hover:text-orange-600 focus:text-orange-600 hover:underline"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <FaFingerprint className="h-5 w-5" />
                      </div>
                      <input
                        type="password"
                        name=""
                        id="password"
                        value={loginData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      />
                    </div>
                  </div>
                  <p
                    style={{
                      color: message.passwordMessage.includes("valid")
                        ? "green"
                        : "red",
                    }}
                  >
                    {message.passwordMessage}
                  </p>

                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                    >
                      Log in
                    </button>
                  </div>

                  <div className="text-center">
                    <p className="text-base text-gray-600">
                      Don’t have an account?
                      <Link
                        to="/Singin"
                        className="font-medium text-orange-500 transition-all duration-200 hover:text-orange-600 hover:underline"
                      >
                        Create a free account
                      </Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
