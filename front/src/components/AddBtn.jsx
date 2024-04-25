import React from "react";
import { IoMdAdd } from "react-icons/io";

const AddBtn = ({ setModal }) => {
  const handleClick = () => {
    setModal(true);
  };
  return (
    <div className=" absolute top-20 right-20">
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-xl px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={handleClick}
      >
        <IoMdAdd />
      </button>
    </div>
  );
};

export default AddBtn;
