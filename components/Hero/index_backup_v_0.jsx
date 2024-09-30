import { Search, CalendarDays, Users, Filter } from "lucide-react"
import Icon from '/components/Icon'
import PropertyTypeSelect from './PropertyTypeSelect'
import PropertyTagFilterClientOperation from './PropertyTagFilterClientOperation'
import FilterSection from './FilterSection'


export default function Hero() {
    
  return (
    <>
        <div className=" w-100  md:bg-hero">
            <div className="md:relative md:container min-h-96  md:ml-auto md:mr-auto ">
                <div className="md:absolute-center md:rounded-2xl md:min-h-52 md:w-full md:max-w-5xl md:bg-white md:backdrop-filter md:backdrop-blur-2xl md:bg-opacity-70">
                    <form className="">
                        <PropertyTypeSelect/>
                        <div className='px-4 py-6 space-y-4 | md:max-w-4xl md:rounded-full md:flex md:items-center md:py-3.5 md:pl-8 md:pr-4 md:bg-white md:space-y-0 md:justify-between md:shadow-search-section md:absolute-x-center md:bottom-8 '>
                            <div className="relative px-6 py-2.5 block rounded-full shadow-search-input | md:shadow-none md:px-0 md:py-0 md:rounded-none md:static md:h-max md:max-w-52 ">
                                <label className=" text-neutral-600 text-xs md:text-sm font-semibold">Location</label>
                                <input className="block bg-transparent placeholder-medium placeholder-text-sm placeholder-text-netural-300 | md:static" placeholder="Which City Do you prefer?"/>
                                {/* <Search className="icon absolute-y-center right-4 md:hidden "/> */}
                                <Icon name='search' className="icon absolute-y-center right-4 md:hidden "/>

                            </div>
                            <>
                                <div className="hidden | md:block md:h-max md:relative md:custom-left-line-150 md:ml-4 ">
                                    <label className="text-neutral-600 text-xs md:text-sm font-semibold">Check In</label>
                                    <input className="block bg-transparent placeholder-medium placeholder-text-sm placeholder-text-netural-300 md:max-w-32" placeholder="Add Date"/>
                                </div>
                                <div className="hidden | md:block md:h-max md:relative md:custom-left-line-150 md:ml-4 ">
                                    <label className=" text-neutral-600 text-xs md:text-sm font-semibold">Check Out</label>
                                    <input className="block bg-transparent placeholder-medium placeholder-text-sm placeholder-text-netural-300 md:max-w-32" placeholder="Add Date"/>
                                </div>
                                <div className="relative px-6 py-2.5 block rounded-full shadow-search-input | md:hidden ">
                                    <label className="text-neutral-600 text-xs font-semibold">Check In-Out</label>
                                    <input className="block bg-transparent placeholder-medium placeholder-text-sm placeholder-text-netural-300 " placeholder="Add Date"/>
                                    {/* <CalendarDays className='icon absolute-y-center right-4 md:hidden'/> */}
                                    <Icon name='calendar-days' className='icon absolute-y-center right-4 md:hidden'/>

                                </div>
                            </>
                            <div className="relative px-6 py-2.5 block rounded-full shadow-search-input | md:shadow-none md:h-max md:rounded-none md:p-0 md:custom-left-line-150 md:ml-4  ">
                                <label className=" text-neutral-600 text-xs md:text-sm font-semibold ">Guest</label>
                                <input className="block bg-transparent placeholder-medium placeholder-text-sm md:max-w-24" placeholder="Adult, infant 1"/>
                                {/* <Users className="icon absolute-y-center right-4 md:hidden"/> */}
                                <Icon name='users' className="icon absolute-y-center right-4 md:hidden"/>                            
                            </div>
                            <div className='flex pl-14 pr-14 mt-8 space-x-4 md:mt-0 md:p-0 '>
                                <button className='btn font-medium text-base text-primary-400 underline md:hidden'>Clear</button>
                                <button className="btn btn-primary space-x-4 text-center flex items-center justify-center md:h-14 md:w-14 md:rounded-full md:p-auto"> 
                                    {/* <Search className="icon mr-4 md:m-0 md:h-8 md:w-8"/> */}
                                    <Icon name='search' className="icon mr-4 md:m-0 md:h-8 md:w-8"/>
                                    <span className="md:hidden">Search</span></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <FilterSection/>
        
    </>
    
  )
}
