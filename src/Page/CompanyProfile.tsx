import EditComponent from "../lib/components/EditComponent";
import ToggleComponent from "../lib/components/ToggleComponent";
import DocComponent from "../lib/components/DocComponent";
import UploadComponent from "../lib/components/UploadComponent";
import { useState } from "react";

function CompanyProfile() {
  const [data, setData] = useState<CompanyProfileModel>({
    companyName: "الرياض, شارع14 بجوار محطة المترو",
    name: "الشهد للمقاولات العمومية",
    regNo: 1564562951544984,
    isSaleSystem: false,
    phoneNo: 201092124608,
    employment: "العقارات والطرق",
  });
  console.log("Data", data);
  return (
    <div className="min-h-screen bg-neutral-900">
      <div className="grid gap-2 grid-cols-6 p-4">
        <h1 className="col-span-6 text-white text-end">ملف الشركة</h1>
        <EditComponent
          span={3}
          type={"text"}
          data={{
            label: "موقع الشركة",
            input: data?.companyName,
          }}
          setFormData={(e) => setData({ ...data, companyName: e })}
        />
        <EditComponent
          span={3}
          type={"text"}
          data={{
            label: "الاسم",
            input: data?.name,
          }}
          setFormData={(e) => setData({ ...data, name: e })}
        />
        <EditComponent
          span={3}
          type={"date"}
          data={{
            label: "تاريخ بداية العمل",
            input: "10/14/2022",
          }}
          setFormData={(e) => setData({ ...data, startDate: e })}
        />
        <EditComponent
          span={3}
          type={"number"}
          data={{
            label: "رقم السجل التجارى",
            input: String(data?.regNo),
          }}
          setFormData={(e) => setData({ ...data, regNo: +e })}
        />
        <ToggleComponent
          span={2}
          checked={false}
          label="هل لديك نظام نقاط البيع"
        />
        <EditComponent
          span={2}
          type={"number"}
          data={{
            label: "رقم الهاتف",
            input: String(data?.phoneNo),
          }}
          setFormData={(e) => setData({ ...data, phoneNo: +e })}
        />
        <EditComponent
          span={2}
          type={"text"}
          data={{
            label: "مجال العمل",
            input: data?.employment,
          }}
          setFormData={(e) => setData({ ...data, employment: e })}
        />
        <DocComponent
          span={3}
          type={"text"}
          data={{
            label: "14/10/2023 1.3 ميجا",
            input: "رخصة العمل2024/32",
          }}
        />
        <DocComponent
          span={3}
          type={"doc"}
          data={{
            label: "14/10/2023 1.3 ميجا",
            input: "رخصة العمل2024/32",
          }}
        />
        <DocComponent
          span={3}
          type={"doc"}
          data={{
            label: "14/10/2023 1.3 ميجا",
            input: "رخصة العمل2024/32",
          }}
        />
        <UploadComponent span={3} type={"upload"} />
      </div>
    </div>
  );
}

export default CompanyProfile;
