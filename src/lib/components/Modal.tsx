import React, { useState } from "react";


function Modal({ isOpen, data, closeModal, setData, type }: ModalProps) {
  const [input, setInput] = useState(data?.input || "");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submit");
    if (setData) {
      setData(input);
    }
    closeModal();
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const handleCloseModal = (e: any) => {
    if (e.target.id == "modal") closeModal();
  };
  if (isOpen == false) return null;
  else
    return (
      <div
        id="modal"
        className="z-10 fixed inset-0 bg-black bg-opacity-25 backdrop-blur-lg flex justify-center items-center"
        onClick={handleCloseModal}
      >
        {type === "upload" ? (
          <div className="flex flex-col justify-center bg-neutral-600 bg-opacity-25 sm:h-min sm:w-min w-full p-8">
            <h1 className="text-xl text-white text-center">Upload license</h1>
            <div className="text-center pt-6">
              <input
                type="file"
                className="text-neutral-400  file:bg-orange-500 file:text-white file:rounded-xl file:p-2 border-none"
              ></input>
            </div>
          </div>
        ) : (
          <div className="bg-neutral-600 bg-opacity-25 sm:min-h-min sm:w-1/3 w-full ">
            <form className="p-8" onSubmit={handleSubmit}>
              <h1 className="text-xl text-white text-center">
                Modify the company name
              </h1>
              <div className="flex flex-col pt-8">
                <label className="pb-2 text-end text-neutral-400">
                  {data?.label}
                </label>

                <input
                  type={type}
                  id="company"
                  value={input}
                  className="mb-8 text-end bg-neutral-400 bg-opacity-25 border-neutral-900 text-neutral-400 text-sm rounded-xl w-full p-3.5"
                  placeholder={`${data?.label}...`}
                  onChange={handleChange}
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
