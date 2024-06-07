import { useState } from "react";
import Modal from "../Component/Modal";
import EditComponent from "../Component/EditComponent";

function CompanyProfile() {
  const [isModal, setIsModal] = useState(true);

  return (
    <div className="h-screen bg-neutral-900">
      <div className="grid gap-2 grid-cols-6 p-4">
        <h1 className="col-span-6 text-white text-end">ملف الشركة</h1>
        <EditComponent span={3} 
        data={{
        label:"موقع الشركة",
        input:", شارع14 بجوار محطة المترو",
        }}/>
        <EditComponent span={3} 
        data={{
        label:"الاسم",
        input:"الشهد للمقاولات العمومية",
        }}/>
        <EditComponent span={3} 
        data={{
        label:"تاريخ بداية العمل",
        input:"14/10/2022",
        }}/>
        <EditComponent span={3} 
        data={{
        label:"رقم السجل التجارى",
        input:"1564562951544984",
        }}/>
        <div className="bg-neutral-700 h-full col-span-2  rounded-lg p-2 mb-4">
          <p className="text-sm text-neutral-400 text-end">موقع الشركة</p>
          <p className="text-lg text-white text-end">
            الرياض, شارع14 بجوار محطة المترو
          </p>
        </div>
        <EditComponent span={2} 
        data={{
        label:"رقم الهاتف",
        input:"+201092124608",
        }}/>
        <EditComponent span={2} 
        data={{
        label:"مجال العمل",
        input:"العقارات والطرق",
        }}/>
        {/* <div className="bg-neutral-700 h-12 col-span-3 rounded-lg"></div>
        <div className="bg-neutral-700 h-12 col-span-3 rounded-lg"></div>
        <div className="bg-neutral-700 h-12 col-span-3 rounded-lg"></div>
        <div className="bg-neutral-700 h-12 col-span-3 rounded-lg"></div> */}
      </div>
    </div>
  );
}

export default CompanyProfile;
