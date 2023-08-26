import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { register } from "../Redux/Reducers/registerReducer.js";
// import "react-toastify/dist/ReactToastify.css";

const UniversityRegister = () => {
  //   const style = {
  //     position: "bottom-center",
  //     backgroundColor: "rgb(17 24 39)",
  //     theme: "dark",
  //   };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [uniname, setUniname] = useState(" ");
  const [contact, setContact] = useState(" ");
  const [address, setAddress] = useState(" ");
  const [seats, setSeats] = useState(" ");
  const [city, setCity] = useState(" ");
  const [state, setState] = useState(" ");
  const [zip, setZip] = useState(" ");
  const [details, setDetails] = useState(" ");
  const [type, setUnitype] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const generateotp = () => {
    const otpLength = 6;
    let otp = "";

    for (let i = 0; i < otpLength; i++) {
      otp += Math.floor(Math.random() * 10);
    }

    return otp;
  };
  const otp = generateotp();
  const sendotp = () => {
    fetch("http://localhost:5000/otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        otp,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const handlesubmit = () => {
    console.log(
      uniname,
      contact,
      address,
      seats,
      city,
      state,
      zip,
      details,
      type,
      email
    );
    dispatch(
      register({
        username: uniname,
        email: email,
        password: password,
        cpassword: password,
        role: "university",
        otp: otp,
      })
    );
    fetch("http://localhost:5000/adduniversityinfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uniname,
        contact,
        address,
        seats,
        city,
        state,
        zip,
        details,
        type,
        email,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        sendotp();
        navigate("/verifyotp");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  //   const added = () =>
  //     toast.success("Shipping details Added Succesfully", style);
  return (
    <section className="text-gray-400 bg-gray-900 min-h-screen body-font">
      {/* <ToastContainer /> */}
      <div className="flex flex-col text-center w-full mb-4">
        <h1 className="sm:text-3xl text-4xl font-medium title-font text-white mb-1">
          Register Your University.
        </h1>
        <h2 className="text-xl text-indigo-400 tracking-widest mt-10 font-medium title-font">
          Add details and get perks to create Events
        </h2>
        <h3 className="text-xl text-indigo-400 tracking-widest mt-10 font-medium title-font">
          Use your university email id and this created password for login.
        </h3>
      </div>
      <div className="flex flex-wrap mx-auto pt-10 mb-6 ">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-indigo-400 text-sm font-bold mb-2"
            htmlFor="grid-first-name"
          >
            University
          </label>
          <input
            className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            id="grid-first-name"
            type="text"
            placeholder="Enter Your University Name"
            onChange={(e) => setUniname(e.target.value)}
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-indigo-400 text-sm font-bold mb-2"
            htmlFor="grid-last-name"
          >
            Email
          </label>
          <input
            className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            id="grid-last-name"
            type="text"
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap mx-auto mb-6">
        <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-indigo-400 text-sm font-bold mb-2"
            htmlFor="grid-password"
          >
            Address:
          </label>
          <input
            className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-outappearance-none"
            id="grid-password"
            type="text"
            placeholder="Enter Your Address"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-indigo-400 text-sm font-bold mb-2"
            htmlFor="grid-first-name"
          >
            Seats
          </label>
          <input
            className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
            id="grid-first-name"
            type="text"
            placeholder="Enter The Number of Seats"
            onChange={(e) => setSeats(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap mx-auto mb-2">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-indigo-400 text-sm font-bold mb-2"
            htmlFor="grid-city"
          >
            City
          </label>
          <input
            className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            id="grid-city"
            type="text"
            placeholder="Enter Your City"
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-indigo-400 text-sm font-bold mb-2"
            htmlFor="grid-state"
          >
            State
          </label>
          <div className="relative">
            <input
              className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              id="grid-state"
              type="text"
              placeholder="Enter Your State"
              onChange={(e) => setState(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-indigo-400 text-sm font-bold mb-2"
            htmlFor="grid-zip"
          >
            Zip
          </label>
          <input
            className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            id="grid-zip"
            type="text"
            placeholder="Enter Your Zip Code"
            onChange={(e) => setZip(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap mx-auto mb-6">
        <div className="w-full md:w-3/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-indigo-400 text-sm font-bold mb-2"
            htmlFor="grid-password"
          >
            Details:
          </label>
          <input
            className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-outappearance-none"
            id="grid-password"
            type="text"
            placeholder="Enter Details About University"
            onChange={(e) => setDetails(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap mx-auto mb-6">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-indigo-400 text-sm font-bold mb-2"
            htmlFor="grid-password"
          >
            Uni. Type:
          </label>
          <input
            className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-outappearance-none"
            id="grid-password"
            type="text"
            placeholder="Gov/ Private/ Semi Gov"
            onChange={(e) => setUnitype(e.target.value)}
          />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-indigo-400 text-sm font-bold mb-2"
            htmlFor="grid-password"
          >
            Contact
          </label>
          <input
            className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-outappearance-none"
            id="grid-last-name"
            type="text"
            placeholder="Enter Your Contact Number"
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-indigo-400 text-sm font-bold mb-2"
            htmlFor="grid-password"
          >
            Password
          </label>
          <input
            className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-outappearance-none"
            id="grid-last-name"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap mx-auto mt-10">
        <button
          className="flex text-white bg-indigo-500 mx-auto border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          onClick={handlesubmit}
        >
          Submit
        </button>
      </div>
    </section>
  );
};

export default UniversityRegister;
