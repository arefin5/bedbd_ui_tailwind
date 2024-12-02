
  "use client";

import { useEffect, useState } from "react";
import { SquareCheckBig, Square } from "lucide-react";

export default function Feature({ data, id, setpropertyFeature, propertyFeature }) {
  const [isChecked, setIsChecked] = useState(false);
// console.log(data)
  useEffect(() => {
    // Initialize the checked state based on incoming data
    setIsChecked(data?.value || false);
  }, [data]);

  const handleClick = () => {
    const newState = !isChecked;
    setIsChecked(newState);

    setpropertyFeature((prevState) => ({
      ...prevState,
      [id]: {
        ...data,
        value: newState,
      },
    }));
  };

  return (
    <div
      onClick={handleClick}
      className={`w-full py-4 pr-4 pl-14 mb-4 rounded-10px cursor-pointer select-none relative border  
                    hover:shadow hover:border-secondary-400 
                    hover:shadow-secondary-400 
                    ${isChecked ? "shadow border-secondary-400 shadow-secondary-400" : "border-neutral-300"}`}
    >
      {isChecked ? (
        <SquareCheckBig className="icon absolute left-4" />
      ) : (
        <Square className="icon absolute left-4" />
      )}
      <h4 className="font-semibold text-xl text-neutral-500 mb-2">{data?.name}</h4>
      <p className="text-neutral-500 font-medium text-base">
        {data?.description ||data?.name || "No description provided"}
      </p>
    </div>
  );
}
