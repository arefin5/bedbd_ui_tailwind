import Icon from "@/components/Icon"
import Image from "next/image"


export default function FullViewImage({data, index}) {
    console.log(data)
  return (
    
        <div style={{ maxWidth: data['width'] }} className={`mx-auto rounded-xl overflow-hidden bg-slate-50 relative w-full h-auto aspect-[4/3] ${index === 1 ? '' : 'hidden'}`}>
            <div className="relative w-full h-full">
                <Image src={data['url']} fill/>
            </div>
            <div className="absolute top-0 left-0 w-full h-full">
                <button className="group absolute w-16 h-full left-0 top-0 bg-gray-300 bg-opacity-5">
                    <div className="h-min w-min mx-auto p-1 rounded-lg bg-gray-50 bg-opacity-5 group-hover:bg-opacity-50 group-hover:bg-gray-900">
                        <Icon className='opacity-5 group-hover:opacity-90 group-hover:text-white' name='chevron-left' size={32}/>
                    </div>
                </button>
                <button className="group absolute w-16 h-full right-0 top-0 bg-gray-300 bg-opacity-5">
                    <div className="h-min w-min mx-auto p-1 rounded-lg bg-gray-50 bg-opacity-5 group-hover:bg-opacity-50 group-hover:bg-gray-900">
                        <Icon className='opacity-5 group-hover:opacity-90 group-hover:text-white' name='chevron-right' size={32}/>
                    </div>
                </button>
            </div>
        </div>
    
  )
}
