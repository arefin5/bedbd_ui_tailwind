import Image from "next/image"
import { Check } from "lucide-react"
import StarFilledIcon from '/public/icons/star_filled.svg'
import { useSelector } from "react-redux"

export default function RatingInput() {
    const { isMapOpen } = useSelector(state => state.search.location);
  return (
    <div className={`border border-neutral-200 divide-x divide-neutral-200 w-max mx-auto flex rounded-md
                        ${!isMapOpen && 'md:hidden'} `}>
    <div className='p-2 flex items-center gap-1 '>
        <input className='hidden' type="radio" name="rating" value='any' id="rating_any" />
        <label className="text-neutral-600 text-xs md:text-sm font-semibold" htmlFor="rating_3_5">Any</label>
        <div className='relative w-6 h-6'>
            <Image src={StarFilledIcon} fill className="object-scale-down" />
        </div>
        {/* <label className="text-neutral-600 text-xs md:text-sm font-semibold" htmlFor="rating_any">Any</label> */}
    </div>

    <div className='p-2 flex items-center gap-1'>
        <Check size={24}/>
        <input className='hidden' type="radio" name="rating" value='3.5' id="rating_3_5" />
        <label className="text-neutral-600 text-xs md:text-sm font-semibold" htmlFor="rating_3_5">3.5</label>
    </div>

    <div className='p-2 flex items-center gap-1'>
        <input className='hidden' type="radio" name="rating" value='4.0' id="rating_4_0" />
        <label className="text-neutral-600 text-xs md:text-sm font-semibold" htmlFor="rating_4_0">4.0</label>
        <div className='relative w-6 h-6'>
            <Image src={StarFilledIcon} fill className="object-scale-down" />
        </div>

    </div>
    <div className='p-2 flex items-center gap-1'>
        <input className='hidden' type="radio" name="rating" value='4.5' id="rating_4_5" />
        <label className="text-neutral-600 text-xs md:text-sm font-semibold" htmlFor="rating_4_5">4.5</label>
        <div className='relative w-6 h-6'>
            <Image src={StarFilledIcon} fill className="object-scale-down" />
        </div>
    </div>
</div>
  )
}
