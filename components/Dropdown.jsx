
export default function Dropdown() {
  return (
    <select name='countryCode' className=" w-full bg-transparent text-sm text-left pl-0 font-semibold text-neutral-500 -ml-1">
        {/* <option value=''>Country Code</option> */}
        <option value='+880'>BD (+880)</option>
        <option value='+91'>IND (+91)</option>
    </select>
  )
}
