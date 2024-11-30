export default function PaymentSuccess() {
    return (
      <div className='z-[9999] fixed top-0 left-0 w-full h-screen bg-white h-screen overscroll-y-none bg-opacity-50 bg-black backdrop-blur-sm'>
          <div className='bg-secondary-50 rounded-lg w-full max-w-[814px] h-full max-h-[640px] absolute-center drop-shadow-md'>
              <div className='max-w-[375px] absolute-center'>
                  <div className='mx-auto w-[92px] h-[75px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="86" height="87" viewBox="0 0 86 87" fill="none">
                        <path d="M43 86.959C66.7482 86.959 86 67.7072 86 43.959C86 20.2107 66.7482 0.958984 43 0.958984C19.2518 0.958984 0 20.2107 0 43.959C0 67.7072 19.2518 86.959 43 86.959Z" fill="#2A77F2"/>
                        <path d="M36.2872 66.1369L20.239 51.553L26.0682 45.1383L35.3495 53.5723L57.163 26.8262L63.8802 32.3045L36.2872 66.1369Z" fill="white"/>
                    </svg>
                  </div>
                  <h3 className='text-secondary-400 text-4xl font-semibold mt-6 text-center w-max'> Payment Successful</h3>
                  <p className='text-neutral-500 text-base font-medium mt-2 max-w-[348px] text-center '>Your payment of $283 was successful. Thank you for booking with us.</p>
                  <p className='text-neutral-500 text-base font-medium mt-4 max-w-[348px] text-center '>We sent you a mail with detials.</p>

                  <button className='relative btn btn-secondary w-[290px] ml-[30px] mt-6'>Back to Home </button>
              </div>
          </div>
      </div>
    )
  }
  