import React, { useState } from "react";
type ModalProps = {
  isOpen: boolean;
  type: string;
  data: {
    label: string;
    input: string;
  };
  closeModal: () => void;
  setData: (data: string) => void;
};

function Modal({ isOpen, data, closeModal, setData, type }: ModalProps) {
  const [input, setInput] = useState(data.input);
  const submitFun = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submit");
    setData(input);
    closeModal();
  };
  const setDataInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const CloseModal = (e: any) => {
    if (e.target.id == "modal") closeModal();
  };
  if (isOpen == false) return null;
  else
    return (
      <div
        id="modal"
        className="z-10 index-1 fixed inset-0 bg-black bg-opacity-25 backdrop-blur-lg flex justify-center items-center"
        onClick={CloseModal}
      >
        {type === "upload" ? (
          <div className="bg-neutral-600 bg-opacity-25 min-h-1/3 w-1/3 p-8">
            <h1 className="text-xl text-white text-center">Upload license</h1>
            <div className="text-center pt-6">
              <input type="file" className="text-neutral-400  file:bg-orange-500 file:text-white file:rounded-xl file:p-2 border-none"></input>
              {/* <button className="rounded-full p-4 bg-neutral-600">
                <svg
                  className="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="#ffb770"
                    d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                  />
                </svg>
              </button> */}
            </div>
          </div>
        ) : (
          <div className="bg-neutral-600 bg-opacity-25 min-h-1/3 w-1/3">
            <form className=" p-8" onSubmit={submitFun}>
              <h1 className="text-xl text-white text-center">
                Modify the company name
              </h1>
              <div className="flex flex-col">
                <label className="pb-2 text-end text-neutral-400">
                  {data.label}
                </label>

                <input
                  type={type}
                  id="company"
                  value={input}
                  className="mb-8 text-end bg-neutral-400 bg-opacity-25 border-neutral-900 text-neutral-400 text-sm rounded-xl w-full p-3.5"
                  placeholder={`${data.label}...`}
                  onChange={setDataInput}
                  required
                />

                <button
                  type="submit"
                  className="bg-gradient-to-r from-orange-500 to-orange-300 hover:from-orange-400  hover:to-orange-200 text-white rounded-3xl py-3"
                >
                  Save the modification
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    );
}

export default Modal;
