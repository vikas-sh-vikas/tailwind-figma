import React from "react";
type ModalProps = {
  isOpen: boolean;
  setIsModal: () => void;
};

function Modal(props: ModalProps) {
  const modalStatus = props.isOpen;
  const CloseModal = (e: any) => {
    if (e.target.id == "modal") props.setIsModal();
  };
  if (props.isOpen) return null;
  else
    return (
      <div
        id="modal"
        className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
        onClick={CloseModal}
      >
        <div className="bg-white bg-opacity-25 min-h-1/3 w-1/3">
          <span className="text-end p-2" onClick={() => props.setIsModal()}>
            X
          </span>
          <form className=" p-4">
            <h1 className="text-xl text-white text-end">تعديل اسم الشركة</h1>
            <div className="flex flex-col">
              <label className="pb-2">الاسم الجديد</label>
              <input
                className="mb-2"
                placeholder="ادخل اسمالشركة الجديد..."
              ></input>
              <button type="submit" className="bg-orange-600">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
}

export default Modal;
