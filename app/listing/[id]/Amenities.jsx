
"use client"
import { useState } from "react";
import Image from "next/image";
import kitchenIcon from "/public/icons/kitchen.svg";
import ACIcon from "/public/icons/air_conditioner.svg";
import washingMechineIcon from "/public/icons/washing_mechine.svg";
import wifiIcon from "/public/icons/wifi.svg";
import balconyIcon from "/public/icons/balcony.svg";
import bathroomIcon from "/public/icons/bathroom.svg";
import bedIcon from "/public/icons/bed.svg";

export default function Amenities({ data }) {
  const [showAll, setShowAll] = useState(false); // State for toggling amenities

  // Mapping of keys to icons and names
  const iconMapping = {
    lakeAccess: { icon: bedIcon, name: "Lake Access" },
    beachAccess: { icon: bedIcon, name: "Beach Access" },
    ski: { icon: bedIcon, name: "Ski-In/Ski-Out" },
    kitchen: { icon: kitchenIcon, name: "Kitchen" },
    bbqGrill: { icon: kitchenIcon, name: "BBQ Grill" },
    outdoorDiningArea: { icon: kitchenIcon, name: "Outdoor Dining Area" },
    wifi: { icon: wifiIcon, name: "Free Wireless Internet" },
    dedicatedWorkSpace: { icon: wifiIcon, name: "Dedicated Workspace" },
    airCondition: { icon: ACIcon, name: "Air Conditioner" },
    hotTub: { icon: bathroomIcon, name: "Hot Tub" },
    outdoorShower: { icon: bathroomIcon, name: "Outdoor Shower" },
    washer: { icon: washingMechineIcon, name: "Washer" },
    freeParking: { icon: bedIcon, name: "Free Parking" },
    paidParking: { icon: bedIcon, name: "Paid Parking" },
    pool: { icon: bedIcon, name: "Pool" },
    hottub: { icon: bathroomIcon, name: "Hot Tub" },
    patio: { icon: balconyIcon, name: "Balcony or Patio" },
    firePit: { icon: bedIcon, name: "Fire Pit" },
    poolTable: { icon: bedIcon, name: "Pool Table" },
    indoorFirePlace: { icon: bedIcon, name: "Indoor Fireplace" },
    piano: { icon: bedIcon, name: "Piano" },
    exerciseEquipment: { icon: bedIcon, name: "Exercise Equipment" },
  };

  // Function to extract all `true` amenities
  const getTrueAmenities = (obj) => {
    const trueAmenities = [];
    const traverse = (subObj) => {
      for (const key in subObj) {
        if (typeof subObj[key] === "object") {
          traverse(subObj[key]); // Recursively handle nested objects
        } else if (subObj[key] === true && iconMapping[key]) {
          trueAmenities.push({ key, ...iconMapping[key] });
        }
      }
    };
    traverse(obj);
    return trueAmenities;
  };

  const amenities = getTrueAmenities(data);

  // Determine visible amenities based on the `showAll` state
  const visibleAmenities = showAll ? amenities : amenities.slice(0, 8);

  return (
    <div className="my-14 text-neutral-700">
      <h3 className="text-2xl font-semibold">Offered Amenities</h3>
      {amenities.length > 0 ? (
        <ul className="mb-8 space-y-6 mt-6 font-normal text-lg md:columns-2">
          {visibleAmenities.map((amenity) => (
            <li key={amenity.key}>
              <Image
                alt={amenity.name}
                className="mr-6 inline"
                src={amenity.icon}
                width={24}
                height={24}
              />
              {amenity.name}
            </li>
          ))}
        </ul>
      ) : (
        <p>No amenities offered.</p>
      )}
      {amenities.length > 8 && (
        <button
          className="w-full max-w-64 py-3 rounded-md bg-transparent border border-neutral-400 text-neutral-400 text-lg font-normal"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less Amenities" : `Show All ${amenities.length} Amenities`}
        </button>
      )}
    </div>
  );
}
