import React, { useEffect, useState } from "react";
import TableRow from "./TableRow";
import Swal from "sweetalert2";

const MostrarPersonas = ({
  actualiza,
  setActualiza,
  setModalModi,
  setIdModi,
}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          "http://localhost/crud_react/api/controller/getPersonas.php"
        );

        if (!res.ok) {
          throw new Error("404 Error en el la carga de los datos");
        }

        const json = await res.json();
        setData(json);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [actualiza]);

  const borrarRegistro = async (send) => {
    try {
      const res = await fetch(
        "http://localhost/crud_react/api/controller/eliminarPersona.php",
        {
          method: "DELETE",
          body: JSON.stringify(send),
        }
      );

      if (!res.ok) {
        throw new Error();
      }

      setActualiza(Date.now);
    } catch (error) {
      console.log(error);
    }
  };

  const hanldeDelete = async (id) => {
    if (id || id != "") {
      const send = { id: id };
      console.log(send);

      Swal.fire({
        title: "Seguro que deseas eliminar este registro?",
        text: "Una vez eliminado no hay vuelta atras",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          borrarRegistro(send);
        }
      });
    }
  };

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right">
          <thead className="text-xs text-gray-900 uppercase bg-gray-500">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Nombre
              </th>
              <th scope="col" className="px-6 py-3">
                Apellido
              </th>
              <th scope="col" className="px-6 py-3">
                Telefono
              </th>
              <th scope="col" className="px-6 py-3">
                Direccion
              </th>
              <th scope="col" className="px-6 py-3">
                Acciónes
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <TableRow
                key={item.id}
                item={item}
                setModalModi={setModalModi}
                hanldeDelete={hanldeDelete}
                setIdModi={setIdModi}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MostrarPersonas;
