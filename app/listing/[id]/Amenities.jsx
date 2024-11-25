import Image from "next/image"
import bedIcon from '/public/icons/bed.svg'
import guestsIcon from '/public/icons/guests.svg'
import bathroomIcon from '/public/icons/bathroom.svg'
import kitchenIcon from '/public/icons/kitchen.svg'
import ACIcon from '/public/icons/air_conditioner.svg'
import washingMechineIcon from '/public/icons/washing_mechine.svg'
import tvIcon from '/public/icons/tv.svg'
import wifiIcon from '/public/icons/wifi.svg'
import balconyIcon from '/public/icons/balcony.svg'
import awardIcon from '/public/icons/award.svg'
import shieldCheckedIcon from '/public/icons/shield-check.svg'
import starGrayIcon from '/public/icons/star_gray.svg'

export default function Amenities({data}) {
console.log(data)
  return (
    <div className="my-14 text-neutral-700">
        <h3 className="text-2xl font-semibold ">Offered Amenities</h3>
        <ul className="mb-8 space-y-6 mt-6 font-normal text-lg md:columns-2">
            <li>
                <Image alt="icon" className='mr-6 inline' src={kitchenIcon} />
                Kitchen
            </li>
            <li>
                <Image alt="icon" className='mr-6 inline' src={ACIcon} />
                Air Conditioner
            </li>
            <li >
                <Image alt="icon" className='mr-6 inline' src={washingMechineIcon} />
                Washer
            </li>
            <li>
                <Image alt="icon" className='mr-6 inline' src={tvIcon} />
                Television with Netflix
            </li>
            <li>
                <Image alt="icon" className='mr-6 inline' src={wifiIcon} />
                Free Wireless Internet
            </li>
            <li>
                <Image alt="icon" className='mr-6 inline' src={balconyIcon} />
                BalconyIcon or Patio
            </li>
        </ul>
        {/* <button className="w-full max-w-64 py-3 rounded-md bg-transparent border border-neutral-400 text-neutral-400 text-lg font-normal ">Show All 10 Amenities</button> */}
    </div>
  )
}
