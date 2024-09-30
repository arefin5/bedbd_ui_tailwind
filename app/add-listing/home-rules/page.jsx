import Icon from '/components/Icon'
import Rule from './Rule'
import getAllTimeSegments from './getAllTimeSegments'
import OptionIcon from './OptionIcon'

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
    const timeSegments = getAllTimeSegments()
    return (
        <div className=" min-h-screen py-20">
          <div className="">
            <h2 className="text-primary-400 text-4xl text-center font-medium mb-12">Home Rules</h2>            
            <form className="w-full max-w-3xl ml-auto mr-auto mt-28 px-8 ">
                <div>
                    <h3 className='text-netutral-600 text-xl mb-4 font-medium'>Home Rules</h3>
                    <div className='space-y-4'>
                        { data.map(item => <Rule data={item}/>) }                    
                    
                    </div>
                    <button className='flex gap-x-2 mt-3 text-neutral-600 text-base font-medium '>
                        <Icon name='plus' className='icon'/>
                        {/* <Plus className='icon'/> */}
                        Add more option
                    </button>
                </div>
                
                <div className='mt-10 flex gap-x-10 justify-between'>
                    <div className='w-full max-w-80'>
                        <h3 className='text-netutral-600 text-xl mb-2 font-medium'>Check-in (gmt +6)</h3>
                        <div className='relative'>
                            <select name='check-in-time' id='select_check_in' className="outline-none w-full bg-transparent text-sm text-left py-3.5 px-6 font-semibold text-neutral-500 border border-neutral-400 rounded-md ">
                                {
                                    timeSegments.map(item=>(
                                        <option 
                                            value={`${item['hour']}:${item['minute']} ${parseInt(item['hour'])<12 ? 'AM' : 'PM'}`}>
                                                {`${item['hour']}:${item['minute']} ${item['meridiem']}`}
                                        </option>))
                                } 
                            </select>
                            <Icon name='chevron-down'  className="icon absolute-y-center right-4 -z-10"/>
                        </div>
                    </div>

                    <div className='w-full max-w-80'>
                        <h3 className='text-netutral-600 text-xl mb-2 font-medium'>Check-out (gmt +6)</h3>
                        <div className='relative'>
                            <select name='check-in-time' id='select_check_out' className="outline-none w-full bg-transparent text-sm text-left py-3.5 px-6 font-semibold text-neutral-500 border border-neutral-400 rounded-md ">
                                {
                                    timeSegments.map(item=>(
                                        <option 
                                            value={`${item['hour']}:${item['minute']} ${parseInt(item['hour'])<12 ? 'AM' : 'PM'}`}>
                                                {`${item['hour']}:${item['minute']} ${item['meridiem']}`}
                                        </option>))
                                } 
                            </select>
                            <Icon name='chevron-down'  className="icon absolute-y-center right-4 -z-10"/>
                        </div>
                    </div>
                </div>

              <div className="flex gap-x-8 mt-14">
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



