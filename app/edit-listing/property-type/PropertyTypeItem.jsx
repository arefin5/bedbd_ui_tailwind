
"use client";
import Image from "next/image";

export default function PropertyTypeItem({ data, setSelectedType, selectedType }) {
  const handleClick = (e) => {
    e.preventDefault();

    // Set the selected type in the parent component
    setSelectedType(data.typeName || null);
  };

  return (
    <div
      className={`w-60 h-40 rounded-lg border ${
        selectedType === data.typeName ? "border-secondary-400 shadow-secondary-400 shadow" : "border-neutral-300"
      } cursor-pointer p-6 select-none`}
      onClick={handleClick}
    >
      <div className="object-contain relative h-16 w-auto">
        <Image className="icon" src={`/icons/${data.icon}`} alt="property type icon" fill />
      </div>
      <input className="hidden" type="radio" id={data._id} name="property_type" value={data._id} />
      <h4 className="text-2xl text-neutral-500 text-center font-normal mt-4">{data.typeName}</h4>
    </div>
  );
}
