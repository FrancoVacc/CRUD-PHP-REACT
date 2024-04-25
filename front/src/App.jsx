import { useState } from "react";
import AddBtn from "./components/AddBtn";
import MostrarPersonas from "./components/MostrarPersonas";
import Modal from "./components/Modal";
import ModalModificar from "./components/ModalModificar";

function App() {
  const [modal, setModal] = useState(false);
  const [modalModi, setModalModi] = useState(false);
  const [idModi, setIdModi] = useState("");
  const [actualiza, setActualiza] = useState("");

  return (
    <>
      <div className=" flex pt-10">
        <div className=" m-auto p-10 rounded-xl bg-slate-200">
          <AddBtn setModal={setModal} />
          {modal && <Modal setModal={setModal} setActualiza={setActualiza} />}
          {modalModi && (
            <ModalModificar
              setModalModi={setModalModi}
              setActualiza={setActualiza}
              idModi={idModi}
              setIdModi={setIdModi}
            />
          )}

          <p className=" py-5 px-10 text-2xl text-green-600 text-center">
            CRUD REACT - PHP
          </p>
          <div className="flex bg-slate-50">
            <MostrarPersonas
              actualiza={actualiza}
              setActualiza={setActualiza}
              setModalModi={setModalModi}
              setIdModi={setIdModi}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
