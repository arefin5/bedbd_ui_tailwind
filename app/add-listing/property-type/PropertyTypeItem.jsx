'use client'
import Image from "next/image"

export default function PropertyTypeItem({data}) {
  const handleClick = () => {
    document.getElementById(data['_id']).click();
    const activeClasses = ['shadow', 'border-secondary-400', 'shadow-secondary-400']
    const inActiveClass = ['border-neutral-300' ]
    const propertyTypes  = document.getElementById('property_types')
    const propertyTypesArray = Array.from(propertyTypes.children);

    propertyTypesArray.map(element => {
      const elementItems = Array.from(element.children)
      const hasClasses = activeClasses.every(cls => element.classList.contains(cls));

      elementItems.map(item=>{
        if(item.tagName.toLocaleLowerCase() === 'input'){
          if(data['_id'] == item.id ){
            if(!hasClasses){
              activeClasses.map(cls => element.classList.add(cls));
              inActiveClass.map(cls => element.classList.remove(cls));
            }
          }else if(hasClasses){
            activeClasses.map(cls => element.classList.remove(cls));
            inActiveClass.map(cls => element.classList.add(cls));
          }
        }
      })

    });
  };




  return (
    <div className={`w-60 h-40 rounded-lg border border-neutral-300 cursor-pointer p-6 select-none `} onClick={handleClick}>
      <div className="object-contain relative h-16 w-auto ">
          <Image className="icon" src={`/icons/${data['icon']}`} alt='property type icon' fill/>
      </div>
      <input className="hidden"  type="radio" id={data['_id']} name="property_type" value={data['_id']}></input>
      <h4 className='text-2xl text-neutral-500 text-center font-normal mt-4'>{data['typeName']}</h4>
    </div>
  )
}
