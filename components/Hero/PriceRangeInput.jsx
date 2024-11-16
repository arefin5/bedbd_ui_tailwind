

export default function PriceRangeInput({mapData}) {
  return (
    <div className={`${mapData['isMapOpen']
                        ? 'relative block  '
                        : 'md:hidden'}  px-6 md:px-0 py-2.5 md:py-0`}>
        <label className="block text-neutral-600 text-xs md:text-sm font-semibold mb-2">Price Range</label>
        <input className="w-full " type="range" id="price_range" name="price_range" min="5" max="500" />
    </div>
  )
}
