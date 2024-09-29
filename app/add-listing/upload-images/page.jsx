import Icon from '/components/Icon'
import DropImage from './DropImage'

function getHomeRules() {
    return [{
        "_id": "663a0b374ec144ec33e4f103",
        "title": "In House Smoking allow",
        "description": ""
      },
      {
        "_id": "663a0b6b4ec144ec33e4f104",
        "title": "Parties/events allowed ",
        "description": ""
      },
      {
        "_id":  "663a0b8b4ec144ec33e4f105",
        "title": "Pet allowed",
        "description": ""
      }]
  }

 
export default function page() {
    const data = getHomeRules()
    return (
        <div className=" min-h-screen py-20">
          <div className="">
            <h2 className="text-primary-400 text-4xl text-center font-medium mb-12">Upload Images</h2>            
            <form className="w-full max-w-4xl ml-auto mr-auto mt-28 px-8 ">
                {/* <div className=' w-full max-w-4xl bg-neutral-100 border border-neutral-400 border-dashed rounded-10px py-10'>
                    <h3 className='text-center  text-neutral-700 text-sm font-medium'>Drag and drop or</h3>
                    <div className='py-3 px-6 mt-6 mb-2.5 ml-auto mr-auto flex gap-x-4 w-fit text text-neutral-600 text-base font-medium  border rounded-lg border-neutral-200'>
                        <Icon name='plus' className='icon' />
                        Upload photos
                    </div>
                    <h2 className='text-neutral-900 text-center text-sm font-normal'>jpg/jpeg or png, maximum 5MB each</h2>
                </div> */}
                <DropImage/>
              <div className="flex gap-x-8 mt-14 max-w-3xl ml-auto mr-auto">
                <button className="btn btn-secondary max-w-36 relative">
                  <Icon name='chevron-left' className="icon absolute-y-center left-4 "/> 
                  Back</button>
                <button className="btn btn-primary">
                  Continue
                </button>
              </div>
              </form>
          </div>
        </div>        
      )
}



