import Image from "next/image"
import facebookIcon from '/public/icons/facebook.png'

export default function Facebook() {
  return (
    <button className="flex items-center gap-3 bg-primary-100 py-4 px-8 rounded-30px text-neutral-400 text-sm font-semibold " >
        <Image src={facebookIcon} height={24} width={24}/>facebook
    </button>
)
}
