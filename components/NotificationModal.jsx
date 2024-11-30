import { X } from "lucide-react"
export default function NotificationModal() {
    return (
      <div className='z-[9999] fixed top-0 left-0 w-full h-screen bg-white h-screen overscroll-y-none bg-opacity-50 bg-black backdrop-blur-sm'>
          <div className=' bg-secondary-50 rounded-lg w-full max-w-[960px] absolute-center drop-shadow-md px-16 py-24'>
              
              <div className=' space-y-4'>
                <div className="w-full max-w-[830px] px-8 py-6 rounded-lg bg-white drop-shadow-md">
                    <div className="flex items-center justify-between text-neutral-400 ">
                        <h3 className="font-semibold text-lg">A booking request is awaiting for your approves.</h3>
                        <span className="font-medium text-sm">9 m ago.</span>
                    </div>
                    <div className="text-neutral-400 text-sm">
                        <p>. 11 Jan, 24 - 14 Jan, 23. Total two days. 3 guest, 1 infant</p>
                        <p>. 3 guest, 1 infant</p>
                    </div>
                    <div className="flex items-center justify-center gap-5">
                        <button className="border border-neutral-600 text-neutral-600 w-[154px] text-base font-medium rounded-lg py-2">Cancle</button>
                        <button className="btn btn-primary max-w-[154px]">Approve</button>
                    </div>
                </div>

                <div className="w-full max-w-[830px] px-8 py-6 rounded-lg bg-white drop-shadow-md">
                    <div className="flex items-center justify-between text-neutral-400 ">
                        <h3 className="font-semibold text-lg">A booking request is awaiting for your approves.</h3>
                        <span className="font-medium text-sm">9 m ago.</span>
                    </div>
                    <div className="text-neutral-400 text-sm">
                        <p>. 11 Jan, 24 - 14 Jan, 23. Total two days. 3 guest, 1 infant</p>
                        <p>. 3 guest, 1 infant</p>
                    </div>
                    <div className="flex items-center justify-center gap-5">
                        <button className="border border-neutral-600 text-neutral-600 w-[154px] text-base font-medium rounded-lg py-2">Cancle</button>
                        <button className="btn btn-primary max-w-[154px]">Approve</button>
                    </div>
                </div>
                
              </div>

              <button className="absolute right-12 top-12">
                <X className="opacity-70 h-8 w-8 "/>
              </button>
          </div>
      </div>
    )
  }
  