
import CheckBoxIcon from './CheckBoxIcon'

export default function InputCheckBox({genere, id, name, txt, value}) {
  return (
    <>
        <CheckBoxIcon inputId={`${genere+'_'+id}`} />
        <input className="hidden" type="checkbox" name={name} value={value} id={`${genere+'_'+id}`}/>
        <label className=" text-neutral-600 md:text-base font-medium" htmlFor={`${genere+'_'+id}`}>{txt}</label>
    </>
  )
}
