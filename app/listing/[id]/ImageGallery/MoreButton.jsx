'use client'
export default function MoreButton({data}) {
  return (
    <button className="text-white text-5xl font-bold flex gap-x-3 items-center py-1.5 px-3 bg-black bg-opacity-60 rounded-lg  absolute right-3 bottom-3 hover:shadow-md  hover:shadow-white">
        { '+'+(data.length - 4)}<span className="font-semibold text-sm"> more <span className="block font-bold text-lg">Photos</span></span>
    </button>
  )
}
