

"use client";
import { useRouter } from "next/navigation";
import InputRadioIcon from "./InputRadioIcon"; // Assuming this is your checkbox component
import Calendar from "./Calendar";
import usePropertyList from "./usePropertyList";

export default function PropertyList() {
  const { lists, selectedProperty, selectProperty } = usePropertyList();
  const router = useRouter();

  return (
    <div className="py-6 px-4 w-full max-w-sm bg-secondary-50 rounded-lg">
      <div className="text-neutral-500 flex justify-between">
        <span className="font-semibold">Property List ({lists.length})</span>
        <button
          onClick={() => router.push("/host/properties")}
          className="border-none text-sm font-medium hover:underline hover:scale-110 transition ease-in-out delay-150"
        >
          See All
        </button>
      </div>
      <ul className="space-y-5 mt-6 max-h-56 overflow-y-auto">
        {lists.length > 0 ? (
          lists.map((item, index) => (
            <li key={index} className="flex gap-x-4 items-center">
              <input
                type="radio"
                id={`host_property_${index}`}
                name="host_property"
                checked={selectedProperty?._id === item._id}
                onChange={() => selectProperty(item)}
                className="hidden"
              />
              {/* Show the checkbox always */}
              <InputRadioIcon 
                inputId={`host_property_${index}`} 
                checked={selectedProperty?._id === item._id} 
              />
              <label 
                htmlFor={`host_property_${index}`} 
                onClick={() => selectProperty(item)} 
                className="cursor-pointer"
              >
                <span className="block text-neutral-600 text-lg font-normal">
                  {item.propertyTitle || "No Title"}
                </span>
                <span className="block text-neutral-500 text-base font-medium mt-2">
                  {item.GroundPrice ? `$${item.GroundPrice}` : "Price Unavailable"}
                </span>
              </label>
            </li>
          ))
        ) : (
          <p className="text-neutral-500">No properties available.</p>
        )}
      </ul>
      {selectedProperty && <Calendar listSelect={selectedProperty} />}
    </div>
  );
}
