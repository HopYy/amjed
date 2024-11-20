import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaFingerprint,
  FaGoogle,
  FaFacebook,
  FaCheckCircle,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  // NOTES: your regex is not checking good, it always returns false for password but for email always true

  const PWD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const navigate = useNavigate()

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState({
    nameMessage: "",
    emailMessage: "",
    passwordMessage: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setRegisterData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailValid = EMAIL_REGEX.test(registerData.email);
    const passwordValid = PWD_REGEX.test(registerData.password);


    setMessage({
      nameMessage: registerData.name !== "" ? "Name is valid" : "You must provide your name",
      emailMessage: emailValid ? "Email is valid" : "Invalid email format",
      passwordMessage: passwordValid
        ? "Password is valid"
        : "Password must contain at least one uppercase letter, one lowercase letter, one number, and be 8-24 characters long",
    });

    if(registerData.name !== "" && emailValid && passwordValid) {
      navigate("/login")
    }  
  };

  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative flex items-end px-4 pb-10 pt-60 sm:pb-16 md:justify-center lg:pb-24 bg-gray-50 sm:px-6 lg:px-8">
          <div className="absolute inset-0">
            <img
              className="object-cover w-full h-full"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/signup/4/girl-working-on-laptop.jpg"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          <div className="relative">
            <div className="w-full max-w-xl xl:w-full xl:mx-auto xl:pr-24 xl:max-w-xl">
              <h3 className="text-4xl font-bold text-white">
                Join 35k+ web professionals & <br className="hidden xl:block" />
                build your website
              </h3>
              <ul className="grid grid-cols-1 mt-10 sm:grid-cols-2 gap-x-8 gap-y-4">
                <li className="flex items-center space-x-3">
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                    <FaCheckCircle />
                  </div>
                  <span className="text-lg font-medium text-white">
                    Commercial License
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                    <FaCheckCircle />
                  </div>
                  <span className="text-lg font-medium text-white">
                    Unlimited Exports
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                    <FaCheckCircle />
                  </div>
                  <span className="text-lg font-medium text-white">
                    120+ Coded Blocks
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                    <FaCheckCircle />
                  </div>
                  <span className="text-lg font-medium text-white">
                    Design Files Included
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
          <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
              Sign up to Celebration
            </h2>
            <p className="mt-2 text-base text-gray-600">
              Already have an account?
              <Link
                to="/Login"
                className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
              >
                Login
              </Link>
            </p>
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="username"
                    className="text-base font-medium text-gray-900"
                  >
                    First & Last name
                  </label>
                  <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <FaUser className="w-5 h-5" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter your full name"
                      onChange={handleChange}
                      value={registerData.name}
                      className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                    />
                  </div>
                </div>
                <p
                  style={{
                    color: message.nameMessage.includes("valid") ? "green" : "red",
                  }}
                >
                  {message.nameMessage}
                </p>
                <div>
                  <label
                    htmlFor="email"
                    className="text-base font-medium text-gray-900"
                    id="email"
                    value={registerData.email}
                    onChange={handleChange}
                  >
                    Email address
                  </label>
                  <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <FaEnvelope className="w-5 h-5" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      onChange={handleChange}
                      placeholder="Enter email to get started"
                      className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
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
                  <label
                    htmlFor="password"
                    className="text-base font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <FaFingerprint className="w-5 h-5" />
                    </div>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={registerData.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                    />
                  </div>
                </div>
                <p
                  style={{
                    color: message.passwordMessage.includes("valid") ? "green" : "red",
                  }}
                >
                  {message.passwordMessage}
                </p>
                <div>
                  {/* NOTES: you can't use links on submit buttons because then handleSubmit function doesn't even run */}
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 focus:outline-none hover:opacity-80 focus:opacity-80"
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </form>
            <div className="mt-3 space-y-3">
              <button
                type="button"
                className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
              >
                <div className="absolute inset-y-0 left-0 p-4">
                  <FaGoogle className="w-6 h-6 text-rose-500" />
                </div>
                Sign up with Google
              </button>
              <button
                type="button"
                className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
              >
                <div className="absolute inset-y-0 left-0 p-4">
                  <FaFacebook className="w-6 h-6 text-blue-600" />
                </div>
                Sign up with Facebook
              </button>
            </div>
            <p className="mt-5 text-sm text-gray-600">
              This site is protected by reCAPTCHA and the Google
              <Link
                href="#"
                title=""
                className="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700"
              >
                Privacy Policy
              </Link>
              &
              <Link
                href="#"
                title=""
                className="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700"
              >
                Terms of Service
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
