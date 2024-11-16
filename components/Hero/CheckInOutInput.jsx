import { CalendarDays } from "lucide-react"

export default function CheckInOutInput({mapData}) {
  return (
    <>
        <div className={`${mapData['isMapOpen']
                                ? 'hidden'
                                : 'hidden | md:block md:h-max md:relative md:custom-left-line-150 md:ml-4'
                            }`}>
            <label className={`
                    ${mapData['isMapOpen']
                    ? 'md:text-neutral-500 md:text-lg mb-2'
                    : 'text-neutral-600 text-xs md:text-sm font-semibold'
                }
                `}>Check In</label>
            <input className={`${mapData['isMapOpen']
                                        ? 'block w-full md:px-2.5 md:py-2 md:border md:border-neutral-300 md:rounded-md'
                                        : 'block bg-transparent placeholder-medium placeholder-text-sm placeholder-text-netural-300 md:max-w-32'
                                    }`} 
                    placeholder="Add Date" />
        </div>
        <div className={`${mapData['isMapOpen']
                                ? 'hidden'
                                : 'hidden | md:block md:h-max md:relative md:custom-left-line-150 md:ml-4'
                            }`}>
            <label
                className={`
                    ${mapData['isMapOpen']
                        ? 'md:text-neutral-500 md:text-lg mb-2'
                        : 'text-neutral-600 text-xs md:text-sm font-semibold'
                    }
                `}>Check Out</label>
            <input
                className={`
                    ${mapData['isMapOpen']
                        ? 'block w-full md:px-2.5 md:py-2 md:border md:border-neutral-300 md:rounded-md'
                        : 'block bg-transparent placeholder-medium placeholder-text-sm placeholder-text-netural-300 md:max-w-32'
                    }
                `} placeholder="Add Date" />
        </div>
        <div className={`${mapData['isMapOpen']
                                ? 'w-full px-6 py-2.5 rounded-full shadow-search-input md:shadow-none md:rounded-none md:py-0 md:px-0 '
                                : ' px-6 py-2.5 block rounded-full shadow-search-input | md:hidden'
                            } relative`}>
            <label
                className={`${mapData['isMapOpen']
                                    ? 'md:text-neutral-500 md:text-lg mb-2'
                                    : 'text-neutral-600 text-xs '
                                } font-semibold`}>Check In-Out</label>
            <input
                className={`${mapData['isMapOpen']
                                    ? 'block w-full md:px-2.5 md:py-2 md:border md:border-neutral-300 md:rounded-md'
                                    : 'block bg-transparent placeholder-medium placeholder-text-sm placeholder-text-netural-300'
                                }`}

                placeholder="Add Date" />

            <CalendarDays className='icon absolute-y-center right-4 md:hidden'/>
        </div>
    </>
  )
}
