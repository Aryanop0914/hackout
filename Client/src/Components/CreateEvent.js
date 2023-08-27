import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateEvent = () => {
  const style = {
    position: "bottom-center",
    backgroundColor: "rgb(17 24 39)",
    theme: "dark",
  };
  const [title, setTitle] = useState(" ");
  const [type, setType] = useState(" ");
  const [description, setDescription] = useState(" ");
  const [date, setDate] = useState(" ");
  const [time, setTime] = useState(" ");
  const [sponsors, setSponsors] = useState(" ");
  const [speaker, setSpeaker] = useState(" ");
  const register = useSelector((state) => state.register.value);
  const { email } = register;
  const handlesubmit = () => {
    fetch("https://edusakha.onrender.com/createevent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        title,
        type,
        description,
        date,
        time,
        sponsors,
        speaker,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        added();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const added = () => toast.success("Event Created Succesfully", style);
  return (
    <section className="text-gray-400 bg-gray-900 min-h-screen body-font">
      <ToastContainer />
      <div className="flex flex-col text-center w-full mb-4">
        <h1 className="sm:text-3xl text-4xl font-medium title-font text-white mb-1">
          Create Event
        </h1>
        <h2 className="text-xl text-indigo-400 tracking-widest mt-10 font-medium title-font">
          Add details releted to your Event
        </h2>
      </div>
      <div className="flex flex-wrap mx-auto pt-10 mb-6 ">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-indigo-400 text-sm font-bold mb-2"
            htmlFor="grid-first-name"
          >
            Title:
          </label>
          <input
            className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            id="grid-first-name"
            type="text"
            placeholder="Enter The Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-indigo-400 text-sm font-bold mb-2"
            htmlFor="grid-last-name"
          >
            Type/Theme:
          </label>
          <input
            className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            id="grid-last-name"
            type="text"
            placeholder="Enter Your Theme"
            onChange={(e) => setType(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap mx-auto mb-6">
        <div className="w-full md:w-3/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-indigo-400 text-sm font-bold mb-2"
            htmlFor="grid-password"
          >
            Description:
          </label>
          <input
            className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-outappearance-none"
            id="grid-password"
            type="text"
            placeholder="Enter Some Description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap mx-auto mb-2">
        <div className="w-full md:w-2/4 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-indigo-400 text-sm font-bold mb-2"
            htmlFor="grid-first-name"
          >
            Date:
          </label>
          <input
            className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
            id="grid-first-name"
            type="date"
            placeholder="Enter The Date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="w-full md:w-2/4 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-indigo-400 text-sm font-bold mb-2"
            htmlFor="grid-city"
          >
            Time
          </label>
          <input
            className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            id="grid-city"
            type="time"
            placeholder="Enter The Time"
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap mx-auto mb-2">
        <div className="w-full md:w-2/4 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-indigo-400 text-sm font-bold mb-2"
            htmlFor="grid-state"
          >
            Sponsors
          </label>
          <div className="relative">
            <input
              className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              id="grid-state"
              type="text"
              placeholder="Enter Sponsors"
              onChange={(e) => setSponsors(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full md:w-2/4 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-indigo-400 text-sm font-bold mb-2"
            htmlFor="grid-zip"
          >
            Speaker:
          </label>
          <input
            className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            id="grid-zip"
            type="text"
            placeholder="Enter Speaker's Name"
            onChange={(e) => setSpeaker(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap mx-auto mt-10 mb-2">
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

export default CreateEvent;
