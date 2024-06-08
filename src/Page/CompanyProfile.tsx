import { useState } from "react";
import Modal from "../Component/Modal";
import EditComponent from "../Component/EditComponent";
import ToggleComponent from "../Component/ToggleComponent";
import DocComponent from "../Component/DocComponent";
import UploadComponent from "../Component/UploadComponent";

function CompanyProfile() {
  const [isModal, setIsModal] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const handleToggle = () => {
    setIsChecked(prevState => !prevState);
  };
  console.log("Check Status",isChecked)
  return (
    <div className="h-screen bg-neutral-900">
      <div className="grid gap-2 grid-cols-6 p-4">
        <h1 className="col-span-6 text-white text-end">Company Profile</h1>
        <EditComponent
          span={3}
          type={"text"}
          data={{
            label: "Company Location",
            input: ", Street 14 next to the metro station",
          }}
        />
        <EditComponent
          span={3}
          type={"text"}
          data={{
            label: "Name",
            input: "Al-Shahd for General Contracting",
          }}
        />
        <EditComponent
          span={3}
          type={"date"}
          data={{
            label: "Start Date",
            input: "10/14/2022",
          }}
        />
        <EditComponent
          span={3}
          type={"number"}
          data={{
            label: "Commercial Registration Number",
            input: "1564562951544984",
          }}
        />
        <ToggleComponent 
          span={2}
          checked={false}
          label= "Do you have a point of sale system?"
        />
        <EditComponent
          span={2}
          type={"number"}
          data={{
            label: "Phone Number",
            input: "201092124608",
          }}
        />
        <EditComponent
          span={2}
          type={"text"}
          data={{
            label: "Field of Work",
            input: "Real Estate and Roads",
          }}
        />
        <DocComponent
          span={3}
          type={"text"}
          data={{
            label: "Field of Work",
            input: "Real Estate and Roads",
          }}
        />
        <DocComponent
          span={3}
          type={"text"}
          data={{
            label: "Field of Work",
            input: "Real Estate and Roads",
          }}
        />
        <DocComponent
          span={3}
          type={"text"}
          data={{
            label: "Field of Work",
            input: "Real Estate and Roads",
          }}
        />
        <UploadComponent
          span={3}
          type={"text"}
          data={{
            label: "Field of Work",
            input: "Real Estate and Roads",
          }}
        />
      </div>
    </div>
  );
}

export default CompanyProfile;
