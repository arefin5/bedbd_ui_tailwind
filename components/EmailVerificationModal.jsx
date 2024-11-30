import { X } from "lucide-react"
export default function EmailVerificationModal() {
    return (
      <div className='z-[9999] fixed top-0 left-0 w-full h-screen bg-white h-screen overscroll-y-none bg-opacity-50 bg-black backdrop-blur-sm'>
          <div className='relative bg-secondary-50 rounded-lg w-full max-w-[814px] h-full max-h-[412px] absolute-center drop-shadow-md'>
              
              <div className='max-w-[350px] absolute-center'>
                  <h3 className='text-primary-400 text-4xl font-semibold mt-6 text-center max-w-[348px]'> Email Verification
                  </h3>
                  <p className='text-neutral-500 text-base font-medium mt-4 max-w-[348px]'>A link has been sent to your email. Please the link to verify your email.</p>
                  <button className='relative btn btn-secondary w-[290px] ml-[30px] mt-12'>Open Gmail </button>
              </div>

              <button className="absolute right-12 top-12">
                <X className="opacity-70 h-8 w-8 "/>
              </button>
          </div>
      </div>
    )
  }
  