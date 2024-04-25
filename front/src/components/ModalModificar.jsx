import React from "react";
import { IoClose } from "react-icons/io5";
import FormularioModificar from "./FormularioModificar";

const Modal = ({ setModalModi, setActualiza, idModi, setIdModi }) => {
  const handleClick = () => {
    setModalModi(false);
  };
  return (
    <div className=" w-full h-full absolute top-0 left-0 bg-black bg-opacity-50 z-20 justify-center align-middle">
      <div className=" w-[50%] flex flex-col rounded-lg bg-slate-300 p-5 mx-auto my-10">
        <div className="w-full mx-auto flex justify-between">
          <p className=" text-xl text-gray-800 text-center">
            Modificar Persona
          </p>
          <button className=" p-2 " onClick={handleClick}>
            <IoClose />
          </button>
        </div>
        <hr className=" border-gray-500" />
        <FormularioModificar
          setModalModi={setModalModi}
          setActualiza={setActualiza}
          idModi={idModi}
          setIdModi={setIdModi}
        />
      </div>
    </div>
  );
};

export default Modal;
