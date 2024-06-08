import { useState } from "react";

type EditModal = {
  span: number;
  checked: boolean;
  label: string;
};

function ToggleComponent({ span, checked, label }: EditModal) {
  const [toggle, setToggle] = useState(checked);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className={`bg-neutral-700 col-span-${span}  rounded-lg p-3`}>
        <div className="absolute p-1">
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              checked={toggle}
              onChange={handleToggle}
            />
            <div className="relative w-11 h-6 bg-orange-300 rounded-full peer peer-focus:ring-4 peer-focus:ring-orange-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-600"></div>
          </label>
        </div>
        <p className="text-sm text-neutral-400 text-end">{label}</p>
        <p className="text-lg text-white text-end">{toggle ? "Yes" : "No"}</p>
      </div>
    </>
  );
}

export default ToggleComponent;
