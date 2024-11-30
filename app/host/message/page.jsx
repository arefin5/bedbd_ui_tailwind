import Image from "next/image"
import { Send } from "lucide-react"

export default function page() {
  return (
    <div className='w-full h-full p-8 flex gap-8 '>
        {/* Left side */}

        {/* Chat Item / Active */}
        <div className='px-6 py-10 bg-secondary-50 h-[calc(100vh-80px)] rounded-lg w-full max-w-[376px] space-y-1'>
            
        {/* hover:shadow-sm hover:bg-white hover:drop-shadow-sm */}
            <div className='select-none rounded-md w-full px-4 py-2 flex gap-4 text-neutral-500 relative bg-[#0BAFFF]'>
                    <div className='relative w-[48px] h-[48px] rounded-full overflow-hidden'>
                        <Image src="/dummy/sample-profile-photo.jpg"  fill/>
                    </div>
                    <div className="h-full py-1">
                        <h4 className="text-lg font-semibold leading-5 text-white">Patricia Sanders</h4>
                        <p className="text-neutral-400 text-sm leading-5 text-white">Booking Request</p>
                    </div>
                    <div className="absolute right-4 top-4 text-xs font-medium text-white">3:23pm</div>
                    {/* hide or remove this on chat seen */}
                    {/* 
                        <div className=" text-[8px] font-medium w-3 h-3 text-white  bg-secondary-400 rounded-full absolute bottom-4 right-4">
                            <span className="absolute-center">2</span>
                        </div> 
                    */}
            </div>
            {/* chat item 2 (not active) */}
            <div className='select-none cursor-pointer rounded-md w-full px-4 py-2 flex gap-4 text-neutral-500 relative hover:shadow-sm hover:bg-white hover:drop-shadow-sm'>
                <div className='relative w-[48px] h-[48px] rounded-full overflow-hidden'>
                    <Image src="/dummy/sample-profile-photo.jpg"  fill/>
                </div>
                <div className="h-full py-1">
                    <h4 className="text-lg font-semibold leading-5">Patricia Sanders</h4>
                    <p className="text-neutral-400 text-sm leading-5">Booking Request</p>
                </div>
                <div className="absolute right-4 top-4 text-xs font-medium">3:23pm</div>
                <div className=" text-[8px] font-medium w-3 h-3 text-white  bg-secondary-400 rounded-full absolute bottom-4 right-4">
                    <span className="absolute-center">2</span>
                    </div>
            </div>
            {/* chat item 3 (not active) */}

            <div className='select-none cursor-pointer rounded-md w-full px-4 py-2 flex gap-4 text-neutral-500 relative hover:shadow-sm hover:bg-white hover:drop-shadow-sm'>
                <div className='relative w-[48px] h-[48px] rounded-full overflow-hidden'>
                    <Image src="/dummy/sample-profile-photo.jpg"  fill/>
                </div>
                <div className="h-full py-1">
                    <h4 className="text-lg font-semibold leading-5">Patricia Sanders</h4>
                    <p className="text-neutral-400 text-sm leading-5">Booking Request</p>
                </div>
                <div className="absolute right-4 top-4 text-xs font-medium">3:23pm</div>
                <div className=" text-[8px] font-medium w-3 h-3 text-white  bg-secondary-400 rounded-full absolute bottom-4 right-4">
                    <span className="absolute-center">2</span>
                    </div>
            </div>
        </div>

        <div className='w-full bg-secondary-50 rounded-lg px-8 py-10'>
            
            <div className="h-[calc(100%-96px)]">
                <h3 className="text-neutral-500 text-base font-normal">To: <span className="text-neutral-700 text-lg font-medium    ">Name</span></h3>
                
                {/* message list  */}
                <div className="gird space-y-8 content-end h-[calc(100%-48px)]">
                    {/* incomming message sample  */}
                    {/* sample 1 */}
                    <div className="w-full flex items-start gap-4 max-w-md self-start">
                        <div className="relative h-8 w-8 min-w-8 rounded-full overflow-hidden">
                            <Image src="/dummy/sample-profile-photo.jpg"  fill/>
                        </div>
                        <div className="relative bg-white p-4 rounded-lg text-neutral-500 font-medium shadow-inner text-base">
                            <p>Ut sodales, ex sit amet consectetur accumsan, nibh ex sollicitudin metus, volutpat lacinia arcu nibh vel ante. Proin dapibus dui eget justo tincidunt eleifend.</p>
                            <span className="absolute top-[calc(100%+4px)] text-sm">Sent 4:23pm</span>
                        </div>
                    </div>

                    {/* sample 2 */}
                    <div className="w-full flex items-start gap-4 max-w-md self-start">
                        <div className="relative h-8 w-8 min-w-8 rounded-full overflow-hidden">
                            <Image src="/dummy/sample-profile-photo.jpg"  fill/>
                        </div>
                        <div className="relative bg-white p-4 rounded-lg text-neutral-500 font-medium shadow-inner text-base">
                            <p>Ut sodales, ex sit amet consectetur accumsan, nibh ex sollicitudin metus, volutpat lacinia arcu nibh vel ante. Proin dapibus dui eget justo tincidunt eleifend.</p>
                            <span className="absolute top-[calc(100%+4px)] text-sm">Sent 4:23pm</span>
                        </div>
                    </div>

                    {/* Send message sample */}
                    <div className="w-full flex items-start gap-4 max-w-md justify-self-end ">                        
                        <div className="relative rounded-lg bg-secondary-400 text-white p-4 rounded-lg font-medium shadow-inner text-base ">
                            <p>Ut sodales, ex sit amet consectetur accumsan, nibh ex sollicitudin metus, volutpat lacinia arcu nibh vel ante. Proin dapibus dui eget justo tincidunt eleifend.</p>
                            <span className="absolute top-[calc(100%+4px)] right-4 text-sm text-neutral-500">Sent 4:23pm</span>
                        </div>
                    </div>
                </div>

                {/* Message Send section */}
                <div className="mt-8 flex bg-white rounded-lg shadow-inner pr-4">
                <textarea 
                    class="bg-transparent shadow-none w-full border-none p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-0 focus:border-gray-300 focus:outline-none active:outline-none"
                    rows="2"
                    placeholder="Enter your text here..."
                    />
                    <button className="p-3 h-fit my-auto rounded-full bg-secondary-400">
                        <Send className="icon text-white "/>
                    </button>
                </div>
            </div>
            <div>
                
            </div>
        </div>
        
    </div>
  )
}
