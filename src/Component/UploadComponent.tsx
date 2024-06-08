import React, { useState } from "react";
import Modal from "./Modal";

type EditModal = {
  span: number;
  type: string;
  data: {
    label: string;
    input: string;
  };
};

function UploadComponent({ span, data, type }: EditModal) {
  const [isModal, setIsmodal] = useState(false);
  const openModal = () => {
    setIsmodal(true);
  };
  const closeModal = () => {
    setIsmodal(false);
  };
  return (
    <>
      <div
        className={`flex justify-center bg-gradient-to-r from-neutral-800 to-orange-400 bg-opacity-75 col-span-${span} rounded-lg p-3 border-2 border-dashed border-orange-700`}
      >
        <div className="flex">
          <div className="flex items-center pr-2">
            <p className="text-white">
              Click{" "}
              <span
                className="text-orange-300 cursor-pointer"
                onClick={openModal}
              >
                here
              </span>{" "}
              to add the license
            </p>
          </div>
          <button className="rounded-full p-4 bg-gradient-to-r from-neutral-800 to-orange-400 bg-opacity-75">
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                fill="#ffb770"
                d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z"
              />
            </svg>
          </button>
        </div>
      </div>

      <Modal
        isOpen={isModal}
        closeModal={closeModal}
        data={{
          label: data.label,
          input: data.input,
        }}
        type={type}
        setData={(e) => console.log(e)}
      />
    </>
  );
}

export default UploadComponent;
