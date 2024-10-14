
import Image from "next/image"
import Icon from '/components/Icon'
// import sampleIcon from '@/public/icons'

function getListingTypes() {
  return [{
    "_id": "6631fcb0250643f1c5632f77",
    "typeName": "Farmhouse",
    "icon": "icon_farmhouse.svg",
    "iconType": "publicFolder"
  },
  {
    "_id": "6631fd89250643f1c5632f79",
    "typeName": "Villa",
    "icon": "icon_villa.svg",
    "iconType": "publicFolder"
  },
  {
    "_id": "6631fe02250643f1c5632f7a",
    "typeName": "Condons",
    "icon": "icon_condos.svg",
    "iconType": "publicFolder"
  },
  {
    "_id": "6631fe21250643f1c5632f7b",
    "typeName": "Shard Room",
    "icon": "icon_shared_room.svg",
    "iconType": "publicFolder"
  },
  {
    "_id": "6631fe3c250643f1c5632f7c",
    "typeName": "House",
    "icon": "icon_house.svg",
    "iconType": "publicFolder"
  },
  {
    "_id": "6631fe60250643f1c5632f7d",
    "typeName": "Apartment",
    "icon": "icon_apartment.svg",
    "iconType": "publicFloder"
  }]
  
}
function getSelectedListingTypes() {
  return ({
    "_id": "6631fe21250643f1c5632f7b",
    "typeName": "Shard Room",
    "icon": "icon_shared_room.svg",
    "iconType": "publicFolder"
  })
  
}
 
export default function page() {
  const listingTypes = getListingTypes()
  const data = getSelectedListingTypes()
    return (
        <div className=" min-h-screen py-20">
          <div className="">
            <h2 className="text-primary-400 text-4xl text-center font-medium mb-14	">You’re listing</h2>            

            <div className="w-full max-w-2xl ml-auto mr-auto mt-28 px-8 ">
              <div className="w-44 h-32 object-contain relative  ml-auto mr-auto">
                <Image src={`/icons/${data['icon']}`} alt="..." fill/>
              </div>

              <h3 className=" w-full max-w-xl text-base text-neutral-400 text-center font-medium mt-8 mb-12 ml-auto mr-auto ">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.
              </h3>

              <h4 className="text-neutral-600 text-2xl font-semibold text-center "> Sounds good? </h4>

              <form className="mt-8">
                <button className="btn btn-primary max-w-96 relative-x-center ">
                  <Icon name='arrow-right' className="icon absolute-y-center right-4 text-white"/> 
                  
                  Continue</button>
                <button className="btn btn-secondary mt-6 max-w-96  relative-x-center">
                  <Icon name='arrow-left' className="icon absolute-y-center left-4 text-neutral-500"/> 
                  back
                </button>
              </form>
            </div>
          </div>
        </div>
        
      )
}
