import React, { useEffect, useState } from "react";
import Modal from "./Modal";



function EditComponent({ span, data, type, setFormData }: EditStateProps) {
  const [isModalOpen, setIsmodalOpen] = useState(false);
  const [inputData, setInputData] = useState(data.input);

  const openModal = () => {
    setIsmodalOpen(true);
  };
  const closeModal = () => {
    setIsmodalOpen(false);
  };
  const handleChangeData = (e: string) => {
    setInputData(e);
    if (setFormData) {
      setFormData(e);
    }
  };
  return (
    <>
      <div
        className={`bg-neutral-700 sm:col-span-${span} col-span-6 rounded-lg p-3 relative`}
      >
        <button className="absolute m-4 top-0 left-0" onClick={openModal}>
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="#ffffff"
              d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
            />
          </svg>
        </button>
        <p className="text-sm text-neutral-400 text-end">{data.label}</p>
        <p className="text-lg text-white text-end">{inputData}</p>
      </div>
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        data={{
          label: data.label,
          input: inputData,
        }}
        type={type}
        setData={handleChangeData}
      />
    </>
  );
}

export default EditComponent;
