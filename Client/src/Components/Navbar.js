import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../Redux/Reducers/registerReducer.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  // const style = {
  //   position: "bottom-center",
  //   theme: "dark",
  // };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const registerinfo = useSelector((state) => state.register.value);
  const logout = () => {
    dispatch(
      register({
        username: "",
        email: "",
        password: "",
        cpassword: "",
        otp: "",
        role: "",
        islogin: "off",
        token: "",
      })
    );
    window.localStorage.clear();
    navigate("/");
  };
  // const handlelogin = () => {
  //   plslogin();
  // };
  // const plslogin = () =>
  //   toast.error("To excess this page please Login to your Account", style);

  if (registerinfo.islogin === "off") {
    return (
      <header className="text-gray-400 bg-gray-900 body-font ">
        <ToastContainer />
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            to="/"
            className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Edusakha</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-lg justify-center">
            <Link to="/" className="mr-5 hover:text-white">
              Home
            </Link>
            <Link to="/universityregister" className="mr-5 hover:text-white">
              Register as University
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
            >
              Login
            </Link>
          </nav>
        </div>
      </header>
    );
  } else if (registerinfo.role === "student") {
    return (
      <header className="text-gray-400 bg-gray-900 body-font ">
        <ToastContainer />
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            to="/"
            className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Edusakha</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-lg justify-center">
            <Link to="/" className="mr-5 hover:text-white">
              Home
            </Link>
            <Link to="/explore" className="mr-5 hover:text-white">
              Explore Events
            </Link>
            <Link
              to="/"
              className="text-black inline-flex items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded mt-4 md:mt-0"
            >
              {registerinfo.username}
            </Link>
            <button
              onClick={logout}
              className="text-black mx-1 inline-flex items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded mt-4 md:mt-0"
            >
              Log Out
            </button>
          </nav>
        </div>
      </header>
    );
  } else {
    return (
      <header className="text-gray-400 bg-gray-900 body-font ">
        <ToastContainer />
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            to="/"
            className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Edusakha</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-lg justify-center">
            <Link to="/" className="mr-5 hover:text-white">
              Home
            </Link>
            <Link to="/createEvent" className="mr-5 hover:text-white">
              Create Event
            </Link>
            <Link className="mr-5 hover:text-white">Manage Event</Link>
            <Link
              to="/"
              className="text-black inline-flex items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded mt-4 md:mt-0"
            >
              {registerinfo.username}
            </Link>
            <button
              onClick={logout}
              className="text-black mx-1 inline-flex items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded mt-4 md:mt-0"
            >
              Log Out
            </button>
          </nav>
        </div>
      </header>
    );
  }
};

export default Navbar;
