

export default function GenderPreference() {
  return (
    <div className="hidden relative px-6 py-2.5 block rounded-full shadow-search-input | md:shadow-none md:h-max md:rounded-none md:p-0 md:custom-left-line-150 md:ml-4  ">
        <label className=" text-neutral-600 text-xs md:text-sm font-semibold ">Gender Preference</label>
        <select>
            <option value=''>No choice</option>
            <option value='entire_house'>Male</option>
            <option value='shared_room'>Female</option>
        </select>
    </div>
  )
}
