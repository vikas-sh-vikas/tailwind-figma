import  { useState } from "react";
import Modal from "../Component/Modal";

function CompanyProfile() {
  const [isModal, setIsModal] = useState(true)

  return (
    <div className="bg-neutral-900 h-hvh">
      <button className="bg-blue-600 p-2" onClick={()=>setIsModal(!isModal)}>Modal</button>
      <Modal isOpen={isModal} setIsModal={()=>setIsModal(!isModal)}/>
      <div className="grid gap-2 grid-cols-6 p-4">
        <h1 className="col-span-6 text-white text-end">ملف الشركة</h1>
        <div className="bg-neutral-700 col-span-3  rounded-lg p-2">
          <p className="text-sm text-neutral-400 text-end">موقع الشركة</p>
          <p className="text-lg text-white text-end">الرياض, شارع14 بجوار محطة المترو</p>
        </div>
        <div className="bg-neutral-700 col-span-3  rounded-lg p-2">
          <p className="text-sm text-neutral-400 text-end">موقع الشركة</p>
          <p className="text-lg text-white text-end">الرياض, شارع14 بجوار محطة المترو</p>
        </div>
        <div className="bg-neutral-700 col-span-3  rounded-lg p-2">
          <p className="text-sm text-neutral-400 text-end">موقع الشركة</p>
          <p className="text-lg text-white text-end">الرياض, شارع14 بجوار محطة المترو</p>
        </div>
        <div className="bg-neutral-700 col-span-3  rounded-lg p-2">
          <p className="text-sm text-neutral-400 text-end">موقع الشركة</p>
          <p className="text-lg text-white text-end">الرياض, شارع14 بجوار محطة المترو</p>
        </div>
        <div className="bg-neutral-700 col-span-2  rounded-lg p-2 mb-4">
          <p className="text-sm text-neutral-400 text-end">موقع الشركة</p>
          <p className="text-lg text-white text-end">الرياض, شارع14 بجوار محطة المترو</p>
        </div>
        <div className="bg-neutral-700 col-span-2  rounded-lg p-2 mb-4">
          <p className="text-sm text-neutral-400 text-end">موقع الشركة</p>
          <p className="text-lg text-white text-end">الرياض, شارع14 بجوار محطة المترو</p>
        </div>
        <div className="bg-neutral-700 col-span-2  rounded-lg p-2 mb-4">
          <p className="text-sm text-neutral-400 text-end">موقع الشركة</p>
          <p className="text-lg text-white text-end">الرياض, شارع14 بجوار محطة المترو</p>
        </div>


        <div className="bg-neutral-700 h-12 col-span-3 rounded-lg"></div>
        <div className="bg-neutral-700 h-12 col-span-3 rounded-lg"></div>
        <div className="bg-neutral-700 h-12 col-span-3 rounded-lg"></div>
        <div className="bg-neutral-700 h-12 col-span-3 rounded-lg"></div>
      </div>
    </div> 
  );
}

export default CompanyProfile;
