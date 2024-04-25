import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin7Line } from "react-icons/ri";

const TableRow = ({ item, setModalModi, hanldeDelete, setIdModi }) => {
  const abrirModalModi = (id) => {
    setModalModi(true);
    setIdModi(id);
  };

  return (
    <tr className="odd:bg-white  even:bg-gray-50" key={item.id}>
      <td
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        {item.id}
      </td>
      <td className="px-6 py-4">{item.nombre}</td>
      <td className="px-6 py-4">{item.apellido}</td>
      <td className="px-6 py-4">{item.telefono}</td>
      <td className="px-6 py-4">{item.direccion}</td>
      <td className="px-6 py-4">
        <button
          type="button"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={() => {
            abrirModalModi(item.id);
          }}
        >
          <FaRegEdit />
        </button>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={() => {
            hanldeDelete(item.id);
          }}
        >
          <RiDeleteBin7Line />
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
