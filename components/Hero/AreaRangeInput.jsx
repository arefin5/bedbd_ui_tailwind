

export default function AreaRangeInput({mapData}) {
  return (
    <div className={`${mapData['isMapOpen']
                        ? 'relative block | md:h-max '
                        : ' md:hidden'} px-6 md:px-0 py-2.5 md:py-0`}>
        <label className="block text-neutral-600 text-xs md:text-sm font-semibold mb-2">Area Range</label>
        <input className="w-full " type="range" id="area_range" name="area_range" min="500" max="7000" />
    </div>
  )
}
