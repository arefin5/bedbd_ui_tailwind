import Image from "next/image"

export default function Images({data}) {

  return (
    <div className=" w-full grid md:grid-cols-2 gap-4 relative">
      {
        data.slice(0,4)
            .map(img => ( <div className="relative w-full h-auto aspect-[31/22] w-342 h-242 rounded-lg overflow-hidden  object-cover "> 
                            <Image src={img['url']} fill/>
                          </div>))
      }


      <button className="text-white text-5xl font-bold flex gap-x-3 items-center py-1.5 px-3 bg-black bg-opacity-60 rounded-lg  absolute right-3 bottom-3 hover:shadow-md  hover:shadow-white">
        +2<span className="font-semibold text-sm"> more <span className="block font-bold text-lg">Photos</span></span>
      </button>
    </div>
  )
}
