import { Minus, Plus } from "lucide-react"

export default function GuestCountInput({mapData}) {
  return (
    <>
        <div className={`${mapData['isMapOpen']
                                ? 'w-full px-6 py-2.5 rounded-full shadow-search-input md:shadow-none md:rounded-none md:py-0 md:px-0'
                                : 'relative px-6 py-2.5 block rounded-full shadow-search-input | md:shadow-none md:h-max md:rounded-none md:p-0 md:custom-left-line-150 md:ml-4'
                            } relative `}>
            <label
                className={`${mapData['isMapOpen']
                                    ? 'md:text-neutral-500 md:text-lg mb-2'
                                    : 'text-neutral-600 text-xs md:text-sm '
                                } font-semibold `}>Guest</label>
            <Minus
                className={`${mapData['isMapOpen']
                                    ? 'absolute bottom-2.5 left-16'
                                    : 'inline hidden'
                                } icon `} size={24} />
            <input
                className={`${mapData['isMapOpen']
                                ? 'block w-full md:px-2.5 md:py-2 md:border md:border-neutral-300 md:rounded-md md:placeholder-text-center text-center  '
                                : 'block bg-transparent placeholder-medium placeholder-text-sm md:max-w-24'
                            }`}
                placeholder={`${mapData['isMapOpen'] 
                                    ? '0' 
                                    : 'Adult, infant 1'}`} />
            <Plus
                className={`${mapData['isMapOpen']
                                ? 'absolute bottom-2.5 right-16'
                                : 'inline hidden'
                            } icon `}
                size={24} />
        </div>

    </>
  )
}
