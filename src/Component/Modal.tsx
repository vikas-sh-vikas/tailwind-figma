import React from "react";
type ModalProps = {
  isOpen: boolean;
  data: {
    label: string;
    input: string;
  };
  closeModal: () => void;
  setData: (data: string) => void;
};

function Modal({ isOpen, data, closeModal, setData }: ModalProps) {
  const submitFun = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submit");
    closeModal();
  };
  const setDataInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
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
        <div className="bg-neutral-600 bg-opacity-25 min-h-1/3 w-1/3">
          <form className=" p-8" onSubmit={submitFun}>
            <h1 className="text-xl text-white text-center">تعديل اسم الشركة</h1>
            <div className="flex flex-col">
              <label className="pb-2 text-end text-neutral-400">
                {data.label}
              </label>

              <input
                type="text"
                id="company"
                value={data.input}
                className="mb-8 text-end bg-neutral-400 bg-opacity-25 border-neutral-900 text-neutral-400 text-sm rounded-xl w-full p-3.5"
                placeholder={`${data.label}...`}
                onChange={setDataInput}
                required
              />

              <button
                type="submit"
                className="bg-gradient-to-r from-orange-500 to-orange-300 hover:from-orange-400  hover:to-orange-200 text-white rounded-3xl py-3"
              >
                حفظ التعديل
              </button>
            </div>
          </form>
        </div>
      </div>
    );
}

export default Modal;
