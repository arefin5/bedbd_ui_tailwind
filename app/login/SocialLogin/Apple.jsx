import Image from "next/image"
import appleIcon from '/public/icons/apple.png'

export default function Apple() {
  return (
    <button className="flex items-center gap-3 bg-primary-100 py-4 px-8 rounded-30px text-neutral-400 text-sm font-semibold " >
        <Image src={appleIcon} height={24} width={24}/>Apple
    </button>
  )
}
