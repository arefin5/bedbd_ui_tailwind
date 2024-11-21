import { useSelector } from "react-redux"

export default function PropertyConditionInput() {
  const { isMapOpen } = useSelector(state => state.search.location);
  return (
    <div className={`${isMapOpen
                        ? 'w-full px-6 py-2.5 rounded-full shadow-search-input md:shadow-none md:rounded-none md:py-0 md:px-0'
                        : 'hidden relative px-6 py-2.5 block rounded-full shadow-search-input | md:shadow-none md:h-max md:rounded-none md:p-0 md:custom-left-line-150 md:ml-4'}`} >
    <label className={`${isMapOpen
                            ? 'md:text-neutral-500 md:text-lg mb-2'
                            : 'text-neutral-600 text-xs md:text-sm font-semibold'} font-semibold`}>
        Property Condition
    </label>
    <select className={`${isMapOpen
                            && 'block w-full md:px-2.5 md:py-2 md:border md:border-neutral-300 md:rounded-md md:placeholder-text-center'}`}>
        <option value='apartment'>Full Furnished</option>
        <option value='entire_house'>Semi-Furnished</option>
        <option value='entire_house'>Empty</option>
    </select>
    </div>
  )
}
