import React, { useState } from "react";
import { RiDeleteBin7Line } from "react-icons/ri";
import { FaRegSave } from "react-icons/fa";
import { schema } from "../validation/ValidacionFormulario";
import Swal from "sweetalert2";

const cargarPersona = async (formulario) => {
  try {
    const res = await fetch(
      "http://localhost/crud_react/api/controller/agregarPersona.php",
      {
        method: "POST",
        body: JSON.stringify(formulario),
      }
    );

    if (!res.ok) {
      throw new Error("error al cargar una persona");
    }

    const json = await res.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

const Formulario = ({ setModal, setActualiza }) => {
  const [formulario, setFormulario] = useState({
    nombre: "",
    apellido: "",
    direccion: "",
    telefono: "",
  });

  const borrarCampos = (e) => {
    e.preventDefault();
    setFormulario({
      nombre: "",
      apellido: "",
      telefono: "",
      direccion: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = await schema.isValid(formulario);

    if (!isValid) {
      console.log("error al cargar una persona");
      return;
    }

    await Swal.fire({
      title: "Nuevo registro",
      text: "Estas seguro de agregar este registro?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Agregado",
          text: "Tu registro ha sido agregado",
          icon: "success",
        });
        cargarPersona(formulario);
      }
    });

    setFormulario({
      nombre: "",
      apellido: "",
      direccion: "",
      telefono: "",
    });
    setActualiza(Date.now());
    setModal(false);
  };
  return (
    <form className="w-[50%] mx-auto" onSubmit={(e) => handleSubmit(e)}>
      <div className=" py-2 px-10 flex flex-col mt-2">
        <label htmlFor="nombre" className=" text-lg text-gray-800">
          Nombre
        </label>
        <input
          type="text"
          className=" text-lg px-5 py-2 mt-2 rounded-md"
          placeholder="Ingrese un nombre"
          name="nombre"
          id="nombre"
          value={formulario.nombre}
          onChange={(e) => {
            setFormulario({ ...formulario, nombre: e.target.value });
          }}
        />
      </div>
      <div className=" py-2 px-10 flex flex-col mt-2">
        <label htmlFor="apellido" className=" text-lg text-gray-800">
          Apellido
        </label>
        <input
          type="text"
          className=" text-lg px-5 py-2 mt-2 rounded-md"
          placeholder="Ingrese un apellido"
          name="apellido"
          id="apellido"
          value={formulario.apellido}
          onChange={(e) => {
            setFormulario({ ...formulario, apellido: e.target.value });
          }}
        />
      </div>
      <div className=" py-2 px-10 flex flex-col mt-2">
        <label htmlFor="telefono" className=" text-lg text-gray-800">
          Telefono
        </label>
        <input
          type="text"
          className=" text-lg px-5 py-2 mt-2 rounded-md"
          placeholder="Ingrese un telefono"
          name="telefono"
          id="telefono"
          value={formulario.telefono}
          onChange={(e) => {
            setFormulario({ ...formulario, telefono: e.target.value });
          }}
        />
      </div>
      <div className=" py-2 px-10 flex flex-col mt-2">
        <label htmlFor="direccion" className=" text-lg text-gray-800">
          Direccion
        </label>
        <input
          type="text"
          className=" text-lg px-5 py-2 mt-2 rounded-md"
          placeholder="Ingrese un direccion"
          name="direccion"
          id="direccion"
          value={formulario.direccion}
          onChange={(e) => {
            setFormulario({ ...formulario, direccion: e.target.value });
          }}
        />
      </div>
      <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
        <FaRegSave />
      </button>
      <button
        className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        onClick={(e) => {
          borrarCampos(e);
        }}
      >
        <RiDeleteBin7Line />
      </button>
    </form>
  );
};

export default Formulario;
