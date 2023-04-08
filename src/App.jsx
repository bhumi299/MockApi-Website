import React, { useState } from "react";
// import MyModal from "./MyModal";
import Form from "./components/Form/Form";
import CardView from "components/Card/CardView";
import { HiPencilAlt } from "react-icons/hi";
import { MdCreateNewFolder, MdDeleteForever } from "react-icons/md";

export default function App() {
  const [showMyModal, setShowMyModel] = useState(false);
  const handleOnClose = () => setShowMyModel(false);

  return (
    <div>
      <div className=" bg-opacity-30">
        <div className="max-w-xl">
          <div className=" text-left py-3 pl-10">
            <button
              onClick={() => setShowMyModel(true)}
              className="bg-purple-400 m-2 text-white px-3 py-2 rounded hover:scale-95 transition text-xl"
            >
              <MdCreateNewFolder />
            </button>
            <button className="bg-purple-400 m-2 text-white px-3 py-2 rounded hover:scale-95 transition text-xl">
              <HiPencilAlt />
            </button>
            <button className="bg-purple-400 m-2 text-white px-3 py-2 rounded hover:scale-95 transition text-xl">
              <MdDeleteForever />
            </button>
          </div>
        </div>
        <div>
          <CardView />
          <Form onClose={handleOnClose} visible={showMyModal} />
        </div>
      </div>
    </div>
  );
}
