import Icon from '/components/Icon'
import PriceCounter from './PriceCounter'


function getIfo() {
    return {
        "_id": "663a0b374ec144ec33e4f103",
        "currency": "$",
        "minPrice": "12",
        "taxRate": "15%",
        "serviceFee":"2"
      }
  }

 
export default function page() {
    const data = getIfo()
    return (
        <div className=" min-h-screen py-20">
          <div className="">
            <h2 className="text-primary-400 text-4xl text-center font-medium mb-12">Set Price</h2>
            <form className="w-full max-w-4xl ml-auto mr-auto mt-28 px-8 ">
                <h3 className='text-xl font-medium'>How much do you want to charge per night?</h3>
                <p className='text-sm font-normal'>No worries! You can change it anytime you want.</p>

                
                        <PriceCounter data={data}/>

                
                <div className='text-sm  font-normal text-neutral-600 w-fit  ml-auto mr-auto text-left max-w-md mt-3.5'>
                    Check your nearest property price to make more competitive. It will increase your changes of getting more booking
                </div>
                    

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



